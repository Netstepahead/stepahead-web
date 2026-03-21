import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <div className="w-full bg-white min-h-screen pt-24 pb-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">Terms of Use</h1>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
        <p className="leading-relaxed mb-6">
          By accessing step-ahead.com, you agree to be bound by these Terms of Use and all applicable laws and
          regulations.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">2. Intellectual Property</h2>
        <p className="leading-relaxed mb-6">
          All content, graphics, methodology descriptions, and branding on this website are the exclusive property of
          StepAhead and are protected by copyright laws. You may not copy or reproduce this material without written
          permission.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">3. Disclaimer</h2>
        <p className="leading-relaxed mb-6">
          The materials on this website are provided &apos;as is&apos;. StepAhead makes no warranties, expressed or
          implied, regarding the accuracy or reliability of the use of the materials on its website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-10 mb-4">4. Limitations of Liability</h2>
        <p className="leading-relaxed mb-6">
          In no event shall StepAhead be liable for any damages arising out of the use or inability to use the
          materials on our website.
        </p>
      </div>
    </div>
  );
};

export default Terms;
