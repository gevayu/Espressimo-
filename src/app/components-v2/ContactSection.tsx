export function ContactSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-stretch">
        {/* Text side */}
        <div className="flex-1 p-14 flex flex-col justify-center border-l border-[#e6dad4]">
          <h2 className="text-[#522c25] text-[53px] leading-[41px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] font-bold mb-4">
            קפה מושלם, מתחיל כאן –{" "}
            <span className="text-[#c03001]">דברו עם המומחה!</span>
          </h2>
          <p className="text-[#522c25] text-[25px] leading-[36px] font-['Dialect_PM',sans-serif] opacity-75 max-w-[420px]">
            יש לכם שאלות על מכונה, צריכים תיקון דחוף, או סתם רוצים לדעת איזה קפה מתאים לכם? אנחנו כאן.
          </p>
        </div>

        {/* Form side */}
        <div className="flex-1 p-14">
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[#522c25] text-[23px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70">
                  שם מלא
                </label>
                <input
                  type="text"
                  placeholder="ישראל ישראלי"
                  className="bg-[#f6ede3] border border-[#e6dad4] rounded px-4 py-3 text-[#522c25] text-[32px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c03001] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[#522c25] text-[23px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70">
                  טלפון / אימייל
                </label>
                <input
                  type="text"
                  placeholder="050-0000000"
                  className="bg-[#f6ede3] border border-[#e6dad4] rounded px-4 py-3 text-[#522c25] text-[32px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c03001] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#522c25] text-[23px] tracking-[0.6px] uppercase font-['Dialect_PM',sans-serif] opacity-70">
                במה נוכל לעזור?
              </label>
              <textarea
                rows={4}
                placeholder="תיאור המכונה, סוג הבעיה, כל מה שחשוב לכם..."
                className="bg-[#f6ede3] border border-[#e6dad4] rounded px-4 py-3 text-[#522c25] text-[32px] font-['Dialect_PM',sans-serif] outline-none focus:border-[#c03001] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#c03001] text-white px-7 py-3 rounded text-[30px] tracking-[0.07em] uppercase font-['Dialect_PM',sans-serif] w-fit mt-2 hover:bg-[#a32801] transition-colors"
            >
              שלחו הודעה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
