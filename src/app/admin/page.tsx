import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import AdminMessagesTable, { type AdminSubmission } from "@/components/AdminMessagesTable";
import Container from "@/components/Container";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await connectToDatabase();
  const docs = await ContactSubmission.find().sort({ createdAt: -1 }).lean();

  const submissions: AdminSubmission[] = docs.map((doc) => ({
    id: String(doc._id),
    name: doc.name ?? "",
    email: doc.email ?? "",
    phone: doc.phone ?? "",
    service: doc.service ?? "",
    message: doc.message ?? "",
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : "",
  }));

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <AdminMessagesTable initialSubmissions={submissions} />
      </Container>
    </section>
  );
}
