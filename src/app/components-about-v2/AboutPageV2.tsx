import {
  Coffee,
  Wrench,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  RefreshCw,
  Settings2,
  Droplets,
  MessageCircle,
  Zap,
  BadgePercent,
  Store,
  Home,
  Phone,
  Truck,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Header } from "../components-v2/Header";
import { Footer } from "../components-v2/Footer";
import { FloatingActions } from "../components-v2/FloatingActions";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "/picts/art-of-coffee-badge.png";
// Shared portrait of the two founders — cropped to each face via objectPosition below.
const FOUNDERS_IMG = "/picts/founders.jpg";
const TEAM_IMG = "/picts/banner2.jpg";
const SHOP_IMG = "/picts/stuff1.jpg";

const stats = [
  { value: "2000", label: "השנה שבה הכל התחיל" },
  { value: "25+", label: "שנות ניסיון במעבדה" },
  { value: "JURA", label: "מומחה מוביל בישראל" },
  { value: "אבא ובן", label: "עסק משפחתי" },
];

const founders = [
  {
    name: "אנדריי ברונשטיין",
    role: "המייסד",
    order: "מקיאטו חזק",
    icon: GraduationCap,
    img: FOUNDERS_IMG,
    // Andrey is on the RIGHT side of the shared photo → crop to right portion.
    imgPosition: "65% center",
    bio: "בוגר תואר שני בכימיה ותואר ראשון בפיזיקה, עם השכלה רחבה בחשמל ואלקטרוניקה ותשוקה לקפה שהיא חלק בלתי נפרד ממני. ייסדתי את אספרסימו מתוך הבנה פשוטה אך עמוקה — שכדי להגיע לכוס הקפה המדויקת צריך את השילוב הזה שבין מדע מדויק לרגש. וכאן נכנס לתמונה ולעסק הבן, איוון.",
  },
  {
    name: "איוון ברונשטיין",
    role: "מומחה JURA",
    order: "ריסטרטו כפול",
    icon: Wrench,
    img: FOUNDERS_IMG,
    // Ivan is on the LEFT side of the shared photo → crop to left portion.
    imgPosition: "30% center",
    bio: "עוד כשהייתי ילד אהבתי את ניחוחות הקפה ששלטו בבית. כבר בגיל 17, כטכנאי מתחיל, נסעתי ברחבי הארץ כדי להכיר את כל מכונות הקפה — עבדתי עם כולן, מתקן, מפרק ולומד את סודות המכונות. אחרי שירות משמעותי במשמר הגבול, לימודים והתמחות במכונות JURA בשווייץ, הפכתי למומחה המוביל בישראל בתיקון JURA.",
  },
];

const services = [
  { icon: Wrench, title: "מעבדת תיקונים", desc: "תיקון מכונות קפה מכל הסוגים — אוטומטיות, ידניות ומקצועיות — בידי טכנאים מנוסים." },
  { icon: RefreshCw, title: "תיקון · שימור · חידוש", desc: "מחזירים מכונות לחיים: מתיקון נקודתי ועד חידוש מלא של המכונה שלכם." },
  { icon: Settings2, title: "תחזוקה ושדרוג", desc: "תחזוקה שוטפת ושדרוג למכונות קפה מקצועיות ואוטומטיות, לאורך שנים." },
  { icon: Droplets, title: "סינון מים מתקדם", desc: "התקנת מערכות סינון מים שמשפרות את הטעם ומגנות על המכונה מאבנית." },
  { icon: MessageCircle, title: "ייעוץ ויחס אישי", desc: "ייעוץ מקצועי וליווי אישי — לפני הרכישה, במהלכה והרבה אחריה." },
];

const creed = [
  { icon: Zap, title: "תיקון מהיר ויעיל" },
  { icon: ShieldCheck, title: "אחריות מקצועית" },
  { icon: BadgePercent, title: "מחירים הוגנים" },
  { icon: HeartHandshake, title: "יושרה, אמינות ואדיבות" },
];

const repairOptions = [
  {
    icon: Store,
    badge: "IN HOUSE",
    title: "אספרסימו במעבדה",
    desc: "מביאים את המכונה למעבדת התיקונים שלנו — לאבחון יסודי וטיפול מלא.",
  },
  {
    icon: Home,
    badge: "עד הבית",
    title: "שירות תיקונים בבית",
    desc: "מגיעים אליכם, מאבחנים במקום ופותרים את רוב התקלות אצלכם. מקרים מורכבים — לוקחים למעבדה ומחזירים כמו חדשה.",
  },
  {
    icon: Phone,
    badge: "מרחוק",
    title: "איפיון טלפוני",
    desc: "גרים רחוק? נאבחן את התקלה בטלפון ונקבע מועד לתיקון מקצועי.",
  },
  {
    icon: Truck,
    badge: "שליח",
    title: "איסוף המכונה",
    desc: "שולחים שליח לאסוף את המכונה — בלי שתצטרכו לצאת מהבית.",
  },
];

