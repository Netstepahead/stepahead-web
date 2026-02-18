import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1B365D] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src="/logo-stepahead-white.png" 
                alt="StepAhead" 
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {/* LinkedIn Only */}
              <a 
                href="https://www.linkedin.com/company/stepaheadtech" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#E87722] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#E87722]">{t('footer.platform')}</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li>
                <Link to="/platform" className="hover:text-white transition-colors">{t('footer.onaTechnology')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">{t('footer.solutions')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">{t('footer.useCases')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#E87722]">{t('footer.company')}</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t('footer.aboutUs')}</Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-white transition-colors">{t('footer.academy')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#E87722]">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E87722] shrink-0" />
                <a href="mailto:info@stepahead.com" className="hover:text-white transition-colors">
                  info@stepahead.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E87722] shrink-0" />
                <span>
                  {t('footer.location')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#E87722] shrink-0" />
                <span>
                  {t('footer.globalOps')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>© {currentYear} StepAhead. {t('footer.rights')}</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;