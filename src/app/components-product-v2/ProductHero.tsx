import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, ZoomIn, Phone, ShoppingCart, Star, Truck, Shield, RotateCcw, Lock } from "lucide-react";

const images = [
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10-800x800.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-טוחנת-יורה-JURA-Z10-800x800.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-JURA-Z10-800x800.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/Jura-Z10-800x800.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-טחנת-JURA-Z10-800x800.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-צבע-לבן-יהלום-800x800.jpg",
];

const colors = [
  { label: "שחור יהלום", value: "#1c1c1c" },
  { label: "כסף פלטינום", value: "#b0b8c0" },
  { label: "לבן קרם", value: "#f0ece4" },
];

const trust = [
  { icon: Truck, text: "משלוח חינם" },
  { icon: Shield, text: "אחריות 2 שנה" },
  { icon: RotateCcw, text: "החזרה 30 יום" },
  { icon: Lock, text: "תשלום מאובטח" },
];

const testimonials = [
  { text: "המכונה הכי טובה שהיתה לי — כוס אחר כוס מושלמת", name: "יואב ל׳" },
  { text: "שירות JURA Z10 לא מתפשר. קפה כמו בבר", name: "מיכל כ׳" },
  { text: "הציג לי את הקפה שתמיד חיפשתי בבית", name: "רן ד׳" },
  { text: "Cold Brew ישיר מהמכונה — שינה את שגרת הבוקר שלי", name: "שירה מ׳" },
  { text: "קניית Z10 הייתה ההחלטה הכי טובה שעשיתי", name: "אסף ב׳" },
];

function TestimonialRotator() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % testimonials.length);
        setVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const q = testimonials[idx];
  return (
    <div className="border border-[#e6dad4] rounded-xl bg-[#f6ede3] px-5 py-3.5 flex items-center gap-3 min-h-[52px]">
      <span className="text-[#c46500] text-[16px]">★</span>
      <div
        className="flex-1 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-75">״{q.text}״</span>
        <span className="text-[#522c25] text-[13px] font-['Dialect_PM',sans-serif] opacity-40 mr-2">— {q.name}</span>
      </div>
      <div className="flex gap-1">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => { setIdx(i); setVisible(true); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-[#c46500]" : "bg-[#d4c4bc]"}`} />
        ))}
      </div>
    </div>
  );
}

