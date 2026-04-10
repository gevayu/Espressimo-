import { useState, useEffect } from "react";
import imgHero from "../../imports/HomePage-2/cad2bc5d0fa327ce749e88df3bdc57cd9a4f6413.png";
import imgLogo from "../../imports/HomePage-2/43b62430074079a9654dbf1140aa0ddcf45b556e.png";

const banners = [
  {
    title: "מכונת הקפה במצוקה?",
    subtitle: "טיפול מהיר ומקצועי לשדרוג המכונה, והקפה הבא שלכם",
    cta: "לתיקון מהיר במעבדה שלנו",
    accent: "#c03001",
  },
  {
    title: "רוצים לשדרג את הקפה הביתי שלכם?",
    subtitle: 'שיקום ושדרוג מכונה פלוס 2 ק"ג פולים איכותיים במתנה!',
    cta: "למבצע הקפה המושלם",
    accent: "#c46500",
  },
  {
    title: "מכונת אספרסו מצוינת לכוס הקפה המושלמת",
    subtitle: "מכירה בליווי אישי – עד כוס הקפה שמתאימה, בדיוק לכם.",
    cta: "למציאת המכונה המושלמת",
    accent: "#522c25",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[active];

  return (
    <section className="bg-[#febf6f] p-[15px]">
      {/* Tagline bar */}
      <div className="text-center py-3 mb-[15px]">
        <p className="font-['Dialect_PM',sans-serif] text-[#522c25] text-[13px] tracking-[0.6px]">
          <span className="font-['Polin',sans-serif] font-bold text-[15px]">ESPRESSIMO – The Art Of Coffee</span>
          {"  ·  "}
          מכירה | תיקון | ליווי עד הקפה המושלם
        </p>
      </div>

      <div className="relative rounded-[22px] overflow-hidden w-full aspect-[1875/960]">
        <img src={imgHero} alt="בריסטה" className="absolute inset-0 w-full h-full object-cover" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Logo */}
        <div className="absolute top-[38px] right-[37px]">
          <img src={imgLogo} alt="אספרסימו" className="h-[70px] w-auto" />
        </div>

        {/* Banner content */}
        <div className="absolute inset-0 flex items-center justify-end px-16" dir="rtl">
          <div className="max-w-[580px]">
            <h1
              className="font-['Polin',sans-serif] text-[52px] leading-[1.15] text-white mb-4"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
            >
              {banner.title}
            </h1>
            <p className="font-['Dialect_PM',sans-serif] text-white/90 text-[18px] leading-[1.5] mb-8">
              {banner.subtitle}
            </p>
            <button
              className="px-7 py-3 rounded text-[13px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: banner.accent }}
            >
              {banner.cta}
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === active ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
