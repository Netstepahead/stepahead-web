import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white min-h-screen pt-28 pb-20">
      <section className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
          {t('nav.contact')}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {t('footer.tagline')}
        </p>
        <div className="space-y-6 text-left">
          <a
            href="mailto:info@stepahead.com"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-6 h-6 text-[#E87722]" />
            <span className="text-[#1B365D] font-medium">info@stepahead.com</span>
          </a>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
            <MapPin className="w-6 h-6 text-[#E87722]" />
            <span className="text-[#1B365D]">{t('footer.location')}</span>
          </div>
          <a
            href="https://www.linkedin.com/company/stepaheadtech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-[#E87722]" />
            <span className="text-[#1B365D] font-medium">LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
