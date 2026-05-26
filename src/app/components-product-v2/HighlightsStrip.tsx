import { Cpu, Thermometer, Gauge, Droplets, Monitor, Leaf, Smartphone, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "../data/products";

const iconMap: Record<string, LucideIcon> = {
  Cpu, Thermometer, Gauge, Droplets, Monitor, Leaf, Smartphone, Coffee,
};

export function HighlightsStrip({ product }: { product: Product }) {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex">
        {product.highlights.map((h, i) => {
          const Icon = iconMap[h.icon] ?? Coffee;
          return (
            <div
              key={i}
              className="flex-1 border-l border-[#e6dad4] first:border-l-0 px-5 py-7 flex flex-col items-center gap-2 text-center group hover:bg-[#f6ede3] transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-full bg-[#c46500]/10 flex items-center justify-center group-hover:bg-[#c46500]/20 transition-colors">
                <Icon size={20} className="text-[#c46500]" strokeWidth={1.5} />
              </div>
              <p className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{h.label}</p>
              <p className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-50">{h.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
