import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Compass, Leaf, Rocket } from 'lucide-react';

const SkillsSection = () => {
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
    <section id="skills" className="py-24 md:py-32 bg-background network-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('skills.title')}:
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
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
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
