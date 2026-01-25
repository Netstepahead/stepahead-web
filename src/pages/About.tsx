import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Target, 
  Globe, 
  ArrowRight, 
  Heart,
  Lightbulb,
  Linkedin
} from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const team = [
    {
      name: "Sharon Rendlich",
      role: "Founder & COO",
      // הדגש: המומחיות האנושית, גישור ואמון - הדבק שמחזיק את הרשת
      bio: isRTL 
        ? "מומחית לדינמיקה ארגונית ופתרון קונפליקטים. כבעלים של 'גומא-גבים', המרכז המוביל בישראל לגישור ואימון, שרון מביאה ל-StepAhead את הניסיון האנושי העמוק הדרוש כדי להפוך דאטה יבש לאמון ושיתוף פעולה."
        : "An expert in organizational dynamics and conflict resolution. As the owner of 'Gome-Gevim', Israel's leading mediation center, Sharon ensures our technology serves the people, translating network data into actionable strategies that build trust.",
      image: "/sharon.png",
      linkedin: "https://www.linkedin.com/in/sharon-rendlich-1752068/"
    },
    {
      name: "Prof. Yuval Kalish",
      role: "Academic Advisor",
      // הדגש: המדע והמחקר מאחורי הרשתות
      bio: isRTL
        ? "מוביל עולמי בתחום חקר הרשתות. ראש תחום מנהיגות ורשתות בבית הספר לניהול WHU בגרמניה. מביא את התיקוף המדעי והמתודולוגי לניתוח הרשתות של StepAhead."
        : "A world-renowned authority on Network Theory. Chair of Leadership and Networks at WHU School of Management, Germany. Yuval provides the scientific backbone to our ONA algorithms and methodology.",
      image: "/yuval.png",
      linkedin: "https://www.linkedin.com/in/yuval-kalish/"
    },
    {
      name: "Nadav Agozi",
      role: "CEO",
      // הדגש: הטכנולוגיה, המשחוק ופיתוח המיומנויות
      bio: isRTL
        ? "מומחה לטכנולוגיות למידה והערכת מיומנויות. מרצה לחשיבה אסטרטגית וחלוץ בתחום הלמידה מבוססת-משחק (GBL). ב-StepAhead, נדב מוביל את חזון הארגון מבוסס-המיומנויות וזיהוי הטאלנטים הנסתרים."
        : "A pioneer in game-based assessment and skill development. With a background as a strategic thinking lecturer and EdTech expert, Nadav leads the vision of the 'Skills-Based Organization', focusing on uncovering hidden talent through technology.",
      image: "/nadav.png",
      linkedin: "https://www.linkedin.com/in/nadav-agozi/"
    }
  ];

  const values = [
    {
      icon: Target,
      title: isRTL ? "אינטואיציה מבוססת דאטה" : "Data-Driven Intuition",
      desc: isRTL 
        ? "אנחנו מאמינים בתחושת בטן, אבל סומכים על דאטה. אנחנו הופכים את הבלתי-נראה לנראה."
        : "We believe in gut feeling, but we trust data. We visualize the invisible."
    },
    {
      icon: Users,
      title: isRTL ? "אנשים לפני הכל" : "People First",
      desc: isRTL
        ? "צמתים וקווים זה מעניין, אבל מערכות יחסים אנושיות הן הדבר האמיתי."
        : "Nodes and edges are interesting, but human relationships are what truly matter."
    },
    {
      icon: Lightbulb,
      title: isRTL ? "תובנות לפעולה" : "Actionable Insights",
      desc: isRTL
        ? "אנחנו לא רק ממפים את הבעיה, אנחנו דוחפים לפתרון."
        : "We don't just map the problem; we prompt the solution."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E87722] rounded-full blur-[100px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/20">
            {isRTL ? 'המשימה שלנו' : 'OUR MISSION'}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'ארכיטקטים של הארגון הרשתי' : 'Architects of the Networked Organization'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'אנחנו כאן כדי להפוך מבנים ארגוניים קשיחים לרשתות חיות, נושמות ומסתגלות.'
              : 'We exist to transform static hierarchies into living, breathing, adaptive networks of shared value.'
            }
          </p>
        </div>
      </section>

      {/* 2. The Story / Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
                  {isRTL ? 'התרשים הארגוני מת.' : 'The Org Chart is Dead.'} <br/>
                  <span className="text-[#E87722]">{isRTL ? 'יחי הרשת החדשה.' : 'Long Live the Network.'}</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    {isRTL 
                      ? "סטפאהד הוקמה מתוך חזון לפתח טכנולוגיה חדשנית המבוססת על ניתוח רשתות כדי לאפשר שיתוף פעולה ולחבר בין אנשים."
                      : "StepAhead was founded with the vision of developing innovative technology based on network analysis to enable collaboration and connect people."}
                  </p>
                  <p>
                    {isRTL
                      ? "במשך למעלה ממאה שנה, ארגונים נוהלו כמו מכונות: מלמעלה למטה, בסיילואים ונוקשות. אבל העולם השתנה. העבודה כיום היא מורכבת, שיתופית ומהירה."
                      : "For over a century, organizations were managed like machines: top-down, siloed, and rigid. But the world has changed. Work today is complex, collaborative, and fast-paced."}
                  </p>
                  <p>
                    {isRTL
                      ? "שילבנו את המדע של ניתוח רשתות ארגוניות (ONA) עם כלי מנהיגות פרקטיים כדי לתת למנהלים משקפיים חדשים - כאלה שרואים את הזרימה האמיתית של אמון, מידע וחדשנות."
                      : "We combined the science of Organizational Network Analysis (ONA) with practical leadership tools to give leaders a new pair of glasses—ones that see the actual flow of trust, information, and innovation."}
                  </p>
                </div>
             </div>
             <div className="md:w-1/2 relative">
               <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-orange-50 opacity-50"></div>
                  <Globe className="w-64 h-64 text-[#1B365D] opacity-10 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-dashed border-[#E87722] rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-dashed border-[#1B365D] rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-[#1B365D]">
               {isRTL ? 'מה מניע אותנו' : 'What Drives Us'}
             </h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             {values.map((val, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <val.icon className="w-10 h-10 text-[#E87722] mb-4" />
                 <h3 className="text-xl font-bold text-[#1B365D] mb-3">{val.title}</h3>
                 <p className="text-gray-600">{val.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B365D] mb-16">
            {isRTL ? 'ההנהגה שלנו' : 'Meet the Leadership'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[4/5] bg-gray-100 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bio Reveal on Hover */}
                  <div className="absolute inset-0 bg-[#1B365D]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center cursor-default">
                    <p className="text-white text-base leading-relaxed font-light">{member.bio}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B365D]">{member.name}</h3>
                <p className="text-[#E87722] font-medium mt-1 mb-3">{member.role}</p>
                
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-50 rounded-full text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors"
                  aria-label={`LinkedIn Profile of ${member.name}`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-[#1B365D] text-white text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-12 h-12 text-[#E87722] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'הצטרפו למהפכה' : 'Join the Revolution'}
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            {isRTL 
              ? 'בין אם אתם ארגון שרוצה להתפתח או שותף שרוצה לשתף פעולה, נשמח לשמוע מכם.'
              : "Whether you are an organization looking to evolve or a partner looking to collaborate, we'd love to connect."}
          </p>
          <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
            {isRTL ? 'צרו קשר' : 'Contact Us'} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;