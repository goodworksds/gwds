import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(200),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us how we can help").max(5000),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  // Honeypot field: real users never fill this in. Any non-empty value marks
  // the submission as spam, so it's accepted here rather than rejected.
  company: z.string().max(500).optional().or(z.literal("")),
});

const EMAIL_TO = process.env.CONTACT_EMAIL_TO || "admin@goodworksdisabilityservices.com.au";
const EMAIL_CC = process.env.CONTACT_EMAIL_CC || "goodworksds@gmail.com";
const EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || "Good Works Website <onboarding@resend.dev>";

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set — skipping email notification.");
    return false;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    cc: EMAIL_CC,
    replyTo: data.email,
    subject: `New enquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      data.service && `Service: ${data.service}`,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Failed to send contact notification email:", error);
    return false;
  }
  return true;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  // Silently accept honeypot-triggered submissions without writing to the database.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  try {
    await connectToDatabase();

    const emailSent = await sendNotificationEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      message: parsed.data.message,
      service: parsed.data.service || undefined,
    });

    await ContactSubmission.create({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      message: parsed.data.message,
      service: parsed.data.service || undefined,
      source: "website-contact-form",
      emailSent,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save contact submission:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
