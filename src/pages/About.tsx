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
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const team = [
    { name: "Sharon Rendlich", role: t('about.sharonRole'), bio: t('about.sharonBio'), image: "/sharon.png", linkedin: "https://www.linkedin.com/in/sharon-rendlich-1752068/" },
    { name: "Prof. Yuval Kalish", role: t('about.yuvalRole'), bio: t('about.yuvalBio'), image: "/yuval.png", linkedin: "https://www.linkedin.com/in/yuval-kalish/" },
    { name: "Nadav Agozi", role: t('about.nadavRole'), bio: t('about.nadavBio'), image: "/nadav.png", linkedin: "https://www.linkedin.com/in/nadav-agozi/" }
  ];

  const values = [
    { icon: Target, title: t('about.dataIntuition'), desc: t('about.dataIntuitionDesc') },
    { icon: Users, title: t('about.peopleFirst'), desc: t('about.peopleFirstDesc') },
    { icon: Lightbulb, title: t('about.actionableInsights'), desc: t('about.actionableDesc') }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E87722] rounded-full blur-[100px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/20">
            {t('about.mission')}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. The Story / Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
                  {t('about.orgChartDead')} <br/>
                  <span className="text-[#E87722]">{t('about.longLiveNetwork')}</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t('about.story1')}</p>
                  <p>{t('about.story2')}</p>
                  <p>{t('about.story3')}</p>
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
               {t('about.whatDrivesUs')}
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
            {t('about.meetLeadership')}
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
            {t('about.joinRevolution')}
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            {t('about.revolutionDesc')}
          </p>
          <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
            {t('about.contactUs')} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;