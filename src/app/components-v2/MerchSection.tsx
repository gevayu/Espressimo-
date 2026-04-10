import imgProduct1 from "../../imports/HomePage-2/c4ddfc79e83dc897d83bd6f6b5bd8736e0443c8b.png";
import imgProduct2 from "../../imports/HomePage-2/ff758012fd54baa6da64fa09677021c061155068.png";
import imgProduct3 from "../../imports/HomePage-2/6d9971dbb3c025bd05863240e166f7f9d57783ad.png";
import imgProduct4 from "../../imports/HomePage-2/94feac15829742af7fc558a884255224b5fb99f8.png";
import imgAmps1 from "../../imports/HomePage-2/37fb740f49dcb4afc818db1cc591507754818856.png";
import imgAmps2 from "../../imports/HomePage-2/9171c4be1c4c681b854d73b98c56859186ea98a0.png";

const picks = [
  { image: imgProduct1, name: "מכונת אספרסו ידנית", drink: "ספרסו כפול, קלייה כהה" },
  { image: imgProduct2, name: "מכונה אוטומטית מלאה", drink: "לאטה עם חלב שיבולת שועל" },
  { image: imgProduct3, name: "מכונת פילטר בוטיק", drink: "פילטר V60, ניל גירז" },
  { image: imgProduct4, name: "מכונה קלאסית מחודשת", drink: "קפוצ'ינו, קלייה בינונית" },
];

export function MerchSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4]">
        <h2 className="text-[38px] leading-[41px] font-['Dialect_PM',sans-serif]">
          <span className="text-[#c46500]">מה הצוות שלנו שותה השבוע?</span>
        </h2>
        <p className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-70 mt-2">
          טעימת השבוע שלנו – איזה סוג פולים ומאיזו מכונה
        </p>
      </div>

      <div className="flex">
        {picks.map((pick, i) => (
          <div key={i} className="flex-1 border-l border-[#e6dad4] first:border-l-0 p-9">
            <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-5">
              <img src={pick.image} alt={pick.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[#522c25] text-[17px] leading-[20px] font-['Dialect_PM',sans-serif] mb-1">
              {pick.name}
            </h3>
            <p className="text-[#c03001] text-[12px] font-['Dialect_PM',sans-serif] opacity-80">
              {pick.drink}
            </p>
          </div>
        ))}

        {/* Illustrations */}
        <div className="w-[220px] shrink-0 p-9 flex flex-col items-center justify-center gap-4 border-l border-[#e6dad4]">
          <img src={imgAmps1} alt="" className="w-[160px]" />
          <img src={imgAmps2} alt="" className="w-[160px]" />
        </div>
      </div>
    </section>
  );
}
