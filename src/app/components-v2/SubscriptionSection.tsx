import imgBg from "../../imports/HomePage-2/21bdba8bacd75338e5fa7f25063849ecfd9a473c.png";

const trustPoints = [
  {
    title: "מכונות קפה פרימיום",
    description: "הקפה שלכם, המקצועיות שלנו",
    color: "#c03001",
  },
  {
    title: "25+ שנות מומחיות",
    description: "בידיים מנוסות שמבינות את כל המכונות",
    color: "#c46500",
  },
  {
    title: "שיקום ותיקון מקצועי",
    description: "במעבדה שלנו, כל מכונה יוצאת כמו חדשה",
    color: "#522c25",
  },
];

export function SubscriptionSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#e6dad4]" dir="rtl">
      <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative flex items-stretch">
        {trustPoints.map((point, i) => (
          <div
            key={i}
            className="flex-1 border-l border-[#e6dad4]/50 first:border-l-0 px-12 py-14 flex flex-col gap-3"
          >
            <div
              className="w-10 h-1 rounded-full mb-2"
              style={{ backgroundColor: point.color }}
            />
            <h3 className="text-[#522c25] text-[22px] leading-[26px] font-['Polin',sans-serif]">
              {point.title}
            </h3>
            <p className="text-[#522c25] text-[14px] leading-[20px] font-['Dialect_PM',sans-serif] opacity-75">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
