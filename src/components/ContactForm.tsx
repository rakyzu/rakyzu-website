import { Turnstile } from "@marsidev/react-turnstile";
import { useCallback, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Toast from "./Toast";
import { useLang } from "../i18n/LanguageProvider";

export default function ContactForm() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [token, setToken] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = useCallback(async () => {
    if (!validate() || !token) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", message: "" });
        setToken(null);
        setToast({ message: "Message sent! I'll get back to you soon.", type: "success" });
      } else {
        setToast({ message: data.error ?? "Something went wrong", type: "error" });
      }
    } catch {
      setToast({ message: "Network error", type: "error" });
    } finally {
      setSending(false);
    }
  }, [form, token]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-24 bg-bg-sec">
      <div className="max-w-xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2 text-fg">{t.contact.title}</h2>
          <p className="text-fg-muted text-sm mb-8">{t.contact.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">{t.contact.name}</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t.contact.name}
                maxLength={100}
                className="w-full bg-bg-sec border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-fg-sec transition-colors placeholder:text-fg-muted"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t.contact.email}</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t.contact.email}
                maxLength={254}
                className="w-full bg-bg-sec border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-fg-sec transition-colors placeholder:text-fg-muted"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">{t.contact.message}</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={t.contact.message}
                maxLength={5000}
                rows={5}
                className="w-full bg-bg-sec border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-fg-sec transition-colors resize-none placeholder:text-fg-muted"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="scale-90 origin-left">
                {typeof document !== "undefined" && (
                  <Turnstile
                    siteKey={import.meta.env.PUBLIC_TURNSTILE_SITEKEY ?? ""}
                    onSuccess={setToken}
                    options={{ action: "contact" }}
                  />
                )}
              </div>
              <button
                onClick={submit}
                disabled={sending || !token}
                className="px-6 py-2.5 bg-fg text-bg rounded-lg text-sm font-medium hover:bg-fg-sec transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : t.contact.send}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
