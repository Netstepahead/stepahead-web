import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Lightbulb, Dices, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClientLogosStrip } from "@/components/ClientLogosStrip";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const CAROUSEL_IMAGES = [
  "/academy_carousel/workshop1.jpeg",
  "/academy_carousel/workshop2.jpeg",
  "/academy_carousel/workshop3.jpeg",
] as const;

const PLACEHOLDER_ICONS = [Brain, Lightbulb, Dices] as const;

type BadgeKind = "network" | "powerSkills";

type WorkshopView = {
  id: number;
  title: string;
  shortDesc: string;
  syllabus: string;
  image?: string;
  placeholderIndex?: number;
  badge: BadgeKind;
};

function Badge({ kind, label }: { kind: BadgeKind; label: string }) {
  const isNetwork = kind === "network";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        isNetwork
          ? "border-blue-200/90 bg-blue-50/90 text-blue-900"
          : "border-amber-200/90 bg-amber-50/90 text-amber-950",
      )}
    >
      {label}
    </span>
  );
}

function ImageOrPlaceholder({ workshop }: { workshop: WorkshopView }) {
  if (workshop.image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
        <img
          src={workshop.image}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }
  const Icon = PLACEHOLDER_ICONS[workshop.placeholderIndex ?? 0];
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center rounded-t-2xl bg-gradient-to-br from-slate-100 via-[#f0f4f8] to-[#e2e8f0]">
      <Icon className="h-14 w-14 text-slate-400/90" strokeWidth={1.25} aria-hidden />
    </div>
  );
}

const Leadership = () => {
  const navigate = useNavigate();
  const { t, isRTL, language } = useLanguage();
  const [openWorkshop, setOpenWorkshop] = useState<WorkshopView | null>(null);

  const workshops = useMemo((): WorkshopView[] => {
    return [1, 2, 3, 4, 5, 6].map((id) => {
      const isNetwork = id <= 3;
      return {
        id,
        badge: isNetwork ? "network" : "powerSkills",
        image: isNetwork ? CAROUSEL_IMAGES[id - 1] : undefined,
        placeholderIndex: !isNetwork ? id - 4 : undefined,
        title: t(`leadership.workshop.${id}.title`),
        shortDesc: t(`leadership.workshop.${id}.shortDesc`),
        syllabus: t(`leadership.workshop.${id}.syllabus`),
      };
    });
  }, [t, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const scrollToCatalog = () => {
    document.getElementById("workshops-catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="bg-[#F9F8F4] pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 pb-8 lg:grid-cols-2 lg:gap-12 lg:pb-12">
            <div className="flex flex-col items-start text-start">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {t("leadership.hero.title")}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                {t("leadership.hero.subtitle")}
              </p>
              <Button
                type="button"
                onClick={scrollToCatalog}
                className="rounded-xl bg-[#E87722] px-8 py-6 text-lg text-white hover:bg-[#d66a1a]"
              >
                {t("leadership.hero.cta")}
              </Button>
            </div>
            <div className="w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <div className="aspect-square w-full md:aspect-[4/3]">
                <img
                  src="/workshop-hero.jfif"
                  className="h-full w-full object-cover"
                  alt={t("leadership.hero.imageAlt")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogosStrip title={t("leadership.logosTitle")} />

      {/* Catalog */}
      <section id="workshops-catalog" className="scroll-mt-24 bg-slate-50/80 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] md:text-4xl">{t("leadership.catalog.title")}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t("leadership.catalog.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workshops.map((w) => (
              <article
                key={w.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <ImageOrPlaceholder workshop={w} />
                <div className="flex flex-1 flex-col p-5 text-start">
                  <div className="mb-3">
                    <Badge
                      kind={w.badge}
                      label={
                        w.badge === "network"
                          ? t("leadership.badge.networkMindset")
                          : t("leadership.badge.powerSkills")
                      }
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-snug text-[#1A2E44]">{w.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">{w.shortDesc}</p>
                  <p className="mb-4 text-xs text-slate-500">{t("leadership.cardFormat")}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-auto w-full border-[#1B365D]/20 text-[#1B365D] hover:bg-[#1B365D]/5"
                    onClick={() => setOpenWorkshop(w)}
                  >
                    {t("leadership.readMore")}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible learning — split layout */}
      <section className="border-y border-slate-200/80 bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className={cn("space-y-4", isRTL ? "text-right lg:text-right" : "text-left")}>
              <h2 className="text-2xl font-bold text-[#1B365D] md:text-3xl">{t("leadership.flexible.title")}</h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">{t("leadership.flexible.body")}</p>
            </div>
            <div className="relative flex min-h-[220px] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-sm lg:min-h-[280px]">
              <Video className="h-12 w-12 shrink-0 text-slate-400/90 md:h-14 md:w-14" strokeWidth={1.25} aria-hidden />
              <p className="max-w-xs text-center text-sm leading-snug text-slate-500">{t("leadership.flexible.imageCaption")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B365D] py-16 text-white md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">{t("leadership.cta.title")}</h2>
          <Button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-8 rounded-xl bg-[#E87722] px-10 py-6 text-lg text-white hover:bg-[#d66a1a]"
          >
            {t("leadership.cta.button")}
          </Button>
        </div>
      </section>

      <Dialog open={!!openWorkshop} onOpenChange={(o) => !o && setOpenWorkshop(null)}>
        <DialogContent
          className={cn(
            "max-h-[90vh] max-w-2xl overflow-y-auto border-slate-200/80 bg-white shadow-2xl sm:rounded-2xl",
            isRTL ? "text-right" : "text-left",
          )}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {openWorkshop && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#1B365D] md:text-2xl">{openWorkshop.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-2 space-y-4 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {openWorkshop.syllabus}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Leadership;
