import type { Product } from "../data/products";

export function FeaturesSection({ product }: { product: Product }) {
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
          {product.featuresTitle}
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55 mb-12">
          {product.featuresSubtitle}
        </p>

        <div className="grid grid-cols-2 gap-0">
          {product.features.map((f, i) => (
            <div
              key={i}
              className={`p-8 border-b border-[#e6dad4] group hover:bg-[#ede0d4] transition-colors duration-200 ${
                i % 2 === 0 ? "border-l border-[#e6dad4]" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <span
                  className="text-[52px] leading-none font-['Dialect_PM',sans-serif] font-bold shrink-0 select-none"
                  style={{ color: "#c46500", opacity: 0.35 }}
                >
                  {f.num}
                </span>
                <div>
                  <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold mb-2 group-hover:text-[#8B3A00] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[#522c25] text-[19px] leading-[30px] font-['Dialect_PM',sans-serif] opacity-70">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
