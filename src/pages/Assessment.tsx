import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Download } from "lucide-react";

const expImages = ['/Experience_Carousel/exp-1.jpg', '/Experience_Carousel/exp-2.png'];
const reportImages = ['/Reports_Carousel/Reports-1.png', '/Reports_Carousel/report-2.png'];

const expAutoplay = Autoplay({ delay: 4500 });
const reportAutoplay = Autoplay({ delay: 4500 });

const Assessment = () => {
  const { t, isRTL, language } = useLanguage();
  const navigate = useNavigate();

  const skillCategories = language === 'he' ? [
    { title: 'ארגוני', skills: ['יעילות', 'ניהול זמן', 'תכנון', 'חשיבה שיטתית', 'דיוק'] },
    { title: 'משימתי', skills: ['ניהול משימות', 'מהירות חשיבה', 'תושייה', 'התמדה'] },
    { title: 'אנליטי', skills: ['חישוב', 'זיהוי תבניות', 'ניתוח והסקת מסקנות'] },
    { title: 'פתרון בעיות', skills: ['פתרון בעיות מורכבות', 'חשיבה לוגית', 'התמודדות עם לחץ זמן'] },
    { title: 'אסטרטגי', skills: ['ראייה מערכתית', 'בניית תוכנית', 'זיהוי הזדמנויות', 'ניהול משאבים'] },
    { title: 'עצמאות', skills: ['התמודדות עם שינויים', 'גמישות מחשבתית', 'נקיטת יוזמה', 'יכולת למידה'] },
  ] : [
    { title: 'Organizational', skills: ['Efficiency', 'Time Management', 'Planning', 'Systematic Thinking', 'Accuracy'] },
    { title: 'Operational', skills: ['Task Management', 'Quick Thinking', 'Resourcefulness', 'Persistence'] },
    { title: 'Analytical', skills: ['Calculation', 'Pattern Recognition', 'Analysis and Deduction'] },
    { title: 'Problem Solving', skills: ['Complex Problem Solving', 'Logical Thinking', 'Dealing with Time Pressure'] },
    { title: 'Strategic', skills: ['Systemic Vision', 'Developing a Plan', 'Identify Opportunities', 'Resource Management'] },
    { title: 'Adaptability', skills: ['Coping with Changes', 'Flexible Thinking', 'Taking Initiative', 'Learning Aptitude'] },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 pt-16 lg:pt-20 pb-24 lg:pb-32 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 min-w-0">
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-start max-w-2xl min-w-0 w-full">
              <div className="flex flex-col gap-2 mb-6">
                <span className="inline-block px-4 py-2 text-[#E87722] border border-[#E87722]/60 rounded-full text-sm font-semibold uppercase tracking-wider w-fit">
                  {t('assessment.badge')}
                </span>
                <span className="text-slate-500 font-medium text-sm">{t('assessment.poweredBy')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6 text-start break-words">
                {t('assessment.title')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl text-start break-words">
                {t('assessment.subtitle')}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 min-w-0 w-full">
              <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center bg-slate-100">
                <img src="/assessment-hero.png" className="w-full h-auto max-h-[480px] object-contain object-center" alt="Game-based assessment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 23 SKILLS GRID */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('assessment.skillsTitle')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">{t('assessment.skillsDesc')}</p>
            <a
              href="/Accelium_Game_Based_Assessment_Status_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border-2 border-orange-500 text-orange-500 px-6 py-3 font-semibold hover:bg-orange-50 transition-colors text-start ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Download className={`w-5 h-5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              {t('assessment.downloadResearch')}
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-12 w-full max-w-7xl mx-auto">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="bg-[#1A2E44] text-white text-center py-4 px-2 font-bold text-lg border-b-4 border-orange-500">
                  {category.title}
                </div>
                <div className="flex flex-col gap-3 p-4 bg-slate-50 h-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white border border-slate-200 text-slate-700 text-center py-3 px-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE EXPERIENCE CAROUSEL */}
      <section className="bg-[#F9F8F4] py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-1 md:order-none">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Carousel
                  key={isRTL ? 'exp-rtl' : 'exp-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[expAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full h-full"
                >
                  <CarouselContent className="-ml-0 h-full">
                    {expImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0 h-full">
                        <img src={img} alt="" className="w-full h-full object-cover rounded-3xl" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
            <div className="order-2 md:order-none flex flex-col items-start text-start">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-start">{t('assessment.experienceTitle')}</h2>
              <h3 className="text-xl font-semibold text-[#E87722] mb-4 text-start">{t('assessment.experienceSubtitle')}</h3>
              <p className="text-lg text-slate-600 leading-relaxed text-start">
                {t('assessment.experienceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REPORTS CAROUSEL */}
      <section className="bg-[#1A2E44] text-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 flex flex-col items-start text-start">
              <h2 className="text-3xl font-bold mb-4 text-start">{t('assessment.reportsTitle')}</h2>
              <h3 className="text-xl font-semibold text-[#E87722] mb-4 text-start">{t('assessment.reportsSubtitle')}</h3>
              <p className="text-lg text-slate-300 leading-relaxed text-start mb-6">
                {t('assessment.reportsDesc')}
              </p>
              <a
                href={language === 'he' ? '/Accelium_Hebrew_Report.pdf' : '/Accelium_Sample_Report.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border-2 border-orange-500 text-orange-400 px-6 py-3 font-semibold hover:bg-orange-500/10 transition-colors text-start ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Download className={`w-5 h-5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                {t('assessment.downloadReport')}
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Carousel
                  key={isRTL ? 'report-rtl' : 'report-ltr'}
                  opts={{ loop: true, direction: isRTL ? 'rtl' : 'ltr' }}
                  plugins={[reportAutoplay]}
                  setApi={(api) => { api?.plugins().autoplay?.play(); }}
                  className="w-full h-full"
                >
                  <CarouselContent className="-ml-0 h-full">
                    {reportImages.map((img, i) => (
                      <CarouselItem key={i} className="pl-0 h-full">
                        <img src={img} alt="" className="w-full h-full object-cover rounded-3xl" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('assessment.ctaTitle')}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {t('assessment.ctaDesc')}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-white text-orange-500 hover:bg-slate-100 px-10 py-6 text-lg rounded-lg font-semibold"
          >
            {t('assessment.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
