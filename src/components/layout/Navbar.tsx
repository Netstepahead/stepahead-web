import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isLightBackground = isHomePage || isScrolled;

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  const solutionsSubLinks = [
    { nameKey: 'nav.talentAcquisition' as const, path: "/solutions" },
    { nameKey: 'nav.leadershipInnovation' as const, path: "/academy" },
    { nameKey: 'nav.organizationalDynamics' as const, path: "/platform" },
  ];

  const mainNavLinks = [
    { nameKey: 'nav.methodology' as const, path: "/academy" },
    { nameKey: 'nav.aiLabs' as const, path: "/platform" },
    { nameKey: 'nav.aboutUs' as const, path: "/about" },
    { nameKey: 'nav.contact' as const, path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src={logoSrc}
            alt="StepAhead"
            className={`${logoSizeClass} w-auto transition-all duration-300 object-contain`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-[#E87722] ${
              location.pathname === "/" ? "text-[#E87722] font-bold" : textColorClass
            }`}
          >
            {t('nav.home')}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium transition-colors hover:text-[#E87722] flex items-center gap-1 outline-none ${textColorClass}`}
            >
              {t('nav.solutionsDropdown')}
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[220px]">
              {solutionsSubLinks.map((link) => (
                <DropdownMenuItem key={link.path} asChild>
                  <Link to={link.path} className="cursor-pointer">
                    {t(link.nameKey)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#E87722] ${
                location.pathname === link.path ? "text-[#E87722] font-bold" : textColorClass
              }`}
            >
              {t(link.nameKey)}
            </Link>
          ))}

          <button onClick={toggleLanguage} className={`p-2 rounded-full transition-colors ${globeColorClass}`}>
            <Globe className="w-5 h-5" />
          </button>

          <Button className={buttonClass}>
            {t('nav.getStarted')}
          </Button>
        </div>

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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 pt-20 pb-10 md:hidden animate-in slide-in-from-top-10">
          <Link to="/" className="text-2xl font-serif font-bold text-[#1B365D]" onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{t('nav.solutionsDropdown')}</span>
            {solutionsSubLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xl font-serif font-bold text-[#1B365D]"
                onClick={() => setIsOpen(false)}
              >
                {t(link.nameKey)}
              </Link>
            ))}
          </div>
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-serif font-bold text-[#1B365D]"
              onClick={() => setIsOpen(false)}
            >
              {t(link.nameKey)}
            </Link>
          ))}
          <Button className="bg-[#1B365D] text-white w-48 mt-4" onClick={() => setIsOpen(false)}>
            {t('nav.getStarted')}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
