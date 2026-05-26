import { useState, useRef } from "react";
import { PriceTag } from "./PriceTag";
import { ChevronRight, ChevronLeft, ZoomIn, Phone, ShoppingCart, Truck, Shield, RotateCcw, Lock } from "lucide-react";
import type { Product } from "../data/products";

const trust = [
  { icon: Truck, text: "משלוח חינם" },
  { icon: Shield, text: "אחריות 2 שנה" },
  { icon: RotateCcw, text: "החזרה 14 יום" },
  { icon: Lock, text: "תשלום מאובטח" },
];


export function ProductHero({ onScrolledPast, product }: { onScrolledPast: (v: boolean) => void; product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [qty, setQty] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);

  const images = product.gallery;
  const extraBadges = product.heroBadges.filter((b) => b !== product.stockStatus);

  const prev = () => setActive((a) => Math.max(a - 1, 0));
  const next = () => setActive((a) => Math.min(a + 1, images.length - 1));

  return (
    <div ref={heroRef} className="flex items-stretch border-b border-[#e6dad4]" dir="rtl">

      {/* ── Gallery (right in RTL) ── */}
      <div className="w-[52%] shrink-0 border-l border-[#e6dad4] sticky top-[68px] flex flex-col" style={{ height: "calc(100vh - 68px)" }}>

        {/* Main image */}
        <div className="relative bg-[#f6ede3] overflow-hidden flex-1">
          <img
            key={active}
            src={images[active]}
            alt={`${product.name} תמונה ${active + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={() => setZoom(!zoom)}
            style={{ animation: "heroTextEntry 0.35s ease-out forwards" }}
          />

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] px-3 py-1 rounded-full">
            {active + 1} / {images.length}
          </div>

          {/* Zoom hint */}
          <button onClick={() => setZoom(!zoom)} className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <ZoomIn size={16} className="text-[#522c25]" />
          </button>

          {/* Arrows */}
          {active > 0 && (
            <button onClick={prev} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
              <ChevronRight size={18} className="text-[#522c25]" />
            </button>
          )}
          {active < images.length - 1 && (
            <button onClick={next} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
              <ChevronLeft size={18} className="text-[#522c25]" />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex border-t border-[#e6dad4]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setZoom(false); }}
              className={`flex-1 aspect-square bg-[#f6ede3] border-l border-[#e6dad4] first:border-l-0 overflow-hidden transition-all ${
                i === active ? "ring-2 ring-inset ring-[#c46500]" : "opacity-40 hover:opacity-70"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply p-2" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Info panel (left in RTL) ── */}
      <div className="flex-1 px-12 py-10 flex flex-col gap-5 overflow-y-auto" style={{ maxHeight: "calc(100vh - 68px)" }}>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#c46500] text-[20px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.08em] uppercase">{product.brand}</span>
          <span className="w-1 h-1 rounded-full bg-[#d4c4bc]" />
          <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-55">{product.categoryType}</span>
          <span className="bg-[#8B3A00] text-white text-[14px] font-['Dialect_PM',sans-serif] px-3 py-0.5 rounded-full">{product.stockStatus}</span>
          {extraBadges.map((b) => (
            <span key={b} className="bg-[#c46500]/15 text-[#c46500] text-[14px] font-['Dialect_PM',sans-serif] px-3 py-0.5 rounded-full">{b}</span>
          ))}
        </div>

        {/* Title */}
        <div>
          <h1 className="text-[#522c25] text-[58px] leading-[1.05] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">{product.name}</h1>
          <p className="text-[#522c25] text-[24px] leading-[1.5] font-['Dialect_PM',sans-serif] opacity-60 mt-2">
            {product.subtitle}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-4 border-y border-[#e6dad4] py-5">
          <PriceTag price={product.price} className="text-[#522c25] text-[54px] font-['Dialect_PM',sans-serif] font-bold leading-none" />
          <PriceTag price={product.oldPrice} className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] opacity-30 line-through" />
          <span className="bg-[#8B3A00]/10 text-[#8B3A00] text-[16px] font-['Dialect_PM',sans-serif] font-bold px-3 py-1 rounded-lg flex items-baseline gap-1">
            חיסכון <PriceTag price={product.savings} />
          </span>
          <span className="bg-[#c46500]/10 text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] font-bold px-3 py-1 rounded-lg">
            {product.paymentsText}
          </span>
        </div>

        {/* Delivery info */}
        <div className="bg-[#f6ede3] rounded-xl p-4 flex gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">זמן אספקה משוער</span>
            <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] font-bold">{product.deliveryTime}</span>
          </div>
          <div className="border-r border-[#e6dad4] pr-6 flex flex-col gap-1">
            <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-50">איסוף עצמי</span>
            <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] font-bold">{product.pickupLocation}</span>
          </div>
        </div>

        {/* Qty + CTA + Secondary CTA — single row */}
        <div className="flex gap-3 items-stretch">
          <div className="flex items-center border border-[#e6dad4] rounded-lg overflow-hidden">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-12 h-[52px] text-[#522c25] text-[22px] hover:bg-[#f6ede3] transition-colors">−</button>
            <span className="w-10 text-center text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="w-12 h-[52px] text-[#522c25] text-[22px] hover:bg-[#f6ede3] transition-colors">+</button>
          </div>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.05em] h-[52px] rounded-lg transition-colors">
            <ShoppingCart size={20} />
            הוספה לסל
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-[#522c25]/30 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] px-4 h-[52px] rounded-lg hover:border-[#522c25] hover:bg-[#f6ede3] transition-all whitespace-nowrap">
            <Phone size={18} />
            דברו עם מומחה
          </button>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-4 gap-3 border-t border-[#e6dad4] pt-4">
          {trust.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center gap-1.5 text-center">
              <Icon size={20} className="text-[#c46500]" strokeWidth={1.5} />
              <span className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-65">{text}</span>
            </div>
          ))}
        </div>

        {/* Section nav anchors */}
        <div className="grid grid-cols-4 gap-2 border-t border-[#e6dad4] pt-4">
          {[
            { label: "מפרט טכני", href: "#specs" },
            { label: "שאלות נפוצות", href: "#faq" },
            { label: "מסמכים והורדות", href: "#documents" },
            { label: "שאלות מהקהילה", href: "#reviews" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-center text-[15px] font-['Dialect_PM',sans-serif] text-[#522c25] bg-[#ede0d4] border border-[#d4c4bc] rounded-lg py-2 px-1 hover:bg-[#e0cfc4] hover:border-[#c46500] hover:text-[#8B3A00] transition-all"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
