import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const leadershipAutoplay = Autoplay({ delay: 4000 });
const onaAutoplay = Autoplay({ delay: 4000 });

const leadershipCarouselImages = [
  '/carousel/485136809_1241810007947886_5355771345522948267_n.jpg',
  '/carousel/70380459_123570912362931_6421992094918770688_n.jpg',
  '/carousel/PXL_20220918_083347381.jpg',
  '/carousel/WhatsApp Image 2026-03-10 at 19.04.16.jpeg',
];

const onaCarouselImages = [
  '/ona-carousel/ona1.png',
  '/ona-carousel/ona2.png',
  '/ona-carousel/ona3.png',
];

const Index = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const clients = [
    { name: "Clalit", logo: "clalit.png" },
    { name: "Tambour", logo: "tambour.png" },
    { name: "Ormat", logo: "ormat.png" },
    { name: "Elbit Systems", logo: "elbit.png" },
    { name: "Kornit Digital", logo: "kornit.png" },
    { name: "The Joint", logo: "the-joint.png", className: "invert" },
    { name: "Bank Hapoalim", logo: "poalim.png" },
    { name: "IDF", logo: "idf.jfif" },
    { name: "Applied Materials", logo: "applied-materials.png" },
    { name: "Dexcel Pharma", logo: "dexcel.png" },
    { name: "Lahav Executive Education", logo: "lahav.png" },
    { name: "Lycored", logo: "lycored.png" },
  ];

  const pillars = [
    {
      titleKey: 'index.pillar1.title' as const,
      textKey: 'index.pillar1.text' as const,
      buttonKey: 'index.pillar1.button' as const,
      path: '/academy',
      image: '/leadership-roles.png',
    },
    {
      titleKey: 'index.pillar2.title' as const,
      textKey: 'index.pillar2.text' as const,
      buttonKey: 'index.pillar2.button' as const,
      path: '/platform',
      image: '/ona-dashboard.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section (animation and layout unchanged; text updated in HeroSection) */}
      <HeroSection />

      {/* 2. Trust (client logos - immediate social proof below Hero) */}
      <div className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">
            {t('hero.trustedBySubtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 px-4 max-w-6xl mx-auto">
            {clients.map((client, i) => (
              <div key={i} className="w-24 md:w-32 h-16 flex items-center justify-center group">
                <img
                  src={`/logos/${client.logo}`}
                  alt={client.name}
                  className={`max-h-full max-w-full object-contain transition-all duration-300 ${client.className || ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The 2 Solutions - Z-Pattern layout (alternating text/image rows) */}
      <section id="solutions" className="bg-[#FAF9F6] relative overflow-hidden scroll-mt-24" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-full overflow-hidden">
          {pillars.map((pillar, index) => {
            const textFirst = index % 2 === 0; // Row 1, 3: text left. Row 2: image left.
            const isCollaborationSection = index === 1;
            const textBlock = (
              <div className="flex flex-col items-start text-start order-1 md:order-none">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${isCollaborationSection ? 'text-white' : 'text-[#1B365D]'}`}>
                  {t(pillar.titleKey)}
                </h3>
                <p className={`leading-relaxed mb-4 max-w-lg ${isCollaborationSection ? 'text-slate-300' : 'text-gray-600'}`}>
                  {t(pillar.textKey)}
                </p>
                {index === 0 && (
                  <ul className="flex flex-col gap-2 mb-6 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#E87722]">✓</span>
                      {t('index.pillar1.benefit1')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#E87722]">✓</span>
                      {t('index.pillar1.benefit2')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#E87722]">✓</span>
                      {t('index.pillar1.benefit3')}
                    </li>
                  </ul>
                )}
                {index !== 0 && <div className="mb-6" />}
                <Button
                  onClick={() => navigate(pillar.path)}
                  className={isCollaborationSection ? "bg-[#E87722] hover:bg-[#f08530] text-white" : "bg-[#1B365D] hover:bg-[#2a4a7f] text-white"}
                >
                  {t(pillar.buttonKey)}
                  <ArrowRight className={`w-4 h-4 ms-2 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            );
            const imageBlock = index === 0 ? (
              <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-full overflow-hidden order-2 md:order-none">
                <Carousel
                  key={isRTL ? 'leadership-rtl' : 'leadership-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[leadershipAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full max-w-full overflow-hidden"
                >
                  <CarouselContent className="-ml-0">
                    {leadershipCarouselImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0">
                        <div className="aspect-video overflow-hidden rounded-2xl bg-[#FAF9F6]">
                          <img
                            src={img.includes(' ') ? encodeURI(img) : img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 border-white/60 bg-white/60 hover:bg-white/80" />
                  <CarouselNext className="right-2 border-white/60 bg-white/60 hover:bg-white/80" />
                </Carousel>
              </div>
            ) : (
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 max-w-full order-2 md:order-none">
                <Carousel
                  key={isRTL ? 'ona-rtl' : 'ona-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[onaAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full max-w-full overflow-hidden"
                >
                  <CarouselContent className="-ml-0">
                    {onaCarouselImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0">
                        <div className="aspect-video overflow-hidden flex items-center justify-center bg-white">
                          <img
                            src={img}
                            alt=""
                            className="object-contain p-4 w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 border-gray-200 bg-white/90 hover:bg-white text-gray-700" />
                  <CarouselNext className="right-2 border-gray-200 bg-white/90 hover:bg-white text-gray-700" />
                </Carousel>
              </div>
            );
            const rowContent = (
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${isCollaborationSection ? '' : 'py-12 md:py-24 first:pt-12 md:first:pt-24 last:pb-12 md:last:pb-24'}`}>
                {textFirst ? textBlock : imageBlock}
                {textFirst ? imageBlock : textBlock}
              </div>
            );
            return (
              <div key={index} className={isCollaborationSection ? "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-navy" : ""}>
                {isCollaborationSection ? (
                  <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24">
                    {rowContent}
                  </div>
                ) : (
                  rowContent
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Methodology - 2-column grid: text + network image */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col items-start text-start order-1 md:order-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1B365D] mb-4 md:mb-6 leading-tight">
                {t('index.philosophy.title')}
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('index.philosophy.text')}
              </p>
            </div>
            <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-full overflow-hidden order-2 md:order-none">
              <img src="/network-vs-hierarchy.png" alt="" className="rounded-2xl object-cover w-full max-w-full block" style={{ clipPath: 'inset(0 0 2px 0)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Collab Agent - 2-column: content + product image */}
      <section className="py-12 md:py-24 bg-navy text-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/10 max-w-full order-2 md:order-none">
              <img src="/Collab_Carousel/agent-chat.png" alt="" className="w-full h-auto object-contain max-w-full" />
            </div>
            <div className="flex flex-col items-start text-start order-1 md:order-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">
                {t('index.future.title')}
              </h2>
              <p className="text-base md:text-xl text-blue-50/95 leading-relaxed mb-6 md:mb-8 max-w-xl">
                {t('index.future.text')}
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#E87722] hover:bg-[#f08530] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[#E87722]/30 hover:shadow-xl transition-all"
              >
                {t('index.future.cta')}
                <ArrowRight className={`w-5 h-5 ms-2 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
