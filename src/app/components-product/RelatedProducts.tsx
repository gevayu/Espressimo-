const related = [
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg",
    name: "JURA E8 דור 3",
    description: "מכונת קפה אוטומטית",
    price: "₪7,499",
    badge: "",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg",
    name: "JURA J8 TWIN",
    description: "מכונת קפה אוטומטית",
    price: "₪11,999",
    badge: "פרמיום",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg",
    name: "JURA ENA 8 דור 3",
    description: "מכונת קפה אוטומטית קומפקטית",
    price: "₪4,999",
    badge: "חסכוני",
  },
  {
    image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg",
    name: "La Marzocco Linea Mini",
    description: "מכונת קפה ידנית",
    price: "₪9,900",
    badge: "",
  },
];

export function RelatedProducts() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4]">
        <h2 className="text-[42px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] text-[#c46500]">
          מוצרים משלימים
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-60 mt-1">
          לקוחות שרכשו את ה-Z10 בחרו גם
        </p>
      </div>

      <div className="flex">
        {related.map((product, i) => (
          <div
            key={i}
            className="flex-1 border-l border-[#e6dad4] first:border-l-0 p-8 group cursor-pointer hover:bg-[#f0e6dc] transition-colors duration-300"
          >
            <div className="relative rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply p-4 transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {product.badge && (
                <div className="absolute top-3 right-3 bg-[#c46500] text-white text-[15px] font-['Dialect_PM',sans-serif] font-bold px-2.5 py-1 rounded">
                  {product.badge}
                </div>
              )}
            </div>
            <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-1 group-hover:text-[#8B3A00] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#8B3A00] text-[20px] font-['Dialect_PM',sans-serif] opacity-80 mb-3">
              {product.description}
            </p>
            <p className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
