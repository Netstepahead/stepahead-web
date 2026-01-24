import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, ShieldCheck, Lightbulb, RefreshCw, Briefcase, ChevronRight } from 'lucide-react';

const SolutionsSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  // אותו תוכן כמו קודם, רק העיצוב משתנה...
  const content = {
    // ... העתק את התוכן מהקובץ הקודם לפה ...
    en: {
        title: "Solutions by Need",
        subtitle: "Address your core organizational challenges with network data.",
        solutions: [
          { 
            title: "Talent Retention", 
            challenge: "Prevent burnout & attrition.",
            solution: "Identify isolated talents early.",
            icon: ShieldCheck,
            color: "from-orange-500/20 to-pink-500/20"
          },
          { 
            title: "Driving Innovation", 
            challenge: "Break silos, spark ideas.",
            solution: "Connect disparate groups creatively.",
            icon: Lightbulb,
            color: "from-blue-500/20 to-cyan-500/20" 
          },
          { 
            title: "Leadership Dev", 
            challenge: "Train for the network era.",
            solution: "Build trust & influence skills.",
            icon: Briefcase,
            color: "from-purple-500/20 to-indigo-500/20" 
          },
          { 
            title: "Hyper-Growth", 
            challenge: "Scale without chaos.",
            solution: "Onboard into the right networks.",
            icon: TrendingUp,
            color: "from-emerald-500/20 to-teal-500/20" 
          },
          { 
            title: "Change Mgmt", 
            challenge: "Drive adoption from below.",
            solution: "Leverage key influencers.",
            icon: RefreshCw,
            color: "from-rose-500/20 to-red-500/20" 
          },
        ]
      },
      he: {
        title: "פתרונות לפי צורך",
        subtitle: "מענה לאתגרים ליבה באמצעות תובנות רשתיות.",
        solutions: [
          { 
            title: "שימור טאלנטים", 
            challenge: "מניעת שחיקה ועזיבה.",
            solution: "זיהוי טאלנטים מבודדים מראש.",
            icon: ShieldCheck,
            color: "from-orange-500/20 to-pink-500/20"
          },
          { 
            title: "הנעת חדשנות", 
            challenge: "שבירת סיילואים.",
            solution: "חיבור יצירתי בין קבוצות.",
            icon: Lightbulb,
            color: "from-blue-500/20 to-cyan-500/20"
          },
          { 
            title: "פיתוח מנהיגות", 
            challenge: "הכשרה לעידן הרשתי.",
            solution: "בניית אמון והשפעה.",
            icon: Briefcase,
            color: "from-purple-500/20 to-indigo-500/20"
          },
          { 
            title: "צמיחה מהירה", 
            challenge: "גדילה ללא כאוס.",
            solution: "קליטה לרשתות הנכונות.",
            icon: TrendingUp,
            color: "from-emerald-500/20 to-teal-500/20"
          },
          { 
            title: "ניהול שינוי", 
            challenge: "אימוץ שינוי מלמטה.",
            solution: "שימוש במשפיעני מפתח.",
            icon: RefreshCw,
            color: "from-rose-500/20 to-red-500/20"
          },
        ]
      }
  };

  const t = isRTL ? content.he : content.en;

  return (
    <section id="solutions" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        {/* רקע דינמי כהה */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{t.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.solutions.map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                index === 0 || index === 3 ? 'md:col-span-2' : '' // כרטיסים רחבים
              }`}
            >
              {/* גרדיינט רקע עדין לפי נושא */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors ${isRTL ? 'rotate-180' : ''}`} />
                </div>
                
                <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{item.challenge}</p>
                    <p className="text-gray-200 font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;