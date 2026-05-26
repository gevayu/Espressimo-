import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { SORT_OPTIONS, type SortId } from "./categoryData";

export type Chip = { id: string; label: string; onRemove: () => void };

type Props = {
  count: number;
  sort: SortId;
  onSort: (id: SortId) => void;
  chips: Chip[];
  onClearAll: () => void;
};

export function CategoryToolbar({ count, sort, onSort, chips, onClearAll }: Props) {
  const [open, setOpen] = useState(false);
  const current = SORT_OPTIONS.find((s) => s.id === sort)!;

  return (
    <div dir="rtl" className="pt-6">
      {/* Top row: count + sort */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#e6dad4]">
        <p className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif]">
          <span className="font-bold">{count}</span>{" "}
          <span className="opacity-55">מכונות</span>
        </p>

        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            className="flex items-center gap-2 border border-[#e6dad4] rounded-lg px-4 h-[44px] bg-[#fff9f2] text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] hover:border-[#c46500] transition-colors"
          >
            <span className="opacity-55">מיון:</span>
            <span className="font-bold">{current.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-2 w-[260px] bg-[#fff9f2] border border-[#e6dad4] rounded-xl shadow-2xl z-30 overflow-hidden">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o.id}
                  onMouseDown={() => {
                    onSort(o.id);
                    setOpen(false);
                  }}
                  className={`w-full text-right px-4 py-3 text-[18px] font-['Dialect_PM',sans-serif] hover:bg-[#f6ede3] transition-colors ${
                    o.id === sort ? "text-[#8B3A00] font-bold bg-[#f6ede3]" : "text-[#522c25]"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Active filter chips */}
      {chips.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 pt-4">
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={c.onRemove}
              className="flex items-center gap-1.5 bg-[#f6ede3] border border-[#d4c4bc] text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] rounded-full pr-3 pl-2 py-1 hover:border-[#c46500] hover:text-[#8B3A00] transition-colors"
            >
              {c.label}
              <X size={14} />
            </button>
          ))}
          <button
            onClick={onClearAll}
            className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] underline underline-offset-2 hover:opacity-70 mr-1"
          >
            נקה הכל
          </button>
        </div>
      )}
    </div>
  );
}
