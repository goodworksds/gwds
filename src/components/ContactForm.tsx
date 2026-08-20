"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      service: String(formData.get("service") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Message sent
        </h3>
        <p className="max-w-sm text-base text-muted-foreground">
          Thanks for reaching out — a member of our team will be in touch within
          one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-base font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
    >
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        Send a message
      </h3>

      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-base font-medium text-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Citizen"
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-base font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-base font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="04xx xxx xxx"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-base font-medium text-foreground">
          Service you&rsquo;re interested in (optional)
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService}
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Not sure yet</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-base font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about the supports you're after..."
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === "error" && (
        <p className="text-base font-medium text-destructive">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sunrise px-6 py-3 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>

      <p className="text-sm text-muted-foreground">
        By submitting, you consent to Good Works Disability Services contacting
        you about your enquiry.
      </p>
    </form>
  );
}
