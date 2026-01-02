import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import heroImage from '@/assets/hero-network.png';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Network visualization"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/30" />
      </div>

      {/* Animated Network Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-glow opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group">
              {t('hero.cta')}
              <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
