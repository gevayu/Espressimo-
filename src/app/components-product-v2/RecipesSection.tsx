import type { Product } from "../data/products";

const difficultyColor: Record<string, string> = {
  קל: "#2e7d32",
  בינוני: "#c46500",
  מתקדם: "#8B3A00",
};

export function RecipesSection({ product }: { product: Product }) {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
          מתכוני הכנה ממומלצים
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55 mb-12">
          {product.recipesSubtitle}
        </p>

        <div className="grid grid-cols-4 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl">
          {product.recipes.map((r, i) => (
            <div
              key={i}
              className="group border-l border-[#e6dad4] first:border-l-0 flex flex-col hover:bg-[#f6ede3] transition-colors duration-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#f6ede3]">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-50">⏱ {r.time}</span>
                  <span
                    className="text-[13px] font-['Dialect_PM',sans-serif] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: difficultyColor[r.difficulty] ?? "#522c25", background: `${difficultyColor[r.difficulty] ?? "#522c25"}15` }}
                  >
                    {r.difficulty}
                  </span>
                </div>

                <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors">
                  {r.name}
                </h3>
                <p className="text-[#522c25] text-[17px] leading-[26px] font-['Dialect_PM',sans-serif] opacity-65">
                  {r.desc}
                </p>

                {/* Params */}
                <div className="mt-auto pt-4 border-t border-[#e6dad4] grid grid-cols-2 gap-2">
                  {r.params.map((p) => (
                    <div key={p.label} className="flex flex-col">
                      <span className="text-[13px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-45">{p.label}</span>
                      <span className="text-[16px] font-['Dialect_PM',sans-serif] font-bold text-[#522c25]">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
