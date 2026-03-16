import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  ShieldAlert, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  RefreshCcw 
} from "lucide-react";

const Solutions = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const solutions = [
    {
      id: "silos",
      icon: Users,
      title: t('solutions.siloBusting'),
      description: t('solutions.siloDesc'),
      benefits: [t('solutions.siloBenefit1'), t('solutions.siloBenefit2'), t('solutions.siloBenefit3')]
    },
    {
      id: "change",
      icon: RefreshCcw,
      title: t('solutions.changeManagement'),
      description: t('solutions.changeDesc'),
      benefits: [t('solutions.changeBenefit1'), t('solutions.changeBenefit2'), t('solutions.changeBenefit3')]
    },
    {
      id: "retention",
      icon: ShieldAlert,
      title: t('solutions.talentRetention'),
      description: t('solutions.retentionDesc'),
      benefits: [t('solutions.retentionBenefit1'), t('solutions.retentionBenefit2'), t('solutions.retentionBenefit3')]
    },
    {
      id: "leadership",
      icon: TrendingUp,
      title: t('solutions.leadershipDev'),
      description: t('solutions.leadershipDesc'),
      benefits: [t('solutions.leadershipBenefit1'), t('solutions.leadershipBenefit2'), t('solutions.leadershipBenefit3')]
    }
  ];

  return (
    <div className="w-full bg-white">
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        {/* כאן התיקון: הסרנו את הבניין והחלפנו ברקע נקי ועדין */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-[#E87722] rounded-full text-sm font-bold mb-6 animate-fade-in">
            {t('solutions.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {t('solutions.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#1B365D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E87722]" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate('/platform')}
                  variant="outline" 
                  className="w-full border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors"
                >
                  {t('solutions.seeHowItWorks')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-6">
                {t('solutions.dontSlowDown')}
            </h2>
            <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
                {t('solutions.getStrategy')} <ArrowRight className="ms-2 w-5 h-5" />
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;