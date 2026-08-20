"use client";

import { useRef, useState } from "react";
import {
  Trash2,
  Reply as ReplyIcon,
  Loader2,
  Send,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/lib/site-data";
import AdminLogoutButton from "@/components/AdminLogoutButton";

const PAGE_SIZE = 5;

export type AdminSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  replied: boolean;
  repliedAt: string | null;
};

function serviceLabel(slug: string) {
  if (!slug) return "Not specified";
  return services.find((s) => s.slug === slug)?.title ?? slug;
}

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatRepliedAt(iso: string) {
  const date = new Date(iso);
  const month = date.toLocaleString("en-AU", { month: "short" });
  const day = date.getDate();
  const hours24 = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours24 >= 12 ? "pm" : "am";
  const hours = hours24 % 12 || 12;
  return `${month} ${day} at ${hours}:${minutes}${ampm}`;
}

function DeleteConfirmDialog({
  submission,
  isDeleting,
  onCancel,
  onConfirm,
}: {
  submission: AdminSubmission;
  isDeleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-lift"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <h2 id="delete-dialog-title" className="mt-4 font-serif text-xl font-semibold text-foreground">
          Delete this message?
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          The message from <span className="font-medium text-foreground">{submission.name}</span>{" "}
          will be permanently deleted. This cannot be undone.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-destructive px-5 py-2.5 text-base font-semibold text-destructive-foreground shadow-soft disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            Delete
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="flex-1 rounded-full border border-border px-5 py-2.5 text-base font-medium text-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminMessagesTable({
  initialSubmissions,
}: {
  initialSubmissions: AdminSubmission[];
}) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [replyOpenId, setReplyOpenId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyStatus, setReplyStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [replyError, setReplyError] = useState("");
  const listTopRef = useRef<HTMLDivElement>(null);

  const deleteTarget = submissions.find((s) => s.id === deleteTargetId) ?? null;
  const totalPages = Math.max(1, Math.ceil(submissions.length / PAGE_SIZE));
  const pagedSubmissions = submissions.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function goToPage(page: number) {
    setCurrentPage(page);
    const target = listTopRef.current;
    if (target) {
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().height : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top });
    }
  }

  async function confirmDelete() {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setSubmissions((prev) => {
          const next = prev.filter((s) => s.id !== id);
          const maxPage = Math.max(1, Math.ceil(next.length / PAGE_SIZE));
          setCurrentPage((page) => Math.min(page, maxPage));
          return next;
        });
        setDeleteTargetId(null);
      } else {
        alert("Failed to delete. Please try again.");
      }
    } finally {
      setDeletingId(null);
    }
  }

  function openReply(id: string) {
    setReplyOpenId((current) => (current === id ? null : id));
    setReplyText("");
    setReplyStatus("idle");
    setReplyError("");
  }

  async function handleSendReply(id: string) {
    if (!replyText.trim()) return;
    setReplyStatus("sending");
    setReplyError("");
    try {
      const res = await fetch(`/api/admin/contacts/${id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: replyText }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setReplyStatus("sent");
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === id
              ? { ...s, replied: true, repliedAt: data.repliedAt ?? new Date().toISOString() }
              : s,
          ),
        );
        setReplyOpenId(null);
      } else {
        setReplyStatus("error");
        setReplyError(data.error ?? "Failed to send reply.");
      }
    } catch {
      setReplyStatus("error");
      setReplyError("Network error. Please try again.");
    }
  }

  return (
    <>
      <div ref={listTopRef} className="mb-8 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-semibold text-foreground">Contact Submissions</h1>
        <AdminLogoutButton />
      </div>

      <p className="mb-6 text-base text-muted-foreground">
        {submissions.length} message{submissions.length === 1 ? "" : "s"} received via the website
        contact form.
      </p>

      {submissions.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card p-8 text-center text-base text-muted-foreground">
          No contact submissions yet.
        </p>
      ) : (
        <div className="space-y-4">
          {pagedSubmissions.map((s) => (
            <div
              key={s.id}
              className={
                s.replied
                  ? "rounded-2xl border border-accent/30 bg-accent/5 p-6 shadow-soft"
                  : "rounded-2xl border border-border bg-card p-6 shadow-soft"
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{s.email}</p>
                  <p className="text-base text-muted-foreground">{s.phone || "No phone provided"}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    {serviceLabel(s.service)}
                  </p>
                </div>
                <div className="shrink-0 text-right text-sm text-muted-foreground">
                  {formatDate(s.createdAt)}
                </div>
              </div>

              <p className="mt-4 whitespace-pre-wrap rounded-xl bg-secondary/60 p-4 text-base leading-relaxed text-foreground">
                {s.message}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openReply(s.id)}
                  disabled={s.replied}
                  className={
                    s.replied
                      ? "inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-base font-medium text-accent opacity-70"
                      : "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-base font-medium text-foreground hover:bg-secondary"
                  }
                >
                  {s.replied ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <ReplyIcon className="h-4 w-4" />
                  )}
                  {s.replied ? "Replied" : "Reply"}
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteTargetId(s.id)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-destructive/30 px-4 py-2 text-base font-medium text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>

              {s.replied && s.repliedAt && (
                <p className="mt-3 text-base font-medium text-accent">
                  Reply sent to {s.email} on {formatRepliedAt(s.repliedAt)}.
                </p>
              )}

              {replyOpenId === s.id && (
                <div className="mt-4 rounded-xl border border-border bg-background p-4">
                  <textarea
                    value={replyText}
                    onChange={(event) => setReplyText(event.target.value)}
                    rows={4}
                    placeholder={`Write a reply to ${s.name}...`}
                    className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {replyStatus === "error" && (
                    <p className="mt-2 text-base font-medium text-destructive">{replyError}</p>
                  )}
                  <div className="mt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleSendReply(s.id)}
                      disabled={replyStatus === "sending" || !replyText.trim()}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-sunrise px-5 py-2 text-base font-semibold text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {replyStatus === "sending" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      Send Reply
                    </button>
                    <button
                      type="button"
                      onClick={() => setReplyOpenId(null)}
                      className="rounded-full px-5 py-2 text-base font-medium text-muted-foreground hover:bg-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {submissions.length > PAGE_SIZE && (
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-base font-medium text-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <span className="text-base text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-base font-medium text-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {deleteTarget && (
        <DeleteConfirmDialog
          submission={deleteTarget}
          isDeleting={deletingId === deleteTarget.id}
          onCancel={() => setDeleteTargetId(null)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
}
