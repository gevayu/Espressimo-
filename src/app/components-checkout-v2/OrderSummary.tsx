import { useState } from "react";
import { Truck, Tag, Lock, ShieldCheck } from "lucide-react";
import { PriceTag } from "../components/PriceTag";
import { formatPrice } from "../components-category-v2/categoryData";

export type CartLine = {
  id: string;
  image: string;
  brand: string;
  name: string;
  price: number;
  qty: number;
};

type Props = {
  lines: CartLine[];
  onQty: (id: string, qty: number) => void;
  pickup: boolean;
  coupon: string | null;
  onApplyCoupon: (code: string) => void;
};

const SHIPPING = 0; // משלוח חינם
const COUPON_RATE = 0.1; // ESPRESSO10 → 10%

export function OrderSummary({ lines, onQty, pickup, coupon, onApplyCoupon }: Props) {
  const [code, setCode] = useState("");

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const discount = coupon ? Math.round(subtotal * COUPON_RATE) : 0;
  const shipping = pickup ? 0 : SHIPPING;
  const total = subtotal - discount + shipping;

  return (
    <aside
      dir="rtl"
      className="w-[420px] shrink-0 sticky top-[24px] self-start bg-[#f6ede3] border border-[#e6dad4] rounded-2xl overflow-hidden"
    >
      <div className="px-7 py-5 border-b border-[#e6dad4]">
        <h2 className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">
          סיכום הזמנה
        </h2>
      </div>

      {/* Line items */}
      <div className="px-7 py-5 flex flex-col gap-5 border-b border-[#e6dad4]">
        {lines.map((l) => (
          <div key={l.id} className="flex gap-4">
            <div className="w-[78px] h-[78px] rounded-xl bg-[#fff9f2] border border-[#e6dad4] overflow-hidden shrink-0">
              <img src={l.image} alt={l.name} className="w-full h-full object-contain mix-blend-multiply p-2" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#c46500] text-[14px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.06em]">{l.brand}</p>
              <p className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{l.name}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border border-[#e6dad4] rounded-lg overflow-hidden bg-[#fff9f2]">
                  <button onClick={() => onQty(l.id, Math.max(1, l.qty - 1))} className="w-8 h-8 text-[#522c25] text-[18px] hover:bg-[#ede0d4] transition-colors">−</button>
                  <span className="w-8 text-center text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] font-bold">{l.qty}</span>
                  <button onClick={() => onQty(l.id, l.qty + 1)} className="w-8 h-8 text-[#522c25] text-[18px] hover:bg-[#ede0d4] transition-colors">+</button>
                </div>
                <PriceTag price={formatPrice(l.price * l.qty)} className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon */}
      <div className="px-7 py-5 border-b border-[#e6dad4]">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 border border-[#e6dad4] rounded-lg bg-[#fff9f2] px-3">
            <Tag size={17} className="text-[#c46500] shrink-0" />
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="קוד קופון"
              className="flex-1 bg-transparent py-2.5 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] outline-none placeholder:opacity-40"
            />
          </div>
          <button
            onClick={() => onApplyCoupon(code.trim())}
            className="bg-[#522c25] text-white text-[18px] font-['Dialect_PM',sans-serif] px-5 rounded-lg hover:bg-[#8B3A00] transition-colors"
          >
            החל
          </button>
        </div>
        {coupon && (
          <p className="text-[#2e7d32] text-[16px] font-['Dialect_PM',sans-serif] mt-2">
            ✓ קופון "{coupon}" הוחל — 10% הנחה
          </p>
        )}
      </div>

      {/* Totals */}
      <div className="px-7 py-5 flex flex-col gap-2.5 border-b border-[#e6dad4]">
        <Row label="סכום ביניים" value={<PriceTag price={formatPrice(subtotal)} className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif]" />} />
        {discount > 0 && (
          <Row
            label="הנחת קופון"
            value={<PriceTag price={`-${formatPrice(discount)}`} className="text-[#2e7d32] text-[19px] font-['Dialect_PM',sans-serif]" />}
          />
        )}
        <Row
          label={pickup ? "איסוף עצמי" : "משלוח"}
          value={
            <span className="flex items-center gap-1.5 text-[#2e7d32] text-[19px] font-['Dialect_PM',sans-serif] font-bold">
              <Truck size={16} /> חינם
            </span>
          }
        />
      </div>

      {/* Total */}
      <div className="px-7 py-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold">סה"כ לתשלום</span>
          <PriceTag price={formatPrice(total)} className="text-[#522c25] text-[32px] font-['Dialect_PM',sans-serif] font-bold" />
        </div>

        <button
          type="submit"
          form="checkout-form"
          className="w-full flex items-center justify-center gap-2 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[23px] font-['Dialect_PM',sans-serif] tracking-[0.04em] h-[56px] rounded-xl transition-colors"
        >
          <Lock size={20} /> סיום הזמנה ותשלום
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-55">
          <ShieldCheck size={16} className="text-[#c46500]" /> תשלום מאובטח · אחריות יבואן רשמי
        </div>
      </div>
    </aside>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] opacity-65">{label}</span>
      {value}
    </div>
  );
}
