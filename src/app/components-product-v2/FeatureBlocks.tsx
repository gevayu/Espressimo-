import type { Product } from "../data/products";

export function FeatureBlocks({ product }: { product: Product }) {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      {product.featureBlocks.map((block, i) => (
        <div
          key={i}
          className={`flex items-stretch border-b border-[#e6dad4] last:border-b-0 ${block.imageRight ? "" : "flex-row-reverse"}`}
        >
          {/* Image */}
          <div className="w-[48%] shrink-0 overflow-hidden">
            <img
              src={block.image}
              alt={block.title}
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex-1 px-14 py-16 flex flex-col justify-center gap-5 border-l border-[#e6dad4]">
            <span className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] tracking-[0.15em] uppercase opacity-80">
              {block.tag}
            </span>
            <h2 className="text-[#522c25] text-[38px] leading-[1.2] font-['Dialect_PM',sans-serif] font-bold tracking-[0.04em]">
              {block.title}
            </h2>
            <p className="text-[#522c25] text-[22px] leading-[36px] font-['Dialect_PM',sans-serif] opacity-70">
              {block.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
