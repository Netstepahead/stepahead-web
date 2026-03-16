import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CircleCheck, Shield, Target, Brain, Link2 } from "lucide-react";

const Academy = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const modules = [
    { title: t('academy.trustBuilding'), desc: t('academy.trustDesc'), icon: Shield },
    { title: t('academy.influence'), desc: t('academy.influenceDesc'), icon: Target },
    { title: t('academy.networkMindset'), desc: t('academy.mindsetDesc'), icon: Brain },
    { title: t('academy.strategicConnecting'), desc: t('academy.connectingDesc'), icon: Link2 },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 text-[#E87722] border border-[#E87722]/60 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            {t('academy.badge')}
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
            {t('academy.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 text-balance">
            {t('academy.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-10 py-6 text-lg rounded-lg"
            >
              {t('academy.downloadSyllabus')}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
              className="px-10 py-6 text-lg rounded-lg border-2 border-white text-white hover:bg-white/10"
            >
              {t('academy.bookWorkshop')}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. THE METHODOLOGY */}
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
            <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-3xl shadow-2xl overflow-hidden">
              <img src="/workshop.jpg" className="w-full h-full object-cover" alt="Workshop Simulation" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('academy.coreModules')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('academy.developingPillars')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 text-[#E87722]">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
                <p className="text-slate-600 leading-relaxed">{mod.desc}</p>
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
