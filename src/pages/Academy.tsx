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
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const modules = [
    { title: t('academy.trustBuilding'), desc: t('academy.trustDesc') },
    { title: t('academy.influence'), desc: t('academy.influenceDesc') },
    { title: t('academy.networkMindset'), desc: t('academy.mindsetDesc') },
    { title: t('academy.strategicConnecting'), desc: t('academy.connectingDesc') },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION - Warm & Human */}
      <section className="bg-[#F9F8F4] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto pt-24 pb-16">
            <div className="flex flex-col items-start text-left">
              <span className="inline-block px-4 py-2 text-[#E87722] border border-[#E87722]/60 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                {t('academy.badge')}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
                {t('academy.title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-10">
                {t('academy.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
                >
                  {t('academy.downloadSyllabus')}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="px-10 py-6 text-lg rounded-lg border-2 border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  {t('academy.bookWorkshop')}
                </Button>
              </div>
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
              <span className="text-orange-500 font-semibold mb-2 block">{t('academy.methodology')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('academy.theoryMeetsPractice')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {t('academy.methodologyDesc1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('academy.methodologyDesc2')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodologyFeature1')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodologyFeature2')}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CircleCheck className="w-5 h-5 text-[#E87722] shrink-0" />
                  <span>{t('academy.methodologyFeature3')}</span>
                </li>
              </ul>
            </div>
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
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
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES - Syllabus / Curriculum Timeline */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('academy.coreModules')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('academy.developingPillars')}</p>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col gap-12 mt-16">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 rounded-3xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-lg"
              >
                <span className="text-6xl font-light text-orange-500 opacity-80 shrink-0 font-serif">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{mod.title}</h3>
                  <p className="text-lg text-slate-600">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 bg-slate-900 text-white">
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
