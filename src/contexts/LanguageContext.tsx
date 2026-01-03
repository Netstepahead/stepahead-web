import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.process': 'Our Process',
    'nav.skills': 'Network Skills',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.title': 'Consulting as a Subscription',
    'hero.subtitle': 'Pause or cancel anytime.',
    'hero.cta': 'See Plans',
    'hero.cta2': 'Book a Call',
    'hero.trustedBy': 'Trusted by',

    // Myth Section
    'myth.title': 'The Org Chart is a Myth',
    'myth.subtitle': 'The Network is Reality',
    'myth.description': 'Value is no longer created in silos — it flows through invisible networks. We help you see, understand, and optimize these hidden connections.',

    // Process
    'process.title': 'From Hidden Data to Organizational Impact',
    'process.subtitle': 'The 4-Step Process',
    'process.step1.title': 'Identify',
    'process.step1.subtitle': 'Mapping',
    'process.step1.desc': 'Find your "Invisible Heroes" — the most connected and influential people based on actual collaboration data.',
    'process.step2.title': 'Diagnose',
    'process.step2.subtitle': 'Profiling',
    'process.step2.desc': 'Assess specific relational skills: ability to build trust, exert influence, and bridge disparate groups.',
    'process.step3.title': 'Developing',
    'process.step3.subtitle': 'Skills',
    'process.step3.desc': 'Targeted development programs to strengthen network leadership capabilities.',
    'process.step4.title': 'Implementing',
    'process.step4.subtitle': 'AI Agent',
    'process.step4.desc': 'AI-powered coaching and real-time connectivity insights for continuous improvement.',

    // Skills
    'skills.title': 'The Network Mindset',
    'skills.subtitle': 'Essential Skills for the Agile Era',
    'skills.hub.title': 'Network Hub',
    'skills.hub.desc': 'A person at the center of conversations, sought for advice and guidance. Builds high-trust relationships.',
    'skills.bridge.title': 'Strategic Bridge',
    'skills.bridge.desc': 'Connects between units, ranks, and different fields of expertise. Facilitates alignment and balance.',
    'skills.gardener.title': 'Network Gardener',
    'skills.gardener.desc': 'Maintains deep, local, continuous relationships. Strengthens high-quality relationships.',
    'skills.pioneer.title': 'Network Pioneer',
    'skills.pioneer.desc': 'Constantly searches for new connections and domains. Builds high-diversity relationships.',

    // CTA
    'cta.title': 'Ready to Unlock Your Network Potential?',
    'cta.description': 'Discover the hidden patterns of collaboration and leadership within your organization.',
    'cta.button': 'Schedule a Demo',

    // Footer
    'footer.tagline': 'Transforming organizations through network intelligence.',
    'footer.rights': 'All rights reserved.',
  },
  he: {
    // Navigation
    'nav.about': 'אודות',
    'nav.process': 'התהליך שלנו',
    'nav.skills': 'כישורי רשת',
    'nav.contact': 'צור קשר',
    'nav.getStarted': 'התחל עכשיו',

    // Hero
    'hero.title': 'ייעוץ כמנוי',
    'hero.subtitle': 'השהה או בטל בכל עת.',
    'hero.cta': 'צפה בתוכניות',
    'hero.cta2': 'קבע שיחה',
    'hero.trustedBy': 'סומכים עלינו',

    // Myth Section
    'myth.title': 'המבנה הארגוני הוא מיתוס',
    'myth.subtitle': 'הרשת היא המציאות',
    'myth.description': 'ערך כבר לא נוצר בממגורות — הוא זורם דרך רשתות בלתי נראות. אנחנו עוזרים לכם לראות, להבין ולמטב את הקשרים הנסתרים האלה.',

    // Process
    'process.title': 'מנתונים נסתרים להשפעה ארגונית',
    'process.subtitle': 'תהליך 4 השלבים',
    'process.step1.title': 'זיהוי',
    'process.step1.subtitle': 'מיפוי',
    'process.step1.desc': 'מצאו את ה"גיבורים הנסתרים" — האנשים המחוברים והמשפיעים ביותר על בסיס נתוני שיתוף פעולה אמיתיים.',
    'process.step2.title': 'אבחון',
    'process.step2.subtitle': 'פרופילינג',
    'process.step2.desc': 'הערכת כישורים יחסיים ספציפיים: יכולת לבנות אמון, להפעיל השפעה ולגשר בין קבוצות שונות.',
    'process.step3.title': 'פיתוח',
    'process.step3.subtitle': 'כישורים',
    'process.step3.desc': 'תוכניות פיתוח ממוקדות לחיזוק יכולות מנהיגות רשתית.',
    'process.step4.title': 'יישום',
    'process.step4.subtitle': 'סוכן AI',
    'process.step4.desc': 'אימון מונע AI ותובנות קישוריות בזמן אמת לשיפור מתמיד.',

    // Skills
    'skills.title': 'החשיבה הרשתית',
    'skills.subtitle': 'כישורים חיוניים לעידן הגמישות',
    'skills.hub.title': 'מרכז רשת',
    'skills.hub.desc': 'אדם במרכז השיחות, אליו פונים לייעוץ והדרכה. בונה יחסי אמון גבוהים.',
    'skills.bridge.title': 'גשר אסטרטגי',
    'skills.bridge.desc': 'מחבר בין יחידות, דרגים ותחומי מומחיות שונים. מאפשר יישור קו ואיזון.',
    'skills.gardener.title': 'גנן רשת',
    'skills.gardener.desc': 'מקיים קשרים עמוקים, מקומיים ורציפים. מחזק יחסים באיכות גבוהה.',
    'skills.pioneer.title': 'חלוץ רשת',
    'skills.pioneer.desc': 'מחפש כל הזמן קשרים ותחומים חדשים. בונה יחסים בגיוון גבוה.',

    // CTA
    'cta.title': 'מוכנים לממש את הפוטנציאל הרשתי שלכם?',
    'cta.description': 'גלו את הדפוסים הנסתרים של שיתוף פעולה ומנהיגות בארגון שלכם.',
    'cta.button': 'קבע הדגמה',

    // Footer
    'footer.tagline': 'מייצרים שינוי בארגונים באמצעות אינטליגנציה רשתית.',
    'footer.rights': 'כל הזכויות שמורות.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
