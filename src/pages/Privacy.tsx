import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <div className="w-full bg-white min-h-screen pt-24 pb-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">Website Privacy Policy</h1>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
        <p className="leading-relaxed mb-6">
          When you visit step-ahead.com or use our contact forms, we may collect personal information such as your
          name, email address, company name, and usage data via analytics cookies.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
        <p className="leading-relaxed mb-6">
          We use this information to respond to your inquiries, provide information about our Network Leadership
          programs and ONA platform, and improve our website experience. We do not sell your personal data to third
          parties.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">3. Third-Party Services</h2>
        <p className="leading-relaxed mb-6">
          We use third-party services (such as Web3Forms for contact inquiries and standard web analytics) which may
          process your data securely in accordance with their own privacy policies.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">4. Your Rights</h2>
        <p className="leading-relaxed mb-6">
          You have the right to request access to, correction of, or deletion of your personal data stored by our
          website. To exercise these rights, please contact us at info@step-ahead.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
