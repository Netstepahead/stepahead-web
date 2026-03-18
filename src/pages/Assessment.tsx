import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";

const Assessment = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const measures = [
    { title: t('assessment.measure1Title'), desc: t('assessment.measure1Desc') },
    { title: t('assessment.measure2Title'), desc: t('assessment.measure2Desc') },
    { title: t('assessment.measure3Title'), desc: t('assessment.measure3Desc') },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F8F4] pt-16 lg:pt-20 pb-24 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto pt-16 lg:pt-20 pb-16">
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-start max-w-2xl">
              <span className="inline-block px-4 py-2 text-[#E87722] border border-[#E87722]/60 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                {t('assessment.badge')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6 text-start">
                {t('assessment.title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-xl text-start">
                {t('assessment.subtitle')}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/assessment.jpg" className="w-full h-full object-cover object-center" alt="Game-based assessment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEYOND THE CV SECTION */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-none">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-50 p-6">
                <img src="/assessment.jpg" className="w-full h-full object-contain" alt="Assessment UI" />
              </div>
            </div>
            <div className="order-2 md:order-none flex flex-col items-start text-start">
              <span className="text-orange-500 font-semibold mb-2 block">{t('assessment.beyondCv')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('assessment.beyondCvTitle')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('assessment.beyondCvDesc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('assessment.feature1')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('assessment.feature2')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('assessment.feature3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE MEASURE SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('assessment.whatWeMeasure')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {measures.map((m, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-[#1A2E44] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('assessment.ctaTitle')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('assessment.ctaDesc')}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
          >
            {t('assessment.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
