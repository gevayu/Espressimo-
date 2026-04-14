import { Star } from "lucide-react";

const reviews = [
  {
    name: "דני כ.",
    date: "מרץ 2026",
    rating: 5,
    text: "קניתי אחרי ייעוץ עם הצוות של אספרסימו — הם הפנו אותי בדיוק למה שמתאים לי. המכונה מדהימה, הקפה יוצא כמו בר.",
  },
  {
    name: "מיכל ר.",
    date: "פברואר 2026",
    rating: 5,
    text: "לאחר שנים עם מכונה ידנית עברתי ל-Z10 ואני לא מצטערת. הלאטה מקיאטו שלה פשוט מושלם.",
  },
  {
    name: "אבי ש.",
    date: "ינואר 2026",
    rating: 4,
    text: "מכונה מצוינת. קצת יקרה אבל שווה כל שקל. השירות של אספרסימו ממשיך להיות מעולה גם אחרי הקנייה.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <Star key={s} size={16} className={s <= rating ? "fill-[#c46500] text-[#c46500]" : "fill-[#e6dad4] text-[#e6dad4]"} />
      ))}
    </div>
  );
}

export function ProductReviews() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-12 border-b border-[#e6dad4] flex items-center justify-between">
        <div>
          <h2 className="text-[42px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] text-[#522c25]">
            ביקורות לקוחות
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={22} className="fill-[#c46500] text-[#c46500]" />
              ))}
            </div>
            <span className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-60">4.9 מתוך 5 (38 ביקורות)</span>
          </div>
        </div>
        <button className="border-2 border-[#522c25] text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] px-7 py-3 rounded hover:bg-[#f6ede3] transition-colors">
          כתבו ביקורת
        </button>
      </div>

      <div className="flex">
        {reviews.map((review, i) => (
          <div key={i} className="flex-1 border-l border-[#e6dad4] first:border-l-0 p-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] font-bold">{review.name}</p>
                <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-45 mt-0.5">{review.date}</p>
              </div>
              <Stars rating={review.rating} />
            </div>
            <p className="text-[#522c25] text-[21px] leading-[34px] font-['Dialect_PM',sans-serif] opacity-75">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
