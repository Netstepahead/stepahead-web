import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Network, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const pillars = [
    { icon: Users, titleKey: 'about.drive1Title' as const, descKey: 'about.drive1Desc' as const },
    { icon: Network, titleKey: 'about.drive2Title' as const, descKey: 'about.drive2Desc' as const },
    { icon: Lightbulb, titleKey: 'about.drive3Title' as const, descKey: 'about.drive3Desc' as const },
  ];

  const leadership = [
    { name: "Nadav Agozi", roleKey: 'about.nadavRole' as const, bioKey: 'about.nadavBio' as const, image: "/nadav.png" },
    { name: "Sharon Rendlich", roleKey: 'about.sharonRole' as const, bioKey: 'about.sharonBio' as const, image: "/sharon.png" },
    { name: "Prof. Yuval Kalish", roleKey: 'about.yuvalRole' as const, bioKey: 'about.yuvalBio' as const, image: "/yuval.png" },
  ];

  return (
    <div className="w-full bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. Manifesto Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 bg-[#E87722] text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            {t('about.mission')}
          </span>
          <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1B365D] mb-6 leading-tight text-balance">
            {t('about.orgChartDead')}
            <br />
            <span className="text-[#E87722]">{t('about.longLiveNetwork')}</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>
            <div className="w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img src="/network-story.jpg" alt="Our Story" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Drives Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] text-center mb-12 md:mb-16">
            {t('about.whatDrivesUs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col">
                <pillar.icon className="w-10 h-10 text-slate-900 mb-6" />
                <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t(pillar.titleKey)}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{t(pillar.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet the Leadership */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 md:mb-16">
            {t('about.meetLeadership')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {leadership.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#E87722] font-medium mb-4">{t(member.roleKey)}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{t(member.bioKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-6">
            {t('about.joinRevolution')}
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {t('about.revolutionDesc')}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white px-8 py-6 text-lg rounded-lg shadow-lg"
          >
            {t('about.contactUs')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;
