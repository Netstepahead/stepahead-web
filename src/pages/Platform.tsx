import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      // נתיב מתוקן ללא סלאש בהתחלה
      image: "product-ona.png" 
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
      // התמונה החדשה ששלחת
      image: "Network_Gardener.png"
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
      // נתיב מתוקן ללא סלאש בהתחלה (התיקון שלך)
      image: "Collab.png"
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
                  
                  {/* Image Container */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-auto object-cover"
                    />
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