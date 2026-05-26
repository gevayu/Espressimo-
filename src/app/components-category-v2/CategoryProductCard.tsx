import { Star, ShoppingCart } from "lucide-react";
import { PriceTag } from "../components/PriceTag";
import { formatPrice, type Product } from "./categoryData";

export function CategoryProductCard({ p }: { p: Product }) {
  return (
    <a
      href="/v2/productv2"
      className="group flex flex-col bg-[#fff9f2] border border-[#e6dad4] rounded-xl overflow-hidden hover:border-[#c46500] hover:shadow-[0_8px_30px_rgba(82,44,37,0.08)] transition-all duration-300 relative"
    >
      {/* Badge */}
      {p.badge && (
        <span
          className="absolute top-4 right-4 z-10 text-white text-[13px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full"
          style={{ backgroundColor: p.badgeColor }}
        >
          {p.badge}
        </span>
      )}

      {/* Out of stock veil */}
      {!p.inStock && (
        <span className="absolute top-4 left-4 z-10 bg-[#522c25] text-white text-[13px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">
          אזל מהמלאי
        </span>
      )}

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-[#f6ede3] relative">
        <img
          src={p.image}
          alt={`${p.brand} ${p.name}`}
          className={`w-full h-full object-contain mix-blend-multiply p-8 group-hover:scale-[1.05] transition-transform duration-500 ${
            !p.inStock ? "opacity-50" : ""
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-2 border-t border-[#e6dad4] flex-1">
        <span className="text-[#c46500] text-[15px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.08em]">
          {p.brand}
        </span>
        <h3 className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold leading-tight group-hover:text-[#8B3A00] transition-colors">
          {p.name}
        </h3>
        <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-60 leading-snug">
          {p.desc}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {p.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[13px] font-['Dialect_PM',sans-serif] text-[#522c25] bg-[#f6ede3] border border-[#e6dad4] rounded-full px-2.5 py-0.5"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={13}
                className={
                  s <= Math.round(p.rating)
                    ? "fill-[#c46500] text-[#c46500]"
                    : "text-[#e6dad4] fill-[#e6dad4]"
                }
              />
            ))}
          </div>
          <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">
            {p.rating} ({p.reviews})
          </span>
        </div>

        {/* Price + add */}
        <div className="flex items-end justify-between gap-2 mt-auto pt-3 border-t border-[#e6dad4]">
          <div className="flex items-baseline gap-2">
            <PriceTag
              price={formatPrice(p.price)}
              className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold"
            />
            {p.oldPrice && (
              <PriceTag
                price={formatPrice(p.oldPrice)}
                className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-30 line-through"
              />
            )}
          </div>
          <span
            className="shrink-0 w-10 h-10 rounded-lg bg-[#8B3A00] text-white flex items-center justify-center group-hover:bg-[#a34500] transition-colors"
            aria-hidden
          >
            <ShoppingCart size={18} />
          </span>
        </div>
      </div>
    </a>
  );
}
