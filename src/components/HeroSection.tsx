import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#FAF9F6] overflow-hidden flex flex-col justify-center min-h-screen">
      
      {/* אלמנטים דקורטיביים ברקע */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl" />

      {/* התיקון הקריטי: pt-24 נותן אוויר מהתפריט */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* צד שמאל: טקסט */}
          <div className="lg:w-1/2 text-left space-y-8 animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#1B365D] leading-tight">
              The Networked <br />
              <span className="text-[#E87722]">Skills-Based Organization</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Orchestrate your network. Our AI platform cultivates diverse ties and collaboration skills, turning your org chart into a living network of shared value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => navigate('/platform')}
                className="bg-[#1B365D] hover:bg-[#2a4a7f] text-white px-8 py-6 text-lg shadow-lg group"
              >
                Activate Your Network 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate('/platform#agent')}
                className="px-8 py-6 text-lg border-[#1B365D] text-[#1B365D] hover:bg-blue-50"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Meet the Collab Agent
              </Button>
            </div>
          </div>

          {/* צד ימין: שחזור מדויק של 5 התמונות המקוריות והרשת */}
          <div className="lg:w-1/2 relative h-[600px] w-full animate-fade-in hidden md:block">
             <div className="relative w-full h-full">
                
                {/* קווי הרשת - מחברים בין האנשים */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
                  {/* קווים כחולים וכתומים עדינים */}
                  <line x1="25%" y1="20%" x2="75%" y2="15%" stroke="#E87722" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="25%" y1="20%" x2="25%" y2="60%" stroke="#1B365D" strokeWidth="1" />
                  <line x1="75%" y1="15%" x2="85%" y2="55%" stroke="#1B365D" strokeWidth="1" />
                  <line x1="25%" y1="60%" x2="60%" y2="75%" stroke="#E87722" strokeWidth="1" />
                  <line x1="85%" y1="55%" x2="60%" y2="75%" stroke="#1B365D" strokeWidth="1" />
                  <line x1="25%" y1="20%" x2="85%" y2="55%" stroke="#1B365D" strokeWidth="0.5" opacity="0.5" />
                </svg>

                {/* 1. אישה בבלייזר (למעלה משמאל) */}
                <div className="absolute top-[10%] left-[15%] bg-white p-2 rounded-3xl shadow-xl z-10 animate-fade-in hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Executive" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 2. גבר בחולצה לבנה (למעלה מימין) */}
                <div className="absolute top-[5%] right-[15%] bg-white p-2 rounded-3xl shadow-xl z-10 animate-fade-in delay-100 hover:scale-105 transition-transform duration-500">
                  <div className="w-28 h-28 bg-gray-100 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Manager" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 3. אישה עם "גולגול" בשיער (באמצע-למטה משמאל) */}
                <div className="absolute top-[55%] left-[10%] bg-white p-2 rounded-3xl shadow-xl z-10 animate-fade-in delay-200 hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956" alt="Team Lead" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 4. אישה בחולצת פסים (למטה במרכז) */}
                <div className="absolute bottom-[10%] left-[45%] transform -translate-x-1/2 bg-white p-2 rounded-3xl shadow-xl z-10 animate-fade-in delay-300 hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Designer" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 5. גבר עם משקפיים (באמצע מימין) */}
                <div className="absolute top-[50%] right-[5%] bg-white p-2 rounded-3xl shadow-xl z-10 animate-fade-in delay-500 hover:scale-105 transition-transform duration-500">
                   <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Developer" className="w-full h-full object-cover" />
                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;