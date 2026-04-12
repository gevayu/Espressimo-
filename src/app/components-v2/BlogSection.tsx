import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const imgBlog1 = "/picts/17264.jpg";
const imgBlog2 = "/picts/2150354578.jpg";
const imgBlog3 = "/picts/45799.jpg";
const imgBlog4 = "/picts/178634.jpg";
import imgBlog5 from "../../imports/HomePage-2/31b26ec72fbedd17f5dccf485a3aa86824a74b6f.png";
const imgBlog6 = "/picts/7849.jpg";
const imgBlog7 = "/picts/29677.jpg";
import imgBlog8 from "../../imports/HomePage-2/0cc378ee6b2d94001b8e24a7486e661697a47642.png";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  action: string;
}

const posts: BlogPost[] = [
  {
    image: imgBlog1,
    title: "מאיפה מגיע הקפה שלנו?",
    date: "1 באפריל, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog2,
    title: "הכירו את היצרן",
    date: "18 במרץ, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog3,
    title: "פלייליסט אביב בספוטיפיי",
    date: "4 במרץ, 2026",
    action: "האזינו עכשיו",
  },
  {
    image: imgBlog4,
    title: "עקבו אחרינו בספוטיפיי",
    date: "18 בפברואר, 2026",
    action: "האזינו עכשיו",
  },
  {
    image: imgBlog5,
    title: "למה האתר החדש?",
    date: "4 בפברואר, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog6,
    title: "5 הגדרות שישנו את הקפה שלכם",
    date: "21 בינואר, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog7,
    title: "מה זה באמת Single Origin?",
    date: "7 בינואר, 2026",
    action: "קראו עוד",
  },
  {
    image: imgBlog8,
    title: "מדריך: לטחון קפה בבית",
    date: "1 בינואר, 2026",
    action: "קראו עוד",
  },
];

const VISIBLE = 5;
const AUTO_ADVANCE_MS = 7000;

export function BlogSection() {
  const [offset, setOffset] = useState(0);
  const maxOffset = posts.length - VISIBLE;

  const next = () => setOffset((o) => (o >= maxOffset ? 0 : o + 1));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [offset, maxOffset]);

  const translatePct = offset * (100 / posts.length);

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4]">
        <h2 className="text-[53px] leading-[41px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em]">
          <span className="text-[#c46500]">רגעים של קפאין</span>{" "}
          <span className="text-[#522c25]">– מאמרים מקצועיים</span>
        </h2>
      </div>

      <div className="flex items-stretch">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="w-[64px] shrink-0 border-l border-[#e6dad4] flex items-center justify-center hover:bg-[#f6ede3] transition-colors duration-200 disabled:opacity-20 disabled:cursor-default"
          aria-label="הקודם"
        >
          <ChevronRight size={36} className="text-[#522c25]" />
        </button>

        {/* Sliding track */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translatePct}%)` }}
          >
            {posts.map((post, i) => (
              <div
                key={i}
                className="shrink-0 p-6 group cursor-pointer transition-colors duration-300 hover:bg-[#f0e6dc]"
                style={{
                  width: `${100 / VISIBLE}%`,
                  borderRight: i > 0 ? "2px solid #d4c4bc" : "none",
                }}
              >
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.04] ${post.title === 'מה זה באמת Single Origin?' ? 'object-contain bg-[#f6ede3]' : ''}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
                </div>
                <p className="text-[#522c25] text-[22px] tracking-[0.6px] font-['Dialect_PM',sans-serif] opacity-55 mb-2">
                  {post.date}
                </p>
                <h3 className="text-[#522c25] text-[26px] leading-[30px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-3 transition-colors duration-200 group-hover:text-[#8B3A00]">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-[#522c25] text-[22px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] underline opacity-70 hover:opacity-100"
                >
                  {post.action}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          className="w-[64px] shrink-0 border-r border-[#e6dad4] flex items-center justify-center hover:bg-[#f6ede3] transition-colors duration-200"
          aria-label="הבא"
        >
          <ChevronLeft size={36} className="text-[#522c25]" />
        </button>
      </div>
    </section>
  );
}
