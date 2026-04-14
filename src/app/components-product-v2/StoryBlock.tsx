export function StoryBlock() {
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-stretch">
        {/* Image */}
        <div className="w-[45%] shrink-0 bg-[#e8d9ce] overflow-hidden relative">
          <img
            src="https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg"
            alt="JURA story"
            className="w-full h-full object-contain mix-blend-multiply p-16"
          />
          {/* JURA logo — bottom left */}
          <div className="absolute bottom-8 left-8">
            <img src="/logos/JURA.png" alt="JURA" className="h-[100px] w-auto opacity-15" />
          </div>
          {/* Year badge */}
          <div className="absolute bottom-10 right-10 text-right">
            <span className="text-[#8B3A00] text-[100px] font-['Dialect_PM',sans-serif] font-bold leading-none opacity-15 select-none">
              1931
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 px-16 py-16 flex flex-col justify-center gap-7 border-r border-[#e6dad4]">
          <span className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] tracking-[0.15em] uppercase opacity-80">
            הסיפור מאחורי המכונה
          </span>

          <h2 className="text-[#522c25] text-[44px] leading-[1.15] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">
            90 שנה של מומחיות שווייצרית — בכל כוס קפה
          </h2>

          <p className="text-[#522c25] text-[20px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-70">
            JURA נוסדה ב-1931 בשווייץ כחברת מוצרי בית. משנות ה-80, היא הפכה את תשומת הלב שלה למכונות קפה אוטומטיות — והפכה לסמכות הגלובלית בתחום.
          </p>

          <p className="text-[#522c25] text-[20px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-70">
            כל מכונת JURA מיוצרת ב-Niederbuchsiten, שווייץ, עם יותר מ-1,000 פעולות בדיקה לפני שהיא יוצאת מהפס. Z10 היא הפסגה הנוכחית של קו הבית — עם טכנולוגיות שנפתחו מקווי ה-Professional.
          </p>

          <div className="grid grid-cols-3 gap-0 border border-[#e6dad4] rounded-2xl overflow-hidden mt-2">
            {[
              { num: "1931", label: "שנת הקמה" },
              { num: "32", label: "ספציאליטי ב-Z10" },
              { num: "5M+", label: "מכונות בעולם" },
            ].map((stat, i) => (
              <div key={i} className={`px-6 py-5 text-center ${i > 0 ? "border-r border-[#e6dad4]" : ""}`}>
                <p className="text-[#8B3A00] text-[34px] font-['Dialect_PM',sans-serif] font-bold leading-none">{stat.num}</p>
                <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-55 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#" className="w-fit flex items-center gap-2 border border-[#522c25]/25 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] px-5 py-2.5 rounded-lg hover:border-[#8B3A00] hover:text-[#8B3A00] hover:bg-[#f6ede3] transition-all">
            עוד על המותג ←
          </a>
        </div>
      </div>
    </section>
  );
}
