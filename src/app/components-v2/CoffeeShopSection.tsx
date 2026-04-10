import imgPartner from "../../imports/HomePage-2/cd54f773f2b5978b09e91da3b6945f58deb5f4a8.png";

export function CoffeeShopSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-stretch">
        {/* Image */}
        <div className="w-[45%] shrink-0">
          <img src={imgPartner} alt="אספרסימו" className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="flex-1 p-14 flex flex-col justify-center">
          <h2 className="text-[#522c25] text-[32px] leading-[38px] font-['Polin',sans-serif] mb-6">
            מה קורה כשאלכימאי ומג&quot;בניק רוקחים עבורכם את כוס הקפה המושלמת?
          </h2>
          <p className="text-[#522c25] text-[14px] leading-[22px] font-['Dialect_PM',sans-serif] opacity-80 mb-4">
            דמיינו עולם שבו כל כוס קפה מדויקת ומתאימה לבעליה – עם הארומה הנכונה, הטעמים המהפנטים והחיוך שבפנים. עכשיו דמיינו את אספרסימו: כי זה בדיוק מה שאנחנו עושים.
          </p>
          <p className="text-[#522c25] text-[14px] leading-[22px] font-['Dialect_PM',sans-serif] opacity-80 mb-4">
            משנת 2000 ועד היום, אנחנו מספקים שירותי קפה מקצועיים ומשובחים, לצד מעבדה שמוצאת פתרונות לכל מכונות הקפה.
          </p>
          <p className="text-[#c03001] text-[14px] leading-[22px] font-['Dialect_PM',sans-serif] mb-8">
            כי קפאין זו דרך חיים, ובאספרסימו, אנחנו לא רק מוכרים, מתקנים ומשדרגים מכונות – אנחנו נושמים כל כוס קפה, כל רגע, בדיוק כמו שצריך.
          </p>
          <button className="bg-[#522c25] text-white px-7 py-3 rounded text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] w-fit">
            קראו עוד אודותינו
          </button>
        </div>
      </div>
    </section>
  );
}
