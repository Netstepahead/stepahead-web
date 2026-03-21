import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4";

  return (
    <div className="w-full bg-white min-h-screen pt-28 pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
            {t('nav.contact')}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          <div className="flex flex-col gap-6 text-start">
            <a
              href="mailto:info@step-ahead.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-6 h-6 text-[#E87722] shrink-0" />
              <span className="text-[#1B365D] font-medium">info@step-ahead.com</span>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
              <MapPin className="w-6 h-6 text-[#E87722] shrink-0" />
              <span className="text-[#1B365D]">{t('footer.location')}</span>
            </div>
            <a
              href="https://www.linkedin.com/company/stepaheadtech"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#E87722] shrink-0" />
              <span className="text-[#1B365D] font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="text-start"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.form.title')}</h3>
              <label htmlFor="contact-name" className="sr-only">
                {t('contact.form.name')}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                className={inputClass}
                autoComplete="name"
              />
              <label htmlFor="contact-email" className="sr-only">
                {t('contact.form.email')}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                className={inputClass}
                autoComplete="email"
              />
              <label htmlFor="contact-company" className="sr-only">
                {t('contact.form.company')}
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                placeholder={t('contact.form.company')}
                className={inputClass}
                autoComplete="organization"
              />
              <label htmlFor="contact-message" className="sr-only">
                {t('contact.form.message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={t('contact.form.message')}
                className={`${inputClass} resize-y min-h-[120px]`}
              />
              <button
                type="submit"
                className="w-full bg-[#1A2E44] text-white rounded-xl py-3 font-semibold hover:bg-orange-500 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