const machineLogos = [
  { src: "/logos/JURA.png", alt: "JURA" },
  { src: "/logos/LAMARZOCCO.png", alt: "La Marzocco" },
  { src: "/logos/ECM.png", alt: "ECM" },
  { src: "/logos/QUICKMILL.png", alt: "Quick Mill" },
  { src: "/logos/PROFITEC.png", alt: "Profitec" },
  { src: "/logos/KALERM.png", alt: "Kalerm" },
  { src: "/logos/DRCOFFEE.png", alt: "DR Coffee" },
  { src: "/logos/LAPAVONY.png", alt: "La Pavoni" },
  { src: "/logos/LELIT.png", alt: "Lelit" },
  { src: "/logos/Stone.png", alt: "Stone" },
  { src: "/logos/Fiorenzat.png", alt: "Fiorenzato" },
  { src: "/logos/eureka-535311.png", alt: "Eureka" },
  { src: "/logos/nuova-simonelli.png", alt: "Nuova Simonelli" },
  { src: "/logos/rancilio.png", alt: "Rancilio" },
  { src: "/logos/SAN MARTINO.png", alt: "San Martino" },
];

export function AboutPageV2() {
  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <Header />

      {/* Breadcrumb */}
      <div
        dir="rtl"
        className="border-b border-[#e6dad4] px-12 py-3 flex items-center gap-2 text-[18px] font-['Dialect_PM',sans-serif] text-[#522c25]"
      >
        <a href="/v2" className="opacity-50 hover:opacity-100 transition-opacity">דף הבית</a>
        <span className="opacity-30">›</span>
        <span className="font-bold">אודות</span>
      </div>

      {/* Hero — בית של קפה */}
      <section dir="rtl" className="border-b border-[#e6dad4] bg-[#f6ede3]">
        <div className="px-12 py-16 flex items-center justify-between gap-10">
          <div className="max-w-[880px]">
            <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
              הסיפור שלנו
            </span>
            <h1 className="text-[#522c25] text-[68px] leading-[1.05] font-['Dialect_PM',sans-serif] font-bold tracking-[0.02em] mt-3">
              אספרסימו — בית של קפה
            </h1>
            <p className="text-[#8B3A00] text-[30px] font-['Dialect_PM',sans-serif] font-bold leading-[1.4] mt-4">
              קפה הוא רגש. קפה הוא מדע. קפה הוא משפחה.
            </p>
            <p className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] opacity-70 leading-[1.6] mt-4">
              הקמנו את אספרסימו בשנת 2000 מתוך אהבה גדולה לעולם הקפה ורצון אמיתי
              להפוך כל כוס קפה לחוויה מושלמת. לא פחות מזה. מה שהתחיל כחלום הפך לעסק
              משפחתי שמנוהל באהבה, מקצועיות והרבה קפאין — בידי אבא ובן שרואים בקפה
              אומנות של קיום.
            </p>
          </div>
          <img src={HERO_IMG} alt="המומחה של אספרסימו" className="w-[200px] h-auto shrink-0 hidden md:block" style={{ transform: "translateX(25%)" }} />
        </div>

        {/* Stats */}
        <div className="border-t border-[#e6dad4] bg-[#fff9f2] grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-[#e6dad4]">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-8 px-10 flex flex-col gap-1">
              <span className="font-['Dialect_PM',sans-serif] font-bold text-[40px] leading-none text-[#8B3A00]">{value}</span>
              <span className="font-['Dialect_PM',sans-serif] text-[18px] text-[#522c25] opacity-60">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founders — אבא ובן */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] px-12 py-16">
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
              אבא ובן
            </span>
            <h2 className="text-[#522c25] text-[46px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mt-2">
              שני דורות, שפה אחת: קפה
            </h2>
            <p className="text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] opacity-60 leading-[1.6] mt-3">
              כל אחד וההזמנה הקבועה שלו — וביחד, דיוק וניחוחות שמרכיבים את אספרסימו.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1180px] mx-auto">
            {founders.map(({ name, role, order, icon: Icon, img, imgPosition, bio }) => (
              <div
                key={name}
                className="bg-[#fff9f2] border border-[#e6dad4] rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-[#c46500] transition-all"
              >
                <div className="sm:w-[210px] shrink-0 aspect-square sm:aspect-auto overflow-hidden border-b sm:border-b-0 sm:border-l border-[#e6dad4]">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: imgPosition }}
                  />
                </div>
                <div className="flex-1 p-7 flex flex-col">
                  <div className="self-start flex items-center gap-2 bg-[#f6ede3] border border-[#e6dad4] rounded-full px-3 py-1 mb-3">
                    <Coffee size={15} className="text-[#c46500]" />
                    <span className="text-[#8B3A00] text-[15px] font-['Dialect_PM',sans-serif] font-bold">{order}</span>
                  </div>
                  <h3 className="text-[#522c25] text-[28px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{name}</h3>
                  <div className="flex items-center gap-1.5 mt-1 mb-3 text-[#c46500] text-[16px] font-['Dialect_PM',sans-serif] font-bold">
                    <Icon size={16} strokeWidth={1.7} /> {role}
                  </div>
                  <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-72 leading-[1.65]">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Behind a good cup — team / lab */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[46%] aspect-[4/3] lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-l border-[#e6dad4]">
            <img src={TEAM_IMG} alt="הצוות של אספרסימו" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 px-12 py-14 flex flex-col justify-center">
            <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mb-5 leading-[1.15]">
              מאחורי כוס קפה טובה, עומדת מכונה ראויה
            </h2>
            <div className="space-y-4 text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] opacity-72 leading-[1.7]">
              <p>
                מאחורי כל כוס קפה טובה עומדת מכונה שעובדת נכון. היום אנחנו מנהלים יחד
                את אספרסימו — אב ובן שמדברים קפה באותה שפה: דיוק, ניחוחות וטעמים.
              </p>
              <p>
                סביבנו התגבש צוות מקצועי שחי ונושם קפה ומעניק שירות מלא ואישי —
                ממעבדת תיקונים עם טכנאים בעלי ניסיון של למעלה מ־25 שנה, ועד שירות
                מהיר, מדויק והוגן, עם הבנה עמוקה בכל סוגי מכונות הקפה: אוטומטיות,
                ידניות, מקינטות וכל מה שקשור לקפה.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] px-12 py-16">
          <div className="max-w-[820px] mb-10">
            <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mb-3">
              מה אנחנו מעניקים לכם — ואיך
            </h2>
            <p className="text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.6]">
              מדי יום מגיעים אלינו אנשים שרוצים דבר אחד פשוט: שמכונת הקפה שלהם תעשה
              את הקפה הכי טוב שאפשר. בשביל זה בנינו מעטפת שירות שלמה, שמושתתת על
              ׳ערכי קפה׳ ברורים ואהבה אמיתית לקפאין.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#fff9f2] border border-[#e6dad4] rounded-2xl p-7 hover:border-[#c46500] hover:bg-[#f6ede3] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#f6ede3] flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[#c46500]" strokeWidth={1.6} />
                </div>
                <h3 className="text-[#522c25] text-[24px] font-['Dialect_PM',sans-serif] font-bold mb-2">{title}</h3>
                <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Creed — אני מאמין */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] bg-[#522c25] px-12 py-14">
          <div className="flex items-center gap-3 mb-9">
            <Sparkles size={22} className="text-[#c46500]" />
            <h2 className="text-[#fff9f2] text-[34px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">
              ה׳אני מאמין׳ של אוהבי הקפאין
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {creed.map(({ icon: Icon, title }) => (
              <div key={title} className="flex flex-col gap-3 border-t-2 border-[#c46500]/60 pt-5">
                <Icon size={28} className="text-[#c46500]" strokeWidth={1.6} />
                <span className="text-[#fff9f2] text-[22px] font-['Dialect_PM',sans-serif] font-bold leading-tight">{title}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Shop — מעבדה וחנות של מבינים */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] flex flex-col-reverse lg:flex-row items-stretch">
          <div className="flex-1 px-12 py-14 flex flex-col justify-center">
            <span className="text-[#c46500] text-[18px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.12em] uppercase">
              לא רק מעבדה
            </span>
            <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mt-2 mb-5 leading-[1.15]">
              מעבדת תיקונים וחנות של ׳מבינים׳
            </h2>
            <div className="space-y-4 text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] opacity-72 leading-[1.7]">
              <p>
                אספרסימו היא הרבה מעבר למעבדת תיקונים. תמצאו אצלנו חנות קפה עם מגוון
                רחב של מכונות קפה ידניות, מקצועיות ואוטומטיות, פולי קפה איכותיים,
                אביזרים מפתיעים ומוצרי תחזוקה.
              </p>
              <p>
                בנוסף, אנו מציעים שירותי ליסינג מלאים של מכונות קפה לחברות ולעסקים.
                כל מה שקשור לעולם הקפה נמצא כאן, במקום אחד — בבית של קפה, עמוס באהבה
                אמיתית לקפה ולאנשים ששותים אותו.
              </p>
            </div>
            <a
              href="/v2/category"
              className="self-start mt-7 flex items-center gap-1 bg-[#8B3A00] hover:bg-[#a34500] text-white text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-7 py-3 rounded-lg transition-colors"
            >
              לחנות שלנו <ChevronLeft size={18} />
            </a>
          </div>
          <div className="lg:w-[46%] aspect-[4/3] lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-[#e6dad4]">
            <img src={SHOP_IMG} alt="חנות הקפה של אספרסימו" className="w-full h-full object-cover" />
          </div>
        </section>
      </ScrollReveal>

      {/* Repair options — אצלנו או אצלכם */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] bg-[#f6ede3] px-12 py-16">
          <div className="max-w-[820px] mb-10">
            <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em] mb-3">
              תיקונים אצלנו או אצלכם — כדי שתרגישו בית
            </h2>
            <p className="text-[#522c25] text-[21px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.6]">
              קפה הוא לא מותרות, הוא חלק מהשגרה. עבור רבים, מכונת הקפה היא זו שמניעה
              את היום — ואין תחליף למכונה שעובדת ומכינה בדיוק את הקפה שאתם אוהבים,
              בבית, במשרד או בעסק. לכן בנינו כמה דרכים להחזיר לכם את הקפה במהירות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairOptions.map(({ icon: Icon, badge, title, desc }) => (
              <div key={title} className="bg-[#fff9f2] border border-[#e6dad4] rounded-2xl p-7 flex flex-col hover:border-[#c46500] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f6ede3] flex items-center justify-center">
                    <Icon size={24} className="text-[#c46500]" strokeWidth={1.6} />
                  </div>
                  <span className="bg-[#8B3A00]/10 text-[#8B3A00] text-[13px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.06em] px-2.5 py-1 rounded-full">{badge}</span>
                </div>
                <h3 className="text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] font-bold mb-2">{title}</h3>
                <p className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-65 leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Machines we revive */}
      <ScrollReveal>
        <section dir="rtl" className="border-b border-[#e6dad4] px-12 py-16">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <h2 className="text-[#522c25] text-[44px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">
              המכונות שאנחנו יודעים להחיות
            </h2>
            <p className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] opacity-55 mt-2">
              מהמותגים המובילים בעולם — ועוד הרבה. לא רואים את המכונה שלכם? דברו איתנו.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-[#e6dad4] border border-[#e6dad4] rounded-2xl overflow-hidden max-w-[1100px] mx-auto">
            {machineLogos.map((logo) => (
              <div key={logo.alt} className="bg-[#fff9f2] h-[110px] flex items-center justify-center p-5 group hover:bg-[#f6ede3] transition-colors">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[64px] max-w-full object-contain grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA band */}
      <ScrollReveal>
        <section dir="rtl" className="px-12 py-16 bg-[#522c25] text-center">
          <h2 className="text-[#fff9f2] text-[48px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.03em]">
            המכונה שלכם צריכה טיפול?
          </h2>
          <p className="text-[#fff9f2] text-[22px] font-['Dialect_PM',sans-serif] opacity-70 mt-3">
            ספרו לנו מה קורה — ונחזיר לכם את הקפה מהר, מקצועי ובמחיר הוגן.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://wa.me/9720585335035"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c46500] hover:bg-[#a34500] text-white text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg transition-colors"
            >
              דברו עם מומחה
            </a>
            <a
              href="/v2/category"
              className="border-2 border-[#fff9f2]/40 text-[#fff9f2] text-[22px] font-['Dialect_PM',sans-serif] tracking-[0.04em] px-8 py-3.5 rounded-lg hover:bg-[#fff9f2]/10 transition-colors"
            >
              עיון בכל המכונות
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-7 text-[#fff9f2] text-[18px] font-['Dialect_PM',sans-serif] opacity-60">
            <MapPin size={18} className="text-[#c46500]" /> אור יהודה · בתיאום מראש
          </div>
        </section>
      </ScrollReveal>

      <Footer />
      <FloatingActions />
    </div>
  );
}
