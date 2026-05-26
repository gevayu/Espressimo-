import { useMemo, useState } from "react";
import { MessageCircle, Accessibility, SearchX } from "lucide-react";
import { Header } from "../components-v2/Header";
import { Footer } from "../components-v2/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { CategoryHero } from "./CategoryHero";
import { CategoryBrandStrip } from "./CategoryBrandStrip";
import { FilterSidebar } from "./FilterSidebar";
import { CategoryToolbar, type Chip } from "./CategoryToolbar";
import { CategoryProductCard } from "./CategoryProductCard";
import {
  products,
  FEATURES,
  PRICE_RANGES,
  type SortId,
} from "./categoryData";

export function CategoryPageV2() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortId>("popular");

  // Facet data (counts across the full catalog)
  const brands = useMemo(() => {
    const map = new Map<string, number>();
    products.forEach((p) => map.set(p.brand, (map.get(p.brand) ?? 0) + 1));
    return [...map.entries()].map(([name, count]) => ({ name, count }));
  }, []);

  const featureCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FEATURES.forEach((f) => {
      counts[f] = products.filter((p) => p.features.includes(f)).length;
    });
    return counts;
  }, []);

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) =>
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const clearAll = () => {
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setSelectedRange(null);
    setInStockOnly(false);
  };

  // Filter + sort pipeline
  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === selectedRange);
    let list = products.filter((p) => {
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (selectedFeatures.length && !selectedFeatures.every((f) => p.features.includes(f)))
        return false;
      if (range && (p.price < range.min || p.price > range.max)) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "new":
          return b.addedOrder - a.addedOrder;
        default:
          return b.popularity - a.popularity;
      }
    });
    return list;
  }, [selectedBrands, selectedFeatures, selectedRange, inStockOnly, sort]);

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedFeatures.length > 0 ||
    selectedRange !== null ||
    inStockOnly;

  const chips: Chip[] = [
    ...selectedBrands.map((b) => ({
      id: `brand-${b}`,
      label: b,
      onRemove: () => toggle(setSelectedBrands, b),
    })),
    ...selectedFeatures.map((f) => ({
      id: `feat-${f}`,
      label: f,
      onRemove: () => toggle(setSelectedFeatures, f),
    })),
    ...(selectedRange
      ? [
          {
            id: "range",
            label: PRICE_RANGES.find((r) => r.id === selectedRange)!.label,
            onRemove: () => setSelectedRange(null),
          },
        ]
      : []),
    ...(inStockOnly
      ? [{ id: "stock", label: "במלאי בלבד", onRemove: () => setInStockOnly(false) }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <Header />
      <CategoryHero count={products.length} />

      <CategoryBrandStrip
        brands={brands}
        selectedBrands={selectedBrands}
        onToggleBrand={(b) => toggle(setSelectedBrands, b)}
      />

      <main dir="rtl" className="px-12 flex gap-10 items-start">
        <FilterSidebar
          brands={brands}
          featureCounts={featureCounts}
          selectedBrands={selectedBrands}
          selectedFeatures={selectedFeatures}
          selectedRange={selectedRange}
          inStockOnly={inStockOnly}
          onToggleBrand={(b) => toggle(setSelectedBrands, b)}
          onToggleFeature={(f) => toggle(setSelectedFeatures, f)}
          onSelectRange={setSelectedRange}
          onToggleInStock={() => setInStockOnly((v) => !v)}
          onClearAll={clearAll}
          hasActiveFilters={hasActiveFilters}
        />

        <div className="flex-1 min-w-0 pb-16">
          <CategoryToolbar
            count={filtered.length}
            sort={sort}
            onSort={setSort}
            chips={chips}
            onClearAll={clearAll}
          />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {filtered.map((p, i) => (
                <ScrollReveal key={p.id} delay={(i % 3) * 80}>
                  <CategoryProductCard p={p} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-28">
              <SearchX size={56} className="text-[#c46500] opacity-60 mb-4" strokeWidth={1.3} />
              <p className="text-[#522c25] text-[28px] font-['Dialect_PM',sans-serif] font-bold">
                לא נמצאו מכונות תואמות
              </p>
              <p className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] opacity-55 mt-2">
                נסו להסיר חלק מהמסננים כדי לראות עוד תוצאות.
              </p>
              <button
                onClick={clearAll}
                className="mt-6 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.05em] px-7 py-3 rounded-lg transition-colors"
              >
                איפוס סינון
              </button>
            </div>
          )}
        </div>
      </main>

      {/* SEO / category description */}
      <ScrollReveal>
        <section dir="rtl" className="border-t border-[#e6dad4] bg-[#f6ede3] px-12 py-16">
          <div className="max-w-[920px]">
            <h2 className="text-[#522c25] text-[40px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mb-5">
              איך בוחרים מכונת קפה אוטומטית?
            </h2>
            <div className="space-y-4 text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-70 leading-[1.7]">
              <p>
                מכונת קפה אוטומטית טוחנת, מהדקת ומחלצת אספרסו טרי בלחיצת כפתור — בלי
                להתעסק בידיות ובטמפינג. זו הבחירה המושלמת למי שרוצה כוס קפה איכותית
                ועקבית בכל בוקר, גם בלי ניסיון בריסטה.
              </p>
              <p>
                בבחירה כדאי לשים לב לסוג מערכת החלב (אוטומטית מול ידנית), לכמות
                המשקאות השמורים, לגודל מיכל המים והפולים, ולשאלה אם המכונה מיועדת
                לבית או לעומס של משרד. דגמים עם טוחנת כפולה מאפשרים לעבור בין סוגי
                פולים, ומסך מגע מקל על שמירת פרופילים אישיים לכל בני הבית.
              </p>
              <p>
                כל המכונות שלנו מגיעות עם אחריות יבואן רשמי, ליווי בריסטה אישי
                בהקמה, ואפשרות טרייד אין למכונה הישנה. לא בטוחים? דברו עם המומחה שלנו
                ונתאים לכם בדיוק את מה שמתאים למטבח ולתקציב.
              </p>
            </div>
            <a
              href="https://wa.me/9720585335035"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.05em] px-7 py-3 rounded-lg transition-colors"
            >
              דברו עם המומחה שלנו ←
            </a>
          </div>
        </section>
      </ScrollReveal>

      <Footer />

      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/9720585335035"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צור קשר בוואטסאפ"
        className="fixed bottom-[124px] right-[64px] z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>

      {/* Accessibility — bottom left */}
      <button
        aria-label="הצהרת נגישות"
        className="fixed bottom-[124px] left-[64px] z-50 w-14 h-14 rounded-full bg-[#522c25] flex items-center justify-center shadow-lg hover:bg-[#8B3A00] hover:scale-110 transition-all"
      >
        <Accessibility size={26} className="text-white" />
      </button>
    </div>
  );
}
