import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

const EMAIL_TO = process.env.CONTACT_EMAIL_TO || "admin@goodworksdisabilityservices.com.au";
const EMAIL_CC = process.env.CONTACT_EMAIL_CC || "goodworksds@gmail.com";
const EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || "Good Works Website <onboarding@resend.dev>";

async function sendDeletionNotificationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set — skipping deletion email notification.");
    return false;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    cc: EMAIL_CC,
    subject: `Contact submission deleted: ${data.name}`,
    text: [
      `The following contact submission was deleted from the admin dashboard:`,
      "",
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
    console.error("Failed to send deletion notification email:", error);
    return false;
  }
  return true;
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDatabase();
    const deleted = await ContactSubmission.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }

    await sendDeletionNotificationEmail({
      name: deleted.name,
      email: deleted.email,
      phone: deleted.phone || undefined,
      message: deleted.message,
      service: deleted.service || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete contact submission:", error);
    return NextResponse.json({ error: "Failed to delete." }, { status: 500 });
  }
}
