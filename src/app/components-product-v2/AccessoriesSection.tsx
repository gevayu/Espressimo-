const accessories = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
    name: "פולי קפה JURA Signature Blend",
    desc: "מיזוג ייחודי שפותח במיוחד למכונות JURA — אספרסו עשיר ומלא גוף.",
    price: "ש"ח 149",
    badge: "מומלץ ביותר",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
    name: "פילטר CLARIS Smart+ (3 יח')",
    desc: "מסנן המים החכם של JURA — מגן על המכונה מסיד ומשפר את טעם הקפה.",
    price: "ש"ח 189",
    badge: "חיוני",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg",
    name: "ערכת ניקוי JURA (12 טבליות)",
    desc: "טבליות ניקוי רשמיות מ-JURA — תחזוקה מושלמת ואורך חיים מירבי למכונה.",
    price: "ש"ח 99",
    badge: null,
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg",
    name: "כוסות אספרסו JURA Glass Set (2 יח')",
    desc: "כוסות זכוכית עבה מעוצבות ייחודית — שומרות על חום, מציגות את הקרמה בצורה מושלמת.",
    price: "ש"ח 149",
    badge: null,
  },
];

export function AccessoriesSection() {
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
              משלימים את החוויה
            </h2>
            <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55">
              אביזרים ומתכלים שממיצים את JURA Z10
            </p>
          </div>

          {/* Bundle offer */}
          <div className="bg-[#8B3A00] text-white rounded-2xl px-8 py-5 text-left shrink-0">
            <p className="text-[14px] font-['Dialect_PM',sans-serif] opacity-75 mb-1">חבילת ה-Starter Bundle</p>
            <p className="text-[26px] font-['Dialect_PM',sans-serif] font-bold leading-tight">פולים + פילטר + ניקוי</p>
            <p className="text-[20px] font-['Dialect_PM',sans-serif] mt-2">
              <span className="opacity-60 line-through text-[17px] ml-2">ש"ח 437</span>
              ש"ח 349
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl bg-[#fff9f2]">
          {accessories.map((a, i) => (
            <div
              key={i}
              className="group border-l border-[#e6dad4] first:border-l-0 flex flex-col hover:bg-[#f6ede3] transition-colors duration-200 relative"
            >
              {a.badge && (
                <span className="absolute top-4 right-4 z-10 bg-[#8B3A00] text-white text-[13px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">
                  {a.badge}
                </span>
              )}

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#f6ede3]">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-contain mix-blend-multiply p-8 group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 flex-1 border-t border-[#e6dad4]">
                <h3 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors leading-snug">
                  {a.name}
                </h3>
                <p className="text-[#522c25] text-[16px] leading-[24px] font-['Dialect_PM',sans-serif] opacity-65 flex-1">
                  {a.desc}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#e6dad4]">
                  <span className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold">{a.price}</span>
                  <button className="bg-[#8B3A00] hover:bg-[#a34500] text-white text-[15px] font-['Dialect_PM',sans-serif] px-4 py-2 rounded-lg transition-colors">
                    הוסף לסל
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
