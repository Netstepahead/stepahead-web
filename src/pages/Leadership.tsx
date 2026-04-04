import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Puzzle, Waypoints } from "lucide-react";
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

/** Academy carousel — cards 1–3 (Network Mindset workshops). */
const ACADEMY_CAROUSEL_IMAGES = [
  "/academy_carousel/workshop1.jpeg",
  "/academy_carousel/workshop2.jpeg",
  "/academy_carousel/workshop3.jpeg",
] as const;

/** First 3 images from Homepage leadership carousel (Index — pillar 1). Cards 4–6 (Power Skills). */
const HOME_LEADERSHIP_CAROUSEL_IMAGES = [
  "/carousel/485136809_1241810007947886_5355771345522948267_n.jpg",
  "/carousel/70380459_123570912362931_6421992094918770688_n.jpg",
  "/carousel/PXL_20220918_083347381.jpg",
] as const;

/** Flexible learning section — `public/online_workshop.png`. */
const ONLINE_WORKSHOP_IMAGE = "/online_workshop.png";

type BadgeKind = "network" | "powerSkills";

type WorkshopView = {
  id: number;
  title: string;
  shortDesc: string;
  syllabus: string;
  image: string;
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

function WorkshopCardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const imgSrc = failed ? "/placeholder.svg" : src;
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100">
      <img
        src={imgSrc}
        alt={alt}
        className="h-full w-full object-cover object-center"
        onError={() => setFailed(true)}
      />
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
      const image = isNetwork
        ? ACADEMY_CAROUSEL_IMAGES[id - 1]
        : HOME_LEADERSHIP_CAROUSEL_IMAGES[id - 4];
      return {
        id,
        badge: isNetwork ? "network" : "powerSkills",
        image,
        title: t(`leadership.workshop.${id}.title`),
        shortDesc: t(`leadership.workshop.${id}.shortDesc`),
        syllabus: t(`leadership.workshop.${id}.syllabus`),
      };
    });
  }, [t, language]);

  const defaultDocumentTitle = "StepAhead | Network Development & Leadership";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  useEffect(() => {
    document.title = `${t("leadership.hero.title")} | StepAhead`;
    return () => {
      document.title = defaultDocumentTitle;
    };
  }, [t, language]);

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
              <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
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

      {/* Technology — compact icon strip */}
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-lg font-semibold tracking-tight text-[#1B365D] md:mb-8 md:text-xl">
            {t("leadership.tech.sectionTitle")}
          </h2>
          <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-6">
            <div className="flex items-center gap-4 rounded-xl border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E87722]/12 text-[#E87722]">
                <Waypoints className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="text-start text-sm font-medium leading-snug text-slate-800 md:text-[15px]">
                {t("leadership.tech.ona.label")}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1B365D]/10 text-[#1B365D]">
                <Puzzle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="text-start text-sm font-medium leading-snug text-slate-800 md:text-[15px]">
                {t("leadership.tech.game.label")}
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <WorkshopCardImage src={w.image} alt={w.title} />
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
            <div className="space-y-4 text-start">
              <h2 className="text-2xl font-bold text-[#1B365D] md:text-3xl">{t("leadership.flexible.title")}</h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">{t("leadership.flexible.body")}</p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md">
              <div className="aspect-[4/3] w-full lg:aspect-video">
                <img
                  src={ONLINE_WORKSHOP_IMAGE}
                  alt={t("leadership.flexible.imageCaption")}
                  className="h-full w-full object-cover object-center"
                />
              </div>
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
            "text-start",
          )}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {openWorkshop && (
            <>
              <DialogHeader>
                <DialogTitle className="text-start text-xl font-bold text-[#1B365D] md:text-2xl">
                  {openWorkshop.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-3 text-start text-base leading-relaxed text-slate-700 md:leading-[1.65]">
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
