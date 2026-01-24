import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';
  
  const content = {
    en: {
      title: "Our Platform Suite",
      subtitle: "Everything you need to orchestrate a networked organization",
      products: [
        {
          id: "agent",
          tag: "AI Implementation",
          title: "The Collab Agent",
          headline: "Closing the Gap with AI",
          desc: "Strategy often fails in execution. Our Collab Agent integrates directly into MS Teams to provide real-time 'Connectivity Nudges'. It helps employees build the right relationships at the right time.",
          features: [
             "Identifies disconnected teams automatically",
             "Suggests relevant introductions based on skills",
             "Promotes cross-silo collaboration"
          ],
          image: "/product-agent.png", // השם המקורי שביקשתי
          cta: "See the Agent in Action"
        },
        {
          id: "ona",
          tag: "Network Intelligence",
          title: "Advanced ONA Mapping",
          headline: "See Your Organization X-Ray",
          desc: "Stop guessing who your key players are. Our Organizational Network Analysis (ONA) reveals the invisible structure of your company. Find the 'Hidden Heroes' who hold the culture together.",
          features: [
             "Visualize real collaboration flows",
             "Detect burnout and flight risk early",
             "Map expertise beyond formal titles"
          ],
          image: "/product-ona.png", // השם המקורי שביקשתי
          cta: "Explore Network Mapping"
        },
         {
          id: "program",
          tag: "Capacity Building",
          title: "Leadership Strategy Lab",
          headline: "Developing Network Leadership",
          desc: "A structured methodology to train managers in the 6 Core Network Capabilities. We move leaders from 'Command and Control' to 'Connect and Collaborate'.",
          features: [
             "Trust & Psychological Safety modules",
             "Influence & Political Savvy training",
             "Adaptive decision-making simulations"
          ],
          image: "/product-program.png", // השם המקורי שביקשתי
          cta: "View Syllabus"
        },
        {
          id: "profile",
          tag: "Personal Growth",
          title: "Personal Diagnostics",
          headline: "Know Your Network Identity",
          desc: "Every employee receives a personal profile outlining their network strengths (e.g., 'Bridge', 'Hub') and specific areas for improvement.",
          features: [
             "Personalized strength reports",
             "Benchmarking against industry standards",
             "Actionable growth path"
          ],
          image: "/product-profile.png", // השם המקורי שביקשתי
          cta: "Start Assessment"
        }
      ]
    },
    he: {
      title: "חליפת הפתרונות שלנו",
      subtitle: "כל הכלים הנדרשים לניהול ארגון רשתי מחובר",
      products: [
        {
          id: "agent",
          tag: "הטמעה ו-AI",
          title: "סוכן הקולבורציה (Collab Agent)",
          headline: "סוגרים את הפער בין אסטרטגיה לביצוע",
          desc: "רוב האסטרטגיות נכשלות בביצוע. הסוכן שלנו מתממשק ישירות ל-Teams ומספק 'דחיפות' (Nudges) בזמן אמת. הוא עוזר לעובדים לבנות את הקשרים הנכונים בזמן הנכון.",
          features: [
             "זיהוי אוטומטי של צוותים מנותקים",
             "הצעות לחיבורים רלוונטיים על בסיס כישורים",
             "עידוד שיתופי פעולה חוצי-ארגון"
          ],
          image: "/product-agent.png",
          cta: "ראו את הסוכן בפעולה"
        },
        {
          id: "ona",
          tag: "מודיעין רשתי",
          title: "מיפוי רשתי מתקדם (ONA)",
          headline: "רנטגן של הארגון בזמן אמת",
          desc: "הפסיקו לנחש מי הם אנשי המפתח. הניתוח הרשתי שלנו חושף את המבנה הבלתי נראה של הארגון. גלו את 'הגיבורים הנסתרים' שמחזיקים את התרבות.",
          features: [
             "ויזואליזציה של זרימת העבודה האמיתית",
             "זיהוי מוקדם של שחיקה וסיכוני עזיבה",
             "מיפוי מומחיות מעבר להגדרות התפקיד"
          ],
          image: "/product-ona.png",
          cta: "גלו את המיפוי"
        },
        {
          id: "program",
          tag: "בניית יכולות",
          title: "התוכנית לפיתוח מנהלים",
          headline: "פיתוח מנהיגות רשתית",
          desc: "מתודולוגיה מובנית להכשרת מנהלים ב-6 יכולות הליבה הרשתיות. אנו מעבירים מנהלים מתפיסת 'שליטה ובקרה' ל'חיבור ושיתוף'.",
          features: [
             "מודולות לבניית אמון וביטחון פסיכולוגי",
             "אימון להשפעה וניהול פוליטיקה ארגונית",
             "סימולציות לקבלת החלטות במצבי אי-וודאות"
          ],
          image: "/product-program.png",
          cta: "לסילבוס המלא"
        },
        {
          id: "profile",
          tag: "צמיחה אישית",
          title: "אבחון אישי",
          headline: "גלה את הזהות הרשתית שלך",
          desc: "כל עובד מקבל פרופיל אישי המפרט את החוזקות הרשתיות שלו (למשל: 'גשר', 'רכזת') ותוכנית עבודה לשיפור.",
          features: [
             "דוחות חוזקות מותאמים אישית",
             "השוואה (Benchmark) לנתוני שוק",
             "מסלול צמיחה פרקטי"
          ],
          image: "/product-profile.png",
          cta: "התחל אבחון"
        }
      ]
    }
  };

  const t = isRTL ? content.he : content.en;

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">{t.title}</h2>
          <p className="text-xl text-gray-500 font-light">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-32">
          {t.products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? (isRTL ? 'lg:flex-row' : 'lg:flex-row-reverse') : (isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row')
              }`}
            >
              {/* טקסט */}
              <div className="flex-1 space-y-8">
                <div>
                    <span className="text-[#E87722] font-bold tracking-wider uppercase text-sm mb-2 block">{product.tag}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-4 leading-tight">
                    {product.headline}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                    {product.desc}
                    </p>
                </div>
                
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#1B365D]" />
                      </div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-[#1B365D] hover:bg-[#2a4d80] text-white px-8 h-12 rounded-lg text-base shadow-lg hover:shadow-xl transition-all">
                  {product.cta}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
              </div>

              {/* תמונה */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl p-2 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                   <div className="rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center bg-gray-50 aspect-video">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          // במקרה שהתמונה עדיין לא שם, נראה הודעה ברורה
                          e.currentTarget.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center h-full p-8 text-center"><p class="text-gray-400 font-medium">Please upload image:</p><code class="text-sm text-[#E87722] mt-2 font-mono bg-orange-50 px-2 py-1 rounded">${product.image}</code></div>`;
                        }}
                      />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;