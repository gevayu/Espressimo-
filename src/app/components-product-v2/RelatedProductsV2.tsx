import { Star } from "lucide-react";

const related = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg",
    brand: "JURA",
    name: "E8 דור 3",
    desc: "15 ספציאליטי, מסך צבעוני, קישוריות Wi-Fi",
    price: "ש"ח 6,999",
    oldPrice: "ש"ח 7,999",
    rating: 4.8,
    reviews: 24,
    badge: "פופולרי",
    badgeColor: "#8B3A00",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg",
    brand: "JURA",
    name: "J8 Twin",
    desc: "שני גריינדרים מקצועיים, 32 ספציאליטי",
    price: "ש"ח 12,499",
    oldPrice: null,
    rating: 5.0,
    reviews: 11,
    badge: "פרמיום",
    badgeColor: "#1c1c1c",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg",
    brand: "La Marzocco",
    name: "Linea Mini",
    desc: "מכונת ידנית מקצועית לבית, דרגה בריסטה",
    price: "ש"ח 14,900",
    oldPrice: null,
    rating: 4.9,
    reviews: 17,
    badge: "הטוב ביותר לידניות",
    badgeColor: "#2e5a88",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
    brand: "JURA",
    name: "ENA 8 דור 3",
    desc: "קומפקטי, מושלם לדירות קטנות — ביצועים גדולים",
    price: "ש"ח 4,299",
    oldPrice: "ש"ח 4,999",
    rating: 4.7,
    reviews: 31,
    badge: "מציאה",
    badgeColor: "#2e7d32",
  },
];

export function RelatedProductsV2() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
          מכונות שאולי תאהבו גם
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55 mb-10">
          השוואה ישירה עם מכונות נבחרות בסגנון דומה
        </p>

        <div className="grid grid-cols-4 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl">
          {related.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group border-l border-[#e6dad4] first:border-l-0 flex flex-col hover:bg-[#f6ede3] transition-colors duration-200 relative"
            >
              {/* Badge */}
              <span
                className="absolute top-4 right-4 z-10 text-white text-[13px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full"
                style={{ backgroundColor: p.badgeColor }}
              >
                {p.badge}
              </span>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#f6ede3]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain mix-blend-multiply p-8 group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 border-t border-[#e6dad4]">
                <div className="flex items-center gap-2">
                  <span className="text-[#c46500] text-[15px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.08em]">{p.brand}</span>
                </div>
                <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-60 leading-snug">{p.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={13} className={s <= Math.round(p.rating) ? "fill-[#c46500] text-[#c46500]" : "text-[#e6dad4] fill-[#e6dad4]"} />
                    ))}
                  </div>
                  <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">{p.rating} ({p.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-2 pt-3 border-t border-[#e6dad4]">
                  <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-30 line-through">{p.oldPrice}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
