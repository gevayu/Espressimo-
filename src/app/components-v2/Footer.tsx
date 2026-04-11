export function Footer() {
  return (
    <footer dir="rtl">
      {/* Footer Content */}
      <div className="bg-[#522c25] text-[#f6ede3]">
        <div className="flex p-9 gap-12">
          {/* Contact info */}
          <div className="flex-1">
            <h3 className="text-[30px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-4">צרו קשר</h3>
            <div className="space-y-3 text-[30px] font-['Dialect_PM',sans-serif] opacity-80">
              <div>
                <p className="uppercase tracking-[0.6px] text-[25px] mb-1">המעבדה שלנו</p>
                <p>שעות פעילות: א׳–ה׳ 9:00–18:00</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.6px] text-[25px] mb-1">טלפון</p>
                <p>03-0000000</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.6px] text-[25px] mb-1">אימייל</p>
                <p>info@espressimo.co.il</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h3 className="text-[26px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-3">אספרסימו</h3>
            <div className="space-y-1 text-[22px] font-['Dialect_PM',sans-serif]">
              <a href="#" className="block opacity-80 hover:opacity-100">עלינו</a>
              <a href="#" className="block opacity-80 hover:opacity-100">המעבדה</a>
              <a href="#" className="block opacity-80 hover:opacity-100">מכונות קפה אוטומטיות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">מכונות קפה ידניות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">מטחנות קפה</a>
              <a href="#" className="block opacity-80 hover:opacity-100">טרייד אין</a>
              <a href="#" className="block opacity-80 hover:opacity-100">אביזרים</a>
              <a href="#" className="block opacity-80 hover:opacity-100">תחזוקת מכונות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">סינון מים</a>
              <a href="#" className="block opacity-80 hover:opacity-100">צור קשר</a>
            </div>
          </div>

          {/* Compact contact form */}
          <div className="flex-1">
            <h3 className="text-[30px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
              קפה מושלם, מתחיל כאן –{" "}
              <span className="text-[#f4a261]">דברו עם המומחה!</span>
            </h3>
            <p className="text-[#f6ede3] text-[22px] font-['Dialect_PM',sans-serif] opacity-70 mb-4">
              שאלה? תקלה? רוצים לדעת איזו מכונה מתאימה לכם? אנחנו כאן.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="שם + טלפון / אימייל"
                className="bg-[#6b3d34] border border-[#7a4840] rounded px-4 py-2.5 text-[#f6ede3] text-[22px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#f4a261] placeholder-[#f6ede3]/50 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="במה נוכל לעזור?"
                className="bg-[#6b3d34] border border-[#7a4840] rounded px-4 py-2.5 text-[#f6ede3] text-[22px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#f4a261] placeholder-[#f6ede3]/50 resize-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[#c03001] text-white px-5 py-2.5 rounded text-[22px] tracking-[0.07em] font-['Dialect_PM',sans-serif] w-fit hover:bg-[#a32801] transition-colors"
              >
                שלחו הודעה
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#522c25] border-t border-[#6b3d34] px-6 py-3 flex justify-between items-center">
        <span className="text-[#f6ede3] text-[25px] tracking-[0.5px] uppercase font-['Dialect_PM',sans-serif]">
          © 2026 אספרסימו – The Art Of Coffee
        </span>
        <span className="text-[#f6ede3] text-[25px] tracking-[0.5px] uppercase font-['Dialect_PM',sans-serif]">
          קרדיטים לאתר
        </span>
      </div>
    </footer>
  );
}
