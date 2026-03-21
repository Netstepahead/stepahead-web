import { useEffect, useState, FormEvent } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const { t, isRTL, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2.5";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "d00a94ef-02aa-4820-9183-333b2a386fa6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
        form.reset();
      }
    } catch {
      // Network error — keep form state; user can retry
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkClass =
    "inline-flex items-center gap-2 text-sm font-medium text-[#1B365D] hover:text-[#E87722] transition-colors group";

  return (
    <div className="w-full bg-white min-h-screen pt-32 pb-16 px-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="max-w-2xl mx-auto flex flex-col items-center text-center w-full">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-2">
          {t('nav.contact')}
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-snug max-w-xl">
          {t('footer.tagline')}
        </p>

        <div className="flex flex-wrap justify-center gap-8 my-8 w-full">
          <a
            href="mailto:info@step-ahead.com"
            className={linkClass}
          >
            <Mail className="w-4 h-4 text-[#E87722] shrink-0" aria-hidden />
            <span className="border-b border-slate-200 group-hover:border-[#E87722] transition-colors">
              info@step-ahead.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/stepaheadtech"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <Linkedin className="w-4 h-4 text-[#E87722] shrink-0" aria-hidden />
            <span className="border-b border-slate-200 group-hover:border-[#E87722] transition-colors">
              LinkedIn
            </span>
          </a>
        </div>

        <div className="max-w-xl w-full mx-auto bg-white p-4 md:p-5 rounded-2xl shadow-md border border-slate-100">
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg mb-3 text-sm text-center">
              {language === 'he'
                ? 'תודה! ההודעה שלך נשלחה בהצלחה. נחזור אליך בקרוב.'
                : 'Thank you! Your message has been sent successfully. We will get back to you soon.'}
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full text-start">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t('contact.form.title')}</h3>
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
              required
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
              required
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
              required
            />
            <label htmlFor="contact-message" className="sr-only">
              {t('contact.form.message')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              placeholder={t('contact.form.message')}
              className={`${inputClass} resize-y min-h-[88px] mb-3`}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1A2E44] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-orange-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '...' : t('contact.form.submit')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
