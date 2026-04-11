import { useState, useEffect } from "react";
import imgHero1 from "../../imports/HomePage-2/cad2bc5d0fa327ce749e88df3bdc57cd9a4f6413.png";
import imgHero2 from "../../imports/HomePage-2/5d9eed72d6cd2f3ee69ab66814d0fdf5a3771aa2.png";
import imgHero3 from "../../imports/HomePage-2/64dffa7fc8cc5b3f272c4c358faadd3931d3d495.png";
import imgLogo from "../../imports/HomePage-2/43b62430074079a9654dbf1140aa0ddcf45b556e.png";

const banners = [
  {
    title: "מכונת הקפה במצוקה?",
    subtitle: "טיפול מהיר ומקצועי לשדרוג המכונה, והקפה הבא שלכם",
    cta: "לתיקון מהיר במעבדה שלנו",
    accent: "#c03001",
    image: imgHero1,
  },
  {
    title: "רוצים לשדרג את הקפה הביתי שלכם?",
    subtitle: 'שיקום ושדרוג מכונה פלוס 2 ק"ג פולים איכותיים במתנה!',
    cta: "למבצע הקפה המושלם",
    accent: "#c46500",
    image: imgHero2,
  },
  {
    title: "מכונת אספרסו מצוינת לכוס הקפה המושלמת",
    subtitle: "מכירה בליווי אישי – עד כוס הקפה שמתאימה, בדיוק לכם.",
    cta: "למציאת המכונה המושלמת",
    accent: "#522c25",
    image: imgHero3,
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
      setAnimKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDot = (i: number) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  const banner = banners[active];

  return (
    <section className="bg-[#febf6f] p-[15px]">
      {/* Tagline bar */}
      <div className="text-center py-3 mb-[15px]">
        <p className="font-['Dialect_PM',sans-serif] text-[#522c25] text-[25px] tracking-[0.6px]">
          <span className="font-['Dialect_PM',sans-serif] font-bold text-[25px]">ESPRESSIMO – The Art Of Coffee</span>
          {"  ·  "}
          מכירה | תיקון | ליווי עד הקפה המושלם
        </p>
      </div>

      <div className="relative rounded-[22px] overflow-hidden w-full h-[70vh]">
        {/* Background image with entry animation */}
        <img
          key={`bg-${active}`}
          src={banner.image}
          alt="בריסטה"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroBgEntry 0.7s ease-out forwards" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Logo */}
        <div className="absolute top-[38px] right-[37px]">
          <img src={imgLogo} alt="אספרסימו" className="h-[70px] w-auto" />
        </div>

        {/* Banner content with entry animation */}
        <div className="absolute inset-0 flex items-center justify-end px-16" dir="rtl">
          <div
            key={animKey}
            className="max-w-[580px]"
            style={{ animation: "heroTextEntry 0.55s ease-out forwards" }}
          >
            <h1
              className="font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] text-[78px] leading-[1.15] text-white mb-4"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
            >
              {banner.title}
            </h1>
            <p className="font-['Dialect_PM',sans-serif] text-white/90 text-[25px] leading-[2] mb-8">
              {banner.subtitle}
            </p>
            <button
              className="px-7 py-3 rounded text-[32px] tracking-[0.07em] uppercase font-['Dialect_PM',sans-serif] text-white transition-opacity hover:opacity-90"
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
              onClick={() => handleDot(i)}
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
