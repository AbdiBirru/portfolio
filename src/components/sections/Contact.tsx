"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Mail as MailIcon } from "lucide-react";
import { socialLinks } from "@/lib/socials";

type Status = "idle" | "loading" | "success" | "error";
const WEB3FORMS_ACCESS_KEY = "2025959b-af3f-454d-a376-5a4fd292e700";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: formData });
      const result = await res.json();
      if (result.success) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-24">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold">Let&apos;s Work Together</h2>
          <p style={{ color: "var(--text-secondary)" }}>Have an opportunity, project, or just want to connect? Send a message and I&apos;ll get back to you.</p>
          <a href="mailto:dev.abdibirru@gmail.com" className="flex items-center gap-2 text-sm font-medium"><MailIcon size={16} /> dev.abdibirru@gmail.com</a>
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return <a key={label} href={href} aria-label={label} {...linkProps} className="w-10 h-10 flex items-center justify-center rounded-full border hover:opacity-80" style={{ borderColor: "var(--border)" }}><Icon size={18} /></a>;
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border p-6" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)", boxShadow: "var(--card-glow)" }}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" required className="rounded-lg border px-4 py-2.5 bg-transparent outline-none focus:shadow-glow transition-shadow" style={{ borderColor: "var(--border)" }} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="rounded-lg border px-4 py-2.5 bg-transparent outline-none focus:shadow-glow transition-shadow" style={{ borderColor: "var(--border)" }} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" required rows={4} className="rounded-lg border px-4 py-2.5 bg-transparent outline-none resize-none focus:shadow-glow transition-shadow" style={{ borderColor: "var(--border)" }} />
          </div>
          <button type="submit" disabled={status === "loading"} className="btn-glow flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium disabled:opacity-60">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          <div role="status" aria-live="polite">
            {status === "success" && <p className="flex items-center gap-2 text-sm" style={{ color: "var(--accent-cyan)" }}><CheckCircle2 size={16} /> Message sent — thanks for reaching out!</p>}
            {status === "error" && <p className="flex items-center gap-2 text-sm" style={{ color: "#f87171" }}><AlertCircle size={16} /> Something went wrong. Please try again or email me directly.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
