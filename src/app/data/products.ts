/**
 * Central product data for the v2 product page.
 * One entry per product, keyed by id. The product page components read from here,
 * so adding a product = adding an object below (mirrors the CSV import template).
 * Prices are pre-formatted as 'ש"ח 0,000' for the PriceTag component.
 */

export type Highlight = { icon: string; label: string; sub: string };
export type Feature = { num: string; title: string; desc: string };
export type FeatureBlock = { image: string; tag: string; title: string; body: string; imageRight: boolean };
export type RecipeParam = { label: string; value: string };
export type Recipe = { name: string; image: string; time: string; difficulty: string; params: RecipeParam[]; desc: string };
export type Spec = { label: string; value: string };
export type Faq = { q: string; a: string };
export type ProductDoc = { name: string; size: string };
export type Accessory = { image: string; name: string; desc: string; price: string; badge: string | null };
export type Bundle = { eyebrow: string; title: string; oldPrice: string; price: string };
export type StoryStat = { num: string; label: string };
export type Story = {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  stats: StoryStat[];
  image: string;
  brandLogo: string;
  year: string;
};
export type Review = { name: string; date: string; rating: number; title: string; body: string; helpful: number; verified: boolean };
export type QA = { q: string; a: string; date: string };
export type RelatedProduct = {
  image: string;
  brand: string;
  name: string;
  desc: string;
  price: string;
  oldPrice: string | null;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  href?: string;
};

