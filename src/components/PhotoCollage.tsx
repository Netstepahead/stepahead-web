// סט תמונות קבועות (Unsplash)
const professionals = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300", 
      alt: "Executive",
      position: "top-[20%] left-[20%]",
      size: "w-24 h-24 md:w-28 md:h-28",
      rotation: "-rotate-2",
      delay: "0s",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300", 
      alt: "Tech Lead",
      position: "top-[15%] right-[25%]",
      size: "w-24 h-24 md:w-28 md:h-28",
      rotation: "rotate-2",
      delay: "0.5s",
    },
    {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Innovator",
      position: "top-[50%] left-[10%]",
      size: "w-24 h-24 md:w-28 md:h-28",
      rotation: "rotate-1",
      delay: "1s",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "Consultant",
      position: "top-[48%] right-[15%]",
      size: "w-24 h-24 md:w-28 md:h-28",
      rotation: "-rotate-2",
      delay: "1.5s",
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
      alt: "HR Specialist",
      position: "bottom-[20%] left-[40%]",
      size: "w-24 h-24 md:w-28 md:h-28",
      rotation: "rotate-3",
      delay: "2s",
    },
  ]
  
  export function PhotoCollage() {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {professionals.map((professional, index) => (
          <div
            key={index}
            className={`absolute ${professional.position} ${professional.rotation} animate-float z-10`}
            style={{ 
              animationDelay: professional.delay,
              animationDuration: `${5 + index * 0.3}s`
            }}
          >
            <div className="relative group">
              {/* אפקט הילה */}
              <div className="absolute -inset-2 bg-white/60 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* שינוי: מסגרת דקה יותר (border-2) */}
              <div className={`relative ${professional.size} rounded-2xl overflow-hidden border-2 border-white shadow-[0_8px_30px_rgb(0_0_0/0.12)]`}>
                <img
                  src={professional.src}
                  alt={professional.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }