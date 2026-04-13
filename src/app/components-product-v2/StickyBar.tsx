import { useEffect, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~500px (past the hero)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      dir="rtl"
    >
      <div
        className="flex items-center gap-6 px-10 py-3 border-b border-[#e6dad4]"
        style={{ background: "rgba(255, 249, 242, 0.95)", backdropFilter: "blur(12px)" }}
      >
        {/* Thumbnail */}
        <div className="w-12 h-12 rounded-lg bg-[#f6ede3] overflow-hidden shrink-0">
          <img
            src="https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg"
            alt="JURA Z10"
            className="w-full h-full object-contain mix-blend-multiply p-1"
          />
        </div>

        {/* Name + rating */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] font-bold">JURA Z10</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-[#c46500] text-[#c46500]" />)}
            </div>
            <span className="text-[#522c25] text-[13px] font-['Dialect_PM',sans-serif] opacity-50">4.9</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">ש"ח 9,999</span>
          <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-30 line-through">ש"ח 11,499</span>
        </div>

        {/* CTA */}
        <button className="flex items-center gap-2 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[17px] font-['Dialect_PM',sans-serif] tracking-[0.05em] px-6 py-2.5 rounded-lg transition-colors">
          <ShoppingCart size={17} />
          הוספה לסל
        </button>
      </div>
    </div>
  );
}
