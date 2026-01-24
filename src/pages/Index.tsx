import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users, BarChart3, Bot, GraduationCap } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const { language } = useLanguage();
  
  // הופך את כיוון הדף בהתאם לשפה
  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const isRTL = language === 'he';

  return (
    <div className="w-full overflow-x-hidden bg-white">
      
      {/* 1. Hero Section - נשאר כמו שהיה */}
      <HeroSection />

      {/* 2. Trusted By - רצועת לוגואים אלגנטית */}
      <section className="py-10 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            {isRTL ? 'ארגונים מובילים שסומכים עלינו' : 'Trusted by Forward-Thinking Organizations'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale transition-all hover:grayscale-0">
             {/* לוגואים גנריים לדוגמה - תחליף בלוגואים אמיתיים בעתיד */}
             <div className="text-2xl font-bold font-serif text-[#1B365D]">Acme Corp</div>
             <div className="text-2xl font-bold font-serif text-[#1B365D]">GlobalTech</div>
             <div className="text-2xl font-bold font-serif text-[#1B365D]">Nexus</div>
             <div className="text-2xl font-bold font-serif text-[#1B365D]">Stark Ind</div>
             <div className="text-2xl font-bold font-serif text-[#1B365D]">Wayne Ent</div>
          </div>
        </div>
      </section>

      {/* 3. Value Proposition - למה StepAhead? */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-4">
              {isRTL ? 'הפוך את הארגון לרשת חיה' : 'Turn Your Org Chart Into a Living Network'}
            </h2>
            <p className="text-xl text-gray-500 font-light">
              {isRTL 
                ? 'במקום היררכיה נוקשה, אנחנו עוזרים לך לבנות ארגון גמיש שמבוסס על כישורים וקשרים אמיתיים.'
                : 'Move beyond static hierarchies. We help you build an agile organization driven by skills and real human connections.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: isRTL ? "מהירות וחדשנות" : "Speed & Innovation",
                desc: isRTL ? "רעיונות זזים מהר יותר כשהם לא נתקעים בסיילואים." : "Ideas flow faster when they don't get stuck in vertical silos."
              },
              {
                icon: Shield,
                title: isRTL ? "שימור טאלנטים" : "Talent Retention",
                desc: isRTL ? "עובדים נשארים כשהם מרגישים מחוברים ושייכים." : "Employees stay longer when they feel connected and embedded in the network."
              },
              {
                icon: Users,
                title: isRTL ? "מנהיגות מודרנית" : "Modern Leadership",
                desc: isRTL ? "מנהלים לומדים להשפיע דרך אמון, לא דרך סמכות." : "Managers learn to influence through trust and connection, not just authority."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#E87722]/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#E87722]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Platform Teaser - הצצה למוצרים */}
      <section className="py-24 bg-[#1B365D] text-white relative overflow-hidden">
        {/* אלמנטים דקורטיביים ברקע */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#E87722] font-bold tracking-wider uppercase text-sm mb-2 block">
                {isRTL ? 'הפלטפורמה' : 'The Platform'}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                {isRTL ? 'טכנולוגיה בשירות האנשים' : 'Technology serving People'}
              </h2>
              <p className="text-blue-200 text-lg">
                {isRTL 
                  ? 'שילוב ייחודי של דאטה, AI והכשרה אנושית.'
                  : 'A unique blend of Network Data, AI Nudges, and Leadership Training.'
                }
              </p>
            </div>
            <Link to="/platform">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 bg-transparent">
                {isRTL ? 'לכל המוצרים' : 'Explore All Products'}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* כרטיס 1: AI */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Bot className="w-10 h-10 text-[#E87722] mb-6" />
              <h3 className="text-2xl font-bold mb-2">Collab Agent AI</h3>
              <p className="text-gray-300 mb-6">Microsoft Teams integrated agent providing real-time connectivity nudges.</p>
              <Link to="/platform#agent" className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* כרטיס 2: ONA */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <BarChart3 className="w-10 h-10 text-[#E87722] mb-6" />
              <h3 className="text-2xl font-bold mb-2">ONA Mapping</h3>
              <p className="text-gray-300 mb-6">X-Ray vision for your organization. Detect silos and hidden talent instantly.</p>
              <Link to="/platform#ona" className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* כרטיס 3: Academy */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <GraduationCap className="w-10 h-10 text-[#E87722] mb-6" />
              <h3 className="text-2xl font-bold mb-2">Leadership Lab</h3>
              <p className="text-gray-300 mb-6">Training managers in the 6 core capabilities of network leadership.</p>
              <Link to="/platform#program" className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section - הנעה לפעולה בסוף העמוד */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-6">
            {isRTL ? 'מוכנים לחבר את הארגון?' : 'Ready to Connect Your Organization?'}
          </h2>
          <p className="text-gray-500 text-xl mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'בואו נראה איך המפה הארגונית שלכם נראית באמת.'
              : 'See what your network really looks like. Start with a discovery call.'
            }
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#E87722] hover:bg-orange-600 text-white px-8 h-12 text-lg shadow-lg">
              {isRTL ? 'דברו איתנו' : 'Book a Demo'}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;