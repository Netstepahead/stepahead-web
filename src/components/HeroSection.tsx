import { Button } from "@/components/ui/button"
import { NetworkGraph } from "@/components/NetworkGraph"
import { PhotoCollage } from "@/components/PhotoCollage"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

const HeroSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  return (
    // שינוי 1: הורדנו את ה-pt ל-0. הרווח מגיע מה-Layout הראשי.
    // הקטנו גם את ה-pb (Padding Bottom) כדי שהסקשן הבא יתקרב.
    <section className="relative bg-[#FAF9F6] overflow-hidden flex flex-col justify-start pt-28 pb-12 lg:pb-0">
      
      {/* אלמנטים של רקע */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1B365D]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#E87722]/10 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        
        {/* שינוי 2: items-start במקום items-center כדי להצמיד את הטקסט למעלה */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* שינוי 3: הוספת lg:mt-8 כדי ליישר את הכותרת בול עם תחילת הגרף */}
          <div className={`flex flex-col z-20 mt-6 lg:mt-8 ${isRTL ? 'lg:order-2 text-right items-end' : 'order-1 text-left items-start'}`}>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#1B365D] leading-[1.1] tracking-tight mb-6">
              The Networked <br />
              <span className="text-[#E87722]">
                Skills-Based Organization
              </span>
            </h1>

            <p className={`text-xl text-gray-500 max-w-lg leading-relaxed mb-8 text-balance font-light ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'he' 
                ? "הפכו את הארגון מרשימת תפקידים לרשת חיה של כישורים. הפלטפורמה שלנו עוזרת לכם לזהות מיומנויות נסתרות ולחבר בין האנשים הנכונים בזמן אמת."
                : "Orchestrate your network. Our AI platform cultivates diverse ties and collaboration skills, turning your org chart into a living network of shared value."
              }
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 w-full ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`}>
              <Button className="bg-[#1B365D] hover:bg-[#2a4d80] text-white text-base px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all gap-2">
                {isRTL ? 'התחילו עכשיו' : 'Activate Your Network'} 
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-1' : 'ml-1'}`} />
              </Button>
              
              <Button variant="outline" className="text-[#1B365D] border-[#1B365D]/20 hover:bg-[#1B365D]/5 text-base px-8 h-12 rounded-lg gap-2 bg-transparent">
                <Sparkles className="w-4 h-4" /> 
                {isRTL ? 'הכירו את הסוכן' : 'Meet the Collab Agent'}
              </Button>
            </div>
          </div>

          <div className={`relative h-[450px] lg:h-[600px] w-full ${isRTL ? 'lg:order-1' : 'order-2'}`}>
            <NetworkGraph />
            <PhotoCollage />
            
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#3B82F6]/5 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-[#E87722]/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection;