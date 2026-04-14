import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["מפרט טכני", "תיאור מורחב", "שאלות נפוצות"];

const specs = [
  { label: "מותג", value: "JURA" },
  { label: "דגם", value: "Z10" },
  { label: "לחץ משאבה", value: "15 בר" },
  { label: "קיבולת מיכל מים", value: "2.4 ליטר" },
  { label: "קיבולת פולים", value: "250 גרם" },
  { label: "מסך", value: "צבעוני 4.3 אינץ'" },
  { label: "ספציאליטי", value: "32 משקאות" },
  { label: "מערכת חלב", value: "JURA fine foam" },
  { label: "חיבור", value: "Wi-Fi, Bluetooth" },
  { label: "משקל", value: "12.6 ק\"ג" },
  { label: "מידות", value: "33.8 × 44.4 × 28 ס\"מ" },
  { label: "הספק", value: "1,450W" },
];

const faqs = [
  {
    q: "האם המכונה מתאימה לשימוש מסחרי?",
    a: "המכונה מיועדת לשימוש ביתי אינטנסיבי. לשימוש מסחרי מומלץ לבחון את דגמי ה-GIGA.",
  },
  {
    q: "האם ניתן להשתמש בקפסולות?",
    a: "לא. JURA Z10 עובדת עם פולי קפה בלבד, הנטחנים טרי לכל כוס.",
  },
  {
    q: "מה כוללת האחריות?",
    a: "אחריות יצרן מלאה לשנתיים. שירות טכני מוסמך JURA דרך אספרסימו.",
  },
  {
    q: "כמה זמן לוקח המשלוח?",
    a: "3-5 ימי עסקים. ניתן לתאם התקנה והדגמה עם המשלוח.",
  },
];

export function ProductSpecs() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      {/* Tabs */}
      <div className="flex border-b border-[#e6dad4]">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-10 py-5 text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.05em] transition-colors border-l border-[#e6dad4] first:border-l-0 ${
              i === activeTab
                ? "text-[#8B3A00] font-bold border-b-2 border-b-[#8B3A00] -mb-px bg-[#fff9f2]"
                : "text-[#522c25] opacity-55 hover:opacity-100 bg-[#f6ede3]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-12">
        {activeTab === 0 && (
          <div className="grid grid-cols-2 gap-0 max-w-[900px]">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-4 px-6 border-b border-[#e6dad4] ${
                  i % 2 === 0 ? "border-l border-[#e6dad4]" : ""
                }`}
              >
                <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-55">{spec.label}</span>
                <span className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="max-w-[820px] space-y-5">
            <p className="text-[#522c25] text-[23px] leading-[38px] font-['Dialect_PM',sans-serif] opacity-80">
              JURA Z10 היא פסגת הטכנולוגיה האוטומטית לבית. עם מסך מגע צבעוני, 32 ספציאליטי קפה ומערכת חלב מתקדמת, היא מאפשרת להכין כל משקה שתרצו — מאספרסו ועד לאטה מקיאטו — בלחיצת כפתור.
            </p>
            <p className="text-[#522c25] text-[23px] leading-[38px] font-['Dialect_PM',sans-serif] opacity-80">
              הטכנולוגיה הפטנטית P.E.P (Pulse Extraction Process) של JURA מבטיחה שכל ספציאליטי נטחן ומחולץ בדיוק המירבי. ניתן לשלוט במכונה דרך אפליקציה ייעודית עם חיבור Wi-Fi ו-Bluetooth.
            </p>
            <p className="text-[#522c25] text-[23px] leading-[38px] font-['Dialect_PM',sans-serif] opacity-80">
              מערכת הניקוי האוטומטית כוללת תוכנית ניקוי יומית, שבועית וחודשית — המכונה דואגת לעצמה כדי שתמיד תקבלו כוס קפה מושלמת.
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="max-w-[820px] space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#e6dad4] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-right hover:bg-[#f6ede3] transition-colors"
                >
                  <span className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#522c25] opacity-50 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5 border-t border-[#e6dad4]">
                    <p className="text-[#522c25] text-[21px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-75 pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
