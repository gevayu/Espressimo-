import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { PriceTag } from "./PriceTag";

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const footerVisible = useRef(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => { footerVisible.current = entry.isIntersecting; },
        { threshold: 0.05 }
      );
      observer.observe(footer);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500 && !footerVisible.current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      dir="rtl"
    >
      <div
        className="flex items-center gap-6 px-10 py-3 border-t border-[#e6dad4]"
        style={{ background: "rgba(255, 249, 242, 0.97)", backdropFilter: "blur(12px)" }}
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
          <PriceTag price='ש"ח 9,999' className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold" />
          <PriceTag price='ש"ח 11,499' className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-30 line-through" />
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
