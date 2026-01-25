import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// --- Custom Network Graphics Components ---
const RetentionGraphic = () => (
  <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 70 L70 50 M100 70 L70 90 M100 70 L130 50 M70 50 L70 90" stroke="#E2E8F0" strokeWidth="2" />
    <path d="M160 70 L130 50" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="100" cy="70" r="8" fill="#E87722" className="animate-pulse" />
    <circle cx="70" cy="50" r="6" fill="#CBD5E1" />
    <circle cx="70" cy="90" r="6" fill="#CBD5E1" />
    <circle cx="130" cy="50" r="6" fill="#CBD5E1" />
    <circle cx="170" cy="70" r="8" fill="#8B5CF6" />
    <text x="170" y="95" textAnchor="middle" fontSize="10" fill="#8B5CF6" className="font-sans font-bold">Risk</text>
  </svg>
);

const InnovationGraphic = () => (
  <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 50 L60 80 M40 50 L20 80 M20 80 L60 80" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="40" cy="50" r="6" fill="#CBD5E1" />
    <circle cx="20" cy="80" r="6" fill="#CBD5E1" />
    <circle cx="60" cy="80" r="6" fill="#CBD5E1" />
    <path d="M160 50 L140 80 M160 50 L180 80 M180 80 L140 80" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="160" cy="50" r="6" fill="#CBD5E1" />
    <circle cx="140" cy="80" r="6" fill="#CBD5E1" />
    <circle cx="180" cy="80" r="6" fill="#CBD5E1" />
    <path d="M60 80 L140 80" stroke="#E87722" strokeWidth="3" />
    <circle cx="100" cy="80" r="8" fill="white" stroke="#E87722" strokeWidth="3" />
  </svg>
);

const LeadershipGraphic = () => (
  <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 70 L60 40 M100 70 L140 40 M100 70 L60 100 M100 70 L140 100 M100 70 L50 70 M100 70 L150 70" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="60" cy="40" r="5" fill="#CBD5E1" />
    <circle cx="140" cy="40" r="5" fill="#CBD5E1" />
    <circle cx="60" cy="100" r="5" fill="#CBD5E1" />
    <circle cx="140" cy="100" r="5" fill="#CBD5E1" />
    <circle cx="50" cy="70" r="5" fill="#CBD5E1" />
    <circle cx="150" cy="70" r="5" fill="#CBD5E1" />
    <circle cx="100" cy="70" r="12" fill="#1B365D" />
    <path d="M96 70 L100 74 L104 66" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Index = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'he';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // רשימת הלקוחות המעודכנת לפי צילום המסך שלך
  const clients = [
    { name: "Clalit", logo: "clalit.png" },
    { name: "Tambour", logo: "tambour.png" },
    { name: "Ormat", logo: "ormat.png" },
    { name: "Elbit Systems", logo: "elbit.png" },
    { name: "Kornit Digital", logo: "kornit.png" },
    { name: "The Joint", logo: "the-joint.svg" }, // תוקן ל-svg לפי התמונה
    { name: "Bank Hapoalim", logo: "poalim.png" },
    { name: "IDF", logo: "idf.jfif" }, // תוקן ל-jfif לפי התמונה
    { name: "Applied Materials", logo: "applied-materials.png" },
    { name: "Dexcel Pharma", logo: "dexcel.png" },
    { name: "Lahav Executive Education", logo: "lahav.png" },
    { name: "Lycored", logo: "lycored.png" },
  ];

  const benefits = [
    {
      graphic: InnovationGraphic,
      title: isRTL ? "מהירות וחדשנות" : "Innovation & Silo Busting",
      desc: isRTL 
        ? "חדשנות קורית בחיבורים. אנחנו מזהים ומחברים בין סיילואים מנותקים."
        : "Innovation happens at the intersection. We visualize structural holes and bridge disconnected silos to speed up ideation.",
      bg: "bg-orange-50/50"
    },
    {
      graphic: RetentionGraphic,
      title: isRTL ? "שימור טאלנטים" : "Retention & Burnout",
      desc: isRTL 
        ? "זהה את העובדים המבודדים לפני שהם עוזבים. נתח את הרשת כדי לראות מי בסיכון."
        : "Spot flight risks before they resign. Visualize isolated nodes (purple) vs. embedded employees to predict attrition.",
      bg: "bg-purple-50/50"
    },
    {
      graphic: LeadershipGraphic,
      title: isRTL ? "מנהיגות מודרנית" : "Network Leadership",
      desc: isRTL 
        ? "מנהלים לומדים להשפיע דרך אמון וחיבורים (Hubs), לא רק דרך סמכות."
        : "Shift from hierarchy to hub. Identify and train your central connectors to influence change and drive strategy.",
      bg: "bg-blue-50/50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Client Logos Section */}
      <div className="py-12 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
                {isRTL ? 'ארגונים מובילים שסומכים עלינו' : 'Trusted by Forward-Thinking Organizations'}
            </p>
            
            {/* Logo Grid */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4 max-w-6xl mx-auto">
                {clients.map((client, i) => (
                  <div key={i} className="w-24 md:w-32 h-16 flex items-center justify-center group">
                    <img 
                      src={`/logos/${client.logo}`}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter"
                    />
                  </div>
                ))}
            </div>
        </div>
      </div>

      {/* 3. Value Proposition with Network Graphics */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6 leading-tight">
              {isRTL ? 'הפוך את התרשים הארגוני לרשת חיה' : 'Turn Your Org Chart Into a Living Network'}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {isRTL 
                ? 'עבור מעבר להיררכיה סטטית. אנו משתמשים בניתוח רשתות (ONA) כדי לחשוף את הדינמיקה האמיתית של הארגון.'
                : 'Move beyond static hierarchies. We use Organizational Network Analysis (ONA) to reveal how work really gets done.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className={`group p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.bg}`}
              >
                <div className="h-40 mb-6 flex items-center justify-center">
                   <div className="w-full h-full bg-white rounded-2xl shadow-inner p-4 border border-gray-100/50">
                     <item.graphic />
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-12">How We Do It</h2>
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