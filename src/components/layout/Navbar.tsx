import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isLightBackground = true;

  const logoSrc = isLightBackground
    ? "/logo-stepahead.svg"
    : "/logo-stepahead-white.png";

  const logoSizeClass = isLightBackground
    ? "h-12 md:h-16"
    : "h-8 md:h-10";

  const textColorClass = isLightBackground ? "text-[#1B365D]" : "text-white";
  const globeColorClass = isLightBackground ? "text-[#1B365D]" : "text-white hover:bg-white/10";

  const buttonClass = isLightBackground
    ? "bg-[#1B365D] hover:bg-[#2a4a7f] text-white"
    : "bg-white text-[#1B365D] hover:bg-gray-100";


  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  const navLinks = [
    { nameKey: 'nav.networkLeadership' as const, path: "/network-leadership" },
    { nameKey: 'nav.onaPlatform' as const, path: "/network-development" },
    { nameKey: 'nav.talentAssessment' as const, path: "/talent-assessment" },
    { nameKey: 'nav.about' as const, path: "/about" },
    { nameKey: 'nav.contact' as const, path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isLightBackground
          ? "bg-white shadow-sm border-b border-slate-200 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Group 1: Logo + Nav links (right in RTL, left in LTR) */}
        <div className="hidden md:flex items-center gap-6 flex-1 min-w-0">
          <Link to="/" className="flex items-center gap-2 z-50 shrink-0">
            <img
              src={logoSrc}
              alt="StepAhead"
              className={`${logoSizeClass} w-auto transition-all duration-300 object-contain`}
            />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.nameKey}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#E87722] shrink-0 ${
                location.pathname === link.path ? "text-[#E87722] font-bold" : textColorClass
              }`}
            >
              {t(link.nameKey)}
            </Link>
          ))}
        </div>

        {/* Group 2: Language selector + CTA (left in RTL, right in LTR) */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button onClick={toggleLanguage} className={`p-2 rounded-full transition-colors ${globeColorClass}`}>
            <Globe className="w-5 h-5" />
          </button>
          <Button className={buttonClass} onClick={() => navigate('/contact')}>
            {t('nav.cta')}
          </Button>
        </div>

        {/* Mobile: Logo always visible */}
        <Link to="/" className="flex md:hidden items-center gap-2 z-50">
          <img
            src={logoSrc}
            alt="StepAhead"
            className={`${logoSizeClass} w-auto transition-all duration-300 object-contain`}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-[#1B365D]" />
          ) : (
            <Menu className={textColorClass} />
          )}
        </button>
      </div>

      {/* Mobile Menu - Slide-in panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`fixed top-0 bottom-0 z-50 w-[min(320px,85vw)] max-h-[100dvh] overflow-y-auto bg-white shadow-2xl md:hidden animate-in duration-300 ${
              isRTL ? 'left-0 slide-in-from-left' : 'right-0 slide-in-from-right'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex flex-col p-6 pt-16 gap-1">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#E87722] bg-[#E87722]/10'
                        : 'text-[#1B365D] hover:bg-[#1B365D]/5 active:bg-[#1B365D]/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-gray-100 my-4" />
              <div className="flex items-center gap-3 px-4">
                <button
                  onClick={toggleLanguage}
                  className="p-2.5 rounded-full bg-gray-100 text-[#1B365D] hover:bg-gray-200 transition-colors"
                  aria-label="Toggle language"
                >
                  <Globe className="w-5 h-5" />
                </button>
                <Button
                  className="flex-1 bg-[#1B365D] hover:bg-[#2a4a7f] text-white"
                  onClick={() => { setIsOpen(false); navigate('/contact'); }}
                >
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
