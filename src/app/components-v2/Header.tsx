import { useState } from "react";
import { ChevronDown } from "lucide-react";
import imgLogo from "../../imports/HomePage-2/fb863a6f83f0deff3e89866fe19b2a6231928be4.png";
const imgMachine1 = "https://espressimo.co.il/wp-content/uploads/2024/12/מכונת-קפה-אוטומטית-יורה-JURA-E8-דור-3.jpg";
const imgMachine2 = "https://espressimo.co.il/wp-content/uploads/2021/03/מכונת-אספרסו-לה-מרזוקו-לינאה-מיני-אדום-La-Marzocco-Linea-Mini.jpg";
const imgMachine3 = "https://espressimo.co.il/wp-content/uploads/2025/02/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%A7%D7%A4%D7%94-%D7%99%D7%93%D7%A0%D7%99%D7%AA-ECM-Synchronika-II.jpg";

const brandGroups = [
  {
    label: "מכונות אוטומטיות",
    brands: [
      { name: "מכונות קפה Jura", tag: "הנמכרת ביותר" },
      { name: "מכונות קפה Kalerm", tag: "" },
      { name: "מכונות קפה DR COFFEE", tag: "" },
    ],
  },
  {
    label: "מכונות ידניות",
    brands: [
      { name: "מכונות קפה La Marzocco", tag: "פרמיום" },
      { name: "מכונות קפה ECM", tag: "" },
      { name: "מכונות קפה Quick Mill", tag: "" },
      { name: "מכונות קפה Stone", tag: "" },
    ],
  },
];

const featured = [
  { src: imgMachine1, label: "Jura E8 דור 3", sub: "מכונת קפה אוטומטית", price: "ש"ח 7,499" },
  { src: imgMachine2, label: "La Marzocco Linea", sub: "מכונת קפה ידנית", price: "ש"ח 9,900" },
  { src: imgMachine3, label: "ECM Synchronika", sub: "מכונת קפה ידנית", price: "ש"ח 12,900" },
];

const navLink = "px-3 py-2 text-[#522c25] text-[22px] tracking-[0.7px] uppercase font-['Dialect_PM',sans-serif]";
const separator = <span className="text-[#522c25] opacity-30">|</span>;

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-center h-[68px]">
        {/* Logo */}
        <div className="flex items-center px-6 border-l border-[#e6dad4] h-full">
          <img src={imgLogo} alt="אספרסימו" className="h-11 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center border-l border-[#e6dad4] h-full px-4 relative">
          <a href="#" className={navLink}>עלינו</a>
          {separator}
          <a href="#" className={navLink}>המעבדה</a>
          {separator}

          {/* Mega menu */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className={`flex items-center gap-1 ${navLink} tracking-[0.07em]`}>
              מכונות קפה אוטומטיות
              <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            {megaOpen && (
              <div
                className="absolute top-full right-0 bg-[#fff9f2] border border-[#e6dad4] shadow-2xl z-50"
                dir="rtl"
                style={{ width: "1100px" }}
              >
                {/* Top accent bar */}
                <div className="h-[3px] w-full" style={{ background: "linear-gradient(to left, #A35200, #FFB84D)" }} />

                <div className="flex">
                  {/* Brand columns */}
                  <div className="flex-1 p-10 flex gap-12">
                    {brandGroups.map((group) => (
                      <div key={group.label} className="flex-1">
                        <p className="text-[#522c25] text-[13px] tracking-[0.15em] uppercase font-['Dialect_PM',sans-serif] opacity-40 mb-5 border-b border-[#e6dad4] pb-3">
                          {group.label}
                        </p>
                        <ul className="space-y-1">
                          {group.brands.map((brand) => (
                            <li key={brand.name}>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2.5 text-[#522c25] text-[22px] font-['Dialect_PM',sans-serif] hover:text-[#8B3A00] hover:bg-[#f6ede3] rounded transition-colors group"
                              >
                                <span>{brand.name}</span>
                                {brand.tag && (
                                  <span className="text-[12px] bg-[#c46500]/15 text-[#c46500] px-2.5 py-0.5 rounded-full font-['Dialect_PM',sans-serif] opacity-0 group-hover:opacity-100 transition-opacity">
                                    {brand.tag}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-[#e6dad4] my-6" />

                  {/* Featured products */}
                  <div className="w-[360px] p-8 bg-[#f6ede3] flex flex-col gap-2">
                    <p className="text-[#522c25] text-[13px] tracking-[0.15em] uppercase font-['Dialect_PM',sans-serif] opacity-40 mb-3">
                      מומלצים עכשיו
                    </p>
                    {featured.map((item) => (
                      <a key={item.label} href="#" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-[#ede0d4] transition-colors">
                        <div className="w-[88px] h-[88px] rounded-xl overflow-hidden bg-white shrink-0">
                          <img
                            src={item.src}
                            alt={item.label}
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors leading-tight">
                            {item.label}
                          </p>
                          <p className="text-[#522c25] text-[16px] font-['Dialect_PM',sans-serif] opacity-55 mt-1">
                            {item.sub}
                          </p>
                          <p className="text-[#c46500] text-[19px] font-['Dialect_PM',sans-serif] font-bold mt-1">
                            {item.price}
                          </p>
                        </div>
                      </a>
                    ))}

                    {/* CTA */}
                    <a
                      href="#"
                      className="mt-4 block text-center bg-[#8B3A00] text-white text-[20px] font-['Dialect_PM',sans-serif] tracking-[0.05em] py-3 rounded-lg hover:bg-[#a34500] transition-colors"
                    >
                      לכל המכונות ←
                    </a>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="border-t border-[#e6dad4] px-10 py-4 flex items-center gap-6 bg-[#fdf6ee]">
                  <span className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-50">
                    לא בטוחים איזו מכונה מתאימה לכם?
                  </span>
                  <a href="#" className="text-[#8B3A00] text-[18px] font-['Dialect_PM',sans-serif] font-bold underline underline-offset-2 hover:opacity-80">
                    דברו עם המומחה שלנו ←
                  </a>
                </div>
              </div>
            )}
          </div>

          {separator}
          <a href="#" className={`flex items-center gap-1 ${navLink}`}>מכונות קפה ידניות <ChevronDown size={10} /></a>
          {separator}
          <a href="#" className={navLink}>מטחנות קפה</a>
          {separator}
          <a href="#" className={navLink}>טרייד אין</a>
          {separator}
          <a href="#" className={navLink}>אביזרים</a>
          {separator}
          <a href="#" className={navLink}>תחזוקת מכונות</a>
          {separator}
          <a href="#" className={navLink}>סינון מים</a>
          {separator}
          <a href="#" className={navLink}>צור קשר</a>
        </nav>

        {/* Search */}
        <div className="flex-1 flex items-center border-l border-[#e6dad4] h-full px-4">
          <span className="text-[#522c25] text-[22px] tracking-[0.7px] uppercase font-['Dialect_PM',sans-serif] opacity-60">חיפוש</span>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center border-l border-[#e6dad4] h-full px-6 gap-6">
          <button className="flex items-center gap-1.5 text-[#522c25] text-[22px] tracking-[0.07em] uppercase font-['Dialect_PM',sans-serif]">
            חשבון <ChevronDown size={10} />
          </button>
          <a href="#" className="flex items-center gap-1.5 text-[#522c25] text-[22px] tracking-[0.7px] uppercase font-['Dialect_PM',sans-serif]">
            עגלה <span className="w-px h-3 bg-[rgba(82,44,37,0.3)]" /> 0
          </a>
        </div>
      </div>
    </header>
  );
}
