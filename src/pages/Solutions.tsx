import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  ShieldAlert, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  RefreshCcw 
} from "lucide-react";

const Solutions = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const solutions = [
    {
      id: "silos",
      icon: Users,
      title: isRTL ? "שבירת סיילואים" : "Silo Busting & Collaboration",
      description: isRTL 
        ? "ארגונים מפסידים מיליונים על חוסר תקשורת. המערכת מזהה נתקים בזמן אמת ומציעה למנהלים למי להתחבר כדי להזרים את המידע מחדש."
        : "Organizations lose millions on disconnected departments. We identify communication breaks in real-time and nudge leaders to bridge the gaps instantly.",
      benefits: [
        "Increase cross-functional innovation",
        "Reduce duplication of work",
        "Speed up decision making"
      ]
    },
    {
      id: "change",
      icon: RefreshCcw,
      title: isRTL ? "ניהול שינוי (Change Management)" : "Change Management",
      description: isRTL 
        ? "בין אם זה מיזוג (M&A), צמיחה מהירה או ארגון מחדש - שינויים נכשלים בגלל אנשים. אנחנו ממפים את 'סוכני השינוי' שיעזרו להטמיע את המציאות החדשה."
        : "Whether it's M&A, hyper-growth, or restructuring—change fails due to people dynamics. We map the network to identify key 'Change Agents' who can accelerate adoption and integration.",
      benefits: [
        "Accelerate M&A integration",
        "Manage rapid growth pains",
        "Identify cultural blockers"
      ]
    },
    {
      id: "retention",
      icon: ShieldAlert,
      title: isRTL ? "שימור טאלנטים" : "Talent Retention & Burnout",
      description: isRTL 
        ? "אנשים עוזבים בוסים, או שהם שחוקים. המערכת מזהה עומס תקשורתי (Overload) ובידוד חברתי לפני שמכתב ההתפטרות מגיע."
        : "Spot flight risks before they resign. Our AI analyzes communication patterns to detect burnout (over-collaboration) and isolation (disengagement) early.",
      benefits: [
        "Predict burnout risk",
        "Identify isolated high-performers",
        "Improve manager-employee connection"
      ]
    },
    {
      id: "leadership",
      icon: TrendingUp,
      title: isRTL ? "פיתוח מנהיגות רשתית" : "Network Leadership Development",
      description: isRTL 
        ? "היררכיה זה פאסה. אנחנו מודדים ומלמדים מנהלים איך להפוך ל-'Hubs' של אמון והשפעה, בעזרת דאטה וסימולציות משחקיות."
        : "Hierarchy is dead. We measure and train managers on how to become 'Hubs' of trust and influence, using data-driven insights and gamified simulations.",
      benefits: [
        "Move from command to connect",
        "Visualize leadership impact",
        "Data-driven coaching plans"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <Building2 className="w-[800px] h-[800px] absolute -top-40 -left-40 text-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-[#E87722] rounded-full text-sm font-bold mb-6 animate-fade-in">
            SOLUTIONS FOR EVERY CHALLENGE
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'פתרונות לארגונים בצמיחה ושינוי' : 'Solving the Complexity of Modern Work'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'אנחנו הופכים את האתגרים האנושיים המורכבים ביותר - סיילואים, שחיקה ושינויים ארגוניים - לתהליך מבוסס דאטה.'
              : 'From breaking down silos to navigating complex organizational changes—we turn your biggest human challenges into manageable data insights.'
            }
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#1B365D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E87722]" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate('/platform')}
                  variant="outline" 
                  className="w-full border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors"
                >
                  See How It Works
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-6">
                Don't let invisible problems slow you down
            </h2>
            <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
                Get a Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;