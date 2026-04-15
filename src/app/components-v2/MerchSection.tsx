import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PriceTag } from "../components/PriceTag";

interface Pick {
  image: string;
  name: string;
  drink: string;
  price?: string;
}

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  picks: Pick[];
  slideDelay?: number;
}

const VISIBLE = 5;
const AUTO_ADVANCE_MS = 6000;

function ProductCarousel({ title, subtitle, picks, slideDelay = 0 }: ProductCarouselProps) {
  const [offset, setOffset] = useState(0);
  const maxOffset = picks.length - VISIBLE;

  const next = () => setOffset((o) => (o >= maxOffset ? 0 : o + 1));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));

  // Auto-advance, resets timer on manual interaction
  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [offset, maxOffset]);

  // translateX % is relative to the inner div's own width.
  // Each item = 100/VISIBLE % of outer = (100/VISIBLE) / (picks.length/VISIBLE * 100/100) % of inner
  // Simplified: one step = 100 / picks.length % of inner div.
  const translatePct = offset * (100 / picks.length);

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4]">
        <h2 className="text-[53px] leading-[41px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
          <span className="text-[#c46500]">{title}</span>
        </h2>
        <p className="text-[#522c25] text-[25px] font-['Dialect_PM',sans-serif] opacity-70 mt-2">
          {subtitle}
        </p>
      </div>

      <div className="flex items-stretch">
        {/* Prev arrow — right side in RTL */}
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
            style={{ transform: `translateX(${translatePct}%)`, transitionDelay: slideDelay ? `${slideDelay}ms` : undefined }}
          >
            {picks.map((pick, i) => (
              <div
                key={i}
                className="shrink-0 p-9 group cursor-pointer transition-colors duration-300 hover:bg-[#f0e6dc]"
                style={{
                  width: `${100 / VISIBLE}%`,
                  borderRight: i > 0 ? "2px solid #d4c4bc" : "none",
                }}
              >
                {/* Image with subtle overlay on hover */}
                <div className="relative rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-5">
                  <img
                    src={pick.image}
                    alt={pick.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300 rounded-lg" />
                </div>

                <h3 className="text-[#522c25] text-[20px] leading-[24px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-1 transition-colors duration-200 group-hover:text-[#8B3A00]">
                  {pick.name}
                </h3>
                <p className="text-[#8B3A00] text-[22px] font-['Dialect_PM',sans-serif] opacity-80">
                  {pick.drink}
                </p>
                {pick.price && (
                  <PriceTag price={pick.price} className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow — left side in RTL */}
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

const bestSellers: Pick[] = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg",
    name: "La Marzocco Linea Mini",
    drink: "מכונת קפה ידנית",
    price: 'ש"ח 9,900',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
    name: "JURA Z10",
    drink: "מכונת קפה אוטומטית",
    price: 'ש"ח 9,999',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/02/מכונת-קפה-ידנית-ECM-Technika-V-Profi-PID.jpg",
    name: "ECM Technika V Profi PID",
    drink: "מכונת קפה ידנית",
    price: 'ש"ח 7,900',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
    name: "JURA ENA 8 דור 3",
    drink: "מכונת קפה אוטומטית",
    price: 'ש"ח 4,999',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg",
    name: "JURA J8 TWIN",
    drink: "מכונת קפה אוטומטית",
    price: 'ש"ח 11,999',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg",
    name: "JURA E8 דור 3",
    drink: "מכונת קפה אוטומטית",
    price: 'ש"ח 7,499',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/02/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%A7%D7%A4%D7%94-%D7%99%D7%93%D7%A0%D7%99%D7%AA-ECM-Synchronika-II.jpg",
    name: "ECM Synchronika",
    drink: "מכונת קפה ידנית",
    price: 'ש"ח 12,900',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-GS3-La-Marzocco-GS3.jpg",
    name: "La Marzocco GS/3",
    drink: "מכונת קפה ידנית פרו",
    price: 'ש"ח 19,900',
  },
];

const teamPicks: Pick[] = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-100ערביקה-1-קג-Borbone-Miscela-ORO-Linea-Bar.jpg",
    name: "Borbone Miscela ORO",
    drink: "100% ערביקה, קלייה בינונית",
    price: 'ש"ח 79',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-האוסברנדט-רוסה-Hausbrandt-Rossa.jpg",
    name: "Hausbrandt Rossa",
    drink: "תערובת איטלקית קלאסית",
    price: 'ש"ח 89',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-דיאמה-זהב-1-קג-Caffe-Diemme-Red.jpg",
    name: "Caffe Diemme Red",
    drink: "עשיר ומעובד, קלייה כהה",
    price: 'ש"ח 85',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/06/d154b9245b991c5843b8554c86c8cbd9.png",
    name: "Vescovi Grani D'Oro",
    drink: "זהב, תערובת פרימיום",
    price: 'ש"ח 92',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/07/bristotsublime1kg_4100x.webp",
    name: "Bristot Sublime",
    drink: "100% ערביקה, עדין ומורכב",
    price: 'ש"ח 95',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/02/1-קג-פולי-קפה-דולצה-Molinari-Dolce-Rosa.jpg",
    name: "Molinari Dolce Rosa",
    drink: "תערובת עדינה, ארומה פרחונית",
    price: 'ש"ח 82',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2025/08/B2B_Tradizione_Lato_1kg.png",
    name: "Molinari Tradizione",
    drink: "תערובת קלאסית, גוף עשיר",
    price: 'ש"ח 76',
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/פולי-קפה-דיאמה-זהב-1-קג-Caffe-Diemme-Gold.jpg",
    name: "Caffe Diemme Gold",
    drink: "זהב, תערובת מיוחדת",
    price: 'ש"ח 88',
  },
];

export function MerchSection() {
  return (
    <>
      <ProductCarousel
        title="הנמכרות ביותר החודש"
        subtitle="המכונות שהכי הרבה לקוחות בחרו – ועם סיבה טובה"
        picks={bestSellers}
      />
      <ProductCarousel
        title="מה הצוות שלנו שותה השבוע?"
        subtitle="טעימת השבוע שלנו – פולי קפה מובחרים"
        picks={teamPicks}
        slideDelay={3500}
      />
    </>
  );
}
