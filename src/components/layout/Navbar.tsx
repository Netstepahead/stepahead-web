import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isLightBackground = isHomePage || isScrolled;

  const logoSrc = isLightBackground 
    ? "/logo-stepahead.svg" 
    : "/logo-stepahead-white.svg";

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

  const navLinks = [
    { name: "Platform", path: "/platform" },
    { name: "Solutions", path: "/solutions" },
    { name: "Academy", path: "/academy" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img 
            src={logoSrc} 
            alt="StepAhead" 
            // כאן הגדלנו את הלוגו: h-10 במובייל, h-12 בדסקטופ
            className="h-10 md:h-12 w-auto transition-all duration-300" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#E87722] ${
                location.pathname === link.path 
                  ? "text-[#E87722] font-bold"
                  : textColorClass
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button onClick={toggleLanguage} className={`p-2 rounded-full transition-colors ${globeColorClass}`}>
            <Globe className="w-5 h-5" />
          </button>

          <Button className={buttonClass}>
            Get Started
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

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-in slide-in-from-top-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif font-bold text-[#1B365D]"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-[#1B365D] text-white w-48 mt-4">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;