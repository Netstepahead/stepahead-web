import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from "@/components/HeroSection";
import { 
  Zap, 
  HeartHandshake, // אייקון חדש לשימור עובדים (חיבור/נאמנות)
  Network,        // אייקון חדש למנהיגות (רשת)
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'he';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const benefits = [
    {
      icon: Zap,
      title: isRTL ? "מהירות וחדשנות" : "Speed & Innovation",
      desc: isRTL 
        ? "רעיונות זורמים מהר יותר כשהם לא נתקעים בסיילואים אנכיים."
        : "Ideas flow faster when they don't get stuck in vertical silos.",
      color: "from-orange-50 to-amber-50",
      iconColor: "text-orange-500"
    },
    {
      icon: HeartHandshake, // הוחלף מ-Shield למשהו יותר אנושי
      title: isRTL ? "שימור טאלנטים" : "Talent Retention",
      desc: isRTL 
        ? "עובדים נשארים כשהם מרגישים מחוברים ומשמעותיים בתוך הרשת."
        : "Employees stay longer when they feel connected and embedded in the network.",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Network, // הוחלף מ-Users למשהו שיותר מתאים ל-Network Leadership
      title: isRTL ? "מנהיגות מודרנית" : "Modern Leadership",
      desc: isRTL 
        ? "מנהלים לומדים להשפיע דרך אמון וחיבורים, לא רק דרך סמכות."
        : "Managers learn to influence through trust and connection, not just authority.",
      color: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Client Logos (Placeholder - נדלג כרגע לבקשתך) */}
      <div className="py-10 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Trusted by Forward-Thinking Organizations
            </p>
            {/* כאן נכניס את הלוגוים אחר כך */}
            <div className="flex justify-center gap-8 opacity-40 grayscale">
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
        </div>
      </div>

      {/* 3. Value Proposition (החלק ששיפצנו) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* קישוט רקע עדין */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6 leading-tight">
              {isRTL ? 'הפוך את התרשים הארגוני לרשת חיה' : 'Turn Your Org Chart Into a Living Network'}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {isRTL 
                ? 'עבור מעבר להיררכיה סטטית. אנחנו עוזרים לך לבנות ארגון זריז המונע על ידי מיומנויות וקשרים אנושיים אמיתיים.'
                : 'Move beyond static hierarchies. We help you build an agile organization driven by skills and real human connections.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* מעגל צבעוני ברקע של האייקון */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* פס צבעוני עדין למטה */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Teaser (Grid) - נשאיר כרגע כמו שהיה, נטפל בזה בהמשך אם צריך */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-12">How We Do It</h2>
            {/* כאן יבוא הגריד של הפיצ'רים, כרגע זה פשוט הפניה לפלטפורמה */}
            <Button 
                onClick={() => navigate('/platform')}
                className="bg-[#1B365D] text-white px-8 py-6 text-lg"
            >
                Explore The Platform <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
      </section>

    </div>
  );
};

export default Index;