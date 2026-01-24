import { useLanguage } from '@/contexts/LanguageContext';
import { Network, GitGraph, Zap } from 'lucide-react';

const PhilosophySection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  const content = {
    en: {
      title: "The Organization as a Living System",
      subtitle: "Traditional management manages individuals. Network Leadership manages the spaces in between.",
      cards: [
        {
          icon: <Network className="w-8 h-8 text-[#E87722]" />,
          title: "Connectivity",
          description: "Value isn't created in isolation. It happens when people connect, share, and collaborate across silos."
        },
        {
          icon: <GitGraph className="w-8 h-8 text-[#E87722]" />,
          title: "Diversity of Ties",
          description: "Innovation thrives on weak ties. Connecting different parts of the organization reveals hidden solutions."
        },
        {
          icon: <Zap className="w-8 h-8 text-[#E87722]" />,
          title: "Fluid Skills",
          description: "In a healthy network, skills become visible. Help flows to where it's needed, unlocking potential."
        }
      ]
    },
    he: {
      title: "הארגון כמערכת חיה",
      subtitle: "ניהול מסורתי מתמקד באנשים בודדים. מנהיגות רשתית מנהלת את המרווחים שביניהם.",
      cards: [
        {
          icon: <Network className="w-8 h-8 text-[#E87722]" />,
          title: "קישוריות ומחוברות",
          description: "ערך לא נוצר בבידוד. הוא נוצר כשמחסומים יורדים ואנשים מתחברים, משתפים ויוצרים אמון."
        },
        {
          icon: <GitGraph className="w-8 h-8 text-[#E87722]" />,
          title: "גיוון בקשרים",
          description: "חדשנות צומחת במפגש בין עולמות. חיבור בין מחלקות שונות חושף פתרונות שהיו נסתרים."
        },
        {
          icon: <Zap className="w-8 h-8 text-[#E87722]" />,
          title: "זרימת כישורים",
          description: "ברשת בריאה, הכישורים נהיים גלויים. עזרה הדדית זורמת למקום שבו היא נדרשת, והפוטנציאל משתחרר."
        }
      ]
    }
  };

  const t = isRTL ? content.he : content.en;

  return (
    <section className="w-full py-24 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className={`flex flex-col gap-6 mb-20 ${isRTL ? 'text-right items-start' : 'text-left items-start'}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B365D]">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <div 
              key={index}
              className={`
                group p-8 rounded-2xl bg-[#F4F1ED]/50 border border-[#F4F1ED] hover:border-[#E87722]/30 
                hover:bg-[#F4F1ED] transition-all duration-300
                flex flex-col gap-4
                ${isRTL ? 'text-right items-end' : 'text-left items-start'}
              `}
            >
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all border border-gray-100">
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#1B365D]">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;