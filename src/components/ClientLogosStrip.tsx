import { cn } from "@/lib/utils";

/** Shared client logo strip — same assets as Homepage trust section. */
const DEFAULT_CLIENTS = [
  { name: "Clalit", logo: "clalit.png" },
  { name: "Tambour", logo: "tambour.png" },
  { name: "Ormat", logo: "ormat.png" },
  { name: "Elbit Systems", logo: "elbit.png" },
  { name: "Kornit Digital", logo: "kornit.png" },
  { name: "The Joint", logo: "the-joint.png", className: "invert" },
  { name: "Bank Hapoalim", logo: "poalim.png" },
  { name: "IDF", logo: "idf.jfif" },
  { name: "Ministry of Justice", logo: "Ministry_of_Justice.png" },
  { name: "Dexcel Pharma", logo: "dexcel.png" },
  { name: "Lahav Executive Education", logo: "lahav.png" },
  { name: "Lycored", logo: "lycored.png" },
];

type ClientLogosStripProps = {
  title: string;
  titleClassName?: string;
  clients?: typeof DEFAULT_CLIENTS;
};

export function ClientLogosStrip({ title, titleClassName, clients = DEFAULT_CLIENTS }: ClientLogosStripProps) {
  return (
    <div className="py-10 md:py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p
          className={cn(
            "mx-auto mb-8 max-w-4xl text-sm font-semibold leading-snug tracking-wide text-[#1B365D]/80 md:mb-10 md:text-base",
            titleClassName,
          )}
        >
          {title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4 max-w-6xl mx-auto">
          {clients.map((client, i) => (
            <div key={i} className="w-24 md:w-32 h-14 md:h-16 flex items-center justify-center group">
              <img
                src={`/logos/${client.logo}`}
                alt={client.name}
                className={`max-h-full max-w-full object-contain transition-all duration-300 opacity-90 hover:opacity-100 ${client.className || ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
