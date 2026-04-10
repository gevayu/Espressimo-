import imgDude from "../../imports/HomePage-2/14bccaa3dbfcf6da12e61f868e854488003bda4e.png";

export function IntroSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4] py-12 px-9" dir="rtl">
      <div className="flex items-start justify-between">
        <div className="max-w-[1160px]">
          <p className="font-['Inter',sans-serif] text-[38.9px] leading-[41px] tracking-[-4.1px]">
            <span className="text-[#522c25]">ב</span>
            <span className="text-[#c03001]">אספרסימו קפה</span>
            <span className="text-[#522c25]"> אנחנו במסע אינסופי אחרי הטון המושלם,</span>
          </p>
          <p className="font-['Inter',sans-serif] text-[38.9px] leading-[41px] tracking-[-4.1px]">
            <span className="text-[#522c25]">כל הזמן </span>
            <span className="text-[#89b4ca]">מאתרים וקולים</span>
            <span className="text-[#522c25]"> את </span>
            <span className="text-[#c46500]">קפה הספשיאלטי הטוב ביותר</span>
            <span className="text-[#522c25]"> שאנחנו מוצאים</span>
          </p>
          <p className="font-['Inter',sans-serif] text-[38.9px] leading-[41px] tracking-[-4.1px]">
            <span className="text-[#522c25]">ומגישים אותם ל</span>
            <span className="text-[#c03001]">קהילה שלנו</span>
            <span className="text-[#522c25]"> מקרוב ומרחוק!</span>
          </p>
        </div>
        <img src={imgDude} alt="בחור קפה" className="w-[300px] h-auto shrink-0" />
      </div>
    </section>
  );
}
