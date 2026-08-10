import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
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
    await ContactSubmission.create({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      message: parsed.data.message,
      service: parsed.data.service || undefined,
      source: "website-contact-form",
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
