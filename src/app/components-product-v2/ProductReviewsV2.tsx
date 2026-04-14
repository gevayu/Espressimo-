import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "אורן ל.",
    date: "15 במרץ 2026",
    rating: 5,
    title: "הטוב ביותר שיש",
    body: "קניתי אחרי הרבה מחקר ואני לא מתחרט. הקפה שיוצא ממנה טוב יותר ממה שקיבלתי ברוב בתי הקפה. P.E.P באמת עושה הבדל.",
    helpful: 14,
    verified: true,
  },
  {
    name: "מיכל ד.",
    date: "2 בפברואר 2026",
    rating: 5,
    title: "קצף חלב מדהים",
    body: "אני שותה לאטה בכל בוקר ומהיום אני לא יכולה בלי JURA. הקצף שמתקבל ממערכת Fine Foam עדין ונוח — בדיוק כמו בבית קפה איכותי.",
    helpful: 9,
    verified: true,
  },
  {
    name: "ניר ב.",
    date: "18 בינואר 2026",
    rating: 4,
    title: "מעולה, אבל יקרה",
    body: "המכונה פשוט עובדת מצוין. כל ספציאליטי מדויק ועקבי. הנקודה היחידה שהורידה כוכב אחד היא המחיר — אבל ביחס לאיכות, אולי צדק.",
    helpful: 6,
    verified: true,
  },
  {
    name: "תמר כ.",
    date: "5 בדצמבר 2025",
    rating: 5,
    title: "שירות + מוצר = 10/10",
    body: "ההתקנה בבית הייתה חוויה בפני עצמה. הטכנאי הסביר הכל, הגדיר לי את הגרסאות שאני אוהבת, ועזר לי להבין את האפליקציה. ממליצה בחום.",
    helpful: 22,
    verified: true,
  },
  {
    name: "יוסף מ.",
    date: "11 בנובמבר 2025",
    rating: 5,
    title: "אחרי 5 שנים עם מכונה ידנית",
    body: "עברתי מ-La Marzocco ביתית לZura Z10 ולא הצטערתי. כן, אני מפספס קצת את הטקס — אבל הקפה יוצא עקבי ומוצלח בכל פעם, גם ב-6 בבוקר.",
    helpful: 11,
    verified: false,
  },
  {
    name: "שירה פ.",
    date: "3 באוקטובר 2025",
    rating: 5,
    title: "עיצוב שגרם לי לרכוש",
    body: "לא אשקר — קניתי בחלק גדול בגלל הצבע הלבן קרם שמשתלב מושלם במטבח שלי. אבל אחרי חודשיים, הקפה הוא הסיבה שאני שמחה שקניתי.",
    helpful: 8,
    verified: true,
  },
];

const breakdown = [5, 5, 4, 5, 5, 5];
const avg = (breakdown.reduce((a, b) => a + b, 0) / breakdown.length).toFixed(1);
const counts = [5, 4, 3, 2, 1].map(s => ({ stars: s, count: breakdown.filter(r => r === s).length }));

const qa = [
  {
    q: "האם אפשר להשתמש בקפה קלוי בהיר?",
    a: "בהחלט. אפשר לכוונן את דרגת הגסות והטמפרטורה, מה שמאפשר מיצוי מצוין גם לקלייה בהירה.",
    date: "10 בינואר 2026",
  },
  {
    q: "כמה זמן לוקח הניקוי האוטומטי?",
    a: "ניקוי יומי — כ-2 דקות. תוכנית כייל חודשית — כ-30 דקות. המכונה מזכירה לכם מראש.",
    date: "22 בפברואר 2026",
  },
];

