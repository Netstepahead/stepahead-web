import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Network, 
  GraduationCap, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Share2,
  LineChart
} from "lucide-react";

const Platform = () => {
  const { language } = useLanguage();
  const { hash } = useLocation();
  const isRTL = language === 'he';

  // גלילה אוטומטית אם הגענו מקישור חיצוני (למשל #agent)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // הופך כיוון לפי שפה
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section - כותרת ראשית */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        {/* אלמנטים ברקע */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'מערכת ההפעלה של הרשת הארגונית' : 'The Operating System for Your Network'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
            {isRTL 
              ? 'שילוב עוצמתי של ניתוח דאטה פסיבי (ONA), סוכן AI אקטיבי, והכשרת מנהלים.'
              : 'A powerful fusion of Passive Data Analysis (ONA), Active AI Nudging, and Human Leadership Training.'
            }
          </p>
        </div>
      </section>

      {/* 2. The Trinity - סקירה מהירה */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32">
            {[
              {
                icon: Network,
                title: "ONA Engine",
                desc: isRTL ? "המפה: מזהה את הקשרים והסיילואים." : "The Map: Visualize hidden silos and talent."
              },
              {
                icon: Bot,
                title: "Collab Agent",
                desc: isRTL ? "הפעולה: דחיפות לחיבור בזמן אמת ב-Teams." : "The Action: Real-time nudges in MS Teams."
              },
              {
                icon: GraduationCap,
                title: "Leadership Lab",
                desc: isRTL ? "האדם: מלמדים מנהלים לעבוד ברשת." : "The Human: Training managers to lead networks."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#E87722]">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#1B365D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: ONA Engine */}
      <section id="ona" className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#E87722] rounded-full text-sm font-bold mb-4">
                STEP 1: DIAGNOSE
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                {isRTL ? 'רנטגן ארגוני (ONA)' : 'Organizational Network Analysis (ONA)'}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {isRTL 
                  ? 'אנחנו לא מסתמכים על סקרים. המנוע שלנו מנתח דאטה פסיבי (מיילים, פגישות, סלאק) כדי לייצר מפה אמיתית של הארגון. גלה מי הם משפיעני המפתח, איפה יש צווארי בקבוק, ומי נמצא בסיכון עזיבה.'
                  : 'Stop guessing based on org charts. Our passive data engine analyzes communication flows (Email, Calendar, Slack) to reveal how work actually gets done. Identify key influencers, bottlenecks, and burnout risks instantly.'
                }
              </p>
              <ul className="space-y-4">
                {[
                  isRTL ? "זיהוי טאלנטים נסתרים" : "Identify Hidden Talent & Influencers",
                  isRTL ? "איתור סיילואים וניתוקים" : "Detect Silos & Communication Breakdowns",
                  isRTL ? "מדידת עומס ושחיקה (Burnout)" : "Measure Collaboration Overload"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1B365D] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#E87722]" /> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
               {/* Placeholder for ONA Image */}
               <Network className="w-32 h-32 text-gray-300 absolute opacity-20" />
               <div className="z-10 text-center">
                 <LineChart className="w-16 h-16 text-[#1B365D] mx-auto mb-4" />
                 <span className="text-gray-500 font-mono text-sm">Passive Data Visualization</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: AI Agent */}
      <section id="agent" className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-[#1B365D] rounded-full text-sm font-bold mb-4">
                STEP 2: ACT
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                {isRTL ? 'סוכן ה-AI ב-Teams' : 'The AI Collab Agent'}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {isRTL 
                  ? 'דאטה זה לא מספיק. הסוכן שלנו יושב בתוך Microsoft Teams ונותן "דחיפות" (Nudges) חכמות למנהלים בזמן אמת. הוא מציע למי להתחבר, מתי לפרגן, ואיך לשבור סיילואים.'
                  : 'Insights without action are useless. Our Agent lives inside Microsoft Teams and provides real-time "Nudges". It helps managers prepare for meetings, suggests new connections, and prompts recognition across silos.'
                }
              </p>
              <ul className="space-y-4">
                {[
                  isRTL ? "אינטגרציה מלאה ל-Microsoft Teams" : "Native Microsoft Teams Integration",
                  isRTL ? "הכנה חכמה לפגישות (Smart Prep)" : "Smart Meeting Prep & Context",
                  isRTL ? "המלצות לחיבורים בין אנשים" : "Proactive Connection Suggestions"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1B365D] font-medium">
                    <Bot className="w-5 h-5 text-[#E87722]" /> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white border border-gray-200 rounded-3xl p-8 shadow-lg aspect-square md:aspect-video flex items-center justify-center">
               <div className="text-center">
                 <div className="w-16 h-16 bg-[#5B5FC7] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Share2 className="w-8 h-8 text-white" />
                 </div>
                 <h4 className="font-bold text-gray-800">Teams Integration</h4>
                 <p className="text-sm text-gray-500 mt-2">"Hey, you haven't spoken to Sarah in a while..."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep Dive: Academy */}
      <section id="program" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#E87722] rounded-full text-sm font-bold mb-4">
                STEP 3: EMPOWER
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                {isRTL ? 'הכשרת מנהיגות רשתית' : 'Leadership Academy'}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {isRTL 
                  ? 'טכנולוגיה לבד לא תשנה תרבות. תוכנית ההכשרה שלנו מלמדת מנהלים את 6 יכולות הליבה של מנהיגות ברשת: אמון, השפעה ללא סמכות, וגישור בין קבוצות.'
                  : 'Tech alone won’t change culture. We train your managers in the 6 Core Capabilities of Network Leadership. Move from "Command & Control" to "Connect & Collaborate".'
                }
              </p>
              <Button variant="outline" className="border-[#1B365D] text-[#1B365D] hover:bg-blue-50">
                {isRTL ? 'הורד סילבוס' : 'Download Syllabus'}
              </Button>
            </div>
            <div className="md:w-1/2 bg-[#1B365D] rounded-3xl p-8 aspect-video flex items-center justify-center text-white">
               <div className="text-center">
                 <GraduationCap className="w-20 h-20 text-[#E87722] mx-auto mb-4" />
                 <h4 className="text-xl font-bold">Network Leader Certification</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Security Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Enterprise-Grade Security</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'אנחנו לוקחים את הפרטיות ברצינות. המערכת עומדת בתקני GDPR, המידע אנונימי, ולעולם לא מציגים תוכן של הודעות – רק את המטא-דאטה של החיבורים.'
              : 'We prioritize privacy. GDPR compliant, fully anonymized data processing, and we never analyze message content—only connection metadata.'
            }
          </p>
          <div className="flex justify-center gap-6 opacity-50 grayscale">
             {/* כאן יבואו לוגואים של תקני אבטחה בעתיד: ISO, SOC2, GDPR */}
             <span className="font-bold text-gray-400">GDPR Compliant</span>
             <span className="font-bold text-gray-400">SOC2 Ready</span>
             <span className="font-bold text-gray-400">ISO 27001</span>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-[#E87722] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'מוכנים לראות איך זה עובד?' : 'Ready to see the platform in action?'}
          </h2>
          <Button className="bg-white text-[#E87722] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg">
            {isRTL ? 'בקש דמו' : 'Book a Demo'} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Platform;