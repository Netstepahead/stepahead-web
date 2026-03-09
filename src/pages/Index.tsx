import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
      accent: 'border-s-[#1B365D]',
      hoverBg: 'hover:bg-[#1B365D]/5',
    },
    {
      titleKey: 'index.pillar2.title' as const,
      textKey: 'index.pillar2.text' as const,
      buttonKey: 'index.pillar2.button' as const,
      path: '/platform',
      accent: 'border-s-[#E87722]',
      hoverBg: 'hover:bg-[#E87722]/5',
    },
    {
      titleKey: 'index.pillar3.title' as const,
      textKey: 'index.pillar3.text' as const,
      buttonKey: 'index.pillar3.button' as const,
      path: '/solutions',
      accent: 'border-s-[#1B365D]',
      hoverBg: 'hover:bg-[#1B365D]/5',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section (animation and layout unchanged; text updated in HeroSection) */}
      <HeroSection />

      {/* 2. The 3 Solutions - Z-Pattern layout (alternating text/image rows) */}
      <section id="solutions" className="bg-[#FAF9F6] relative overflow-hidden scroll-mt-24" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 relative z-10">
          {pillars.map((pillar, index) => {
            const textFirst = index % 2 === 0; // Row 1, 3: text left. Row 2: image left.
            const textBlock = (
              <div className="flex flex-col items-start text-start">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1B365D] mb-4">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
                  {t(pillar.textKey)}
                </p>
                <Button
                  onClick={() => navigate(pillar.path)}
                  className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white"
                >
                  {t(pillar.buttonKey)}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
              </div>
            );
            const imagePlaceholder = (
              <div className="rounded-2xl overflow-hidden aspect-video min-h-[280px] bg-gradient-to-br from-[#1B365D]/10 via-white/60 to-[#E87722]/10 backdrop-blur-sm border border-gray-200/60 shadow-xl" />
            );
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center py-20 first:pt-24 last:pb-24">
                {textFirst ? textBlock : imagePlaceholder}
                {textFirst ? imagePlaceholder : textBlock}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Methodology - 2-column grid: text + network placeholder */}
      <section className="py-24 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start text-start">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6 leading-tight">
                {t('index.philosophy.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('index.philosophy.text')}
              </p>
            </div>
            {/* Network abstract placeholder - mesh gradient */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-h-[400px] bg-[linear-gradient(135deg,hsl(218_48%_18%/0.08)_0%,transparent_50%,hsl(27_79%_53%/0.06)_100%)] border border-gray-200/60">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white/40_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-[#1B365D]/20" />
                <div className="absolute w-24 h-24 rounded-full border-2 border-[#E87722]/20 top-1/4 start-1/4" />
                <div className="absolute w-20 h-20 rounded-full border-2 border-[#1B365D]/15 bottom-1/3 end-1/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Collab Agent - 2-column: content + Chat UI mockup */}
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
            {/* Chat UI mockup placeholder */}
            <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6 min-h-[320px] flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="rounded-lg rounded-bl-none bg-white/20 py-3 px-4 max-w-[85%]" />
                <div className="rounded-lg rounded-br-none bg-white/30 py-3 px-4 max-w-[70%] ms-auto" />
                <div className="rounded-lg rounded-bl-none bg-white/20 py-3 px-4 max-w-[80%]" />
                <div className="rounded-lg rounded-br-none bg-white/25 py-2 px-4 max-w-[60%] ms-auto" />
              </div>
              <div className="rounded-lg bg-white/15 border border-white/20 py-3 px-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust (client logos - container modernized, logos unchanged) */}
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
    </div>
  );
};

export default Index;
