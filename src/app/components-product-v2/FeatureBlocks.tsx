const blocks = [
  {
    image: "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348/features/Z10_Alu_White_EA_15348_feature3.jpg",
    tag: "מערכת המיצוי",
    title: "P.E.P – מה שמפריד בין אספרסו טוב לאספרסו שלא תשכחו",
    body: "טכנולוגיית ה-Pulse Extraction Process שפותחה על ידי JURA פועלת בסדרת פולסים מבוקרים שמחלצים מהגרגרים את מלוא הארומות, הסוכרים הטבעיים ושמני הקפה — בלי מרירות ובלי בזבוז. הקפה יוצא עשיר, מורכב וחלק.",
    imageRight: true,
  },
  {
    image: "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348/features/Z10_Alu_White_EA_15348_feature5.jpg",
    tag: "מקציף החלב",
    title: "קצף כמו בבית קפה. כל בוקר.",
    body: "מערכת Fine Foam של JURA מייצרת קצף עשיר ועדין בטמפרטורה הנכונה בדיוק — 65°C — בלי שתטרחו. לאחר כל שימוש, הניקוי מתבצע אוטומטית. אין צינורות נסתרים שמצטברים. אין תחזוקה ידנית.",
    imageRight: false,
  },
  {
    image: "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348/features/Z10_Alu_White_EA_15348_feature4.jpg",
    tag: "ממשק ואפליקציה",
    title: "שליטה מלאה — מהמסך ומהטלפון",
    body: "מסך מגע צבעוני 4.3 אינץ' עם ממשק עברי מלא. אפליקציית J.O.E (JURA Operating Experience) מאפשרת הפעלה מרחוק, עדכוני קושחה אוטומטיים ושמירת עד 10 מתכוני קפה אישיים — לכל בן בית בנפרד.",
    imageRight: true,
  },
  {
    image: "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348/image-gallery/Z10_Alu_White_EA_15348_image2.jpg",
    tag: "עיצוב וחומרים",
    title: "שווייצרית. מדויקת. יפה.",
    body: "גוף אלומיניום יצוק, לוח קדמי זכוכית מחוסמת, ידיות עם תחושת עומק. JURA Z10 לא נראית כמו מכונה — היא נראית כמו אוביז'ה שאתם גאים להציב במטבח. זמינה בשלושה גוונים.",
    imageRight: false,
  },
];

export function FeatureBlocks() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`flex items-stretch border-b border-[#e6dad4] last:border-b-0 ${block.imageRight ? "" : "flex-row-reverse"}`}
        >
          {/* Image */}
          <div className="w-[48%] shrink-0 overflow-hidden">
            <img
              src={block.image}
              alt={block.title}
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex-1 px-14 py-16 flex flex-col justify-center gap-5 border-l border-[#e6dad4]">
            <span className="text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] tracking-[0.15em] uppercase opacity-80">
              {block.tag}
            </span>
            <h2 className="text-[#522c25] text-[38px] leading-[1.2] font-['Dialect_PM',sans-serif] font-bold tracking-[0.04em]">
              {block.title}
            </h2>
            <p className="text-[#522c25] text-[22px] leading-[36px] font-['Dialect_PM',sans-serif] opacity-70">
              {block.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
