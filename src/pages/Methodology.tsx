import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Methodology = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col items-start text-start order-2 md:order-none">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1B365D] mb-4 md:mb-6 leading-tight">
                {t('index.philosophy.title')}
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
                {t('index.philosophy.text')}
              </p>
              <Button
                onClick={() => navigate('/network-leadership')}
                className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white px-8 py-6 text-lg rounded-lg"
              >
                {t('index.pillar1.button')}
              </Button>
            </div>
            <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-full overflow-hidden order-1 md:order-none">
              <img src="/network-vs-hierarchy.png" alt="" className="rounded-2xl object-cover w-full max-w-full block" style={{ clipPath: 'inset(0 0 2px 0)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
