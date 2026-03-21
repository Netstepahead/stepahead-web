import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const academyCarouselImages = [
  '/academy_carousel/workshop1.jpeg',
  '/academy_carousel/workshop2.jpeg',
  '/academy_carousel/workshop3.jpeg',
];

const academyAutoplay = Autoplay({ delay: 4000 });

const Academy = () => {
  const { t, isRTL, language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const workshopIds = [1, 2, 3, 4, 5, 6] as const;

  const FeatureList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3 mt-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-700">
          <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION - Warm & Human */}
      <section className="bg-[#F9F8F4] pt-16 lg:pt-20 pb-24 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto pt-16 lg:pt-20 pb-16">
            <div className="flex flex-col items-start text-start">
              <span className="inline-block px-4 py-2 text-[#E87722] border border-[#E87722]/60 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                {t('academy.badge')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6 text-start">
                {t('academy.title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-10 text-start">
                {t('academy.subtitle')}
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
              >
                {t('academy.bookWorkshop')}
              </Button>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/workshop-hero.jfif" className="w-full h-full object-cover" alt="Network Leadership Workshop" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE METHODOLOGY - Carousel */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="flex flex-col items-start text-start">
              <span className="text-orange-500 font-semibold mb-2 block">{t('academy.methodology.tag')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('academy.methodology.title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {t('academy.methodology.desc1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('academy.methodology.desc2')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodology.bullet1')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodology.bullet2')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodology.bullet3')}</span>
                </li>
              </ul>
            </div>
            <div className="w-full aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <Carousel
                key={isRTL ? 'academy-rtl' : 'academy-ltr'}
                opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                plugins={[academyAutoplay]}
                setApi={(api) => { api?.plugins().autoplay?.play(); }}
                className="w-full h-full"
              >
                <CarouselContent className="-ml-0 h-full">
                  {academyCarouselImages.map((img, i) => (
                    <CarouselItem key={i} className="pl-0 h-full">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-contain bg-slate-100"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Network Skills — profiling & capabilities (from Platform) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-none w-full">
              <div className="w-full max-w-4xl mx-auto px-4 mt-12 mb-16 flex justify-center">
                <img
                  src={language === 'he' ? '/Profiling_heb.png' : '/Profiling.png'}
                  alt="Network Leadership Personas"
                  className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-2xl border border-slate-100"
                />
              </div>
            </div>
            <div className="order-2 md:order-none flex flex-col items-start text-start">
              <span className="text-orange-500 font-semibold mb-2 block">{t('platform.deepInsight')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('platform.networkProfiling')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('platform.profilingDesc')}
              </p>
              <FeatureList items={[
                t('platform.profilingFeature1'),
                t('platform.profilingFeature2'),
                t('platform.profilingFeature3'),
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core workshops — compact grid */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('academy.coreModules')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('academy.developingPillars')}</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            {workshopIds.map((n, i) => (
              <div
                key={n}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-1 block">
                    {language === 'he' ? `סדנה ${i + 1}` : `Workshop ${i + 1}`}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A2E44]">
                    {t(`academy.w${n}.title`).replace(/^\d+\.\s*/, '')}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{t(`academy.w${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('academy.upgradeDNA')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('academy.upgradeDesc')}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
          >
            {t('academy.bookWorkshop')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Academy;
