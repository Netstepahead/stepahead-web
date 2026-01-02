import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[15%] w-3 h-3 bg-primary rounded-full animate-float opacity-70" />
        <div className="absolute top-1/2 right-[20%] w-2 h-2 bg-teal rounded-full animate-float-delayed opacity-60" />
        <div className="absolute bottom-1/3 left-[30%] w-2 h-2 bg-gold rounded-full animate-float opacity-50" />
        <div className="absolute top-1/4 right-[35%] w-4 h-4 bg-primary/60 rounded-full animate-float-delayed opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/30 text-secondary-foreground px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">StepAhead Platform</span>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="group">
            {t('cta.button')}
            <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
