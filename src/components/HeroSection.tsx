import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    // הסרנו מפה את ה-padding כדי שהרקע יתחיל מלמעלה
    <section className="relative bg-[#FAF9F6] overflow-hidden flex flex-col justify-start min-h-screen">
      
      {/* אלמנטים דקורטיביים ברקע */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl" />

      {/* התיקון כאן: הוספנו pt-40 כדי לדחוף את התוכן למטה בכוח */}
      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center pt-40 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* צד שמאל: טקסט */}
          <div className="lg:w-1/2 text-left space-y-6 animate-fade-up">
            <div className="flex items-center gap-2">
              <img src="/logo-stepahead.svg" alt="StepAhead" className="h-8 w-auto opacity-80" />
            </div>
            
            {/* שינינו טיפה את הטקסט כדי לוודא עדכון */}
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#1B365D] leading-tight">
              The Future <br />
              <span className="text-[#E87722]">Networked Organization</span>
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

          {/* צד ימין: תמונות */}
          <div className="lg:w-1/2 relative h-[500px] w-full animate-fade-in hidden md:block">
             <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-blue-100 rounded-full opacity-30 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-orange-100 rounded-full opacity-30 delay-75" />
                
                {/* Images */}
                <div className="absolute top-10 right-10 bg-white p-2 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-32 bg-gray-200 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-20 left-10 bg-white p-2 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 delay-100">
                  <div className="w-28 h-28 bg-gray-200 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                 <div className="absolute top-40 left-0 bg-white p-2 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 delay-200">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" alt="Profile" className="w-full h-full object-cover" />
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