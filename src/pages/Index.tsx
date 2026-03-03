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
      path: '/solutions',
      bg: 'bg-orange-50/50',
    },
    {
      titleKey: 'index.pillar2.title' as const,
      textKey: 'index.pillar2.text' as const,
      buttonKey: 'index.pillar2.button' as const,
      path: '/academy',
      bg: 'bg-blue-50/50',
    },
    {
      titleKey: 'index.pillar3.title' as const,
      textKey: 'index.pillar3.text' as const,
      buttonKey: 'index.pillar3.button' as const,
      path: '/platform',
      bg: 'bg-purple-50/50',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section (animation and layout unchanged; text updated in HeroSection) */}
      <HeroSection />

      {/* 2. The 3 Pillars (Solutions) */}
      <section id="solutions" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${pillar.bg}`}
              >
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t(pillar.textKey)}
                </p>
                <Button
                  onClick={() => navigate(pillar.path)}
                  className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white w-full sm:w-auto"
                >
                  {t(pillar.buttonKey)}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6 leading-tight">
              {t('index.philosophy.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('index.philosophy.text')}
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Future (AI Collab Agent) */}
      <section className="py-24 bg-[#1B365D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E87722] rounded-full blur-[150px] opacity-15" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {t('index.future.title')}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            {t('index.future.text')}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg"
          >
            {t('index.future.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </section>

      {/* 5. Trust (existing client logos - unchanged) */}
      <div className="py-12 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            {t('hero.trustedBySubtitle')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4 max-w-6xl mx-auto">
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
