import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "../data/products";

type SectionKey = "specs" | "faq" | "documents";

export function ProductAccordion({ product }: { product: Product }) {
  const { specs, faq, documents } = product;
  const [open, setOpen] = useState<SectionKey | null>("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggle = (key: SectionKey) => setOpen(o => o === key ? null : key);

  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      {/* Specs */}
      <div id="specs" className="border-b border-[#e6dad4]">
        <button
          onClick={() => toggle("specs")}
          className="w-full flex items-center justify-between px-12 py-6 hover:bg-[#f6ede3] transition-colors group"
        >
          <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">מפרט טכני</span>
          <ChevronDown
            size={24}
            className={`text-[#522c25] opacity-50 transition-transform duration-300 ${open === "specs" ? "rotate-180" : ""}`}
          />
        </button>
        {open === "specs" && (
          <div className="px-12 pb-10">
            <div className="grid grid-cols-2 gap-0 border border-[#e6dad4] overflow-hidden rounded-xl">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-3.5 border-b border-[#e6dad4] last:border-b-0 ${
                    i % 2 === 0 ? "border-l border-[#e6dad4]" : ""
                  } ${i % 2 === 0 ? "bg-[#f6ede3]/40" : "bg-white"}`}
                >
                  <span className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] opacity-55">{s.label}</span>
                  <span className="text-[#522c25] text-[17px] font-['Dialect_PM',sans-serif] font-bold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div id="faq" className="border-b border-[#e6dad4]">
        <button
          onClick={() => toggle("faq")}
          className="w-full flex items-center justify-between px-12 py-6 hover:bg-[#f6ede3] transition-colors"
        >
          <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">שאלות נפוצות</span>
          <ChevronDown
            size={24}
            className={`text-[#522c25] opacity-50 transition-transform duration-300 ${open === "faq" ? "rotate-180" : ""}`}
          />
        </button>
        {open === "faq" && (
          <div className="px-12 pb-10 flex flex-col gap-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-[#e6dad4] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#f6ede3] transition-colors text-right"
                >
                  <span className="text-[#522c25] text-[19px] font-['Dialect_PM',sans-serif] font-bold">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#522c25] opacity-40 shrink-0 mr-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[#e6dad4]">
                    <p className="text-[#522c25] text-[18px] leading-[30px] font-['Dialect_PM',sans-serif] opacity-70 pt-4">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Documents */}
      <div id="documents">
        <button
          onClick={() => toggle("documents")}
          className="w-full flex items-center justify-between px-12 py-6 hover:bg-[#f6ede3] transition-colors"
        >
          <span className="text-[#522c25] text-[26px] font-['Dialect_PM',sans-serif] font-bold">מסמכים והורדות</span>
          <ChevronDown
            size={24}
            className={`text-[#522c25] opacity-50 transition-transform duration-300 ${open === "documents" ? "rotate-180" : ""}`}
          />
        </button>
        {open === "documents" && (
          <div className="px-12 pb-10 grid grid-cols-2 gap-3">
            {documents.map((doc, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-between border border-[#e6dad4] rounded-xl px-6 py-4 hover:bg-[#f6ede3] hover:border-[#c46500]/40 transition-all group"
              >
                <div>
                  <p className="text-[#522c25] text-[18px] font-['Dialect_PM',sans-serif] font-bold group-hover:text-[#8B3A00] transition-colors">
                    {doc.name}
                  </p>
                  <p className="text-[#522c25] text-[15px] font-['Dialect_PM',sans-serif] opacity-45 mt-0.5">{doc.size}</p>
                </div>
                <span className="text-[#c46500] text-[14px] font-['Dialect_PM',sans-serif] opacity-70 group-hover:opacity-100 transition-opacity">
                  הורדה ↓
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
