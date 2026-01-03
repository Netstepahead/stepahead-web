import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  // Placeholder company logos - abstract shapes
  const logos = [
    { width: 120, height: 40 },
    { width: 100, height: 35 },
    { width: 130, height: 45 },
    { width: 110, height: 38 },
    { width: 95, height: 32 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
          {t('hero.title')}
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button variant="default" size="xl">
            {t('hero.cta')}
          </Button>
          <Button variant="outline" size="xl" className="gap-2">
            <Phone className="w-5 h-5" />
            {t('hero.cta2')}
          </Button>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            {t('hero.trustedBy')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
                style={{ width: logo.width, height: logo.height }}
              >
                <div className="w-full h-8 bg-muted-foreground/20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
