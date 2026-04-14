import { useState } from "react";
import { ShoppingCart, Phone, Star, ChevronDown } from "lucide-react";

const colors = [
  { label: "שחור יהלום", value: "#1a1a1a" },
  { label: "כסף פלטינום", value: "#b0b8c0" },
  { label: "לבן קרם", value: "#f0ece4" },
];

export function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="flex-1 p-12 flex flex-col gap-6">
      {/* Brand + badges */}
      <div className="flex items-center gap-3">
        <span className="text-[#c46500] text-[22px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">JURA</span>
        <span className="bg-[#8B3A00] text-white text-[16px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">בסטוק</span>
        <span className="bg-[#c46500]/15 text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">משלוח חינם</span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-[#522c25] text-[52px] leading-[1.1] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
          JURA Z10
        </h1>
        <p className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] opacity-60 mt-1">
          מכונת קפה אוטומטית — דור חדש
        </p>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-2">
        {[1,2,3,4,5].map((s) => (
          <Star key={s} size={20} className="fill-[#c46500] text-[#c46500]" />
        ))}
        <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-60 mr-1">4.9 (38 ביקורות)</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-4 border-y border-[#e6dad4] py-5">
        <span className="text-[#522c25] text-[52px] font-['Dialect_PM',sans-serif] font-bold leading-none">₪9,999</span>
        <span className="text-[#522c25] text-[28px] font-['Dialect_PM',sans-serif] opacity-35 line-through">₪11,499</span>
        <span className="bg-[#8B3A00] text-white text-[18px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">חיסכון של ₪1,500</span>
      </div>

      {/* Short description */}
      <p className="text-[#522c25] text-[22px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-75">
        מכונת הקפה האוטומטית המתקדמת ביותר של JURA — עם 32 ספציאליטי קפה, טחינה עדינה ומסך מגע צבעוני. מושלמת לכל בית.
      </p>

      {/* Color selector */}
      <div>
        <p className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-60 mb-3">
          צבע: <span className="font-bold opacity-100">{colors[selectedColor].label}</span>
        </p>
        <div className="flex gap-3">
          {colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className={`w-9 h-9 rounded-full border-2 transition-all ${
                i === selectedColor ? "border-[#c46500] scale-110" : "border-transparent hover:border-[#d4c4bc]"
              }`}
              style={{ backgroundColor: c.value, boxShadow: "0 0 0 1px #d4c4bc" }}
              title={c.label}
            />
          ))}
        </div>
      </div>

      {/* Qty + Add to cart */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center border border-[#e6dad4] rounded overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-12 h-14 text-[#522c25] text-[24px] hover:bg-[#f6ede3] transition-colors"
          >−</button>
          <span className="w-12 text-center text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-12 h-14 text-[#522c25] text-[24px] hover:bg-[#f6ede3] transition-colors"
          >+</button>
        </div>

        <button className="flex-1 flex items-center justify-center gap-3 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[24px] font-['Dialect_PM',sans-serif] tracking-[0.05em] py-4 rounded transition-colors">
          <ShoppingCart size={22} />
          הוסף לעגלה
        </button>
      </div>

      {/* Expert CTA */}
      <a
        href="#"
        className="flex items-center justify-center gap-3 border-2 border-[#522c25] text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] py-4 rounded hover:bg-[#f6ede3] transition-colors"
      >
        <Phone size={20} />
        דברו עם מומחה לפני הרכישה
      </a>

      {/* Trust bullets */}
      <div className="grid grid-cols-2 gap-3 border-t border-[#e6dad4] pt-5">
        {[
          "אחריות יצרן 2 שנה",
          "משלוח חינם לכל הארץ",
          "התקנה והדגמה בבית",
          "30 יום להחזרה",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] opacity-70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c46500] shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
