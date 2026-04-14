import imgLogo from "../../imports/HomePage-2/fb863a6f83f0deff3e89866fe19b2a6231928be4.png";
import { Clock, MapPin, Phone, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer dir="rtl" className="bg-[#ede0d4] px-8 py-8">
      {/* Main card */}
      <div className="border border-[#d4c4bc] rounded-2xl overflow-hidden">
        {/* Content row */}
        <div className="flex divide-x divide-x-reverse divide-[#d4c4bc] bg-[#ede0d4]">

          {/* Logo + Contact */}
          <div className="flex-1 px-8 py-8 flex flex-col gap-4">
            <img src={imgLogo} alt="אספרסימו" className="max-h-12 w-auto object-contain object-right mb-1" />
            <h3 className="text-[#522c25] text-[14px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-45">
              צרו קשר
            </h3>
            <div className="flex flex-col gap-2.5 text-[16px] font-['Dialect_PM',sans-serif] text-[#522c25]">
              <div className="flex items-center gap-2.5 opacity-60">
                <Clock size={15} className="shrink-0" />
                <span>א׳–ה׳: 8:00–17:00 &nbsp;|&nbsp; ו׳: 9:00–12:00</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-70">
                <MapPin size={15} className="shrink-0" />
                <span>מעלה החומה 6, אור יהודה</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-80">
                <Phone size={15} className="shrink-0" />
                <span className="font-bold">03-5335035</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-60">
                <MessageCircle size={15} className="shrink-0" />
                <span>058-5335035</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-70">
                <Mail size={15} className="shrink-0" />
                <span>info@espressimo.co.il</span>
              </div>
            </div>
          </div>

          {/* Primary Links */}
          <div className="flex-1 px-8 py-8">
            <h3 className="text-[#522c25] text-[14px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-45 mb-4">
              אספרסימו
            </h3>
            <div className="flex flex-col gap-1.5 text-[17px] font-['Dialect_PM',sans-serif]">
              {["עלינו","המעבדה","מכונות אוטומטיות","מכונות ידניות","מטחנות קפה","טרייד אין","אביזרים","תחזוקת מכונות","סינון מים","צור קשר"].map(link => (
                <a key={link} href="#" className="text-[#522c25] opacity-65 hover:opacity-100 hover:text-[#8B3A00] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Secondary Links — Brands */}
          <div className="flex-1 px-8 py-8">
            <h3 className="text-[#522c25] text-[14px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-45 mb-4">
              מותגים
            </h3>
            <div className="flex flex-col gap-1.5 text-[17px] font-['Dialect_PM',sans-serif]">
              {["JURA","La Marzocco","ECM","Quick Mill","Profitec","Kalerm","DR Coffee","Stone","La Pavoni","Rancilio"].map(link => (
                <a key={link} href="#" className="text-[#522c25] opacity-65 hover:opacity-100 hover:text-[#8B3A00] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1 px-8 py-8">
            <h3 className="text-[#522c25] text-[14px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-45 mb-2">
              דברו עם המומחה
            </h3>
            <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-55 mb-4 leading-relaxed">
              שאלה? תקלה? רוצים לדעת איזו מכונה מתאימה לכם?
            </p>
            <form className="flex flex-col gap-2.5">
              <input
                type="text"
                placeholder="שם + טלפון / אימייל"
                className="bg-[#f6ede3] border border-[#d4c4bc] rounded-lg px-4 py-2.5 text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c46500] placeholder-[#522c25]/35 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="במה נוכל לעזור?"
                className="bg-[#f6ede3] border border-[#d4c4bc] rounded-lg px-4 py-2.5 text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c46500] placeholder-[#522c25]/35 resize-none transition-colors"
              />
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-[#8B3A00] shrink-0" required />
                <span className="text-[#522c25] text-[14px] font-['Dialect_PM',sans-serif] opacity-60 leading-snug">
                  מוסכמת עלי{" "}
                  <a href="#" className="underline underline-offset-2 hover:opacity-100 transition-opacity">מדיניות הפרטיות</a>
                  {" "}של האתר
                </span>
              </label>
              <button
                type="submit"
                className="bg-[#8B3A00] hover:bg-[#a34500] text-white px-5 py-2.5 rounded-lg text-[16px] font-['Dialect_PM',sans-serif] w-fit transition-colors"
              >
                שלחו הודעה
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d4c4bc] bg-[#e0d0c4] px-8 py-5 flex items-center justify-between gap-4">
          <span className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-50 shrink-0">
            © 2026 אספרסימו – The Art Of Coffee
          </span>
          <div className="flex items-center gap-4 text-[16px] font-['Dialect_PM',sans-serif]">
            {["מדיניות פרטיות","ביטול עסקה","תקנון אתר","הצהרת נגישות"].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                {i > 0 && <span className="text-[#522c25] opacity-25">|</span>}
                <a href="#" className="text-[#522c25] opacity-55 hover:opacity-90 transition-opacity">{item}</a>
              </span>
            ))}
          </div>
          <a
            href="https://yuvalgeva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-45 hover:opacity-80 transition-opacity shrink-0"
          >
            עיצוב ופיתוח: Bold-move
          </a>
        </div>
      </div>
    </footer>
  );
}
