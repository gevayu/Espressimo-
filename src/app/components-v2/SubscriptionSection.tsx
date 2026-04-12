const trustPoints = [
  {
    title: "מכונות קפה פרימיום",
    description: "הקפה שלכם, המקצועיות שלנו",
    color: "#8B3A00",
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
    <section className="bg-[#fff9f2] border-y border-[#e6dad4] my-10" dir="rtl">
      <div className="flex items-stretch">
        {trustPoints.map((point, i) => (
          <div
            key={i}
            className="flex-1 px-12 py-14 flex flex-col gap-3"
          >
            <div
              className="w-10 h-1 rounded-full mb-2"
              style={{ backgroundColor: point.color }}
            />
            <h3 className="text-[#522c25] text-[32px] leading-[26px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
              {point.title}
            </h3>
            <p className="text-[#522c25] text-[25px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-75">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
