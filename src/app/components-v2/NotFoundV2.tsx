import { Search, Home, Coffee, Wrench, MessageCircle } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

const MASCOT = "/picts/art-of-coffee-badge.png";

const links = [
  { icon: Home, label: "דף הבית", href: "/v2" },
  { icon: Coffee, label: "כל המכונות", href: "/v2/category" },
  { icon: Wrench, label: "המעבדה ותחזוקה", href: "/v2/about" },
  { icon: MessageCircle, label: "צור קשר", href: "https://wa.me/9720585335035" },
];

export function NotFoundV2() {
  return (
    <div className="min-h-screen bg-[#fff9f2] flex flex-col">
      <Header />

      <main dir="rtl" className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-[680px]">
          {/* Big 404 with mascot */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-[#8B3A00] text-[140px] leading-none font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em]">4</span>
            <img src={MASCOT} alt="0" className="w-[110px] h-auto" />
            <span className="text-[#8B3A00] text-[140px] leading-none font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em]">4</span>
          </div>

          <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
            שגיאה 404
          </span>
          <h1 className="text-[#522c25] text-[52px] leading-[1.1] font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em] mt-2">
            אופס, הכוס הזאת ריקה
          </h1>
          <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.5] mt-3">
            הדף שחיפשתם לא נמצא, אולי עבר דירה או שנשפך לו הקפה. בואו נחזיר אתכם
            למסלול.
          </p>

          {/* Search */}
          <div className="w-full max-w-[460px] mt-8 flex items-center gap-2 bg-[#f6ede3] border border-[#e6dad4] rounded-xl px-4 focus-within:border-[#c46500] transition-colors">
            <Search size={20} className="text-[#c46500] shrink-0" />
            <input
              placeholder="חיפוש מכונה, מותג או מאמר…"
              className="flex-1 bg-transparent py-3.5 text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] outline-none placeholder:opacity-45"
            />
            <button className="bg-[#8B3A00] hover:bg-[#a34500] text-white text-[18px] font-['Dialect_PM',sans-serif] px-5 py-2 rounded-lg my-2 transition-colors">
              חיפוש
            </button>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 w-full">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex flex-col items-center gap-2 bg-[#fff9f2] border border-[#e6dad4] rounded-xl px-4 py-5 hover:border-[#c46500] hover:bg-[#f6ede3] transition-all"
              >
                <Icon size={26} className="text-[#c46500]" strokeWidth={1.5} />
                <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <a
            href="/v2"
            className="mt-10 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-9 py-3.5 rounded-lg transition-colors"
          >
            חזרה לדף הבית
          </a>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
