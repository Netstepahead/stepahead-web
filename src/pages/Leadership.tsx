import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, Lightbulb, Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClientLogosStrip } from "@/components/ClientLogosStrip";

const CAROUSEL_IMAGES = [
  "/academy_carousel/workshop1.jpeg",
  "/academy_carousel/workshop2.jpeg",
  "/academy_carousel/workshop3.jpeg",
] as const;

const PLACEHOLDER_ICONS = [Brain, Lightbulb, Dices] as const;

type BadgeKind = "network" | "accelium";

type Workshop = {
  id: number;
  title: string;
  shortDesc: string;
  syllabus: string;
  image?: string;
  placeholderIndex?: number;
  badge: BadgeKind;
};

const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    badge: "network",
    title: "מנהיגות רשתית בעידן של שינוי",
    shortDesc:
      "כולל אבחון אישי באמצעות שאלון הטיפוסים הרשתיים. פיתוח מנהיגות מבוססת רשתות בתזמון שינויים ארגוניים.",
    image: CAROUSEL_IMAGES[0],
    syllabus: `מטרות: חשיפת דפוסי השפעה וקשרים בפועל, תרגום מודלים אסטרטגיים לפעולה יומיומית.

תוכן עיקרי:
• מיפוי מיקום המנהל ברשת הארגונית וזיהוי נקודות עיוורון
• שאלון טיפוסים רשתיים ומשוב אישי (אבחון)
• תרגול תרחישים: שינוי מבנה, מיזוג צוותים, ולחץ ביצועים
• סיכום והטמעה: מפת פעולה אישית לצוות

פורמט: פרונטלי או דיגיטלי (Zoom/Teams), משך מותאם לפי צורך.`,
  },
  {
    id: 2,
    badge: "network",
    title: 'פתרון בעיות מורכבות בעזרת "קשרים חלשים"',
    shortDesc:
      "כלים לזיהוי וניצול חיבורים חלשים לפתרון אתגרים מורכבים ולשיתוף ידע מחוץ למעגל הכרות היומיומי.",
    image: CAROUSEL_IMAGES[1],
    syllabus: `מטרות: הרחבת גישה לידע ומומחיות, קיצור זמן לפתרון, והפחתת קיבעון קוגניטיבי.

תוכן עיקרי:
• מושג הקשר החלש (Weak Ties) ויישומו בארגון
• מיפוי מקורות מידע וגשרים בין יחידות
• תרגול מבוסס-מקרים: מצבי קצה ואי-ודאות
• כלים מעשיים לשיחות חוצות-ארגון

פורמט: פרונטלי או דיגיטלי, כולל דגשים אינטראקטיביים.`,
  },
  {
    id: 3,
    badge: "network",
    title: "בניית גשרים אסטרטגיים ופירוק סילוסים",
    shortDesc:
      "בניית גשרים בין מחלקות, פירוק סילוסים ויישור קו אסטרטגי בין הנהלה לשטח.",
    image: CAROUSEL_IMAGES[2],
    syllabus: `מטרות: יצירת זרימת מידע ואמון בין ממשקים, והפחתת כפילויות וחיכוך.

תוכן עיקרי:
• אבחון ממשקים שבורים (Structural Holes) ומיפוי מנהלים
• תכנון גשרים ופורומים מקצועיים
• תרגול משא ומתן ומיפוי אינטרסים
• מדדי מעקב ומחזור שיפור

פורמט: סדנה מודולרית, ניתן לשלב משחקים וסימולציות.`,
  },
  {
    id: 4,
    badge: "accelium",
    title: "חשיבה יצירתית וחדשנות מבוססת משחק",
    shortDesc:
      "סדנאות חווייתיות לחדשנות מונעת על ידי משחק ודמויות — לצוותי מוצר, שיווק וניהול.",
    placeholderIndex: 0,
    syllabus: `מטרות: חיזוק גמישות מחשבתית, יצירתיות מבוססת-משימה, והתנסות מהירה בבחינת רעיונות.

תוכן עיקרי:
• מסגרות משחק לחילוץ רעיונות ולשיתוף ידע
• עבודה בצוותים קטנים עם משוב מובנה
• מיפוי מכשולים לחדשנות בארגון שלכם
• סיכום לספריית רעיונות ופיילוטים

מופעל על ידי כלים ומתודולוגיות Accelium. פורמט: פרונטלי או דיגיטלי.`,
  },
  {
    id: 5,
    badge: "accelium",
    title: "אג'יליות וגמישות מחשבתית למנהלים",
    shortDesc:
      "מיומנויות הסתגלות, למידה מהירה ומסגורי לולאה בזמן אמת — למנהלים בזמן שינוי.",
    placeholderIndex: 1,
    syllabus: `מטרות: חיזוק גמישות קוגניטיבית, ניהול עומסי שינוי, וקבלת החלטות תחת תנאי לא-ודאות.

תוכן עיקרי:
• מודלים להתמודדות עם דרישות סותרות
• תרגול מבוסס-תרחישים (משחקים וסימולציות קצרות)
• כלים לתקשורת מדויקת בזמן שינוי
• תוכנית המשך אישית למנהלים

מופעל בטכנולוגיית Accelium. פורמט: פרונטלי או דיגיטלי.`,
  },
  {
    id: 6,
    badge: "accelium",
    title: "קבלת החלטות בתנאי אי ודאות",
    shortDesc:
      "מסגרות מודלים, הערכת סיכונים וקבלת החלטות איכותיות כשהנתונים חלקיים או מתנגשים.",
    placeholderIndex: 2,
    syllabus: `מטרות: שיפור איכות ההחלטות, הפחתת הטיה, ושקיפות מול בעלי עניין.

תוכן עיקרי:
• מיפוי אי-ודאות וסוגי מידע חסר
• שימוש במשחקים מבוססי-דמות לבחינת אלטרנטיבות
• פרוטוקולי החלטה בצוות
• סיכום: מדריך החלטה לשימוש חוזר

מופעל בטכנולוגיית Accelium. פורמט: פרונטלי או דיגיטלי.`,
  },
];

