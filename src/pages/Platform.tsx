import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Network, 
  ClipboardCheck, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Gamepad2
} from "lucide-react";

const Platform = () => {
  const { language } = useLanguage();
  const { hash } = useLocation();
  const isRTL = language === 'he';

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1B365D] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {isRTL ? 'הפלטפורמה ההיברידית לניהול הרשת' : 'The Hybrid Network Intelligence Platform'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
            {isRTL 
              ? 'שילוב של דאטה פסיבי (ONA), שאלון מיומנויות אקטיבי (Skills), ואימון מבוסס משחק.'
              : 'Orchestrate your network by combining Passive Data (ONA), Active Skills Assessment, and Gamified Simulations.'
            }
          </p>
        </div>
      </section>

      {/* 2. The Tech Trinity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32">
            {[
              {
                icon: Network,
                title: "ONA Engine",
                desc: isRTL ? "דאטה פסיבי: מיפוי קשרים ומבנה." : "Passive Data: Mapping structure & flow."
              },
              {
                icon: ClipboardCheck,
                title: "Skills Assessment",
                desc: isRTL ? "דאטה אקטיבי: אבחון מיומנויות רישות." : "Active Data: Diagnosing networking skills."
              },
              {
                icon: Bot,
                title: "Collab Agent",
                desc: isRTL ? "התערבות: דחיפות AI בזמן אמת." : "Intervention: Real-time AI nudges."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#E87722]">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#1B365D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B365D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: ONA Engine */}
      <section id="ona" className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#E87722] rounded-full text-sm font-bold mb-4">
                LAYER 1: PASSIVE DATA
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                Organizational Network Analysis (ONA)
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The X-Ray of your organization. We analyze communication metadata (Email, Slack, Calendar) to visualize how work actually gets done, identifying silos, bottlenecks, and hidden influencers without sending a single survey.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#1B365D] font-medium"><CheckCircle2 className="w-5 h-5 text-[#E87722]" /> Real-time collaboration maps</li>
                <li className="flex items-center gap-3 text-[#1B365D] font-medium"><CheckCircle2 className="w-5 h-5 text-[#E87722]" /> Identify burnout & isolation risks</li>
              </ul>
            </div>
            {/* Placeholder for ONA Visual */}
            <div className="md:w-1/2 bg-gray-100 rounded-3xl p-8 aspect-video flex items-center justify-center relative border-2 border-dashed border-gray-300">
               <div className="text-center">
                 <Network className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                 <span className="text-gray-500 font-mono text-sm">[PLACEHOLDER: StepAhead ONA Dashboard]</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: Skills Assessment */}
      <section id="assessment" className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-[#1B365D] rounded-full text-sm font-bold mb-4">
                LAYER 2: ACTIVE DATA
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
                Network Skills Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mapping the structure isn't enough; you need to understand the *capability*. Our proprietary assessment evaluates the "Network Mindset" of your employees. Do they know how to build trust? Can they bridge silos?
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#1B365D] font-medium"><CheckCircle2 className="w-5 h-5 text-[#E87722]" /> Individual Network Profile</li>
                <li className="flex items-center gap-3 text-[#1B365D] font-medium"><CheckCircle2 className="w-5 h-5 text-[#E87722]" /> Benchmarking against industry standards</li>
              </ul>
            </div>
            {/* Placeholder for Assessment Visual */}
            <div className="md:w-1/2 bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 shadow-sm aspect-video flex items-center justify-center">
               <div className="text-center">
                 <ClipboardCheck className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                 <span className="text-gray-500 font-mono text-sm">[PLACEHOLDER: Skills Assessment Report]</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gamified Training (Accelium) */}
      <section id="games" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#1B365D] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E87722] rounded-full blur-[100px] opacity-20"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4 text-[#E87722]">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="font-bold tracking-wider">POWERED BY ACCELIUM</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  Gamified Skill Building
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  We don't just lecture; we simulate. Utilizing Accelium's world-class strategy games, we train employees to develop complex problem-solving and networking skills in a risk-free, engaging environment.
                </p>
                <Button className="bg-[#E87722] hover:bg-[#d66a1a] text-white border-none">
                  Explore the Games
                </Button>
              </div>
              
              {/* Placeholder for Game Visuals */}
              <div className="md:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 aspect-square flex items-center justify-center">
                    <span className="text-sm font-mono text-blue-200">[Game Screen 1]</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 aspect-square flex items-center justify-center mt-8">
                    <span className="text-sm font-mono text-blue-200">[Game Screen 2]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI Agent */}
      <section id="agent" className="py-24 bg-gray-50 border-t border-gray-200">
         <div className="container mx-auto px-4 text-center max-w-4xl">
           <div className="inline-block px-3 py-1 bg-blue-100 text-[#1B365D] rounded-full text-sm font-bold mb-6">
                LAYER 3: THE ACTION
           </div>
           <h2 className="text-4xl font-serif font-bold text-[#1B365D] mb-6">
             Meet the Collab Agent
           </h2>
           <p className="text-xl text-gray-600 mb-10">
             All these insights funnel into our AI Agent, which lives inside MS Teams. It takes the Data (ONA) and the Capability (Assessment) and prompts the right action at the right time.
           </p>
           <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 inline-block w-full max-w-2xl">
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 bg-[#5B5FC7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">StepAhead Agent</h4>
                  <p className="text-gray-600 mt-2">
                    "Hey David, based on your assessment, you're great at bonding but score low on bridging. I noticed you haven't spoken to the Marketing team this month. Here's a suggested topic to break the ice..."
                  </p>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* 7. Security & CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-[#1B365D] mb-4">Enterprise-Grade Security</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            GDPR Compliant • ISO 27001 Ready • Anonymized Data Processing
          </p>
          <div className="pt-8 border-t border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-[#1B365D]">Ready to upgrade your network?</h2>
            <Button className="bg-[#E87722] hover:bg-gray-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Platform;