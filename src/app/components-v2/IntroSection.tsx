const imgDude = "/picts/art-of-coffee-badge.png";

const stats = [
  { value: "25+", label: "שנות ניסיון" },
  { value: "4,000+", label: "לקוחות מרוצים" },
  { value: "12", label: "מותגים מובילים" },
];

export function IntroSection() {
  return (
    <section className="border-b border-[#e6dad4]" dir="rtl">
      {/* Main content */}
      <div className="bg-[#fff9f2] py-14 px-12 flex items-center justify-between gap-10">
        <div className="max-w-[820px]">
          <p className="font-['Dialect_PM',sans-serif] text-[42px] leading-[1.15]">
            <span className="text-[#522c25]">ב</span>
            <span className="text-[#8B3A00] font-bold">אספרסימו</span>
            <span className="text-[#522c25]">, כל כוס קפה היא חוויה.</span>
          </p>
          <p className="font-['Dialect_PM',sans-serif] text-[42px] leading-[1.15] mt-1">
            <span className="text-[#522c25]">אנחנו הבית של </span>
            <span className="text-[#c46500] font-bold">מכונות הקפה</span>
            <span className="text-[#522c25]">, מומחים בקפה ואלופים במכונות.</span>
          </p>
          <p className="font-['Dialect_PM',sans-serif] text-[22px] leading-[1.75] mt-6 text-[#522c25] opacity-70">
            מאז שנת 2000 אנחנו מספקים מכונות קפה, אביזרים ופולים איכותיים, לצד שירות מקצועי ותמיכה בכל מכונה, ועד לשידוך המושלם של זו שמתאימה לכם.
          </p>
        </div>
        <img src={imgDude} alt="מומחה קפה" className="w-[160px] h-auto shrink-0" />
      </div>

      {/* Stats bar */}
      <div className="bg-[#f6ede3] border-t border-[#e6dad4] flex divide-x divide-x-reverse divide-[#e6dad4]">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex-1 py-7 px-12 flex items-baseline gap-3">
            <span className="font-['Dialect_PM',sans-serif] font-bold text-[48px] leading-none text-[#8B3A00]">{value}</span>
            <span className="font-['Dialect_PM',sans-serif] text-[20px] text-[#522c25] opacity-60">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
