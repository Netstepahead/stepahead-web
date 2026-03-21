import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "stepahead_cookie_consent";

const CookieBanner = () => {
  const { t, isRTL, language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A2E44] text-white p-4 shadow-2xl"
      dir={isRTL ? "rtl" : "ltr"}
      role="dialog"
      aria-label={language === "he" ? "הסכמה לעוגיות" : "Cookie consent"}
    >
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-blue-100 leading-relaxed flex-1">
          {t("footer.cookieBanner")}
          <Link to="/privacy" className="text-orange-400 hover:text-orange-300 underline font-medium">
            {t("footer.privacy")}
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 self-start sm:self-center"
        >
          {t("footer.cookieAccept")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
