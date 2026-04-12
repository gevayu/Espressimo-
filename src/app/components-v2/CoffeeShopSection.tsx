const imgPartner = "/picts/magav.jpg";

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
          <h2 className="text-[#522c25] text-[45px] leading-[38px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] font-bold mb-6">
            מה קורה כשכימאי ומג&quot;בניק רוקחים עבורכם את כוס הקפה המושלמת?
          </h2>
          <p className="text-[#522c25] text-[25px] leading-[36px] font-['Dialect_PM',sans-serif] opacity-80 mb-4">
            דמיינו עולם שבו כל כוס קפה מדויקת ומתאימה לבעליה – עם הארומה הנכונה, הטעמים המהפנטים והחיוך שבפנים. עכשיו דמיינו את אספרסימו: כי זה בדיוק מה שאנחנו עושים.
          </p>
          <p className="text-[#522c25] text-[25px] leading-[36px] font-['Dialect_PM',sans-serif] opacity-80 mb-4">
            משנת 2000 ועד היום, אנחנו מספקים שירותי קפה מקצועיים ומשובחים, לצד מעבדה שמוצאת פתרונות לכל מכונות הקפה.
          </p>
          <p className="text-[#c03001] text-[25px] leading-[36px] font-['Dialect_PM',sans-serif] mb-8">
            כי קפאין זו דרך חיים, ובאספרסימו, אנחנו לא רק מוכרים, מתקנים ומשדרגים מכונות – אנחנו נושמים כל כוס קפה, כל רגע, בדיוק כמו שצריך.
          </p>
          <button className="bg-[#522c25] text-white px-7 py-3 rounded text-[23px] tracking-[0.07em] uppercase font-['Dialect_PM',sans-serif] w-fit">
            קראו עוד אודותינו
          </button>
        </div>
      </div>
    </section>
  );
}
