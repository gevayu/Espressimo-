import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg",
  "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
];

export function ProductGallery() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => Math.max(a - 1, 0));
  const next = () => setActive((a) => Math.min(a + 1, images.length - 1));

  return (
    <div className="w-[52%] shrink-0 border-l border-[#e6dad4] sticky top-[68px]">
      {/* Main image */}
      <div className="relative bg-[#f6ede3] aspect-square overflow-hidden">
        <img
          key={active}
          src={images[active]}
          alt="JURA Z10"
          className="w-full h-full object-contain mix-blend-multiply p-8"
          style={{ animation: "heroTextEntry 0.3s ease-out forwards" }}
        />

        {/* Nav arrows */}
        <button
          onClick={prev}
          disabled={active === 0}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors disabled:opacity-20"
        >
          <ChevronRight size={20} className="text-[#522c25]" />
        </button>
        <button
          onClick={next}
          disabled={active === images.length - 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors disabled:opacity-20"
        >
          <ChevronLeft size={20} className="text-[#522c25]" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex border-t border-[#e6dad4]">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 aspect-square bg-[#f6ede3] border-l border-[#e6dad4] first:border-l-0 overflow-hidden transition-all ${
              i === active ? "ring-2 ring-inset ring-[#c46500]" : "opacity-50 hover:opacity-80"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply p-3" />
          </button>
        ))}
      </div>
    </div>
  );
}
