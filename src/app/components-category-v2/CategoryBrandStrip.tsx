// Logos for the brands present in this category (automatic machines).
// Clicking a logo toggles the brand filter — stays in sync with the sidebar & chips.
const BRAND_LOGOS: Record<string, string> = {
  JURA: "/logos/JURA.png",
  Kalerm: "/logos/KALERM.png",
  "DR COFFEE": "/logos/DRCOFFEE.png",
};

type Props = {
  brands: { name: string; count: number }[];
  selectedBrands: string[];
  onToggleBrand: (b: string) => void;
};

export function CategoryBrandStrip({ brands, selectedBrands, onToggleBrand }: Props) {
  const items = brands.filter((b) => BRAND_LOGOS[b.name]);

  return (
    <section dir="rtl" className="border-b border-[#e6dad4] bg-[#fff9f2]">
      <div className="px-12 py-8">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
            המותגים בקטגוריה
          </h2>
          <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-45">
            לחצו על מותג לסינון מהיר
          </span>
        </div>

        <div className="flex flex-wrap items-stretch gap-4">
          {items.map((b) => {
            const active = selectedBrands.includes(b.name);
            return (
              <button
                key={b.name}
                onClick={() => onToggleBrand(b.name)}
                aria-pressed={active}
                className={`group flex-1 min-w-[180px] flex items-center gap-4 border rounded-xl px-6 py-4 transition-all ${
                  active
                    ? "border-[#c46500] bg-[#f6ede3] shadow-[0_4px_20px_rgba(82,44,37,0.06)]"
                    : "border-[#e6dad4] bg-[#fff9f2] hover:border-[#c46500] hover:bg-[#f6ede3]"
                }`}
              >
                <img
                  src={BRAND_LOGOS[b.name]}
                  alt={b.name}
                  className={`h-12 w-[120px] object-contain transition-all ${
                    active
                      ? "[filter:grayscale(0)_opacity(1)]"
                      : "[filter:grayscale(1)_opacity(0.6)] group-hover:[filter:grayscale(0)_opacity(1)]"
                  }`}
                />
                <span className="flex flex-col items-start text-right">
                  <span
                    className={`text-[19px] font-['Dialect_PM',sans-serif] font-bold transition-colors ${
                      active ? "text-[#8B3A00]" : "text-[#522c25] group-hover:text-[#8B3A00]"
                    }`}
                  >
                    {b.name}
                  </span>
                  <span className="text-[15px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-45">
                    {b.count} דגמים
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
