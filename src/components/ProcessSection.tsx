import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, UserCheck, BookOpen, Bot, ChevronRight, ChevronLeft } from 'lucide-react';

const ProcessSection = () => {
  const { t, isRTL } = useLanguage();
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  const steps = [
    {
      icon: MapPin,
      title: t('process.step1.title'),
      subtitle: t('process.step1.subtitle'),
      description: t('process.step1.desc'),
      color: 'bg-primary',
    },
    {
      icon: UserCheck,
      title: t('process.step2.title'),
      subtitle: t('process.step2.subtitle'),
      description: t('process.step2.desc'),
      color: 'bg-teal',
    },
    {
      icon: BookOpen,
      title: t('process.step3.title'),
      subtitle: t('process.step3.subtitle'),
      description: t('process.step3.desc'),
      color: 'bg-gold',
    },
    {
      icon: Bot,
      title: t('process.step4.title'),
      subtitle: t('process.step4.subtitle'),
      description: t('process.step4.desc'),
      color: 'bg-primary',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">
            {t('process.title')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
            {t('process.subtitle')}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/3 -right-4 lg:-right-5 z-10 w-8 lg:w-10 h-8 lg:h-10 bg-primary rounded-full items-center justify-center text-primary-foreground rtl:rotate-180">
                  <Chevron className="w-5 h-5" />
                </div>
              )}

              {/* Card */}
              <div className="h-full bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 group-hover:border-primary/30">
                {/* Step Number */}
                <div className="text-6xl font-bold text-muted/50 mb-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  ({step.subtitle})
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
