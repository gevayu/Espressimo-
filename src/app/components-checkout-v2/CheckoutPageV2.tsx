import { useState } from "react";
import {
  Lock,
  Truck,
  Store,
  CreditCard,
  Check,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";
const imgLogo = "/picts/logo.png";
import { OrderSummary, type CartLine } from "./OrderSummary";
import { products } from "../components-category-v2/categoryData";

const initialCart: CartLine[] = [
  { ...pick("jura-z10"), qty: 1 },
  { ...pick("jura-ena8"), qty: 1 },
];

function pick(id: string) {
  const p = products.find((x) => x.id === id)!;
  return { id: p.id, image: p.image, brand: p.brand, name: p.name, price: p.price };
}

const steps = ["עגלה", "פרטים ומשלוח", "תשלום"];

const inputBase =
  "w-full bg-[#fff9f2] border border-[#e6dad4] rounded-lg px-4 py-3 text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c46500] transition-colors placeholder:opacity-40";
const labelBase =
  "block text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] mb-1.5 opacity-75";

export function CheckoutPageV2() {
  const [lines, setLines] = useState<CartLine[]>(initialCart);
  const [pickup, setPickup] = useState(false);
  const [payment, setPayment] = useState<"card" | "bit" | "paypal">("card");
  const [coupon, setCoupon] = useState<string | null>(null);
  const [placed, setPlaced] = useState(false);

  const onQty = (id: string, qty: number) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, qty } : l)));

  const onApplyCoupon = (code: string) => {
    if (code.toUpperCase() === "ESPRESSO10") setCoupon("ESPRESSO10");
    else if (code) setCoupon(null);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed) return <Confirmation />;

  return (
    <div className="min-h-screen bg-[#fff9f2]">
      {/* Minimal checkout header */}
      <header dir="rtl" className="sticky top-0 z-40 bg-[#fff9f2] border-b border-[#e6dad4]">
        <div className="flex items-center justify-between h-[68px] px-12">
          <a href="/v2" className="flex items-center">
            <img src={imgLogo} alt="אספרסימו" className="h-11 w-auto" />
          </a>
          <span className="flex items-center gap-2 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-70">
            <Lock size={18} className="text-[#c46500]" /> תשלום מאובטח
          </span>
        </div>
      </header>

      {/* Step indicator */}
      <div dir="rtl" className="border-b border-[#e6dad4] bg-[#f6ede3] px-12 py-5">
        <div className="flex items-center justify-center gap-4 max-w-[640px] mx-auto">
          {steps.map((s, i) => {
            const current = i === 1; // active step = פרטים ומשלוח
            const done = i < 1;
            return (
              <div key={s} className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-['Dialect_PM',sans-serif] font-bold ${
                      done
                        ? "bg-[#2e7d32] text-white"
                        : current
                        ? "bg-[#8B3A00] text-white"
                        : "bg-[#ede0d4] text-[#522c25] opacity-60"
                    }`}
                  >
                    {done ? <Check size={16} /> : i + 1}
                  </span>
                  <span
                    className={`text-[19px] font-['Dialect_PM',sans-serif] ${
                      current ? "text-[#8B3A00] font-bold" : "text-[#522c25] opacity-55"
                    }`}
                  >
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && <span className="w-10 h-px bg-[#d4c4bc]" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <main dir="rtl" className="px-12 py-10 flex gap-10 items-start max-w-[1280px] mx-auto">
        {/* Form */}
        <form id="checkout-form" onSubmit={submit} className="flex-1 min-w-0 flex flex-col gap-7">
          {/* Contact */}
          <Section num={1} title="פרטי קשר">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="שם מלא" required>
                <input className={inputBase} placeholder="ישראל ישראלי" required />
              </Field>
              <Field label="טלפון" required>
                <input className={inputBase} placeholder="050-0000000" inputMode="tel" required />
              </Field>
              <div className="md:col-span-2">
                <Field label="אימייל" required>
                  <input className={inputBase} placeholder="you@example.com" type="email" required />
                </Field>
              </div>
            </div>
          </Section>

          {/* Delivery method */}
          <Section num={2} title="אופן קבלת ההזמנה">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <DeliveryOption
                active={!pickup}
                onClick={() => setPickup(false)}
                icon={Truck}
                title="משלוח עד הבית"
                desc="3–5 ימי עסקים · חינם"
              />
              <DeliveryOption
                active={pickup}
                onClick={() => setPickup(true)}
                icon={Store}
                title="איסוף עצמי"
                desc="אור יהודה · בתיאום מראש"
              />
            </div>

            {!pickup && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="md:col-span-2">
                  <Field label="רחוב ומספר" required>
                    <input className={inputBase} placeholder="הרצל 1" required={!pickup} />
                  </Field>
                </div>
                <Field label="עיר" required>
                  <input className={inputBase} placeholder="תל אביב" required={!pickup} />
                </Field>
                <Field label="מיקוד">
                  <input className={inputBase} placeholder="0000000" inputMode="numeric" />
                </Field>
                <div className="md:col-span-2">
                  <Field label="הערות למשלוח">
                    <input className={inputBase} placeholder="קומה, דירה, קוד כניסה…" />
                  </Field>
                </div>
              </div>
            )}
          </Section>

          {/* Payment */}
          <Section num={3} title="אמצעי תשלום">
            <div className="flex flex-col gap-3">
              <PayOption active={payment === "card"} onClick={() => setPayment("card")} icon={CreditCard} label="כרטיס אשראי" />
              {payment === "card" && (
                <div className="grid grid-cols-2 gap-4 bg-[#f6ede3] border border-[#e6dad4] rounded-xl p-5">
                  <div className="col-span-2">
                    <Field label="מספר כרטיס" required>
                      <input className={inputBase} placeholder="0000 0000 0000 0000" inputMode="numeric" required={payment === "card"} />
                    </Field>
                  </div>
                  <Field label="תוקף" required>
                    <input className={inputBase} placeholder="MM/YY" required={payment === "card"} />
                  </Field>
                  <Field label="CVV" required>
                    <input className={inputBase} placeholder="123" inputMode="numeric" required={payment === "card"} />
                  </Field>
                  <div className="col-span-2">
                    <Field label="שם בעל הכרטיס" required>
                      <input className={inputBase} placeholder="כפי שמופיע על הכרטיס" required={payment === "card"} />
                    </Field>
                  </div>
                </div>
              )}
              <PayOption active={payment === "bit"} onClick={() => setPayment("bit")} label="ביט / פייבוקס" />
              <PayOption active={payment === "paypal"} onClick={() => setPayment("paypal")} label="PayPal" />
            </div>
          </Section>

          {/* Back link */}
          <a href="/v2/category" className="flex items-center gap-1 text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-60 hover:opacity-100 hover:text-[#8B3A00] transition-all">
            <ChevronLeft size={16} className="rotate-180" /> חזרה לחנות
          </a>
        </form>

        {/* Summary */}
        <OrderSummary lines={lines} onQty={onQty} pickup={pickup} coupon={coupon} onApplyCoupon={onApplyCoupon} />
      </main>
    </div>
  );
}

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#fff9f2] border border-[#e6dad4] rounded-2xl p-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-8 rounded-full bg-[#522c25] text-white flex items-center justify-center text-[17px] font-['Dialect_PM',sans-serif] font-bold">{num}</span>
        <h2 className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelBase}>
        {label} {required && <span className="text-[#c46500]">*</span>}
      </span>
      {children}
    </label>
  );
}

function DeliveryOption({
  active,
  onClick,
  icon: Icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 text-right border rounded-xl px-5 py-4 transition-all ${
        active ? "border-[#c46500] bg-[#f6ede3]" : "border-[#e6dad4] hover:border-[#c46500]"
      }`}
    >
      <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${active ? "border-[#8B3A00]" : "border-[#d4c4bc]"}`}>
        {active && <span className="w-2.5 h-2.5 rounded-full bg-[#8B3A00]" />}
      </span>
      <Icon size={22} className="text-[#c46500] shrink-0" />
      <span className="flex flex-col">
        <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{title}</span>
        <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-55">{desc}</span>
      </span>
    </button>
  );
}

function PayOption({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 text-right border rounded-xl px-5 py-4 transition-all ${
        active ? "border-[#c46500] bg-[#f6ede3]" : "border-[#e6dad4] hover:border-[#c46500]"
      }`}
    >
      <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${active ? "border-[#8B3A00]" : "border-[#d4c4bc]"}`}>
        {active && <span className="w-2.5 h-2.5 rounded-full bg-[#8B3A00]" />}
      </span>
      {Icon && <Icon size={22} className="text-[#c46500] shrink-0" />}
      <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold">{label}</span>
    </button>
  );
}

function Confirmation() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fff9f2] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-[#2e7d32] flex items-center justify-center mb-6">
        <Check size={44} className="text-white" strokeWidth={2.5} />
      </div>
      <h1 className="text-[#522c25] text-[52px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em]">
        ההזמנה התקבלה!
      </h1>
      <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-65 mt-3 max-w-[520px]">
        תודה שבחרתם באספרסימו. שלחנו אישור הזמנה למייל, ונחזור אליכם לתיאום אספקה.
      </p>
      <p className="flex items-center gap-2 text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-50 mt-4">
        <ShieldCheck size={18} className="text-[#c46500]" /> מספר הזמנה: #ESP-{Math.floor(100000 + Math.random() * 900000)}
      </p>
      <div className="flex gap-4 mt-9 flex-wrap justify-center">
        <a href="/v2/category" className="bg-[#8B3A00] hover:bg-[#a34500] text-white text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg transition-colors">
          המשך לקנות
        </a>
        <a href="/v2" className="border-2 border-[#522c25]/30 text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg hover:bg-[#f6ede3] transition-colors">
          חזרה לדף הבית
        </a>
      </div>
    </div>
  );
}
