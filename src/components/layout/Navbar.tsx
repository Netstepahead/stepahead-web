import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const isRTL = language === 'he';
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleLanguage = () => setLanguage(language === 'he' ? 'en' : 'he');

  const navLinks = {
    en: [
      { 
        title: "Platform", 
        path: "/platform",
        submenu: [
          { name: "Overview", desc: "How StepAhead works", href: "/platform" },
          { name: "AI Collab Agent", desc: "Closing the gap with AI", href: "/platform#agent" },
          { name: "Network Analysis (ONA)", desc: "X-Ray your organization", href: "/platform#ona" }
        ]
      },
      { 
        title: "Solutions", 
        path: "/solutions",
        submenu: [
          { name: "Talent Retention", desc: "Identify flight risks early", href: "/solutions#retention" },
          { name: "Leadership Dev", desc: "Train for the network era", href: "/solutions#leadership" },
          { name: "Driving Innovation", desc: "Spark creative friction", href: "/solutions#innovation" }
        ]
      },
      { title: "About", path: "/about" }
    ],
    he: [
      { 
        title: "פלטפורמה", 
        path: "/platform",
        submenu: [
          { name: "סקירה כללית", desc: "איך המערכת עובדת", href: "/platform" },
          { name: "סוכן ה-AI", desc: "הטמעה וחיבור בשטח", href: "/platform#agent" },
          { name: "ניתוח רשתות (ONA)", desc: "רנטגן ארגוני", href: "/platform#ona" }
        ]
      },
      { 
        title: "פתרונות", 
        path: "/solutions",
        submenu: [
          { name: "שימור טאלנטים", desc: "זיהוי סיכוני עזיבה", href: "/solutions#retention" },
          { name: "פיתוח מנהיגות", desc: "הכשרה לעידן הרשתי", href: "/solutions#leadership" },
          { name: "חדשנות", desc: "שבירת סיילואים", href: "/solutions#innovation" }
        ]
      },
      { title: "אודות", path: "/about" }
    ]
  };

  const menuItems = isRTL ? navLinks.he : navLinks.en;

  return (
    // שינוי: הסרנו את התנאי של הגלילה. עכשיו זה תמיד לבן עם גבול עדין.
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 z-50">
           <img src="/logo-stepahead.svg" alt="StepAhead" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.title}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                  location.pathname.startsWith(item.path) ? 'text-[#E87722]' : 'text-gray-600 hover:text-[#1B365D]'
                }`}
              >
                {item.title}
                {item.submenu && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
              </Link>

              {item.submenu && activeDropdown === item.title && (
                <div className="absolute top-full -left-4 w-72 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 overflow-hidden">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.name} 
                        to={sub.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-bold text-[#1B365D] mb-0.5">{sub.name}</div>
                        <div className="text-xs text-gray-500">{sub.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-gray-500 hover:text-[#1B365D] transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <Button variant="ghost" className="text-[#1B365D] hover:bg-[#1B365D]/5">Login</Button>
          <Button className="bg-[#1B365D] hover:bg-[#2a4d80] text-white rounded-full px-6">Get Started</Button>
        </div>

        <button className="lg:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 lg:hidden">
            {menuItems.map((item) => (
              <div key={item.title}>
                 <Link 
                   to={item.path} 
                   className="text-2xl font-bold text-[#1B365D]"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   {item.title}
                 </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;