export type Product = {
  id: string;
  brand: string;
  name: string;
  categoryType: string;
  subtitle: string;
  stockStatus: string;
  heroBadges: string[];
  price: string;
  oldPrice: string;
  savings: string;
  paymentsText: string;
  deliveryTime: string;
  pickupLocation: string;
  rating: number;
  reviewsCount: number;
  gallery: string[];
  thumbnail: string;
  highlights: Highlight[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: Feature[];
  featureBlocks: FeatureBlock[];
  recipesSubtitle: string;
  recipes: Recipe[];
  accessoriesSubtitle: string;
  accessories: Accessory[];
  bundle: Bundle;
  specs: Spec[];
  faq: Faq[];
  documents: ProductDoc[];
  story: Story;
  reviews: Review[];
  qa: QA[];
  related: RelatedProduct[];
};

const C8 = "https://api.jura.com/media/global/images/home-products/c-line-2024/C8-Piano-Black-EA";
const Z10 = "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348";

// Generic coffee photos reused for recipe cards
const RECIPE_IMG = {
  espresso: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
  latte: "https://images.pexels.com/photos/414605/pexels-photo-414605.jpeg?auto=compress&cs=tinysrgb&w=800",
  coldBrew: "https://images.pexels.com/photos/11100423/pexels-photo-11100423.jpeg?auto=compress&cs=tinysrgb&w=800",
  cappuccino: "https://images.pexels.com/photos/9249368/pexels-photo-9249368.jpeg?auto=compress&cs=tinysrgb&w=800",
  coffee: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const juraZ10: Product = {
  id: "jura-z10",
  brand: "JURA",
  name: "JURA Z10",
  categoryType: "מכונת קפה אוטומטית",
  subtitle: "מכונת אספרסו אוטומטית מקצועית לבית, במחיר של מכונה ביתית.",
  stockStatus: "במלאי",
  heroBadges: ["במלאי", "משלוח חינם"],
  price: 'ש"ח 9,999',
  oldPrice: 'ש"ח 11,499',
  savings: 'ש"ח 1,500',
  paymentsText: "עד 12 תשלומים",
  deliveryTime: "3–5 ימי עסקים",
  pickupLocation: "זמין באור יהודה",
  rating: 4.9,
  reviewsCount: 42,
  gallery: [
    "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10-800x800.jpg",
    "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-טוחנת-יורה-JURA-Z10-800x800.jpg",
    "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-JURA-Z10-800x800.jpg",
    "https://espressimo.co.il/wp-content/uploads/2024/12/Jura-Z10-800x800.jpg",
    "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-טחנת-JURA-Z10-800x800.jpg",
    "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-צבע-לבן-יהלום-800x800.jpg",
  ],
  thumbnail: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
  highlights: [
    { icon: "Cpu", label: "טוחנת מובנית", sub: "30 דרגות גסות" },
    { icon: "Thermometer", label: "תרמובלוק כפולה", sub: "חימום מיידי" },
    { icon: "Gauge", label: "לחץ 15 בר", sub: "מיצוי מקצועי" },
    { icon: "Droplets", label: "מקציף חלב אוטומטי", sub: "קצף נוצתי" },
    { icon: "Monitor", label: "מסך מגע צבעוני", sub: "4.3 אינץ'" },
    { icon: "Leaf", label: "מצב חיסכון בחשמל", sub: "P.E.P טכנולוגיה" },
    { icon: "Smartphone", label: "שליטה מהאפליקציה", sub: "Wi-Fi ו-Bluetooth" },
  ],
  featuresTitle: "כל מה שצריך לדעת על המכונה",
  featuresSubtitle: "תשע סיבות שבגללן JURA Z10 היא הבחירה הנכונה",
  features: [
    { num: "01", title: "טוחנת קונוס מקצועית מובנית", desc: "גרגרי קפה טריים נטחנים מולכם, רגע לפני המיצוי. 30 דרגות גסות, מנוע שקט, גוף מתכתי שמבטיח אחידות בכל טחינה." },
    { num: "02", title: "מערכת מיצוי P.E.P", desc: "Pulse Extraction Process – טכנולוגיה פטנטית של JURA שמבטיחה חילוץ מרבי של ארומות גם מכמויות קפה קטנות. כל ספציאליטי מדויק." },
    { num: "03", title: "32 ספציאליטי קפה", desc: "מאספרסו עד ריסטרטו, מלאטה מקיאטו ועד Cold Brew – הכל מוגדר מראש ומותאם אישית דרך מסך המגע הצבעוני." },
    { num: "04", title: "מקציף חלב JURA Fine Foam", desc: "מכין קצף נוצתי ועשיר בדיוק בטמפרטורה שתרצו. ניקוי עצמי אוטומטי לאחר כל שימוש." },
    { num: "05", title: "מסך מגע צבעוני 4.3 אינץ'", desc: "ממשק נוח, אינטואיטיבי ומהיר. מציג בזמן אמת את מצב המכונה, תזכורות תחזוקה ואפשרויות התאמה אישית." },
    { num: "06", title: "חיבור Wi-Fi ואפליקציית J.O.E", desc: "הפעלה מרחוק, עדכוני קושחה, שמירת מתכונים מועדפים ויצירת פרופילים אישיים לכל בן בית." },
    { num: "07", title: "מערכת ניקוי אוטומטית מלאה", desc: "תוכנית ניקוי יומית, שבועית וחודשית מובנית. המכונה מזכירה לכם מתי לנקות ועושה את העבודה בעצמה." },
    { num: "08", title: "מיכל מים 2.4 ליטר", desc: "קיבולת גדולה עם פילטר CLARIS שמגן על המכונה מסיד ומשפר את טעם הקפה. חיישן מפלס מים בזמן אמת." },
    { num: "09", title: "בנייה גרמנית ברמת פרמיום", desc: "גוף אלומיניום ופלסטיק ABS עמיד, עיצוב נצחי שמשתלב בכל מטבח. נבנה לאלפי כוסות קפה לאורך שנים." },
  ],
  featureBlocks: [
    { image: `${Z10}/features/Z10_Alu_White_EA_15348_feature3.jpg`, tag: "מערכת המיצוי", title: "P.E.P – מה שמפריד בין אספרסו טוב לאספרסו שלא תשכחו", body: "טכנולוגיית ה-Pulse Extraction Process שפותחה על ידי JURA פועלת בסדרת פולסים מבוקרים שמחלצים מהגרגרים את מלוא הארומות, הסוכרים הטבעיים ושמני הקפה — בלי מרירות ובלי בזבוז. הקפה יוצא עשיר, מורכב וחלק.", imageRight: true },
    { image: `${Z10}/features/Z10_Alu_White_EA_15348_feature5.jpg`, tag: "מקציף החלב", title: "קצף כמו בבית קפה. כל בוקר.", body: "מערכת Fine Foam של JURA מייצרת קצף עשיר ועדין בטמפרטורה הנכונה בדיוק — 65°C — בלי שתטרחו. לאחר כל שימוש, הניקוי מתבצע אוטומטית. אין צינורות נסתרים שמצטברים. אין תחזוקה ידנית.", imageRight: false },
    { image: `${Z10}/features/Z10_Alu_White_EA_15348_feature4.jpg`, tag: "ממשק ואפליקציה", title: "שליטה מלאה — מהמסך ומהטלפון", body: "מסך מגע צבעוני 4.3 אינץ' עם ממשק עברי מלא. אפליקציית J.O.E (JURA Operating Experience) מאפשרת הפעלה מרחוק, עדכוני קושחה אוטומטיים ושמירת עד 10 מתכוני קפה אישיים — לכל בן בית בנפרד.", imageRight: true },
    { image: `${Z10}/image-gallery/Z10_Alu_White_EA_15348_image2.jpg`, tag: "עיצוב וחומרים", title: "שווייצרית. מדויקת. יפה.", body: "גוף אלומיניום יצוק, לוח קדמי זכוכית מחוסמת, ידיות עם תחושת עומק. JURA Z10 לא נראית כמו מכונה — היא נראית כמו אובייקט שאתם גאים להציב במטבח. זמינה בשלושה גוונים.", imageRight: false },
  ],
  recipesSubtitle: "JURA Z10 תכין לכם את כל אלה — בלחיצה אחת",
  recipes: [
    { name: "אספרסו קלאסי", image: RECIPE_IMG.espresso, time: "25 שנ'", difficulty: "קל", params: [{ label: "כמות קפה", value: "18 גר'" }, { label: "תפוקה", value: 'מ"ל 40' }, { label: "טמפרטורה", value: "93°C" }, { label: "לחץ", value: "9 בר" }], desc: "אספרסו כפול עשיר, עם קרמה עבה ואיזון מושלם בין מתיקות לחומציות." },
    { name: "קפה לאטה", image: RECIPE_IMG.latte, time: "45 שנ'", difficulty: "בינוני", params: [{ label: "כמות קפה", value: "14 גר'" }, { label: "אספרסו", value: 'מ"ל 35' }, { label: "חלב מוקצף", value: 'מ"ל 180' }, { label: "טמפרטורה", value: "65°C" }], desc: "שכבת אספרסו עמוקה מתחת לחלב עשיר ורך — הדרך הנכונה להתחיל בוקר." },
    { name: "קולד ברו", image: RECIPE_IMG.coldBrew, time: "2 דק'", difficulty: "קל", params: [{ label: "כמות קפה", value: "22 גר'" }, { label: "תפוקה", value: 'מ"ל 120' }, { label: "טמפרטורה", value: "קר" }, { label: "קרח", value: "150 גר'" }], desc: "JURA Z10 מכינה Cold Brew ישירות — מיצוי על קרח בטמפרטורה נמוכה לטעם חלק ונקי." },
    { name: "קפוצ'ינו", image: RECIPE_IMG.cappuccino, time: "40 שנ'", difficulty: "קל", params: [{ label: "כמות קפה", value: "14 גר'" }, { label: "אספרסו", value: 'מ"ל 30' }, { label: "קצף חלב", value: 'מ"ל 90' }, { label: "טמפרטורה", value: "68°C" }], desc: "שליש אספרסו, שליש חלב, שליש קצף — הפרופורציות הקלאסיות עם מגע Fine Foam של JURA." },
  ],
  accessoriesSubtitle: "אביזרים ומתכלים שממצים את JURA Z10",
  accessories: [
    { image: "https://www.jura.com/-/media/global/images/coffee/big_impressa.jpg", name: "פולי קפה JURA Signature Blend", desc: "מיזוג ייחודי שפותח במיוחד למכונות JURA — אספרסו עשיר ומלא גוף.", price: 'ש"ח 149', badge: "מומלץ ביותר" },
    { image: "https://www.jura.com/-/media/global/images/home-products/maintenance-products/claris-smart-plus/claris_smart_plus_overview_3pc.jpg", name: "פילטר CLARIS Smart+ (3 יח')", desc: "מסנן המים החכם של JURA — מגן על המכונה מסיד ומשפר את טעם הקפה.", price: 'ש"ח 189', badge: "חיוני" },
    { image: "https://api.jura.com/media/global/images/home-products/maintenance-products/cleaning-tabs/overview_3in1cleaningtabs6er_na.jpg", name: "ערכת ניקוי JURA (12 טבליות)", desc: "טבליות ניקוי רשמיות מ-JURA — תחזוקה מושלמת ואורך חיים מירבי למכונה.", price: 'ש"ח 99', badge: null },
    { image: "https://www.jura.com/-/media/global/images/home-products/accessories/geschirrkollektion/packshot_esp_glass.jpg", name: "כוסות אספרסו JURA Glass Set (2 יח')", desc: "כוסות זכוכית עבה מעוצבות ייחודית — שומרות על חום, מציגות את הקרמה בצורה מושלמת.", price: 'ש"ח 149', badge: null },
  ],
  bundle: { eyebrow: "חבילת ה-Starter Bundle", title: "פולים + פילטר + ניקוי", oldPrice: 'ש"ח 437', price: 'ש"ח 349' },
  specs: [
    { label: "דגם", value: "JURA Z10" },
    { label: "מחזיק קפה", value: "גריינדר קונוס מקצועי מובנה" },
    { label: "מספר ספציאליטי", value: "32 משקאות" },
    { label: "מסך", value: "מגע צבעוני 4.3 אינץ'" },
    { label: "לחץ משאבה", value: "15 בר" },
    { label: "הספק", value: "1,450W" },
    { label: "מיכל מים", value: "2.4 ליטר" },
    { label: "מיכל פולים", value: "280 גרם" },
    { label: "טמפרטורת קפה", value: "3 רמות (60–65–70°C)" },
    { label: "Wi-Fi / Bluetooth", value: "כן / כן" },
    { label: "אפליקציה", value: "J.O.E – JURA Operating Experience" },
    { label: "מד קו קפה מרבי", value: "70 כוסות ביום" },
    { label: "רוחב", value: 'מ"מ 280' },
    { label: "גובה", value: 'מ"מ 355' },
    { label: "עומק", value: 'מ"מ 450' },
    { label: "משקל", value: 'ק"ג 11.2' },
    { label: "צבעים זמינים", value: "שחור יהלום / כסף פלטינום / לבן קרם" },
    { label: "אחריות", value: "2 שנה (ניתן להאריך ל-5)" },
  ],
  faq: [
    { q: "האם JURA Z10 כוללת גורסת קפה?", a: "כן. המכונה כוללת גריינדר קונוס מקצועי מובנה עם 30 דרגות גסות. ניתן גם להשתמש בקפה טחון מראש." },
    { q: "כמה זמן לוקח להכין כוס קפה?", a: "אספרסו — כ-25 שניות. לאטה מקיאטו — כ-75 שניות. החימום הראשוני לוקח כ-3 שניות בשל מערכת התרמובלוק הכפולה." },
    { q: "האם צריך להתחבר ל-Wi-Fi?", a: "לא חובה. המכונה פועלת מצוין ללא חיבור רשת. Wi-Fi ו-Bluetooth מאפשרים הפעלה מרחוק דרך אפליקציית J.O.E ועדכוני קושחה אוטומטיים." },
    { q: "מה כולל שירות התקנה והדגמה בבית?", a: "טכנאי מוסמך מגיע לביתכם, מתקין את המכונה, מגדיר אותה לפי הטעם שלכם, ומדגים את כל הפונקציות. השירות ניתן ללא עלות נוספת ברכישה ישירה." },
    { q: "האם ניתן להשתמש בקפסולות?", a: "לא. JURA Z10 מיועדת לפולי קפה שלמים או לקפה טחון. המכונה אינה תואמת לקפסולות." },
    { q: "מה ההבדל בין חידוש מהמפעל לבין חדש?", a: "מכונה מחודשת עברה בדיקה מקיפה ותיקון בידי טכנאים מוסמכים של JURA, מגיעה עם אחריות מלאה של שנה (ניתן להאריך), ועשויה לחסוך 20–35% ממחיר המכונה החדשה." },
  ],
  documents: [
    { name: "מדריך למשתמש — JURA Z10 (עברית)", size: "PDF · 4.2 MB" },
    { name: "מפרט טכני מלא", size: "PDF · 1.1 MB" },
    { name: "מדריך ניקוי ותחזוקה", size: "PDF · 2.8 MB" },
    { name: "מדריך התחלה מהירה", size: "PDF · 0.9 MB" },
  ],
  story: {
    eyebrow: "הסיפור מאחורי המכונה",
    title: "90 שנה של מומחיות שווייצרית — בכל כוס קפה",
    p1: "JURA נוסדה ב-1931 בשווייץ כחברת מוצרי בית. משנות ה-80, היא הפכה את תשומת הלב שלה למכונות קפה אוטומטיות — והפכה לסמכות הגלובלית בתחום.",
    p2: "כל מכונת JURA מיוצרת בסטנדרט שווייצרי, עם יותר מ-1,000 פעולות בדיקה לפני שהיא יוצאת מהפס. Z10 היא הפסגה הנוכחית של קו הבית — עם טכנולוגיות שנפתחו מקווי ה-Professional.",
    stats: [{ num: "1931", label: "שנת הקמה" }, { num: "32", label: "ספציאליטי ב-Z10" }, { num: "5M+", label: "מכונות בעולם" }],
    image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10.jpg",
    brandLogo: "/logos/JURA.png",
    year: "1931",
  },
  reviews: [
    { name: "אורן ל.", date: "15 במרץ 2026", rating: 5, title: "הטוב ביותר שיש", body: "קניתי אחרי הרבה מחקר ואני לא מתחרט. הקפה שיוצא ממנה טוב יותר ממה שקיבלתי ברוב בתי הקפה. P.E.P באמת עושה הבדל.", helpful: 14, verified: true },
    { name: "מיכל ד.", date: "2 בפברואר 2026", rating: 5, title: "קצף חלב מדהים", body: "אני שותה לאטה בכל בוקר ומהיום אני לא יכולה בלי JURA. הקצף שמתקבל ממערכת Fine Foam עדין ונוח — בדיוק כמו בבית קפה איכותי.", helpful: 9, verified: true },
    { name: "ניר ב.", date: "18 בינואר 2026", rating: 4, title: "מעולה, אבל יקרה", body: "המכונה פשוט עובדת מצוין. כל ספציאליטי מדויק ועקבי. הנקודה היחידה שהורידה כוכב אחד היא המחיר — אבל ביחס לאיכות, אולי צדק.", helpful: 6, verified: true },
    { name: "תמר כ.", date: "5 בדצמבר 2025", rating: 5, title: "שירות + מוצר = 10/10", body: "ההתקנה בבית הייתה חוויה בפני עצמה. הטכנאי הסביר הכל, הגדיר לי את הגרסאות שאני אוהבת, ועזר לי להבין את האפליקציה. ממליצה בחום.", helpful: 22, verified: true },
    { name: "יוסף מ.", date: "11 בנובמבר 2025", rating: 5, title: "אחרי 5 שנים עם מכונה ידנית", body: "עברתי מ-La Marzocco ביתית ל-JURA Z10 ולא הצטערתי. כן, אני מפספס קצת את הטקס — אבל הקפה יוצא עקבי ומוצלח בכל פעם, גם ב-6 בבוקר.", helpful: 11, verified: false },
    { name: "שירה פ.", date: "3 באוקטובר 2025", rating: 5, title: "עיצוב שגרם לי לרכוש", body: "לא אשקר — קניתי בחלק גדול בגלל הצבע הלבן קרם שמשתלב מושלם במטבח שלי. אבל אחרי חודשיים, הקפה הוא הסיבה שאני שמחה שקניתי.", helpful: 8, verified: true },
  ],
  qa: [
    { q: "האם אפשר להשתמש בקפה קלוי בהיר?", a: "בהחלט. אפשר לכוונן את דרגת הגסות והטמפרטורה, מה שמאפשר מיצוי מצוין גם לקלייה בהירה.", date: "10 בינואר 2026" },
    { q: "כמה זמן לוקח הניקוי האוטומטי?", a: "ניקוי יומי — כ-2 דקות. תוכנית כייל חודשית — כ-30 דקות. המכונה מזכירה לכם מראש.", date: "22 בפברואר 2026" },
  ],
  related: [
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg", brand: "JURA", name: "E8 דור 3 — מחודש", desc: "מכונה משומשת במצב מעולה, עברה בדיקה ואחריות 6 חודשים", price: 'ש"ח 3,999', oldPrice: 'ש"ח 6,999', rating: 4.8, reviews: 24, badge: "טרייד אין", badgeColor: "#2e7d32" },
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg", brand: "JURA", name: "J8 Twin", desc: "שני גריינדרים מקצועיים, 32 ספציאליטי", price: 'ש"ח 12,499', oldPrice: null, rating: 5.0, reviews: 11, badge: "פרמיום", badgeColor: "#1c1c1c" },
    { image: "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg", brand: "La Marzocco", name: "Linea Mini", desc: "מכונת ידנית מקצועית לבית, דרגה בריסטה", price: 'ש"ח 14,900', oldPrice: null, rating: 4.9, reviews: 17, badge: "הטוב ביותר לידניות", badgeColor: "#2e5a88" },
    { image: `${C8}/c8_piano_black_ea_packshot.jpg`, brand: "JURA", name: "C8", desc: "קומפקטית, 6 ספציאליטי, מקציף Fine Foam — תמורה מצוינת", price: 'ש"ח 4,200', oldPrice: 'ש"ח 4,900', rating: 4.8, reviews: 27, badge: "מציאה", badgeColor: "#2e7d32", href: "/v2/productv2/jura-c8" },
  ],
};

const juraC8: Product = {
  id: "jura-c8",
  brand: "JURA",
  name: "JURA C8",
  categoryType: "מכונת קפה אוטומטית",
  subtitle: "פורמט קומפקטי, טעם בלתי נשכח — ביצועים של מכונה גדולה, בגוף שמתאים לכל מטבח.",
  stockStatus: "במלאי",
  heroBadges: ["במלאי", "משלוח חינם"],
  price: 'ש"ח 4,200',
  oldPrice: 'ש"ח 4,900',
  savings: 'ש"ח 700',
  paymentsText: "עד 12 תשלומים",
  deliveryTime: "3–5 ימי עסקים",
  pickupLocation: "זמין באור יהודה",
  rating: 4.8,
  reviewsCount: 27,
  gallery: [
    `${C8}/c8_piano_black_ea_packshot.jpg`,
    `${C8}/image-gallery/c8_piano_black_ea_image2.jpg`,
    `${C8}/image-gallery/c8_piano_black_ea_image3.jpg`,
    `${C8}/image-gallery/c8_piano_black_ea_image4.jpg`,
    `${C8}/image-gallery/c8_piano_black_ea_image5.jpg`,
    `${C8}/image-gallery/c8_piano_black_ea_image6.jpg`,
  ],
  thumbnail: `${C8}/c8_piano_black_ea_packshot.jpg`,
  highlights: [
    { icon: "Cpu", label: "טוחנת Aroma מקצועית", sub: "P.A.G. לטחינה מדויקת" },
    { icon: "Gauge", label: "לחץ 15 בר", sub: "מיצוי ברמת בריסטה" },
    { icon: "Droplets", label: "מקציף Fine Foam", sub: "קצף חלב כפול-שלבי" },
    { icon: "Monitor", label: "לוח בקרה פשוט", sub: "Easy Control" },
    { icon: "Leaf", label: "מצב חיסכון בחשמל", sub: "ידידותי לסביבה" },
    { icon: "Smartphone", label: "שליטה מהאפליקציה", sub: "Wi-Fi ו-J.O.E" },
    { icon: "Thermometer", label: "תרמובלוק", sub: "חימום מהיר ויציב" },
  ],
  featuresTitle: "כל מה שצריך לדעת על המכונה",
  featuresSubtitle: "שמונה סיבות שבגללן JURA C8 מנצחת בקטגוריה שלה",
  features: [
    { num: "01", title: "טוחנת Aroma מקצועית (P.A.G.)", desc: "הטוחנת המקצועית של JURA טוחנת את הפולים טרי לפני כל כוס ומשמרת את מלוא הארומה. טחינה מהירה, אחידה ושקטה." },
    { num: "02", title: "מערכת מיצוי P.E.P®", desc: "Pulse Extraction Process דוחפת את המים בפולסים קצרים דרך הקפה הטחון — מיצוי מושלם של אספרסו וריסטרטו, בדיוק כמו בבית קפה." },
    { num: "03", title: "6 ספציאליטי בלחיצה", desc: "אספרסו, קפה, קפוצ'ינו ולאטה מקיאטו — כפול או בודד, כל אחד מדויק ועקבי. בחירה ישירה מלוח הבקרה." },
    { num: "04", title: "יחידת חליטה משתנה (5–16 גר')", desc: "תא החליטה מתכוונן לכמות הקפה, כך שכל משקה — קצר או ארוך — יוצא מאוזן ועשיר." },
    { num: "05", title: "מקציף חלב Fine Foam", desc: "מערכת ההקצפה מקציפה את החלב פעמיים בשני תאים נפרדים ויוצרת קצף קליל, צפוף ויציב — מושלם לקפוצ'ינו וללאטה מקיאטו." },
    { num: "06", title: "חיבור Wi-Fi ואפליקציית J.O.E®", desc: "מתאם ה-Wi-Fi כלול באריזה. הפעילו את המכונה, שמרו מתכונים אישיים וקבלו עדכונים — הכל מהטלפון או הטאבלט." },
    { num: "07", title: "פילטר CLARIS Smart+", desc: "זיהוי פילטר אוטומטי שמגן על המכונה מאבנית ומשפר את טעם הקפה. מיכל מים 1.6 ליטר עם עיצוב גלי אופייני." },
    { num: "08", title: "עיצוב גלי קומפקטי", desc: "קווים קעורים וקמורים, רוחב 26 ס\"מ בלבד וגריל כוסות מוכרם — מכונה שנראית מצוין על כל משטח, גם הקטן." },
  ],
  featureBlocks: [
    { image: `${C8}/features/c8_piano_black_ea_feature1.jpg`, tag: "מערכת המיצוי", title: "P.E.P® — הסוד לאספרסו עשיר, גם בכוס קטנה", body: "יחידת חליטה בגודל מלא עם תא משתנה (5–16 גר') יחד עם תהליך ה-Pulse Extraction Process מוציאים מהקפה את מלוא הארומה והשמנים. התוצאה: אספרסו וריסטרטו ברמת בריסטה, עקביים בכל כוס.", imageRight: true },
    { image: `${C8}/features/c8_piano_black_ea_feature2.jpg`, tag: "מקציף החלב", title: "קצף שמוקצף פעמיים — קליל כמו בבית קפה", body: "טכנולוגיית Fine Foam מקציפה את החלב בשני תאים נפרדים ויוצרת מרקם אוורירי ויציב במיוחד. קפוצ'ינו ולאטה מקיאטו יוצאים מושלמים, והמערכת מתנקה אוטומטית.", imageRight: false },
    { image: `${C8}/features/c8_piano_black_ea_feature3.jpg`, tag: "עיצוב", title: "קומפקטי בחוץ, נדיב בפנים", body: "עיצוב הגל האופייני ל-JURA: מבנים קעורים וקמורים שמדגישים את גריל הכוסות המוכרם ואת מיכל המים. רוחב של 26 ס\"מ בלבד — נכנסת לכל פינת מטבח בלי להתפשר על נוכחות.", imageRight: true },
    { image: `${C8}/image-gallery/c8_piano_black_ea_image4.jpg`, tag: "ממשק ואפליקציה", title: "שליטה פשוטה — מהמכונה ומהטלפון", body: "לוח בקרה אינטואיטיבי (Easy Control) לבחירה ישירה של כל משקה. עם מתאם ה-Wi-Fi הכלול ואפליקציית J.O.E אפשר להפעיל מרחוק, לשמור מתכונים אישיים ולקבל עדכוני קושחה.", imageRight: false },
  ],
  recipesSubtitle: "JURA C8 תכין לכם את כל אלה — בלחיצה אחת",
  recipes: [
    { name: "אספרסו", image: RECIPE_IMG.espresso, time: "25 שנ'", difficulty: "קל", params: [{ label: "כמות קפה", value: "16 גר'" }, { label: "תפוקה", value: 'מ"ל 40' }, { label: "טמפרטורה", value: "92°C" }, { label: "לחץ", value: "9 בר" }], desc: "אספרסו עשיר עם קרמה צפופה — מיצוי P.E.P שמוציא את מלוא הארומה גם בכוס קצרה." },
    { name: "קפוצ'ינו", image: RECIPE_IMG.cappuccino, time: "40 שנ'", difficulty: "קל", params: [{ label: "כמות קפה", value: "14 גר'" }, { label: "אספרסו", value: 'מ"ל 30' }, { label: "קצף חלב", value: 'מ"ל 90' }, { label: "טמפרטורה", value: "67°C" }], desc: "שליש אספרסו, שליש חלב, שליש קצף Fine Foam קליל — קלאסיקה איטלקית בבית." },
    { name: "לאטה מקיאטו", image: RECIPE_IMG.latte, time: "55 שנ'", difficulty: "בינוני", params: [{ label: "כמות קפה", value: "14 גר'" }, { label: "אספרסו", value: 'מ"ל 35' }, { label: "חלב מוקצף", value: 'מ"ל 200' }, { label: "טמפרטורה", value: "65°C" }], desc: "שכבות יפות של חלב, אספרסו וקצף — מתוקה, רכה ומרשימה במיוחד." },
    { name: "קפה שחור", image: RECIPE_IMG.coffee, time: "30 שנ'", difficulty: "קל", params: [{ label: "כמות קפה", value: "12 גר'" }, { label: "תפוקה", value: 'מ"ל 120' }, { label: "טמפרטורה", value: "95°C" }, { label: "כמות", value: "בודד/כפול" }], desc: "ספל קפה מלא וארומטי, נקי וחלק — להתחלה רגועה של היום." },
  ],
  accessoriesSubtitle: "אביזרים ומתכלים שממצים את JURA C8",
  accessories: [
    { image: "https://www.jura.com/-/media/global/images/coffee/big_impressa.jpg", name: "פולי קפה JURA Signature Blend", desc: "מיזוג ייחודי שפותח במיוחד למכונות JURA — אספרסו עשיר ומלא גוף.", price: 'ש"ח 149', badge: "מומלץ ביותר" },
    { image: "https://www.jura.com/-/media/global/images/home-products/maintenance-products/claris-smart-plus/claris_smart_plus_overview_3pc.jpg", name: "פילטר CLARIS Smart+ (3 יח')", desc: "מסנן המים החכם של JURA — מגן על המכונה מסיד ומשפר את טעם הקפה.", price: 'ש"ח 189', badge: "חיוני" },
    { image: "https://api.jura.com/media/global/images/home-products/maintenance-products/cleaning-tabs/overview_3in1cleaningtabs6er_na.jpg", name: "ערכת ניקוי JURA (12 טבליות)", desc: "טבליות ניקוי רשמיות מ-JURA — תחזוקה מושלמת ואורך חיים מירבי למכונה.", price: 'ש"ח 99', badge: null },
    { image: "https://www.jura.com/-/media/global/images/home-products/accessories/geschirrkollektion/packshot_esp_glass.jpg", name: "כוסות אספרסו JURA Glass Set (2 יח')", desc: "כוסות זכוכית עבה מעוצבות ייחודית — שומרות על חום, מציגות את הקרמה בצורה מושלמת.", price: 'ש"ח 149', badge: null },
  ],
  bundle: { eyebrow: "חבילת ה-Starter Bundle", title: "פולים + פילטר + ניקוי", oldPrice: 'ש"ח 437', price: 'ש"ח 349' },
  specs: [
    { label: "דגם", value: "JURA C8 (Piano Black)" },
    { label: "טוחנת", value: "Aroma מקצועית (P.A.G.)" },
    { label: "מספר ספציאליטי", value: "6 משקאות" },
    { label: "יחידת חליטה", value: "משתנה, 5–16 גרם" },
    { label: "לחץ משאבה", value: "15 בר" },
    { label: "מערכת חימום", value: "תרמובלוק (1)" },
    { label: "ממשק", value: "לוח בקרה פשוט (Easy Control)" },
    { label: "מקציף חלב", value: "זרבובית HP1/CX1 מתחלפת" },
    { label: "פילטר", value: "CLARIS Smart+" },
    { label: "מיכל מים", value: "1.6 ליטר" },
    { label: "מיכל פולים", value: "200 גרם" },
    { label: "מיכל פסולת", value: "כ-16 מנות" },
    { label: "טווח זרבובית", value: 'מ"מ 75–115 (מתכוונן)' },
    { label: "Wi-Fi", value: "כלול (מתאם באריזה)" },
    { label: "הספק", value: "1,450W" },
    { label: "מתח", value: "230V" },
    { label: "צריכת המתנה", value: "≤0.5W" },
    { label: "רוחב", value: 'ס"מ 26' },
    { label: "גובה", value: 'ס"מ 32.5' },
    { label: "עומק", value: 'ס"מ 43.7' },
    { label: "משקל", value: 'ק"ג 9.5' },
    { label: "ארץ ייצור", value: "פורטוגל" },
    { label: "שנת דגם", value: "2024" },
    { label: "אחריות", value: "2 שנה (ניתן להאריך)" },
  ],
  faq: [
    { q: "מה ההבדל בין C8 למכונות הגדולות של JURA?", a: "C8 מביאה את ליבת הטכנולוגיה של JURA — טוחנת P.A.G., מיצוי P.E.P ומקציף Fine Foam — בגוף קומפקטי וברמת מחיר נגישה יותר. היא מתמקדת ב-6 הספציאליטי הקלאסיים, מה שהופך אותה למושלמת לבית ולמשרד." },
    { q: "כמה משקאות C8 יודעת להכין?", a: "6 ספציאליטי: אספרסו (כפול/בודד), קפה (כפול/בודד), קפוצ'ינו ולאטה מקיאטו — כל אחד בלחיצה אחת מלוח הבקרה." },
    { q: "האם המכונה מתחברת ל-Wi-Fi?", a: "כן, ומתאם ה-Wi-Fi כלול באריזה. דרך אפליקציית J.O.E אפשר להפעיל מרחוק, לשמור מתכונים ולקבל עדכונים. החיבור אינו חובה — המכונה עובדת מצוין גם בלעדיו." },
    { q: "האם אפשר להשתמש בקפה טחון?", a: "כן. לצד הטוחנת המובנית יש פתח לקפה טחון מראש — נוח במיוחד לקפה נטול קפאין, בלי לרוקן את מיכל הפולים." },
    { q: "מה כולל המארז שאתם נותנים?", a: "ברכישה מאספרסימו מצורפים 2 ק\"ג פולי קפה קלויים טריים, פילטר CLARIS Smart וטבליות ניקוי להסרת שמני קפה — שתתחילו ליהנות מהרגע הראשון." },
    { q: "יש שירות והתקנה?", a: "בהחלט. הצוות שלנו מלווה אתכם בהתאמה, בהפעלה הראשונה ובכל שאלה — וגם בתחזוקה ובתיקונים במעבדה שלנו, שנים קדימה." },
  ],
  documents: [
    { name: "מדריך למשתמש — JURA C8 (עברית)", size: "PDF · 3.8 MB" },
    { name: "מפרט טכני מלא", size: "PDF · 1.0 MB" },
    { name: "מדריך ניקוי ותחזוקה", size: "PDF · 2.4 MB" },
    { name: "מדריך התחלה מהירה", size: "PDF · 0.8 MB" },
  ],
  story: {
    eyebrow: "הסיפור מאחורי המכונה",
    title: "90 שנה של מומחיות שווייצרית — בכל כוס קפה",
    p1: "JURA נוסדה ב-1931 בשווייץ כחברת מוצרי בית. משנות ה-80, היא הפכה את תשומת הלב שלה למכונות קפה אוטומטיות — והפכה לסמכות הגלובלית בתחום.",
    p2: "C8 שייכת לקו C החדש (2024), שמביא את טכנולוגיות הליבה של JURA — טוחנת P.A.G., מיצוי P.E.P ומקציף Fine Foam — לפורמט קומפקטי ונגיש. מיוצרת בפורטוגל בסטנדרט השווייצרי המוקפד.",
    stats: [{ num: "1931", label: "שנת הקמה" }, { num: "6", label: "ספציאליטי ב-C8" }, { num: "5M+", label: "מכונות בעולם" }],
    image: `${C8}/c8_piano_black_ea_packshot.jpg`,
    brandLogo: "/logos/JURA.png",
    year: "1931",
  },
  reviews: [
    { name: "דנה ק.", date: "20 באפריל 2026", rating: 5, title: "קטנה אבל אלופה", body: "חיפשתי משהו שיתאים למטבח קטן ולא יתפשר על הקפה. ה-C8 בדיוק זה — אספרסו מעולה כל בוקר, ותופסת ממש מעט מקום על השיש.", helpful: 13, verified: true },
    { name: "אבי ר.", date: "8 במרץ 2026", rating: 5, title: "הקפוצ'ינו של הבית", body: "הקצף של ה-Fine Foam פשוט מושלם. אשתי מכינה לאטה מקיאטו ואני קפוצ'ינו, ושנינו מרוצים. שדרוג ענק מהקפסולות שהיו לנו.", helpful: 10, verified: true },
    { name: "רונית מ.", date: "22 בפברואר 2026", rating: 4, title: "מצוינת, הייתי שמחה למסך", body: "המכונה עובדת נהדר והקפה עקבי. הורדתי כוכב כי התרגלתי למסך מגע ופה זה לוח כפתורים — אבל אחרי שבוע מתרגלים וזה נוח.", helpful: 7, verified: true },
    { name: "יוסי ב.", date: "14 בינואר 2026", rating: 5, title: "שירות אספרסימו = סיבה לקנות פה", body: "קניתי דווקא בגלל הליווי. הסבירו לי בדיוק מה מתאים, הדריכו בהפעלה, וכשהייתה שאלה ענו תוך דקות בוואטסאפ. ממליץ בחום.", helpful: 19, verified: true },
    { name: "מאיה ל.", date: "2 בדצמבר 2025", rating: 5, title: "שקטה ומהירה", body: "הופתעתי כמה היא שקטה בטחינה, ואספרסו מוכן תוך שניות. החיבור לאפליקציה נוח — שמרתי את ההגדרות שלי וזהו.", helpful: 6, verified: false },
    { name: "גיא נ.", date: "19 בנובמבר 2025", rating: 4, title: "תמורה מצוינת למחיר", body: "ביחס למה שהיא נותנת, המחיר הוגן מאוד. לא הדגם הכי מפואר של JURA, אבל את הבסיס — אספרסו וחלב — היא עושה ברמה גבוהה.", helpful: 9, verified: true },
  ],
  qa: [
    { q: "האם אפשר להכין שני ספלים בו-זמנית?", a: "כן, ל-C8 יש פונקציית הכנה כפולה — שני אספרסו או שתי כוסות קפה במקביל.", date: "5 בפברואר 2026" },
    { q: "האם המכונה מתאימה לקפה נטול?", a: "בהחלט. אפשר להשתמש בפתח הקפה הטחון לקפה נטול, בלי לרוקן את מיכל הפולים.", date: "27 בינואר 2026" },
  ],
  related: [
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-Z10-800x800.jpg", brand: "JURA", name: "Z10", desc: "מכונת הדגל — קפה חם וקר אוטומטי, מסך מגע וטוחנת כפולה", price: 'ש"ח 9,999', oldPrice: 'ש"ח 11,499', rating: 4.9, reviews: 42, badge: "הנמכרת ביותר", badgeColor: "#8B3A00", href: "/v2/productv2/jura-z10" },
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-ENA-8-דור-3.jpg", brand: "JURA", name: "ENA 8 דור 3", desc: "קומפקטי, מושלם לדירות קטנות — ביצועים גדולים", price: 'ש"ח 4,299', oldPrice: 'ש"ח 4,999', rating: 4.7, reviews: 31, badge: "מציאה", badgeColor: "#2e7d32" },
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg", brand: "JURA", name: "E8 דור 3 — מחודש", desc: "מכונה משומשת במצב מעולה, עברה בדיקה ואחריות 6 חודשים", price: 'ש"ח 3,999', oldPrice: 'ש"ח 6,999', rating: 4.8, reviews: 24, badge: "טרייד אין", badgeColor: "#2e7d32" },
    { image: "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-J8-twin-צבע-שחור-יהלום.jpg", brand: "JURA", name: "J8 Twin", desc: "שני גריינדרים מקצועיים, 32 ספציאליטי", price: 'ש"ח 12,499', oldPrice: null, rating: 5.0, reviews: 11, badge: "פרמיום", badgeColor: "#1c1c1c" },
  ],
};

export const products: Record<string, Product> = {
  "jura-z10": juraZ10,
  "jura-c8": juraC8,
};

export const DEFAULT_PRODUCT_ID = "jura-z10";

export function getProduct(id?: string): Product {
  return (id && products[id]) || products[DEFAULT_PRODUCT_ID];
}
