import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// --- Custom UI Visualizations ---

// נשמור את ה-SVG הזה עד שיהיה צילום מסך אמיתי לחלק של ה-Skills
const SkillsRadar = () => (
  <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-xl rounded-lg bg-white" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect width="400" height="300" rx="8" fill="white" />
     <rect width="400" height="40" rx="8" fill="#F1F5F9" />
     <circle cx="20" cy="20" r="4" fill="#CBD5E1" />
     <circle cx="35" cy="20" r="4" fill="#CBD5E1" />
     <rect x="140" y="60" width="120" height="10" rx="5" fill="#1B365D" />
     <path d="M200 100 L286 150 L286 250 L200 300 L114 250 L114 150 Z" transform="scale(0.6) translate(130, 20)" fill="#F1F5F9" stroke="#E2E8F0" />
     <path d="M200 120 L270 160 L250 240 L200 280 L130 230 L140 160 Z" transform="scale(0.6) translate(130, 20)" fill="#E87722" fillOpacity="0.2" stroke="#E87722" strokeWidth="3" />
     <circle cx="250" cy="92" r="4" fill="#1B365D" />
     <circle cx="292" cy="116" r="4" fill="#1B365D" />
     <circle cx="280" cy="164" r="4" fill="#1B365D" />
     <circle cx="250" cy="188" r="4" fill="#1B365D" />
     <circle cx="208" cy="158" r="4" fill="#1B365D" />
     <circle cx="214" cy="116" r="4" fill="#1B365D" />
     <rect x="50" y="240" width="10" height="10" rx="2" fill="#E87722" />
     <text x="70" y="248" fontSize="10" fill="#64748B">Networking</text>
     <rect x="50" y="260" width="10" height="10" rx="2" fill="#1B365D" />
     <text x="70" y="268" fontSize="10" fill="#64748B">Leadership</text>
  </svg>
);

const Platform = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const features = [
    {
      id: "ona",
      title: isRTL ? "מנוע ONA" : "The ONA Engine",
      subtitle: isRTL ? "מיפוי הרשת הארגונית" : "Visualize the Invisible",
      desc: isRTL 
        ? "דאטה פסיבי: אנחנו ממפים את המבנה והזרימה האמיתיים של הארגון. המערכת מזהה צווארי בקבוק, עובדים מבודדים ומוקדי השפעה נסתרים."
        : "Passive Data: We map the actual structure and flow of your organization. Our engine identifies bottlenecks, isolated employees, and hidden influencers that traditional org charts miss.",
      bullets: [
        "Visualize communication flows",
        "Identify key influencers",
        "Detect silos and isolation"
      ],
      // שימוש בתמונה האמיתית
      image: "/product-ona.png", 
      component: null
    },
    {
      id: "skills",
      title: isRTL ? "הערכת מיומנויות" : "Skills Assessment",
      subtitle: isRTL ? "מדידה אקטיבית" : "Gamified Diagnostics",
      desc: isRTL 
        ? "דאטה אקטיבי: אבחון מיומנויות רישות (Networking) ומנהיגות באמצעות סימולציות משחקיות. גלה מי הם המנהיגים הטבעיים שלך."
        : "Active Data: We diagnose networking and leadership skills through gamified simulations. Discover who your natural leaders are based on actual behavior, not just surveys.",
      bullets: [
        "Gamified simulation scenarios",
        "Bias-free skill evaluation",
        "Personalized feedback reports"
      ],
      // שימוש ברכיב ה-SVG
      image: null,
      component: SkillsRadar 
    },
    {
      id: "agent",
      title: isRTL ? "סוכן שיתוף הפעולה" : "The Collab Agent",
      subtitle: isRTL ? "התערבות בזמן אמת" : "Real-Time Nudges",
      desc: isRTL 
        ? "התערבות: בינה מלאכותית שנותנת 'דחיפות' (Nudges) בזמן אמת. הסוכן מציע לאנשים עם מי כדאי להם לדבר כדי לשפר את הרשת."
        : "Intervention: Our AI provides real-time 'nudges'. The agent suggests who employees should connect with to bridge gaps and improve overall network health.",
      bullets: [
        "AI-driven connection suggestions",
        "Integration with Slack/Teams",
        "Actionable daily insights"
      ],
      // שימוש בתמונה האמיתית
      image: "/Collab.png",
      component: null
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E87722] rounded-full blur-[120px] opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {isRTL ? "הפלטפורמה שלנו" : "The Platform"}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {isRTL 
              ? "מערכת הפעלה לארגון הרשתי. שילוב של דאטה, פסיכולוגיה ובינה מלאכותית."
              : "An operating system for the networked organization. Combining passive data, behavioral science, and AI."}
          </p>
        </div>
      </section>

      {/* Main Features - Zig Zag Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-32">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Text Side */}
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-50 text-[#1B365D] rounded-full text-sm font-bold tracking-wide">
                  {feature.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D]">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#E87722]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-4 bg-[#1B365D] text-white hover:bg-[#2a4a7f]">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Visual Side */}
              <div className="md:w-1/2 w-full">
                <div className="relative group">
                   {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl transform rotate-3 scale-105 opacity-50 transition-transform group-hover:rotate-2 duration-500" />
                  
                  {/* Image or Component Container */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    {feature.image ? (
                        <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-full h-auto object-cover"
                        />
                    ) : (
                        // If no image, render the component (SVG)
                        feature.component && <feature.component />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-8">
            {isRTL ? "מוכנים לראות את זה בפעולה?" : "Ready to see it in action?"}
          </h2>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#E87722] text-white px-8 py-6 text-lg hover:bg-[#d66a1a]">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;