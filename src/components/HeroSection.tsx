import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import heroImage from '@/assets/hero-network.png';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Network graphic from presentation */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <img
          src={heroImage}
          alt="Network visualization"
          className="h-[80%] w-auto max-w-[60%] object-contain opacity-90 ltr:mr-12 rtl:ml-12 rtl:scale-x-[-1]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group">
              {t('hero.cta')}
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Play className="w-5 h-5" />
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
