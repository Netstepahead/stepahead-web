import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const pillars = [
    { titleKey: 'about.drive1Title' as const, descKey: 'about.drive1Desc' as const },
    { titleKey: 'about.drive2Title' as const, descKey: 'about.drive2Desc' as const },
    { titleKey: 'about.drive3Title' as const, descKey: 'about.drive3Desc' as const },
  ];

  const team = [
    { id: 'nadav' as const, image: '/nadav.png', linkedin: 'https://www.linkedin.com/in/nadav-agozi/' },
    { id: 'sharon' as const, image: '/sharon.png', linkedin: 'https://www.linkedin.com/in/sharon-rendlich-1752068/' },
  ];

  return (
    <div className="w-full bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. Manifesto Hero */}
      <section className="pt-32 pb-16 lg:pt-40 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 bg-[#E87722] text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
            {t('about.mission')}
          </span>
          <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1B365D] mb-6 leading-tight text-balance">
            {t('about.orgChartDead')}
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
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <span className="text-6xl md:text-7xl font-light text-orange-500 opacity-80 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{t(pillar.titleKey)}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{t(pillar.descKey)}</p>
                </div>
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
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.id}
                className="w-full max-w-sm rounded-3xl overflow-hidden bg-[#1A2E44] text-white shadow-xl flex flex-col"
              >
                <img
                  src={member.image}
                  alt={t(`team.${member.id}.name`)}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{t(`team.${member.id}.name`)}</h3>
                  <p className="text-[#E87722] font-medium">{t(`team.${member.id}.title`)}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 self-center text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">{t(`team.${member.id}.bio`)}</p>
                </div>
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
            <ArrowRight className={`w-5 h-5 ms-2 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;
