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

      {/* שומרים על pt-24 כדי שהכותרת לא תיגע בתפריט */}
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

          {/* צד ימין: החמישייה המקורית */}
          <div className="lg:w-1/2 relative h-[600px] w-full animate-fade-in hidden md:block">
             <div className="relative w-full h-full">
                
                {/* רשת קשרים עדינה (Constellation) */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
                  <path d="M150,100 L450,80" stroke="#E87722" strokeWidth="1" strokeDasharray="4,4" /> {/* בלייזר -> לבן */}
                  <path d="M150,100 L120,400" stroke="#1B365D" strokeWidth="1" /> {/* בלייזר -> גולגול */}
                  <path d="M450,80 L480,350" stroke="#1B365D" strokeWidth="1" /> {/* לבן -> משקפיים */}
                  <path d="M120,400 L300,500" stroke="#E87722" strokeWidth="1" /> {/* גולגול -> פסים */}
                  <path d="M480,350 L300,500" stroke="#1B365D" strokeWidth="1" strokeDasharray="4,4" /> {/* משקפיים -> פסים */}
                  <path d="M150,100 L300,500" stroke="#1B365D" strokeWidth="0.5" opacity="0.3" /> {/* אלכסון */}
                </svg>

                {/* 1. למעלה משמאל: אישה בבלייזר אפור */}
                <div className="absolute top-[5%] left-[10%] transition-transform hover:scale-110 duration-500">
                  <div className="w-24 h-24 bg-white p-1.5 rounded-[2rem] shadow-xl rotate-[-3deg]">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" className="w-full h-full object-cover rounded-[1.5rem]" alt="Executive" />
                  </div>
                  <div className="w-3 h-3 bg-[#E87722] rounded-full absolute -bottom-1 -right-1 border-2 border-white"></div>
                </div>

                {/* 2. למעלה מימין: גבר בחולצה לבנה */}
                <div className="absolute top-[8%] right-[15%] transition-transform hover:scale-110 duration-500 delay-100">
                  <div className="w-28 h-28 bg-white p-1.5 rounded-[2rem] shadow-xl rotate-[2deg]">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-full h-full object-cover rounded-[1.5rem]" alt="Manager" />
                  </div>
                  <div className="w-3 h-3 bg-[#1B365D] rounded-full absolute -top-1 -left-1 border-2 border-white"></div>
                </div>

                {/* 3. אמצע-ימין: גבר עם משקפיים (תוקן!) */}
                <div className="absolute top-[45%] right-[5%] transition-transform hover:scale-110 duration-500 delay-200">
                  <div className="w-24 h-24 bg-white p-1.5 rounded-[2rem] shadow-xl rotate-[-2deg]">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" className="w-full h-full object-cover rounded-[1.5rem]" alt="Tech Lead" />
                  </div>
                </div>

                {/* 4. למטה משמאל: אישה עם גולגול בשיער */}
                <div className="absolute bottom-[25%] left-[5%] transition-transform hover:scale-110 duration-500 delay-300">
                  <div className="w-28 h-28 bg-white p-1.5 rounded-[2rem] shadow-xl rotate-[4deg]">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956" className="w-full h-full object-cover rounded-[1.5rem]" alt="Team Lead" />
                  </div>
                   <div className="w-3 h-3 bg-[#E87722] rounded-full absolute top-1/2 -right-2 border-2 border-white"></div>
                </div>

                {/* 5. למטה במרכז: אישה בחולצת פסים (הוזזה למעלה שלא תיחתך) */}
                <div className="absolute bottom-[10%] left-[45%] transition-transform hover:scale-110 duration-500 delay-400">
                  <div className="w-24 h-24 bg-white p-1.5 rounded-[2rem] shadow-xl rotate-[-3deg]">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-full h-full object-cover rounded-[1.5rem]" alt="Creative" />
                  </div>
                  <div className="w-3 h-3 bg-[#1B365D] rounded-full absolute -bottom-1 left-1/2 border-2 border-white"></div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;