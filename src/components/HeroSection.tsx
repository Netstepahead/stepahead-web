import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import heroNetwork from '@/assets/hero-network.jpg';

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
    <section className="min-h-screen flex flex-col justify-center bg-background px-4 py-20">
      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Buttons */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              {t('hero.title')}
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="xl">
                {t('hero.cta')}
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                {t('hero.cta2')}
              </Button>
            </div>
          </div>

          {/* Right Column - Image Container */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="rounded-3xl shadow-2xl overflow-hidden bg-card">
                <img
                  src={heroNetwork}
                  alt="Network Leadership Abstract"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section - Centered Below */}
        <div className="mt-20 text-center">
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
