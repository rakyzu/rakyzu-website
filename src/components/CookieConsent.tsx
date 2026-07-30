import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-bg-elv border border-border rounded-xl p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-fg-sec flex-1">
          This site uses essential cookies for theme preferences, language selection, and analytics.
          <a href="/privacy" className="underline ml-1 hover:text-fg">Learn more</a>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-medium border border-border rounded-lg text-fg-sec hover:text-fg hover:bg-bg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-medium bg-fg text-bg rounded-lg hover:bg-fg-sec transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
