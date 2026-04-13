import { Cpu, Thermometer, Gauge, Droplets, Monitor, Leaf, Smartphone } from "lucide-react";

const highlights = [
  { icon: Cpu,         label: "טוחנת מובנית",           sub: "30 דרגות גסות" },
  { icon: Thermometer, label: "תרמובלוק כפולה",          sub: "חימום מיידי" },
  { icon: Gauge,       label: "לחץ 15 בר",               sub: "מיצוי מקצועי" },
  { icon: Droplets,    label: "מקציף חלב אוטומטי",       sub: "קצף נוצתי" },
  { icon: Monitor,     label: "מסך מגע צבעוני",          sub: "4.3 אינץ'" },
  { icon: Leaf,        label: "מצב חיסכון בחשמל",        sub: "P.E.P טכנולוגיה" },
  { icon: Smartphone,  label: "שליטה מהאפליקציה",        sub: "Wi-Fi ו-Bluetooth" },
];

export function HighlightsStrip() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="flex-1 border-l border-[#e6dad4] first:border-l-0 px-5 py-7 flex flex-col items-center gap-2 text-center group hover:bg-[#f6ede3] transition-colors duration-200"
          >
            <div className="w-11 h-11 rounded-full bg-[#c46500]/10 flex items-center justify-center group-hover:bg-[#c46500]/20 transition-colors">
              <h.icon size={20} className="text-[#c46500]" strokeWidth={1.5} />
            </div>
            <p className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{h.label}</p>
            <p className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-50">{h.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
