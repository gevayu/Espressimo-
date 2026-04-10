import { Search, ChevronDown, ShoppingCart, User } from "lucide-react";
import imgLogo from "../../imports/HomePage-2/fb863a6f83f0deff3e89866fe19b2a6231928be4.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex items-center h-[68px]">
        {/* Logo */}
        <div className="flex items-center px-6 border-l border-[#e6dad4] h-full">
          <img src={imgLogo} alt="אספרסימו" className="h-7 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center border-l border-[#e6dad4] h-full px-4">
          <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-[#522c25] text-[12.5px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">
            חנות <ChevronDown size={10} />
          </a>
          <a href="#" className="px-3 py-2 text-[#522c25] text-[12.5px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">אודות</a>
          <a href="#" className="px-3 py-2 text-[#522c25] text-[12.5px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">סיטונאי</a>
          <a href="#" className="px-3 py-2 text-[#522c25] text-[12.5px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">לוח קהילה</a>
          <a href="#" className="px-3 py-2 text-[#522c25] text-[12.5px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">צור קשר</a>
        </nav>

        {/* Search */}
        <div className="flex-1 flex items-center border-l border-[#e6dad4] h-full px-4">
          <div className="flex items-center w-full">
            <span className="text-[#522c25] text-[12.9px] tracking-[0.7px] uppercase font-['Inter',sans-serif] opacity-60">חיפוש</span>
          </div>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center border-l border-[#e6dad4] h-full px-6 gap-6">
          <button className="flex items-center gap-1.5 text-[#522c25] text-[12px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">
            חשבון <ChevronDown size={10} />
          </button>
          <a href="#" className="flex items-center gap-1.5 text-[#522c25] text-[13px] tracking-[0.7px] uppercase font-['Inter',sans-serif]">
            עגלה <span className="w-px h-3 bg-[rgba(82,44,37,0.3)]" /> 0
          </a>
        </div>
      </div>
    </header>
  );
}
