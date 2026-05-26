import { Check } from "lucide-react";
import { FEATURES, PRICE_RANGES } from "./categoryData";

type Props = {
  brands: { name: string; count: number }[];
  featureCounts: Record<string, number>;
  selectedBrands: string[];
  selectedFeatures: string[];
  selectedRange: string | null;
  inStockOnly: boolean;
  onToggleBrand: (b: string) => void;
  onToggleFeature: (f: string) => void;
  onSelectRange: (id: string | null) => void;
  onToggleInStock: () => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
};

function CheckRow({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="w-full flex items-center gap-3 py-2 group text-right"
    >
      <span
        className={`w-5 h-5 rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${
          checked
            ? "bg-[#8B3A00] border-[#8B3A00]"
            : "border-[#d4c4bc] group-hover:border-[#c46500]"
        }`}
      >
        {checked && <Check size={13} className="text-white" strokeWidth={3} />}
      </span>
      <span
        className={`flex-1 text-[19px] font-['Dialect_PM',sans-serif] transition-colors ${
          checked ? "text-[#8B3A00] font-bold" : "text-[#522c25] group-hover:text-[#8B3A00]"
        }`}
      >
        {label}
      </span>
      {count !== undefined && (
        <span className="text-[15px] font-['Dialect_PM',sans-serif] text-[#522c25] opacity-40">
          {count}
        </span>
      )}
    </button>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-[#e6dad4] py-6">
      <h3 className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] tracking-[0.14em] uppercase opacity-50 mb-3">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export function FilterSidebar(props: Props) {
  return (
    <aside dir="rtl" className="w-[300px] shrink-0 sticky top-[84px] self-start max-h-[calc(100vh-100px)] overflow-y-auto pl-2">
      <div className="flex items-center justify-between mb-2 pt-6">
        <h2 className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">
          סינון
        </h2>
        {props.hasActiveFilters && (
          <button
            onClick={props.onClearAll}
            className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] underline underline-offset-2 hover:opacity-70"
          >
            נקה הכל
          </button>
        )}
      </div>

      <Group title="מותג">
        {props.brands.map((b) => (
          <CheckRow
            key={b.name}
            label={b.name}
            count={b.count}
            checked={props.selectedBrands.includes(b.name)}
            onChange={() => props.onToggleBrand(b.name)}
          />
        ))}
      </Group>

      <Group title="טווח מחירים">
        {PRICE_RANGES.map((r) => (
          <button
            key={r.id}
            onClick={() => props.onSelectRange(props.selectedRange === r.id ? null : r.id)}
            className="w-full flex items-center gap-3 py-2 group text-right"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                props.selectedRange === r.id
                  ? "border-[#8B3A00]"
                  : "border-[#d4c4bc] group-hover:border-[#c46500]"
              }`}
            >
              {props.selectedRange === r.id && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B3A00]" />
              )}
            </span>
            <span
              className={`flex-1 text-[19px] font-['Dialect_PM',sans-serif] transition-colors ${
                props.selectedRange === r.id
                  ? "text-[#8B3A00] font-bold"
                  : "text-[#522c25] group-hover:text-[#8B3A00]"
              }`}
            >
              {r.label}
            </span>
          </button>
        ))}
      </Group>

      <Group title="תכונות">
        {FEATURES.map((f) => (
          <CheckRow
            key={f}
            label={f}
            count={props.featureCounts[f] ?? 0}
            checked={props.selectedFeatures.includes(f)}
            onChange={() => props.onToggleFeature(f)}
          />
        ))}
      </Group>

      <div className="py-6">
        <CheckRow
          label="להציג רק מה שבמלאי"
          checked={props.inStockOnly}
          onChange={props.onToggleInStock}
        />
      </div>
    </aside>
  );
}
