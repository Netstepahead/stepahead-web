import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
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
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#E87722]">{t('footer.solutionsHeading')}</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li>
                <Link to="/academy" className="hover:text-white transition-colors">{t('footer.networkLeadership')}</Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-white transition-colors">{t('footer.collaborationIntelligence')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">{t('footer.talentSelection')}</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">{t('footer.collabAgent')}</a>
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
                <Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#E87722]">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                <a href="mailto:info@stepahead.com" className="hover:text-white transition-colors">
                  info@stepahead.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {t('footer.followLinkedIn')}
                </a>
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