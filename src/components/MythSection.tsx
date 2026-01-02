import { useLanguage } from '@/contexts/LanguageContext';
import { Network, GitBranch } from 'lucide-react';

const MythSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background network-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {t('myth.title')}.{' '}
                <span className="text-primary">{t('myth.subtitle')}</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('myth.description')}
              </p>
            </div>

            {/* Visual Comparison */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Traditional Org Chart */}
                <div className="relative p-6 bg-card rounded-2xl shadow-card border border-border/50 opacity-50">
                  <div className="absolute top-3 right-3 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    Myth
                  </div>
                  <GitBranch className="w-12 h-12 text-muted-foreground mb-4" />
                  <div className="space-y-2">
                    <div className="w-8 h-2 bg-muted rounded mx-auto" />
                    <div className="flex justify-center gap-4">
                      <div className="w-6 h-1.5 bg-muted rounded" />
                      <div className="w-6 h-1.5 bg-muted rounded" />
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-4 h-1 bg-muted rounded" />
                      <div className="w-4 h-1 bg-muted rounded" />
                      <div className="w-4 h-1 bg-muted rounded" />
                      <div className="w-4 h-1 bg-muted rounded" />
                    </div>
                  </div>
                </div>

                {/* Network Reality */}
                <div className="relative p-6 bg-secondary rounded-2xl shadow-card border border-primary/30">
                  <div className="absolute top-3 right-3 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded">
                    Reality
                  </div>
                  <Network className="w-12 h-12 text-primary mb-4" />
                  <div className="relative h-20">
                    {/* Network nodes */}
                    <div className="absolute top-2 left-4 w-3 h-3 bg-primary rounded-full animate-node-pulse" />
                    <div className="absolute top-6 right-6 w-4 h-4 bg-teal rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-4 left-8 w-2 h-2 bg-gold rounded-full animate-float" />
                    <div className="absolute bottom-2 right-4 w-3 h-3 bg-primary/70 rounded-full animate-float-delayed" />
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full animate-node-pulse" style={{ animationDelay: '0.5s' }} />
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80">
                      <line x1="20" y1="15" x2="50" y2="40" stroke="hsl(27, 79%, 53%)" strokeWidth="1" opacity="0.5" />
                      <line x1="50" y1="40" x2="80" y2="30" stroke="hsl(195, 60%, 45%)" strokeWidth="1" opacity="0.5" />
                      <line x1="50" y1="40" x2="35" y2="65" stroke="hsl(45, 85%, 55%)" strokeWidth="1" opacity="0.5" />
                      <line x1="50" y1="40" x2="75" y2="60" stroke="hsl(27, 79%, 53%)" strokeWidth="1" opacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Question Mark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-primary animate-pulse-glow">
                ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythSection;
