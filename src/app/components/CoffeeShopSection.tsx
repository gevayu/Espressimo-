import imgBike from "../../imports/HomePage-2/ff80ad3b5cec4226d2d450f7dfd15eee76031415.png";
import imgShop1 from "../../imports/HomePage-2/e8730a91bb134c08026a09f645c6ec77fa6ffd52.png";
import imgShop2 from "../../imports/HomePage-2/0cc378ee6b2d94001b8e24a7486e661697a47642.png";
import imgShop3 from "../../imports/HomePage-2/c8f7e4c1c6b719df653cdade1c2b58be21cdc988.png";
import imgPartner from "../../imports/HomePage-2/cd54f773f2b5978b09e91da3b6945f58deb5f4a8.png";

export function CoffeeShopSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      {/* Bike + Shops */}
      <div className="flex border-b border-[#e6dad4]">
        <div className="flex-1 p-9">
          <img src={imgBike} alt="אופניים" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-0">
          <div className="border-r border-b border-[#e6dad4] p-6">
            <img src={imgShop1} alt="בית קפה 1" className="w-full h-[200px] object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif]">רחוב הרצל</h3>
              <p className="text-[#522c25] text-[11px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70 mt-1">
                ראשון-שישי 7:00-18:00 | שבת 8:00-16:00
              </p>
            </div>
          </div>
          <div className="border-b border-[#e6dad4] p-6">
            <img src={imgShop2} alt="בית קפה 2" className="w-full h-[200px] object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif]">שוק הכרמל</h3>
              <p className="text-[#522c25] text-[11px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70 mt-1">
                ראשון-שישי 6:30-17:00
              </p>
            </div>
          </div>
          <div className="border-r border-[#e6dad4] p-6">
            <img src={imgShop3} alt="בית קפה 3" className="w-full h-[200px] object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif]">נמל יפו</h3>
              <p className="text-[#522c25] text-[11px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70 mt-1">
                כל יום 7:00-20:00
              </p>
            </div>
          </div>
          <div className="p-6 flex items-center justify-center">
            <button className="bg-[#c03001] text-white px-6 py-3 rounded text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif]">
              בקרו אותנו
            </button>
          </div>
        </div>
      </div>

      {/* Wholesale Partner */}
      <div className="flex items-center border-b border-[#e6dad4]">
        <div className="flex-1 p-9">
          <img src={imgPartner} alt="שותף סיטונאי" className="w-full h-[300px] object-cover rounded-lg" />
        </div>
        <div className="flex-1 p-9">
          <h2 className="text-[#522c25] text-[38px] leading-[41px] font-['Dialect_PM',sans-serif] mb-4">
            שותפות <span className="text-[#c03001]">סיטונאית</span>
          </h2>
          <p className="text-[#522c25] text-[13px] leading-[18px] font-['Dialect_PM',sans-serif] mb-6">
            אנחנו עובדים עם בתי קפה ומסעדות ברחבי הארץ. מעוניינים להגיש את הקפה שלנו? צרו איתנו קשר.
          </p>
          <button className="bg-[#522c25] text-white px-6 py-3 rounded text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif]">
            למידע נוסף
          </button>
        </div>
      </div>
    </section>
  );
}
