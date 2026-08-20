import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

const EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || "Good Works Website <onboarding@resend.dev>";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Reply message cannot be empty." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email sending is not configured." }, { status: 500 });
  }

  try {
    await connectToDatabase();
    const submission = await ContactSubmission.findById(id);
    if (!submission) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: submission.email,
      subject: "Re: Your enquiry to Good Works Disability Services",
      text: message,
    });

    if (error) {
      console.error("Failed to send reply email:", error);
      return NextResponse.json({ error: "Failed to send reply email." }, { status: 500 });
    }

    submission.repliedAt = new Date();
    await submission.save();

    return NextResponse.json({ ok: true, repliedAt: submission.repliedAt });
  } catch (error) {
    console.error("Failed to process reply:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
