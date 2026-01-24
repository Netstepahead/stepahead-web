import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    // שינוי ל-h-screen מבטיח שזה יתפוס בדיוק גובה מסך אחד ולא יימרח למטה
    <section className="relative bg-[#FAF9F6] overflow-hidden flex flex-col justify-center h-screen max-h-[1080px]">
      
      {/* רקע */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />

      {/* הקטנו את ה-pt ל-20 וצמצמנו את הגובה הכללי */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* צד שמאל: טקסט - מהודק יותר */}
          <div className="lg:w-1/2 text-left space-y-6 animate-fade-up">
            
            {/* הקטנתי את הטקסט מ-7xl ל-6xl כדי שיכנס במסך */}
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#1B365D] leading-[1.1]">
              The Networked <br />
              <span className="text-[#E87722]">Skills-Based Organization</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              Orchestrate your network. Our AI platform cultivates diverse ties and collaboration skills, turning your org chart into a living network of shared value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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

          {/* צד ימין: הרשת הדינאמית */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full hidden md:block">
             <div className="relative w-full h-full">
                
                {/* SVG אנימטיבי - מחזיר את תחושת ה"דינאמיות" */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1B365D" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#E87722" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#1B365D" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* קווים פועמים שמחברים בין המיקומים של התמונות */}
                  {/* חיבור 1: בלייזר (שמאל למעלה) -> גבר לבן (ימין למעלה) */}
                  <line x1="18%" y1="12%" x2="82%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1.5" className="animate-pulse" />
                  
                  {/* חיבור 2: גבר לבן -> גבר משקפיים (ימין אמצע) */}
                  <line x1="82%" y1="15%" x2="88%" y2="48%" stroke="#1B365D" strokeWidth="1" strokeOpacity="0.3" />
                  
                  {/* חיבור 3: גבר משקפיים -> פסים (למטה אמצע) */}
                  <line x1="88%" y1="48%" x2="48%" y2="78%" stroke="#E87722" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse delay-75" />
                  
                  {/* חיבור 4: פסים -> גולגול (למטה שמאל) */}
                  <line x1="48%" y1="78%" x2="12%" y2="60%" stroke="#1B365D" strokeWidth="1" strokeOpacity="0.4" />
                  
                  {/* חיבור 5: גולגול -> בלייזר (סגירת מעגל) */}
                  <line x1="12%" y1="60%" x2="18%" y2="12%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-150" />

                  {/* חיבורי אלכסון למרכז */}
                  <line x1="18%" y1="12%" x2="48%" y2="78%" stroke="#1B365D" strokeWidth="0.5" opacity="0.2" />
                  <line x1="82%" y1="15%" x2="12%" y2="60%" stroke="#1B365D" strokeWidth="0.5" opacity="0.2" />
                </svg>

                {/* --- התמונות (Nodes) במיקומים המדויקים --- */}

                {/* 1. בלייזר (למעלה משמאל) */}
                <div className="absolute top-[5%] left-[10%] transition-all hover:scale-110 duration-500 hover:z-20">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-1 rounded-[1.5rem] shadow-lg rotate-[-3deg] animate-in fade-in zoom-in duration-700">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" className="w-full h-full object-cover rounded-[1.2rem]" alt="Executive" />
                  </div>
                  {/* נקודת חיבור (Node Dot) */}
                  <div className="w-3 h-3 bg-[#E87722] rounded-full absolute top-1/2 -right-1.5 border-2 border-white shadow-sm animate-ping duration-[3s]" />
                </div>

                {/* 2. גבר לבן (למעלה מימין) */}
                <div className="absolute top-[8%] right-[10%] transition-all hover:scale-110 duration-500 delay-100 hover:z-20">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white p-1 rounded-[1.5rem] shadow-lg rotate-[2deg] animate-in fade-in zoom-in duration-700 delay-100">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-full h-full object-cover rounded-[1.2rem]" alt="Manager" />
                  </div>
                  <div className="w-3 h-3 bg-[#1B365D] rounded-full absolute bottom-4 -left-1.5 border-2 border-white shadow-sm" />
                </div>

                {/* 3. גבר משקפיים (ימין אמצע) */}
                <div className="absolute top-[40%] right-[5%] transition-all hover:scale-110 duration-500 delay-200 hover:z-20">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-1 rounded-[1.5rem] shadow-lg rotate-[-2deg] animate-in fade-in zoom-in duration-700 delay-200">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" className="w-full h-full object-cover rounded-[1.2rem]" alt="Tech" />
                  </div>
                </div>

                {/* 4. גולגול בשיער (למטה משמאל) */}
                <div className="absolute bottom-[30%] left-[5%] transition-all hover:scale-110 duration-500 delay-300 hover:z-20">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white p-1 rounded-[1.5rem] shadow-lg rotate-[4deg] animate-in fade-in zoom-in duration-700 delay-300">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956" className="w-full h-full object-cover rounded-[1.2rem]" alt="Team Lead" />
                  </div>
                  <div className="w-3 h-3 bg-[#E87722] rounded-full absolute -top-1 right-8 border-2 border-white shadow-sm animate-pulse" />
                </div>

                {/* 5. חולצת פסים (למטה אמצע) */}
                <div className="absolute bottom-[15%] left-[40%] transition-all hover:scale-110 duration-500 delay-400 hover:z-20">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white p-1 rounded-[1.5rem] shadow-lg rotate-[-3deg] animate-in fade-in zoom-in duration-700 delay-400">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-full h-full object-cover rounded-[1.2rem]" alt="Creative" />
                  </div>
                  <div className="w-3 h-3 bg-[#1B365D] rounded-full absolute top-1/2 -left-1.5 border-2 border-white shadow-sm" />
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;