import { Turnstile } from "@marsidev/react-turnstile";
import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Toast from "./Toast";

interface Entry {
  id: number;
  name: string;
  note: string;
  created_at: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/guestbook?limit=10")
      .then((r) => r.json())
      .then((data) => setEntries(data.entries ?? []))
      .catch(() => {});
  }, []);

  const submit = useCallback(async () => {
    if (!name.trim() || !note.trim() || !token) return;
    setSending(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), note: note.trim(), turnstileToken: token }),
      });
      const data = await res.json();
      if (data.success) {
        setEntries(data.entries);
        setName("");
        setNote("");
        setToken(null);
        setToast({ message: "Signed! Thanks for dropping by.", type: "success" });
      } else {
        setToast({ message: data.error ?? "Something went wrong", type: "error" });
      }
    } catch {
      setToast({ message: "Network error", type: "error" });
    } finally {
      setSending(false);
    }
  }, [name, note, token]);

  return (
    <section id="guestbook" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Guestbook</h2>
          <p className="text-zinc-500 text-sm mb-8">Leave a note</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border border-zinc-800 rounded-lg p-5 mb-10 space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={100}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write something..."
              maxLength={2000}
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="scale-90 origin-left">
                {typeof document !== "undefined" && (
                  <Turnstile
                    siteKey={import.meta.env.PUBLIC_TURNSTILE_SITEKEY ?? ""}
                    onSuccess={setToken}
                    options={{ action: "guestbook" }}
                  />
                )}
              </div>
              <button
                onClick={submit}
                disabled={sending || !name.trim() || !note.trim() || !token}
                className="px-5 py-2 bg-zinc-100 text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "Signing..." : "Sign"}
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {entries.map((e) => (
            <ScrollReveal key={e.id}>
              <div className="border border-zinc-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{e.name}</span>
                  <span className="text-xs text-zinc-600">{new Date(e.created_at).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-zinc-400">{e.note}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
