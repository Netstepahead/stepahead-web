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

      {/* התיקון החשוב: pt-20 כדי לתת אוויר מהתפריט */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* צד שמאל: הטקסט המקורי */}
          <div className="lg:w-1/2 text-left space-y-8 animate-fade-up py-10">
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

          {/* צד ימין: שחזור הרשת המקורית עם התמונות הנכונות */}
          <div className="lg:w-1/2 relative h-[600px] w-full animate-fade-in hidden md:block">
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* קווי הרשת (הגרף) */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
                  <line x1="20%" y1="30%" x2="80%" y2="20%" stroke="#E87722" strokeWidth="1" />
                  <line x1="20%" y1="30%" x2="20%" y2="70%" stroke="#1B365D" strokeWidth="1" />
                  <line x1="80%" y1="20%" x2="80%" y2="60%" stroke="#1B365D" strokeWidth="1" />
                  <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="#E87722" strokeWidth="1" />
                  <line x1="80%" y1="60%" x2="50%" y2="80%" stroke="#1B365D" strokeWidth="1" />
                </svg>

                {/* תמונה 1: אישה למעלה משמאל */}
                <div className="absolute top-[15%] left-[10%] bg-white p-2 rounded-2xl shadow-xl z-10 animate-fade-in">
                  <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Leader" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* תמונה 2: גבר למעלה מימין */}
                <div className="absolute top-[10%] right-[10%] bg-white p-2 rounded-2xl shadow-xl z-10 animate-fade-in delay-100">
                  <div className="w-28 h-28 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Manager" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* תמונה 3: אישה למטה משמאל */}
                <div className="absolute bottom-[20%] left-[15%] bg-white p-2 rounded-2xl shadow-xl z-10 animate-fade-in delay-200">
                  <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956" alt="Employee" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* תמונה 4: גבר למטה מימין */}
                <div className="absolute bottom-[25%] right-[15%] bg-white p-2 rounded-2xl shadow-xl z-10 animate-fade-in delay-300">
                  <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Colleague" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* תמונה 5: מרכזית */}
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-2xl z-20 animate-pulse">
                   <div className="w-16 h-16 bg-[#E87722] rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
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