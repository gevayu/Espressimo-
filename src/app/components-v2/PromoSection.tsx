import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PromoPick {
  image: string;
  name: string;
  description: string;
  originalPrice: string;
  salePrice: string;
}

const VISIBLE = 5;
const AUTO_ADVANCE_MS = 6500;

const promos: PromoPick[] = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
    name: "JURA ENA 8 דור 3",
    description: "מכונת קפה אוטומטית",
    originalPrice: "₪5,499",
    salePrice: "₪4,999",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-100ערביקה-1-קג-Borbone-Miscela-ORO-Linea-Bar.jpg",
    name: "Borbone Miscela ORO",
    description: "1 ק״ג פולי קפה",
    originalPrice: "₪99",
    salePrice: "₪79",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
    name: "JURA Z10",
    description: "מכונת קפה אוטומטית",
    originalPrice: "₪11,499",
    salePrice: "₪9,999",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-האוסברנדט-רוסה-Hausbrandt-Rossa.jpg",
    name: "Hausbrandt Rossa",
    description: "תערובת איטלקית קלאסית",
    originalPrice: "₪109",
    salePrice: "₪89",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/02/מכונת-קפה-ידנית-ECM-Technika-V-Profi-PID.jpg",
    name: "ECM Technika V Profi PID",
    description: "מכונת קפה ידנית",
    originalPrice: "₪9,200",
    salePrice: "₪7,900",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/07/bristotsublime1kg_4100x.webp",
    name: "Bristot Sublime",
    description: "100% ערביקה, 1 ק״ג",
    originalPrice: "₪115",
    salePrice: "₪95",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg",
    name: "JURA E8 דור 3",
    description: "מכונת קפה אוטומטית",
    originalPrice: "₪8,499",
    salePrice: "₪7,499",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-דיאמה-זהב-1-קג-Caffe-Diemme-Red.jpg",
    name: "Caffe Diemme Red",
    description: "עשיר ומעובד, קלייה כהה",
    originalPrice: "₪105",
    salePrice: "₪85",
  },
];

export function PromoSection() {
  const [offset, setOffset] = useState(0);
  const maxOffset = promos.length - VISIBLE;

  const next = () => setOffset((o) => (o >= maxOffset ? 0 : o + 1));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [offset, maxOffset]);

  const translatePct = offset * (100 / promos.length);

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4] flex items-center gap-5">
        <h2 className="text-[53px] leading-[41px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
          <span className="text-[#c46500]">המבצעים שלנו</span>
        </h2>
        <span className="bg-[#8B3A00] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.05em] px-4 py-1.5 rounded-full">
          מחירים מוגבלים בזמן
        </span>
      </div>

      <div className="flex items-stretch">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="w-[64px] shrink-0 border-l border-[#e6dad4] flex items-center justify-center hover:bg-[#f6ede3] transition-colors duration-200 disabled:opacity-20 disabled:cursor-default"
          aria-label="הקודם"
        >
          <ChevronRight size={36} className="text-[#522c25]" />
        </button>

        {/* Sliding track */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translatePct}%)` }}
          >
            {promos.map((promo, i) => (
              <div
                key={i}
                className="shrink-0 p-9 group cursor-pointer transition-colors duration-300 hover:bg-[#f0e6dc]"
                style={{
                  width: `${100 / VISIBLE}%`,
                  borderRight: i > 0 ? "2px solid #d4c4bc" : "none",
                }}
              >
                {/* Badge */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-5">
                    <img
                      src={promo.image}
                      alt={promo.name}
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 rounded-lg" />
                  </div>
                  <div className="absolute top-3 left-3 bg-[#8B3A00] text-white text-[18px] font-['Dialect_PM',sans-serif] font-bold px-2.5 py-1 rounded">
                    מבצע
                  </div>
                </div>

                <h3 className="text-[#522c25] text-[20px] leading-[24px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-1 transition-colors duration-200 group-hover:text-[#8B3A00]">
                  {promo.name}
                </h3>
                <p className="text-[#8B3A00] text-[22px] font-['Dialect_PM',sans-serif] opacity-80 mb-2">
                  {promo.description}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-[#8B3A00] text-[24px] font-['Dialect_PM',sans-serif] font-bold">
                    {promo.salePrice}
                  </span>
                  <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-40 line-through">
                    {promo.originalPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          className="w-[64px] shrink-0 border-r border-[#e6dad4] flex items-center justify-center hover:bg-[#f6ede3] transition-colors duration-200"
          aria-label="הבא"
        >
          <ChevronLeft size={36} className="text-[#522c25]" />
        </button>
      </div>
    </section>
  );
}
