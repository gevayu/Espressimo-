import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const stats = [
  { icon: Truck, text: "משלוח חינם בכל הארץ" },
  { icon: Shield, text: "אחריות יבואן רשמי" },
  { icon: RotateCcw, text: "החזרה תוך 14 יום" },
  { icon: Headphones, text: "ליווי בריסטה אישי" },
];

export function CategoryHero({ count }: { count: number }) {
  return (
    <section dir="rtl" className="border-b border-[#e6dad4] bg-[#f6ede3]">
      {/* Breadcrumb */}
      <div className="border-b border-[#e6dad4] px-12 py-3 flex items-center gap-2 text-[18px] font-['Dialect_PM',sans-serif] text-[#522c25]">
        <a href="/v2" className="opacity-50 hover:opacity-100 transition-opacity">
          דף הבית
        </a>
        <span className="opacity-30">›</span>
        <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">
          מכונות קפה
        </a>
        <span className="opacity-30">›</span>
        <span className="font-bold">מכונות קפה אוטומטיות</span>
      </div>

      <div className="px-12 py-14">
        <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
          הקולקציה
        </span>
        <h1 className="text-[#522c25] text-[64px] leading-[1.05] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mt-2">
          מכונות קפה אוטומטיות
        </h1>
        <p className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] opacity-60 leading-[1.5] mt-3 max-w-[760px]">
          אספרסו מושלם בלחיצת כפתור — מהמכונה הקומפקטית לבית ועד הדגמים המסחריים
          למשרד. כל המכונות נבדקות, מגיעות עם אחריות יבואן וליווי בריסטה אישי.
        </p>
        <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-45 mt-4">
          {count} מוצרים בקטגוריה
        </p>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-[840px]">
          {stats.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-[#fff9f2] border border-[#e6dad4] rounded-xl px-4 py-3"
            >
              <Icon size={22} className="text-[#c46500] shrink-0" strokeWidth={1.5} />
              <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-75 leading-tight">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
