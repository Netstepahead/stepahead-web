import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Compass, Leaf, Rocket } from 'lucide-react';

type SkillsSectionProps = {
  /** Tighter layout when placed inside Academy / another page */
  embedded?: boolean;
};

const SkillsSection = ({ embedded = false }: SkillsSectionProps) => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Users,
      title: t('skills.hub.title'),
      description: t('skills.hub.desc'),
      gradient: 'from-primary to-orange-light',
    },
    {
      icon: Compass,
      title: t('skills.bridge.title'),
      description: t('skills.bridge.desc'),
      gradient: 'from-teal to-accent',
    },
    {
      icon: Leaf,
      title: t('skills.gardener.title'),
      description: t('skills.gardener.desc'),
      gradient: 'from-gold to-primary',
    },
    {
      icon: Rocket,
      title: t('skills.pioneer.title'),
      description: t('skills.pioneer.desc'),
      gradient: 'from-navy-light to-secondary',
    },
  ];

  return (
    <section
      id={embedded ? undefined : 'skills'}
      className={
        embedded
          ? 'py-16 md:py-20 bg-slate-50 border-y border-slate-100'
          : 'py-24 md:py-32 bg-background network-bg'
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto ${embedded ? 'mb-10' : 'mb-16'}`}>
          <h2
            className={`font-bold mb-4 ${
              embedded
                ? 'text-2xl md:text-3xl text-slate-900'
                : 'text-3xl md:text-4xl lg:text-5xl text-foreground'
            }`}
          >
            {t('skills.title')}:
          </h2>
          <p
            className={
              embedded
                ? 'text-lg md:text-xl text-[#E87722] font-semibold'
                : 'text-xl md:text-2xl text-primary font-semibold'
            }
          >
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid md:grid-cols-2 max-w-5xl mx-auto ${
            embedded ? 'gap-4 lg:gap-5' : 'gap-6 lg:gap-8'
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={
                embedded
                  ? 'group relative bg-white rounded-2xl p-6 shadow-md border border-slate-100 transition-shadow hover:shadow-lg'
                  : 'group relative bg-card rounded-2xl p-8 shadow-card border border-border/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1'
              }
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative flex gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      embedded ? 'text-slate-900' : 'text-card-foreground'
                    }`}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      embedded ? 'text-slate-600 text-sm' : 'text-muted-foreground'
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Network decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-teal/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
