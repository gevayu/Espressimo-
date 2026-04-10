import imgBg from "../../imports/HomePage-2/21bdba8bacd75338e5fa7f25063849ecfd9a473c.png";
import imgSun from "../../imports/HomePage-2/4e1c3d4f41cd19edd7cf326a9e017939eced88d3.png";

export function SubscriptionSection() {
  return (
    <section className="relative overflow-hidden" dir="rtl">
      <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative flex items-center justify-between px-12 py-16">
        <div className="max-w-[600px]">
          <h2 className="text-[#522c25] text-[38px] leading-[41px] tracking-[-4px] font-['Inter',sans-serif] mb-4">
            שדרגו את הבקרים שלכם
          </h2>
          <p className="text-[#522c25] text-[13px] leading-[18px] font-['Inter',sans-serif] mb-6">
            מנוי קפה מאספרסימו — קפה טרי נשלח אליכם כל חודש. חסכו כסף, גלו טעמים חדשים, ותהנו מקפה איכותי בכל בוקר.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#c03001] text-white px-6 py-3 rounded text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif]">
              הירשמו למנוי
            </button>
            <button className="bg-[#522c25] text-white px-6 py-3 rounded text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif]">
              מתנה
            </button>
          </div>
        </div>
        <img src={imgSun} alt="" className="w-[200px] h-auto" />
      </div>
    </section>
  );
}
