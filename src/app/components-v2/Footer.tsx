import imgSpotify from "../../imports/HomePage-2/7e039c0beae97d5f61f81c2bb3638c792fe15323.png";

export function Footer() {
  return (
    <footer dir="rtl">
      {/* Footer Content */}
      <div className="bg-[#522c25] text-[#f6ede3]">
        <div className="flex p-9 gap-12">
          {/* Contact info */}
          <div className="flex-1">
            <h3 className="text-[12px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] mb-4">צרו קשר</h3>
            <div className="space-y-3 text-[12px] font-['Dialect_PM',sans-serif] opacity-80">
              <div>
                <p className="uppercase tracking-[0.6px] text-[11px] mb-1">המעבדה שלנו</p>
                <p>שעות פעילות: א׳–ה׳ 9:00–18:00</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.6px] text-[11px] mb-1">טלפון</p>
                <p>03-0000000</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.6px] text-[11px] mb-1">אימייל</p>
                <p>info@espressimo.co.il</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h3 className="text-[16px] font-['Dialect_PM',sans-serif] mb-4">אספרסימו</h3>
            <div className="space-y-2 text-[12px] font-['Dialect_PM',sans-serif]">
              <a href="#" className="block opacity-80 hover:opacity-100">מכירת מכונות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">תיקון ושיקום</a>
              <a href="#" className="block opacity-80 hover:opacity-100">אביזרים</a>
              <a href="#" className="block opacity-80 hover:opacity-100">מטחנות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">מכונות מחודשות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">אודות</a>
              <a href="#" className="block opacity-80 hover:opacity-100">צור קשר</a>
            </div>
          </div>

          {/* Spotify Widget */}
          <div className="flex-1">
            <div className="bg-[#1a1a2e] rounded-lg p-4 max-w-[380px]">
              <div className="flex items-center gap-3 mb-3">
                <img src={imgSpotify} alt="כיסוי אלבום" className="w-[56px] h-[56px] rounded" />
                <div>
                  <p className="text-white text-[14px] font-['Helvetica',sans-serif]">Atmosphere - 2020 Digital Remaster</p>
                  <p className="text-[#c0d0d8] text-[11px] font-['Helvetica',sans-serif]">Joy Division</p>
                </div>
              </div>
              <p className="text-[#c0d0d8] text-[11px] font-['Helvetica',sans-serif] mb-2">
                פלייליסט אספרסימו | ספוטיפיי
              </p>
              <button className="bg-[#1DB954] text-white text-[12px] rounded-full px-4 py-1.5 font-['Helvetica',sans-serif]">
                שמרו בספוטיפיי
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#522c25] border-t border-[#6b3d34] px-6 py-3 flex justify-between items-center">
        <span className="text-[#f6ede3] text-[10px] tracking-[0.5px] uppercase font-['Dialect_PM',sans-serif]">
          © 2026 אספרסימו – The Art Of Coffee
        </span>
        <span className="text-[#f6ede3] text-[10px] tracking-[0.5px] uppercase font-['Dialect_PM',sans-serif]">
          קרדיטים לאתר
        </span>
      </div>

      {/* Instagram footer strip */}
    </footer>
  );
}
