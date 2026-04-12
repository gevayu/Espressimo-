const imgDude = "/picts/makineta.png";

export function IntroSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4] py-12 px-9" dir="rtl">
      <div className="flex items-start justify-between">
        <div className="max-w-[1160px]">
          <p className="font-['Dialect_PM',sans-serif] text-[38.9px] leading-[41px]">
            <span className="text-[#522c25]">ב</span>
            <span className="text-[#8B3A00]">אספרסימו</span>
            <span className="text-[#522c25]">, כל כוס קפה היא חוויה.</span>
          </p>
          <p className="font-['Dialect_PM',sans-serif] text-[38.9px] leading-[41px]">
            <span className="text-[#522c25]">אנחנו הבית של </span>
            <span className="text-[#c46500]">מכונות הקפה</span>
            <span className="text-[#522c25]">, מומחים בקפה ואלופים במכונות.</span>
          </p>
          <p className="font-['Dialect_PM',sans-serif] text-[25px] leading-[42px] mt-6 text-[#522c25] opacity-80 max-w-[820px]">
            מאז שנת 2000 אנחנו מספקים מכונות קפה, אביזרים ופולים איכותיים, לצד שירות מקצועי ותמיכה בכל מכונה, ועד לשידוך המושלם של זו שמתאימה לכם, כדי שכל לגימה תהיה חוויה בלתי נשכחת.
          </p>
        </div>
        <img src={imgDude} alt="מומחה קפה" className="w-[180px] h-auto shrink-0 ml-[50px]" />
      </div>
    </section>
  );
}
