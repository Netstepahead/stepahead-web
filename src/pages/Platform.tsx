import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, BarChart3, Users } from "lucide-react";

const Platform = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#1B365D] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E87722] rounded-full blur-[150px] opacity-15 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px] opacity-10" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 text-sm font-medium text-blue-100">
            <Sparkles className="w-4 h-4 text-[#E87722]" />
            {isRTL ? "מערכת ההפעלה לארגון המחובר" : "The OS for the Networked Organization"}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            {isRTL ? "הפלטפורמה שלנו" : "The Platform"}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            {isRTL 
              ? "שילוב עוצמתי של דאטה, פסיכולוגיה ובינה מלאכותית שהופך היררכיה סטטית לרשת אנושית חכמה."
              : "A powerful fusion of data, psychology, and AI that transforms static hierarchies into intelligent human networks."}
          </p>
        </div>
      </section>

      {/* 2. FEATURE 1: ONA ENGINE (White Background) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Side - Left */}
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-transparent rounded-3xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="bg-gray-100 h-8 w-full flex items-center px-4 gap-2 border-b border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <img 
                  src="product-ona.png" 
                  alt="ONA Engine Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Side - Right */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-[#1B365D]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#E87722] font-bold tracking-wider uppercase text-sm mb-2">
                    {isRTL ? "מנוע ה-ONA" : "The ONA Engine"}
                </h3>
                <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-4">
                    {isRTL ? "לראות את הבלתי נראה" : "Visualize the Invisible"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {isRTL 
                    ? "דאטה פסיבי: אנחנו ממפים את המבנה והזרימה האמיתיים של הארגון. המערכת מזהה צווארי בקבוק, עובדים מבודדים ומוקדי השפעה נסתרים שלא מופיעים בתרשים הארגוני."
                    : "Passive Data: We map the actual structure and flow of your organization. Our engine identifies bottlenecks, isolated employees, and hidden influencers that traditional org charts miss."}
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  isRTL ? "מיפוי זרימת תקשורת" : "Visualize communication flows",
                  isRTL ? "זיהוי משפיענים מרכזיים" : "Identify key influencers",
                  isRTL ? "איתור סיילואים וניתוקים" : "Detect silos and isolation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1B365D] font-medium">
                    <div className="p-1 rounded-full bg-green-100 text-green-600">
                        <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURE 2: NETWORK PROFILING (Dark Blue Background - The "Break") */}
      <section className="py-24 bg-[#1B365D] text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            
            {/* Image Side - Right */}
            <div className="w-full md:w-1/2 relative">
                {/* Decorative glowing blob behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E87722] rounded-full blur-[100px] opacity-20"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform -rotate-1 hover:rotate-0 transition duration-500 bg-white">
                    <img 
                    src="nbs.png" 
                    alt="Network Profiling Report" 
                    className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Text Side - Left */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#E87722] backdrop-blur-sm">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#E87722] font-bold tracking-wider uppercase text-sm mb-2">
                    {isRTL ? "פרופיל רשתי" : "Network Profiling"}
                </h3>
                <h2 className="text-4xl font-serif font-bold text-white mb-4">
                    {isRTL ? "מעבר למשחוק: פרסונות אמיתיות" : "Deep Behavioral Insight"}
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                    {isRTL 
                    ? "דאטה אקטיבי: שאלון מחקרי שנועד למפות את סגנון הרישות (Network Persona) של כל עובד. גלה את החוזקות הטבעיות והאזורים לצמיחה אישית."
                    : "Active Data: A research-backed questionnaire designed to uncover each employee's unique Network Persona. Identify natural strengths and personalized growth areas."}
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  isRTL ? "גלה את הפרסונה הרשתית שלך" : "Discover your Network Persona",
                  isRTL ? "מתודולוגיה מבוססת מחקר" : "Research-backed methodology",
                  isRTL ? "תובנות אישיות לצמיחה" : "Personalized growth insights"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="p-1 rounded-full bg-[#E87722] text-white">
                        <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURE 3: COLLAB AGENT (Light Orange Background) */}
      <section className="py-24 bg-orange-50/50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Side - Left */}
            <div className="w-full md:w-1/2">
               <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transform hover:-translate-y-2 transition duration-500">
                  <img 
                    src="Collab.png" 
                    alt="AI Collab Agent" 
                    className="w-full h-auto object-cover"
                  />
               </div>
            </div>

            {/* Text Side - Right */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E87722] shadow-sm border border-orange-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#E87722] font-bold tracking-wider uppercase text-sm mb-2">
                    {isRTL ? "סוכן ה-AI" : "The Collab Agent"}
                </h3>
                <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-4">
                    {isRTL ? "דחיפות בזמן אמת" : "Actionable Nudges"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {isRTL 
                    ? "התערבות: בינה מלאכותית שנותנת 'דחיפות' (Nudges) בזמן אמת. הסוכן מציע לאנשים עם מי כדאי להם לדבר כדי לשפר את הרשת."
                    : "Intervention: Our AI provides real-time 'nudges'. The agent suggests who employees should connect with to bridge gaps and improve overall network health."}
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  isRTL ? "הצעות לחיבור מבוססות AI" : "AI-driven connection suggestions",
                  isRTL ? "אינטגרציה חלקה ל-Teams/Slack" : "Integration with Slack/Teams",
                  isRTL ? "תובנות יומיות לפעולה" : "Actionable daily insights"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1B365D] font-medium">
                    <div className="p-1 rounded-full bg-blue-100 text-[#1B365D]">
                        <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button className="bg-[#1B365D] text-white px-8 py-6 rounded-xl hover:bg-[#2a4a7f] shadow-lg hover:shadow-xl transition-all">
                  {isRTL ? "ראה איך זה עובד" : "See How It Works"} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
            {isRTL ? "מוכנים להפוך את הארגון לרשתי?" : "Ready to Transform Your Organization?"}
          </h2>
          <p className="text-xl text-gray-500 mb-10">
             {isRTL ? "הצטרף לארגונים המובילים שכבר משתמשים ב-StepAhead" : "Join the forward-thinking companies already using StepAhead."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#E87722] text-white px-10 py-7 text-lg rounded-full hover:bg-[#d66a1a] shadow-orange-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Book a Demo
            </Button>
            <Button variant="outline" className="px-10 py-7 text-lg rounded-full border-2 border-[#1B365D] text-[#1B365D] hover:bg-blue-50">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Platform;