export function ProductHero({ onScrolledPast }: { onScrolledPast: (v: boolean) => void }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);

  const prev = () => setActive((a) => Math.max(a - 1, 0));
  const next = () => setActive((a) => Math.min(a + 1, images.length - 1));

  return (
    <div ref={heroRef} className="flex items-stretch border-b border-[#e6dad4]" dir="rtl">

      {/* ── Gallery (right in RTL) ── */}
      <div className="w-[52%] shrink-0 border-l border-[#e6dad4] sticky top-[68px] flex flex-col" style={{ height: "calc(100vh - 68px)" }}>

        {/* Main image */}
        <div className="relative bg-[#f6ede3] overflow-hidden flex-1">
          <img
            key={active}
            src={images[active]}
            alt={`JURA Z10 תמונה ${active + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={() => setZoom(!zoom)}
            style={{ animation: "heroTextEntry 0.35s ease-out forwards" }}
          />

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">
            {active + 1} / {images.length}
          </div>

          {/* Zoom hint */}
          <button onClick={() => setZoom(!zoom)} className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <ZoomIn size={16} className="text-[#522c25]" />
          </button>

          {/* Arrows */}
          {active > 0 && (
            <button onClick={prev} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
              <ChevronRight size={18} className="text-[#522c25]" />
            </button>
          )}
          {active < images.length - 1 && (
            <button onClick={next} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
              <ChevronLeft size={18} className="text-[#522c25]" />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex border-t border-[#e6dad4]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setZoom(false); }}
              className={`flex-1 aspect-square bg-[#f6ede3] border-l border-[#e6dad4] first:border-l-0 overflow-hidden transition-all ${
                i === active ? "ring-2 ring-inset ring-[#c46500]" : "opacity-40 hover:opacity-70"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply p-2" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Info panel (left in RTL) ── */}
      <div className="flex-1 px-12 py-10 flex flex-col gap-5 overflow-y-auto" style={{ maxHeight: "calc(100vh - 68px)" }}>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#c46500] text-[20px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.08em] uppercase">JURA</span>
          <span className="w-1 h-1 rounded-full bg-[#d4c4bc]" />
          <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-55">מכונת קפה אוטומטית</span>
          <span className="bg-[#8B3A00] text-white text-[14px] font-['Dialect_PM',sans-serif] px-3 py-0.5 rounded-full">במלאי</span>
          <span className="bg-[#c46500]/15 text-[#c46500] text-[14px] font-['Dialect_PM',sans-serif] px-3 py-0.5 rounded-full">משלוח חינם</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-[#522c25] text-[58px] leading-[1.05] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">JURA Z10</h1>
          <p className="text-[#522c25] text-[24px] leading-[1.5] font-['Dialect_PM',sans-serif] opacity-60 mt-2">
            מכונת אספרסו אוטומטית מקצועית לבית, במחיר של מכונה ביתית.
          </p>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => <Star key={s} size={17} className="fill-[#c46500] text-[#c46500]" />)}
          </div>
          <a href="#reviews" className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-55 hover:opacity-100 underline underline-offset-2">
            4.9 · 38 ביקורות
          </a>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-4 border-y border-[#e6dad4] py-5">
          <span className="text-[#522c25] text-[54px] font-['Dialect_PM',sans-serif] font-bold leading-none">ש"ח 9,999</span>
          <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] opacity-30 line-through">ש"ח 11,499</span>
          <span className="bg-[#8B3A00]/10 text-[#8B3A00] text-[16px] font-['Dialect_PM',sans-serif] font-bold px-3 py-1 rounded-lg">
            חיסכון ש"ח 1,500
          </span>
          <span className="bg-[#c46500]/10 text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] font-bold px-3 py-1 rounded-lg">
            עד 12 תשלומים
          </span>
        </div>

        {/* Condition + Color (right) | Delivery info (left) */}
        <div className="flex gap-5 items-start">
          <div className="flex-1 flex flex-col gap-4">
            {/* Condition selector */}
            <div>
              <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-55 mb-2">מצב המוצר</p>
              <div className="flex gap-2 flex-wrap">
                {["חדש", "חידוש מהמפעל", "יד שנייה – דרגה A"].map((cond, i) => (
                  <button key={i} className={`px-4 py-2 rounded-lg text-[17px] font-['Dialect_PM',sans-serif] border transition-all ${
                    i === 0 ? "border-[#c46500] bg-[#c46500]/10 text-[#c46500] font-bold" : "border-[#e6dad4] text-[#522c25] opacity-55 hover:opacity-100"
                  }`}>
                    {cond}
                  </button>
                ))}
              </div>
            </div>
            {/* Color selector */}
            <div>
              <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-55 mb-3">
                צבע: <span className="font-bold text-[#522c25] opacity-100">{colors[selectedColor].label}</span>
              </p>
              <div className="flex gap-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={c.label}
                    className={`w-8 h-8 rounded-full transition-all ${i === selectedColor ? "ring-2 ring-offset-2 ring-[#c46500] scale-110" : "hover:scale-105"}`}
                    style={{ backgroundColor: c.value, boxShadow: "0 0 0 1px #d4c4bc" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Delivery info */}
          <div className="bg-[#f6ede3] rounded-xl p-4 flex flex-col gap-2 min-w-[360px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">זמן אספקה משוער</span>
              <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] font-bold">3–5 ימי עסקים</span>
            </div>
            <div className="border-t border-[#e6dad4] pt-2 flex flex-col gap-1">
              <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">איסוף עצמי</span>
              <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] font-bold">זמין באור יהודה</span>
            </div>
          </div>
        </div>

        {/* Qty + CTA + Secondary CTA — single row */}
        <div className="flex gap-3 items-stretch">
          <div className="flex items-center border border-[#e6dad4] rounded-lg overflow-hidden">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-12 h-[52px] text-[#522c25] text-[22px] hover:bg-[#f6ede3] transition-colors">−</button>
            <span className="w-10 text-center text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="w-12 h-[52px] text-[#522c25] text-[22px] hover:bg-[#f6ede3] transition-colors">+</button>
          </div>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.05em] h-[52px] rounded-lg transition-colors">
            <ShoppingCart size={20} />
            הוספה לסל
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-[#522c25]/30 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] px-4 h-[52px] rounded-lg hover:border-[#522c25] hover:bg-[#f6ede3] transition-all whitespace-nowrap">
            <Phone size={18} />
            דברו עם מומחה
          </button>
        </div>

        {/* Testimonials rotator */}
        <TestimonialRotator />

        {/* Trust strip */}
        <div className="grid grid-cols-4 gap-3 border-t border-[#e6dad4] pt-4">
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center gap-1.5 text-center">
              <Icon size={20} className="text-[#c46500]" strokeWidth={1.5} />
              <span className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-65">{text}</span>
            </div>
          ))}
        </div>

        {/* Section nav anchors */}
        <div className="grid grid-cols-4 gap-2 border-t border-[#e6dad4] pt-4">
          {[
            { label: "מפרט טכני", href: "#specs" },
            { label: "שאלות נפוצות", href: "#faq" },
            { label: "מסמכים והורדות", href: "#documents" },
            { label: "שאלות מהקהילה", href: "#reviews" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-center text-[15px] font-['Dialect_PM',sans-serif] text-[#522c25] bg-[#ede0d4] border border-[#d4c4bc] rounded-lg py-2 px-1 hover:bg-[#e0cfc4] hover:border-[#c46500] hover:text-[#8B3A00] transition-all"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
