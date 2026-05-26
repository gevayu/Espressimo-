import { PriceTag } from "./PriceTag";
import type { Product } from "../data/products";

export function AccessoriesSection({ product }: { product: Product }) {
  const { bundle } = product;
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
              משלימים את החוויה
            </h2>
            <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55">
              {product.accessoriesSubtitle}
            </p>
          </div>

          {/* Bundle offer */}
          <div className="bg-[#8B3A00] text-white rounded-2xl px-8 py-5 text-left shrink-0">
            <p className="text-[14px] font-['Dialect_PM',sans-serif] opacity-75 mb-1">{bundle.eyebrow}</p>
            <p className="text-[26px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{bundle.title}</p>
            <p className="text-[20px] font-['Dialect_PM',sans-serif] mt-2">
              <PriceTag price={bundle.oldPrice} className="opacity-60 line-through text-[17px] ml-2" />
              <PriceTag price={bundle.price} />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl bg-[#fff9f2]">
          {product.accessories.map((a, i) => (
            <div
              key={i}
              className="group border-l border-[#e6dad4] first:border-l-0 flex flex-col hover:bg-[#f6ede3] transition-colors duration-200 relative"
            >
              {a.badge && (
                <span className="absolute top-4 right-4 z-10 bg-[#8B3A00] text-white text-[13px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">
                  {a.badge}
                </span>
              )}

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#f6ede3]">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-contain mix-blend-multiply p-6 group-hover:scale-[1.06] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 flex-1 border-t border-[#e6dad4]">
                <h3 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors leading-snug">
                  {a.name}
                </h3>
                <p className="text-[#522c25] text-[16px] leading-[24px] font-['Dialect_PM',sans-serif] opacity-65 flex-1">
                  {a.desc}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#e6dad4]">
                  <PriceTag price={a.price} className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold" />
                  <button className="bg-[#8B3A00] hover:bg-[#a34500] text-white text-[15px] font-['Dialect_PM',sans-serif] px-4 py-2 rounded-lg transition-colors">
                    הוסף לסל
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
