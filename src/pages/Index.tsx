import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const leadershipCarouselImages = [
  '/carousel/485136809_1241810007947886_5355771345522948267_n.jpg',
  '/carousel/70380459_123570912362931_6421992094918770688_n.jpg',
  '/carousel/PXL_20220918_083347381.jpg',
  '/carousel/WhatsApp Image 2026-03-10 at 19.04.16.jpeg',
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
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">
            {t('hero.trustedBySubtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 px-4 max-w-6xl mx-auto">
            {clients.map((client, i) => (
              <div key={i} className="w-24 md:w-32 h-16 flex items-center justify-center group">
                <img
                  src={`/logos/${client.logo}`}
                  alt={client.name}
                  className={`max-h-full max-w-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter ${client.className || ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The 2 Solutions - Z-Pattern layout (alternating text/image rows) */}
      <section id="solutions" className="bg-[#FAF9F6] relative overflow-hidden scroll-mt-24" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 relative z-10">
          {pillars.map((pillar, index) => {
            const textFirst = index % 2 === 0; // Row 1, 3: text left. Row 2: image left.
            const textBlock = (
              <div className="flex flex-col items-start text-start">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1B365D] mb-4">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 max-w-lg">
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
                  className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white"
                >
                  {t(pillar.buttonKey)}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
              </div>
            );
            const imageBlock = index === 0 ? (
              <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent className="-ml-0">
                    {leadershipCarouselImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0">
                        <div className="aspect-video overflow-hidden rounded-2xl">
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
              <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img
                  src={pillar.image}
                  alt=""
                  className="rounded-2xl w-full h-auto aspect-video object-cover"
                />
              </div>
            );
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center py-24 first:pt-24 last:pb-24">
                {textFirst ? textBlock : imageBlock}
                {textFirst ? imageBlock : textBlock}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Methodology - 2-column grid: text + network image */}
      <section className="py-24 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-start">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6 leading-tight">
                {t('index.philosophy.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('index.philosophy.text')}
              </p>
            </div>
            <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img src="/network-vs-hierarchy.png" alt="" className="rounded-2xl object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Collab Agent - 2-column: content + product image */}
      <section className="py-24 bg-[#1B365D] text-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E87722] rounded-full blur-[180px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E87722] rounded-full blur-[100px] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start text-start">
              <span className="inline-block text-[#E87722] text-sm font-semibold uppercase tracking-widest mb-4">
                {t('index.future.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                {t('index.future.title')}
              </h2>
              <p className="text-xl text-blue-50/95 leading-relaxed mb-8 max-w-xl">
                {t('index.future.text')}
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#E87722] hover:bg-[#f08530] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[#E87722]/30 hover:shadow-xl transition-all"
              >
                {t('index.future.cta')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
              </Button>
            </div>
            <div className="relative p-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img src="/collab-personal.png" alt="" className="rounded-2xl object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
