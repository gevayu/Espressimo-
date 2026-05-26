import { Wrench, Star, Coffee } from "lucide-react";

const trustPoints = [
  {
    icon: Coffee,
    value: "50+",
    title: "מכונות קפה פרימיום",
    description: "מהמותגים הטובים בעולם — JURA, La Marzocco, ECM ועוד",
    color: "#8B3A00",
  },
  {
    icon: Star,
    value: "25+",
    title: "שנות מומחיות",
    description: "בידיים מנוסות שמבינות כל מכונה, מכל סוג",
    color: "#c46500",
  },
  {
    icon: Wrench,
    value: "4,000+",
    title: "מכונות שוקמו",
    description: "במעבדה שלנו, כל מכונה יוצאת כמו חדשה",
    color: "#522c25",
  },
];

export function SubscriptionSection() {
  return (
    <section className="bg-[#fff9f2] border-y border-[#e6dad4]" dir="rtl">
      <div className="flex items-stretch divide-x divide-x-reverse divide-[#e6dad4]">
        {trustPoints.map(({ icon: Icon, value, title, description, color }, i) => (
          <div key={i} className="flex-1 px-12 py-12 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
                <Icon size={26} style={{ color }} strokeWidth={1.5} />
              </div>
              <span className="font-['Dialect_PM',sans-serif] font-bold text-[52px] leading-none" style={{ color }}>
                {value}
              </span>
            </div>
            <h3 className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold leading-tight">
              {title}
            </h3>
            <p className="text-[#522c25] text-[18px] leading-[1.65] font-['Dialect_PM',sans-serif] opacity-60">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