export function ProductReviewsV2() {
  const [filter, setFilter] = useState<number | null>(null);
  const [helpfulClicked, setHelpfulClicked] = useState<Set<number>>(new Set());
  const filtered = filter ? reviews.filter(r => r.rating === filter) : reviews;

  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl" id="reviews">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-10">
          מה לקוחות אומרים
        </h2>

        <div className="flex gap-12 mb-12">
          {/* Score */}
          <div className="flex flex-col items-center justify-center gap-2 w-40 shrink-0">
            <span className="text-[#522c25] text-[72px] font-['Dialect_PM',sans-serif] font-bold leading-none">{avg}</span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={20} className="fill-[#c46500] text-[#c46500]" />
              ))}
            </div>
            <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-50">{reviews.length} ביקורות</span>
          </div>

          {/* Breakdown */}
          <div className="flex flex-col gap-2 flex-1">
            {counts.map(({ stars, count }) => (
              <button
                key={stars}
                onClick={() => setFilter(filter === stars ? null : stars)}
                className={`flex items-center gap-3 group hover:opacity-80 transition-opacity ${filter === stars ? "opacity-100" : "opacity-70"}`}
              >
                <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] w-4 text-left">{stars}</span>
                <Star size={14} className="fill-[#c46500] text-[#c46500]" />
                <div className="flex-1 h-2.5 bg-[#e6dad4] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(count / reviews.length) * 100}%`,
                      backgroundColor: filter === stars ? "#8B3A00" : "#c46500",
                    }}
                  />
                </div>
                <span className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] w-4">{count}</span>
              </button>
            ))}
          </div>

          {/* Write review CTA */}
          <div className="shrink-0 flex flex-col justify-center gap-3">
            <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-60">קנית JURA Z10?</p>
            <button className="border-2 border-[#522c25]/30 text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] px-6 py-3 rounded-xl hover:border-[#8B3A00] hover:text-[#8B3A00] transition-all">
              כתבי ביקורת
            </button>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-[16px] font-['Dialect_PM',sans-serif] border transition-all ${
              filter === null ? "bg-[#8B3A00] text-white border-[#8B3A00]" : "border-[#e6dad4] text-[#522c25] hover:border-[#8B3A00]"
            }`}
          >
            הכל
          </button>
          {[5, 4, 3].map(s => (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? null : s)}
              className={`px-4 py-2 rounded-full text-[16px] font-['Dialect_PM',sans-serif] border transition-all ${
                filter === s ? "bg-[#8B3A00] text-white border-[#8B3A00]" : "border-[#e6dad4] text-[#522c25] hover:border-[#8B3A00]"
              }`}
            >
              {s} כוכבים
            </button>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-3 gap-5 mb-14">
          {filtered.map((r, i) => (
            <div key={i} className="bg-[#fff9f2] rounded-2xl p-7 border border-[#e6dad4]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] font-bold">{r.name}</span>
                    {r.verified && (
                      <span className="bg-[#2e7d32]/10 text-[#2e7d32] text-[13px] font-['Dialect_PM',sans-serif] px-2 py-0.5 rounded-full">
                        רכישה מאומתת
                      </span>
                    )}
                  </div>
                  <span className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-40">{r.date}</span>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} className={s <= r.rating ? "fill-[#c46500] text-[#c46500]" : "text-[#e6dad4] fill-[#e6dad4]"} />
                  ))}
                </div>
              </div>

              <h4 className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold mb-2">{r.title}</h4>
              <p className="text-[#522c25] text-[17px] leading-[28px] font-['Dialect_PM',sans-serif] opacity-70 mb-4">{r.body}</p>

              <button
                onClick={() => setHelpfulClicked(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                className={`flex items-center gap-2 text-[15px] font-['Dialect_PM',sans-serif] transition-colors ${
                  helpfulClicked.has(i) ? "text-[#8B3A00]" : "text-[#522c25] opacity-40 hover:opacity-70"
                }`}
              >
                <ThumbsUp size={14} />
                מועיל ({r.helpful + (helpfulClicked.has(i) ? 1 : 0)})
              </button>
            </div>
          ))}
        </div>

        {/* Q&A */}
        <h3 className="text-[#522c25] text-[32px] font-['Dialect_PM',sans-serif] font-bold mb-6">שאלות ותשובות מהקהילה</h3>
        <div className="flex flex-col gap-4">
          {qa.map((item, i) => (
            <div key={i} className="bg-[#fff9f2] rounded-2xl border border-[#e6dad4] overflow-hidden">
              <div className="px-7 py-5 border-b border-[#e6dad4]">
                <p className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold">ש: {item.q}</p>
              </div>
              <div className="px-7 py-5 flex items-start justify-between gap-4">
                <p className="text-[#522c25] text-[17px] leading-[28px] font-['Dialect_PM',sans-serif] opacity-70 flex-1">
                  ת: {item.a}
                </p>
                <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-35 shrink-0">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
