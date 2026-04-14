const recipes = [
  {
    name: "אספרסו קלאסי",
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "25 שנ'",
    difficulty: "קל",
    params: [
      { label: "כמות קפה", value: "18 גר'" },
      { label: "תפוקה", value: "40 מ\"ל" },
      { label: "טמפרטורה", value: "93°C" },
      { label: "לחץ", value: "9 בר" },
    ],
    desc: "אספרסו כפול עשיר, עם קרמה עבה ואיזון מושלם בין מתיקות לחומציות.",
  },
  {
    name: "קפה לאטה",
    image: "https://images.pexels.com/photos/414605/pexels-photo-414605.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "45 שנ'",
    difficulty: "בינוני",
    params: [
      { label: "כמות קפה", value: "14 גר'" },
      { label: "אספרסו", value: "35 מ\"ל" },
      { label: "חלב מוקצף", value: "180 מ\"ל" },
      { label: "טמפרטורה", value: "65°C" },
    ],
    desc: "שכבת אספרסו עמוקה מתחת לחלב עשיר ורך — הדרך הנכונה להתחיל בוקר.",
  },
  {
    name: "קולד ברו",
    image: "https://images.pexels.com/photos/11100423/pexels-photo-11100423.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "2 דק'",
    difficulty: "קל",
    params: [
      { label: "כמות קפה", value: "22 גר'" },
      { label: "תפוקה", value: "120 מ\"ל" },
      { label: "טמפרטורה", value: "קר" },
      { label: "קרח", value: "150 גר'" },
    ],
    desc: "JURA Z10 מכינה Cold Brew ישירות — מיצוי על קרח בטמפרטורה נמוכה לטעם חלק ונקי.",
  },
  {
    name: "קפוצ'ינו",
    image: "https://images.pexels.com/photos/9249368/pexels-photo-9249368.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "40 שנ'",
    difficulty: "קל",
    params: [
      { label: "כמות קפה", value: "14 גר'" },
      { label: "אספרסו", value: "30 מ\"ל" },
      { label: "קצף חלב", value: "90 מ\"ל" },
      { label: "טמפרטורה", value: "68°C" },
    ],
    desc: "שליש אספרסו, שליש חלב, שליש קצף — הפרופורציות הקלאסיות עם מגע Fine Foam של JURA.",
  },
];

const difficultyColor: Record<string, string> = {
  קל: "#2e7d32",
  בינוני: "#c46500",
  מתקדם: "#8B3A00",
};

export function RecipesSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
          מתכוני הכנה ממומלצים
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55 mb-12">
          JURA Z10 תכין לכם את כל אלה — בלחיצה אחת
        </p>

        <div className="grid grid-cols-4 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl">
          {recipes.map((r, i) => (
            <div
              key={i}
              className="group border-l border-[#e6dad4] first:border-l-0 flex flex-col hover:bg-[#f6ede3] transition-colors duration-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#f6ede3]">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-50">⏱ {r.time}</span>
                  <span
                    className="text-[13px] font-['Dialect_PM',sans-serif] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: difficultyColor[r.difficulty] ?? "#522c25", background: `${difficultyColor[r.difficulty] ?? "#522c25"}15` }}
                  >
                    {r.difficulty}
                  </span>
                </div>

                <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors">
                  {r.name}
                </h3>
                <p className="text-[#522c25] text-[17px] leading-[26px] font-['Dialect_PM',sans-serif] opacity-65">
                  {r.desc}
                </p>

                {/* Params */}
                <div className="mt-auto pt-4 border-t border-[#e6dad4] grid grid-cols-2 gap-2">
                  {r.params.map((p) => (
                    <div key={p.label} className="flex flex-col">
                      <span className="text-[13px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-45">{p.label}</span>
                      <span className="text-[16px] font-['Dialect_PM',sans-serif] font-bold text-[#522c25]">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
