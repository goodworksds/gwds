"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Mail } from "lucide-react";
import { services, siteConfig } from "@/lib/site-data";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [sent, setSent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const serviceSlug = String(formData.get("service") ?? "");
    const serviceName =
      services.find((s) => s.slug === serviceSlug)?.title ?? "Not sure yet";

    const subject = `Website enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Service: ${serviceName}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Your email app should be opening
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&rsquo;ve pre-filled a message to {siteConfig.email} — just hit send
          from your email app. If nothing opened,{" "}
          <a href={mailtoHref} className="font-semibold text-primary hover:underline">
            click here
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Fill out the form again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
    >
      <h3 className="font-serif text-xl font-semibold text-foreground">
        Send a message
      </h3>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Citizen"
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="04xx xxx xxx"
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
          Service you&rsquo;re interested in (optional)
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService}
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about the supports you're after..."
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sunrise px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:shadow-lift"
      >
        <Mail className="h-4 w-4" />
        Send message
      </button>

      <p className="text-xs text-muted-foreground">
        Sending opens your email app with this message pre-filled and
        addressed to {siteConfig.email}.
      </p>
    </form>
  );
}
