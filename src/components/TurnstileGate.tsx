import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TurnstileGate({ children }: Props) {
  const [passed, setPassed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ok = sessionStorage.getItem("cf-gate");
    if (ok === "passed") setPassed(true);
    setLoading(false);
  }, []);

  const onSuccess = () => {
    sessionStorage.setItem("cf-gate", "passed");
    setPassed(true);
  };

  if (loading) return null;

  if (passed) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg">
      <div className="text-center px-4 max-w-sm">
        <h1 className="text-2xl font-bold text-fg mb-2">rakyzu</h1>
        <p className="text-sm text-fg-sec mb-6">Please verify you're human before accessing the site.</p>
        <div className="flex justify-center">
          {typeof document !== "undefined" && (
            <Turnstile
              siteKey={import.meta.env.PUBLIC_TURNSTILE_SITEKEY ?? ""}
              onSuccess={onSuccess}
              options={{ action: "gate" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