function Badge({ kind }: { kind: BadgeKind }) {
  if (kind === "network") {
    return (
      <span className="inline-flex items-center rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1 text-xs font-semibold text-blue-900 tracking-wide">
        Network Mindset
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200/90 bg-amber-50/90 px-3 py-1 text-xs font-semibold text-amber-950 tracking-wide">
      Powered by Accelium 🎲
    </span>
  );
}

function ImageOrPlaceholder({ workshop }: { workshop: Workshop }) {
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
  const { isRTL } = useLanguage();
  const [openWorkshop, setOpenWorkshop] = useState<Workshop | null>(null);

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
                סדנאות פיתוח מנהיגות ו-Power Skills
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                מפתחים &apos;תפיסת רשת&apos; ואג&apos;יליות מחשבתית למנהלים וצוותי מפתח, באמצעות למידה חווייתית מבוססת-נתונים ומשחק.
              </p>
              <Button
                type="button"
                onClick={scrollToCatalog}
                className="rounded-xl bg-[#E87722] px-8 py-6 text-lg text-white hover:bg-[#d66a1a]"
              >
                לצפייה בקטלוג הסדנאות
              </Button>
            </div>
            <div className="w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <div className="aspect-square w-full md:aspect-[4/3]">
                <img
                  src="/workshop-hero.jfif"
                  className="h-full w-full object-cover"
                  alt="סדנאות מנהיגות"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogosStrip title="הסדנאות שלנו מניעות קדימה את הארגונים המובילים במשק" />

      {/* Catalog */}
      <section id="workshops-catalog" className="scroll-mt-24 bg-slate-50/80 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] md:text-4xl">קטלוג הסדנאות</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Power Skills ומנהיגות רשתית — מותאמים לצוותי הנהלה ומפתחים
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((w) => (
              <article
                key={w.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <ImageOrPlaceholder workshop={w} />
                <div className="flex flex-1 flex-col p-5 text-start">
                  <div className="mb-3">
                    <Badge kind={w.badge} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-snug text-[#1A2E44]">{w.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">{w.shortDesc}</p>
                  <p className="mb-4 text-xs text-slate-500">📍 פרונטלי | 💻 דיגיטלי</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-auto w-full border-[#1B365D]/20 text-[#1B365D] hover:bg-[#1B365D]/5"
                    onClick={() => setOpenWorkshop(w)}
                  >
                    קרא עוד
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible learning */}
      <section className="border-y border-slate-200/80 bg-white py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-[#1B365D] md:text-3xl">למידה גמישה במעורבות שיא</h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            כל תוכניות הפיתוח שלנו זמינות בפורמט פרונטלי או כסדנאות דיגיטליות (Zoom/Teams). אנו משתמשים בפלטפורמות אינטראקטיביות שמבטיחות חוויית משתמש ורמת מעורבות (Engagement) חסרת פשרות.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B365D] py-16 text-white md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">בואו נבנה את ההכשרה המדויקת לצוות שלכם</h2>
          <Button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-8 rounded-xl bg-[#E87722] px-10 py-6 text-lg text-white hover:bg-[#d66a1a]"
          >
            לשיחת ייעוץ אישית
          </Button>
        </div>
      </section>

      <Dialog open={!!openWorkshop} onOpenChange={(o) => !o && setOpenWorkshop(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-slate-200/80 bg-white text-right shadow-2xl sm:rounded-2xl" dir="rtl">
          {openWorkshop && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#1B365D] md:text-2xl">
                  {openWorkshop.title}
                </DialogTitle>
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
