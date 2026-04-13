const features = [
  {
    num: "01",
    title: "טוחנת קונוס מקצועית מובנית",
    desc: "גרגרי קפה טריים נטחנים מולכם, רגע לפני המיצוי. 30 דרגות גסות, מנוע שקט, גוף מתכתי שמבטיח אחידות בכל טחינה.",
  },
  {
    num: "02",
    title: "מערכת מיצוי P.E.P",
    desc: "Pulse Extraction Process – טכנולוגיה פטנטית של JURA שמבטיחה חילוץ מרבי של ארומות גם מכמויות קפה קטנות. כל ספציאליטי מדויק.",
  },
  {
    num: "03",
    title: "32 ספציאליטי קפה",
    desc: "מאספרסו עד ריסטרטו, מלאטה מקיאטו ועד Cold Brew – הכל מוגדר מראש ומותאם אישית דרך מסך המגע הצבעוני.",
  },
  {
    num: "04",
    title: "מקציף חלב JURA Fine Foam",
    desc: "מכין קצף נוצתי ועשיר בדיוק בטמפרטורה שתרצו. ניקוי עצמי אוטומטי לאחר כל שימוש.",
  },
  {
    num: "05",
    title: "מסך מגע צבעוני 4.3 אינץ'",
    desc: "ממשק נוח, אינטואיטיבי ומהיר. מציג בזמן אמת את מצב המכונה, תזכורות תחזוקה ואפשרויות התאמה אישית.",
  },
  {
    num: "06",
    title: "חיבור Wi-Fi ואפליקציית J.O.E",
    desc: "הפעלה מרחוק, עדכוני קושחה, שמירת מתכונים מועדפים ויצירת פרופילים אישיים לכל בן בית.",
  },
  {
    num: "07",
    title: "מערכת ניקוי אוטומטית מלאה",
    desc: "תוכנית ניקוי יומית, שבועית וחודשית מובנית. המכונה מזכירה לכם מתי לנקות ועושה את העבודה בעצמה.",
  },
  {
    num: "08",
    title: "מיכל מים 2.4 ליטר",
    desc: "קיבולת גדולה עם פילטר CLARIS שמגן על המכונה מסיד ומשפר את טעם הקפה. חיישן מפלס מים בזמן אמת.",
  },
  {
    num: "09",
    title: "בנייה גרמנית ברמת פרמיום",
    desc: "גוף אלומיניום ופלסטיק ABS עמיד, עיצוב נצחי שמשתלב בכל מטבח. נבנה לאלפי כוסות קפה לאורך שנים.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#f6ede3] border-b border-[#e6dad4]" dir="rtl">
      <div className="px-12 py-14">
        <h2 className="text-[#522c25] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] mb-2">
          כל מה שצריך לדעת על המכונה
        </h2>
        <p className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] opacity-55 mb-12">
          תשע סיבות שבגללן JURA Z10 היא הבחירה הנכונה
        </p>

        <div className="grid grid-cols-2 gap-0">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-8 border-b border-[#e6dad4] group hover:bg-[#ede0d4] transition-colors duration-200 ${
                i % 2 === 0 ? "border-l border-[#e6dad4]" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <span
                  className="text-[52px] leading-none font-['Dialect_PM',sans-serif] font-bold shrink-0 select-none"
                  style={{ color: "#c46500", opacity: 0.35 }}
                >
                  {f.num}
                </span>
                <div>
                  <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold mb-2 group-hover:text-[#8B3A00] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[#522c25] text-[19px] leading-[30px] font-['Dialect_PM',sans-serif] opacity-70">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
