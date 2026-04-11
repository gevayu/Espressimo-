import { useState } from "react";
import { ChevronDown } from "lucide-react";
import imgLogo from "../../imports/HomePage-2/fb863a6f83f0deff3e89866fe19b2a6231928be4.png";
import imgMachine1 from "../../imports/HomePage-2/c4ddfc79e83dc897d83bd6f6b5bd8736e0443c8b.png";
import imgMachine2 from "../../imports/HomePage-2/ff758012fd54baa6da64fa09677021c061155068.png";
import imgMachine3 from "../../imports/HomePage-2/6d9971dbb3c025bd05863240e166f7f9d57783ad.png";

const autoBrands = [
  "מכונות קפה Jura",
  "מכונות קפה Kalerm",
  "מכונות קפה DR COFFEE",
  "מכונות קפה La Marzocco",
  "מכונות קפה ECM",
  "מכונות קפה Quick Mill",
  "מכונות קפה Stone",
];

const megaImages = [
  { src: imgMachine1, label: "Jura E8" },
  { src: imgMachine2, label: "La Marzocco Linea" },
  { src: imgMachine3, label: "ECM Synchronika" },
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
          <img src={imgLogo} alt="אספרסימו" className="h-7 w-auto" />
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
              <div className="absolute top-full right-0 w-[760px] bg-[#fff9f2] border border-[#e6dad4] shadow-2xl z-50 flex" dir="rtl">
                {/* Brands */}
                <div className="flex-1 p-8 border-l border-[#e6dad4]">
                  <p className="text-[#522c25] text-[12px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-40 mb-4">
                    לפי מותג
                  </p>
                  <ul className="space-y-0.5">
                    {autoBrands.map((brand) => (
                      <li key={brand}>
                        <a
                          href="#"
                          className="block px-2 py-2 text-[#522c25] text-[20px] font-['Dialect_PM',sans-serif] hover:text-[#c03001] hover:bg-[#f6ede3] rounded transition-colors"
                        >
                          {brand}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Images */}
                <div className="w-[300px] p-6 flex flex-col gap-4 bg-[#f6ede3]">
                  <p className="text-[#522c25] text-[12px] tracking-[0.12em] uppercase font-['Dialect_PM',sans-serif] opacity-40 mb-1">
                    מומלצים
                  </p>
                  {megaImages.map((img) => (
                    <a key={img.label} href="#" className="group flex items-center gap-3">
                      <div className="w-[72px] h-[72px] rounded-lg overflow-hidden bg-[#f6ede3] shrink-0">
                        <img src={img.src} alt={img.label} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-200" />
                      </div>
                      <span className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] group-hover:text-[#c03001] transition-colors">
                        {img.label}
                      </span>
                    </a>
                  ))}
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
