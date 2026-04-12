const imgShop1 = "/picts/instgram/NIM_9834 1.jpg";
const imgShop2 = "/picts/NIM_0530%201%20(1).jpg";
const imgShop3 = "/picts/NIM_0516%201_1.jpg";
const imgShop4 = "/picts/instgram/NIM_0437 1.jpg";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  cta: string;
  accentColor: string;
}

const services: ServiceCard[] = [
  {
    image: imgShop1,
    title: "שיקום ותיקון מקצועי",
    description:
      "מכונת הקפה שלכם נמצאת בידיים טובות. אנחנו מומחים למכונות קפה מכל הסוגים: ידניות, קלאסיות ואוטומטיות, ומחזירים אותן לביצועים ממש כמו חדשות.",
    cta: "לתיקון מהיר",
    accentColor: "#8B3A00",
  },
  {
    image: imgShop2,
    title: "אביזרים – תוספות שמשדרגות",
    description:
      "פילטרים, מברשות, מוצרי ניקוי, פחי ריקון – כל מה שמכונות קפה ביתיות צריכות כדי שהקפה שלכם יהיה לא פחות ממושלם.",
    cta: "לכל האביזרים",
    accentColor: "#c46500",
  },
  {
    image: imgShop3,
    title: "מטחנות קפה שמבליטות את הטעם",
    description:
      "מטחנות מעולות שמכינות את הקפה בדיוק כמו שרציתם, בכל פעם מחדש.",
    cta: "לבחירת מטחנה",
    accentColor: "#C4956A",
  },
  {
    image: imgShop4,
    title: "מכונות מחודשות",
    description:
      "שיקום ותיקון מקצועי למכונות הקפה האהובות עליכם – אוטומטיות, ידניות וקלאסיות, שמחזיר אותן לחיים ויוצר חוויית קפה מושלמת. העבודה כוללת אחריות מלאה.",
    cta: "לצפייה במלאי",
    accentColor: "#522c25",
  },
];

export function FeaturedCoffee() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="p-9 border-b border-[#e6dad4]">
        <h2 className="text-[53px] leading-[41px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] font-bold">
          <span className="text-[#c46500]">השירותים שלנו</span>
        </h2>
      </div>
      <div className="flex">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex-1 border-r border-[#e6dad4] first:border-r-0 p-9 flex flex-col gap-6"
          >
            <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="text-[#522c25] text-[32px] leading-[36px] font-['Dialect_PM',sans-serif] font-bold tracking-[0.05em] font-bold">
                {service.title}
              </h3>
              <p className="text-[#522c25] text-[25px] leading-[32px] font-['Dialect_PM',sans-serif] opacity-75 flex-1">
                {service.description}
              </p>
              <button
                className="mt-2 px-5 py-2.5 rounded text-[30px] tracking-[0.07em] uppercase font-['Dialect_PM',sans-serif] text-white w-fit"
                style={{ backgroundColor: service.accentColor }}
              >
                {service.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
