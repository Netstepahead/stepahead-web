import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const collabCarouselImages = [
  '/Collab_Carousel/agent-chat.png',
  '/Collab_Carousel/Enhance_Network.png',
  '/Collab_Carousel/Teams_connect.png',
];

const nbsCarouselImages = [
  '/nbs_carousel/nbs.png',
  '/nbs_carousel/profiling.jfif',
];

const collabAutoplay = Autoplay({ delay: 4000 });
const nbsAutoplay = Autoplay({ delay: 4000 });

const Platform = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const ImagePlaceholder = ({ src }: { src: string }) => (
    <div className="w-full aspect-video rounded-3xl shadow-xl border border-slate-200 overflow-hidden bg-slate-50">
      <img src={src} alt="" className="w-full h-full object-contain p-4 bg-slate-50" />
    </div>
  );

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
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center max-w-7xl mx-auto pt-8 md:pt-16 lg:pt-20 pb-8 md:pb-16">
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
              <span className="inline-block px-4 py-2 bg-[#E87722] text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4 md:mb-6">
                {t('platform.os')}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight text-balance mb-4 md:mb-6 text-left">
                {t('platform.title')}
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-xl text-left">
                {t('platform.subtitle')}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 p-2 md:p-8">
              <div className="w-full aspect-video md:aspect-video lg:aspect-square bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto md:max-w-none">
                <img src="/network-story.jpg" className="w-full h-full object-cover object-center" alt="Network Visualization" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAYER 1: ONA Engine - The Macro View (Image Left, Text Right) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-none">
              <ImagePlaceholder src="/ona-carousel/ona1.png" />
            </div>
            <div className="order-2 md:order-none flex flex-col items-start text-start">
              <span className="text-orange-500 font-semibold mb-2 block">{t('platform.visualizeInvisible')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('platform.onaEngine')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('platform.onaDesc')}
              </p>
              <FeatureList items={[
                t('platform.onaFeature1'),
                t('platform.onaFeature2'),
                t('platform.onaFeature3'),
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYER 2: Collab Agent - The Micro View (Text Left, Image Right) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex flex-col items-start text-start">
              <span className="text-orange-500 font-semibold mb-2 block">{t('platform.actionableNudges')}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('platform.collabAgent')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('platform.agentDesc')}
              </p>
              <FeatureList items={[
                t('platform.agentFeature1'),
                t('platform.agentFeature2'),
                t('platform.agentFeature3'),
              ]} />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden bg-slate-50">
                <Carousel
                  key={isRTL ? 'collab-rtl' : 'collab-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[collabAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full h-full"
                >
                  <CarouselContent className="-ml-0 h-full">
                    {collabCarouselImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0 h-full">
                        <div className="aspect-square md:aspect-[4/3] overflow-hidden flex items-center justify-center bg-slate-50">
                          <img
                            src={img}
                            alt=""
                            className="object-cover object-top w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAYER 3: Network Profiling - Personal Impact (Image Left, Text Right) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-none">
              <div className="w-full">
                <Carousel
                  key={isRTL ? 'nbs-rtl' : 'nbs-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[nbsAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-0">
                    {nbsCarouselImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0">
                        <img
                          src={img}
                          alt=""
                          className="w-full h-auto object-contain rounded-3xl shadow-xl border border-slate-200"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
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

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('platform.readyTransform')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('platform.joinCompanies')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
            >
              {t('platform.bookDemo')}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
              className="px-10 py-6 text-lg rounded-lg border-2 border-white text-white hover:bg-white/10"
            >
              {t('platform.contactSales')}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Platform;
