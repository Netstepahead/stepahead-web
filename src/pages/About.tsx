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
  Lightbulb
} from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const team = [
    {
      name: "Sharon Rendlich",
      role: "Co-Founder & COO",
      bio: "Psychotherapist and Organizational Consultant. Partner at 'Gome-Gevim' coaching and mediation center.",
      image: "/sharon.png" // וודא שהקובץ קיים ב-public
    },
    {
      name: "Prof. Yuval Kalish",
      role: "Co-Founder & Academic Advisor",
      bio: "Chair of Leadership, Networks and Organizations at WHU – Otto Beisheim School of Management, Düsseldorf, Germany.",
      image: "/yuval.png" // וודא שהקובץ קיים ב-public
    },
    {
      name: "Nadav Agozi",
      role: "Founder & CEO",
      bio: "Expert in skills development and assessment technologies. Specialist in Game Based Learning and Strategic Thinking lecturer.",
      image: "/nadav.png" // וודא שהקובץ קיים ב-public
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Data-Driven Intuition",
      desc: "We believe in gut feeling, but we trust data. We visualize the invisible."
    },
    {
      icon: Users,
      title: "People First",
      desc: "Nodes and edges are interesting, but human relationships are what truly matter."
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights",
      desc: "We don't just map the problem; we prompt the solution."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E87722] rounded-full blur-[100px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/20">
            OUR MISSION
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'מחברים את הנקודות בארגונים מורכבים' : 'Architects of the Networked Organization'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'אנחנו כאן כדי להפוך את המבנה הארגוני הסטטי לרשת חיה, נושמת ומסתגלת.'
              : 'We exist to transform static hierarchies into living, breathing, adaptive networks of shared value.'
            }
          </p>
        </div>
      </section>

      {/* 2. The Story / Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
                  The Org Chart is Dead. <br/>
                  <span className="text-[#E87722]">Long Live the Network.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    StepAhead was founded with the vision of developing innovative technology based on network analysis to enable collaboration and connect people.
                  </p>
                  <p>
                    For over a century, organizations were managed like machines: top-down, siloed, and rigid. But the world has changed. Work today is complex, collaborative, and fast-paced.
                  </p>
                  <p>
                    We combined the science of Organizational Network Analysis (ONA) with practical leadership tools to give leaders a new pair of glasses—ones that see the actual flow of trust, information, and innovation.
                  </p>
                </div>
             </div>
             <div className="md:w-1/2 relative">
               <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-orange-50 opacity-50"></div>
                  <Globe className="w-64 h-64 text-[#1B365D] opacity-10 animate-pulse" />
                  
                  {/* Abstract connection visual */}
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
             <h2 className="text-3xl font-serif font-bold text-[#1B365D]">What Drives Us</h2>
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
            Meet the Leadership
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[4/5] bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bio Reveal on Hover */}
                  <div className="absolute inset-0 bg-[#1B365D]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <p className="text-white text-md font-medium leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D]">{member.name}</h3>
                <p className="text-[#E87722] font-medium mt-1">{member.role}</p>
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
            Join the Revolution
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Whether you are an organization looking to evolve or a partner looking to collaborate, we'd love to connect.
          </p>
          <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;