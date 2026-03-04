import { Button } from "@/components/ui/button"
import { NetworkGraph } from "@/components/NetworkGraph"
import { PhotoCollage } from "@/components/PhotoCollage"
import { ArrowRight } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    // שינוי 1: הורדנו את ה-pt ל-0. הרווח מגיע מה-Layout הראשי.
    // הקטנו גם את ה-pb (Padding Bottom) כדי שהסקשן הבא יתקרב.
    <section className="relative bg-[#FAF9F6] overflow-hidden flex flex-col justify-start pt-24 pb-12 lg:pb-0">
      
      {/* אלמנטים של רקע */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1B365D]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#E87722]/10 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        
        {/* שינוי 2: items-start במקום items-center כדי להצמיד את הטקסט למעלה */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* RTL: text on right; heading, text, CTA all right-aligned. LTR: text on left. */}
          <div
            className={`flex flex-col z-20 mt-6 lg:mt-8 w-full ${isRTL ? 'lg:order-1 order-1' : 'order-1'}`}
            style={{ alignItems: isRTL ? 'flex-end' : 'flex-start', textAlign: isRTL ? 'right' : 'left' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#1B365D] leading-[1.1] tracking-tight mb-6 w-full">
              {t('hero.mainTitle')}
            </h1>

            <p className={`text-xl text-gray-500 max-w-lg leading-relaxed mb-8 font-light w-full ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('hero.mainSubtitle')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 w-full ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`} style={{ alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
              <Button
                asChild
                className="bg-[#1B365D] hover:bg-[#2a4d80] text-white text-base px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all gap-2"
              >
                <a href="#solutions">
                  {t('hero.exploreSolutions')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-1' : 'ml-1'}`} />
                </a>
              </Button>
            </div>
          </div>

          {/* RTL: map on left (order-2 in rtl grid), LTR: map on right (order-2) */}
          <div className={`relative h-[450px] lg:h-[600px] w-full ${isRTL ? 'lg:order-2' : 'order-2'}`}>
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