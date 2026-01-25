import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BrainCircuit, 
  Target, 
  Lightbulb,
  ArrowRight,
  Gamepad2
} from "lucide-react";

const Academy = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const modules = [
    {
      title: "Trust Building",
      desc: "Creating psychological safety in hybrid teams.",
      icon: Users
    },
    {
      title: "Influence Without Authority",
      desc: "Leading complex projects across silos.",
      icon: Target
    },
    {
      title: "Network Mindset",
      desc: "Shifting from 'Command & Control' to 'Connect & Collaborate'.",
      icon: BrainCircuit
    },
    {
      title: "Strategic Connecting",
      desc: "Identifying and leveraging key organizational bridges.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section - Focus on Leadership Development */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E87722] rounded-full blur-[120px] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/20">
            PRACTICAL LEADERSHIP WORKSHOPS
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'האקדמיה למנהיגות רשתית' : 'Network Leadership Academy'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'סדנאות מעשיות לפיתוח מיומנויות הניהול החדשות. אנחנו עוזרים למנהלים לעבור מתפיסה היררכית לתפיסה רשתית, באמצעות תרגול, סימולציות וכלים פרקטיים.'
              : 'Practical workshops for the new era of management. We help leaders shift from a hierarchical mindset to a networked one, using advanced simulations and practical tools.'
            }
          </p>
          <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg shadow-lg">
            Download Syllabus <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* 2. The Methodology (Simulation as a Tool) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-[#1B365D] rounded-full text-sm font-bold mb-4">
                THE METHODOLOGY
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                Theory Meets Practice
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Network concepts can be abstract. To bridge the gap, we use <strong>advanced simulations</strong> (powered by Accelium) as a training aid.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Think of it as a "Flight Simulator" for management. The games aren't the goal—they are the means to practice complex dynamics like resource allocation, negotiation, and collaboration in a risk-free environment.
              </p>
              
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-3 text-[#1B365D] font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#E87722]" /> Active experimentation
                </li>
                <li className="flex items-center gap-3 text-[#1B365D] font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#E87722]" /> Immediate feedback loops
                </li>
                <li className="flex items-center gap-3 text-[#1B365D] font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#E87722]" /> Real-world analogy analysis
                </li>
              </ul>
            </div>
            
            {/* Visual showing the tool */}
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-[#E87722] rounded-3xl transform rotate-2 opacity-10 blur-lg"></div>
               <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl relative z-10 aspect-video flex flex-col items-center justify-center text-center">
                 <Gamepad2 className="w-20 h-20 text-[#1B365D] mb-4 opacity-80" />
                 <h3 className="text-2xl font-bold text-[#1B365D]">Strategic Simulations</h3>
                 <p className="text-gray-500 mt-2">Interactive Training Aid</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curriculum / Syllabus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B365D] mb-4">
              Core Modules
            </h2>
            <p className="text-xl text-gray-600">Developing the 4 Pillars of Network Intelligence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((mod, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-colors cursor-default border border-transparent hover:border-blue-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#E87722]">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-3">{mod.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-[#1B365D] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upgrade Your Management DNA
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Equip your leaders with the skills they need to navigate a networked world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white px-8 py-6 text-lg rounded-lg">
              Book a Workshop
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academy;