import imgMerch1 from "../../imports/HomePage-2/64dffa7fc8cc5b3f272c4c358faadd3931d3d495.png";
import imgMerch2 from "../../imports/HomePage-2/f460558eb17aaf3fc1936524bbccd5bc29f8efb1.png";
import imgAmps1 from "../../imports/HomePage-2/37fb740f49dcb4afc818db1cc591507754818856.png";
import imgAmps2 from "../../imports/HomePage-2/9171c4be1c4c681b854d73b98c56859186ea98a0.png";
import imgBird from "../../imports/HomePage-2/bb06ee88e46a343d27aafa7a3d8340b8b6d8d280.png";
import imgSwan from "../../imports/HomePage-2/d372d458024a9886f29761745926afbffd647ec6.png";

export function MerchSection() {
  return (
    <section className="bg-[#fff9f2] border-b border-[#e6dad4]" dir="rtl">
      <div className="flex">
        {/* Left merch items */}
        <div className="flex-1 flex">
          <div className="flex-1 border-l border-[#e6dad4] p-9">
            <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-6">
              <img src={imgMerch1} alt="מרצ'נדייז" className="w-full h-full object-cover" />
            </div>
            <a href="#" className="text-[#522c25] text-[19.2px] leading-[20px] tracking-[-2px] font-['Inter',sans-serif]">
              חולצת אספרסימו
            </a>
            <p className="text-[#522c25] text-[13.7px] tracking-[-0.274px] font-['Roboto_Mono',monospace] mt-1">$32.00</p>
          </div>
          <div className="flex-1 border-l border-[#e6dad4] p-9">
            <div className="rounded-lg overflow-hidden bg-[#f6ede3] aspect-square mb-6">
              <img src={imgMerch2} alt="מרצ'נדייז" className="w-full h-full object-cover" />
            </div>
            <a href="#" className="text-[#522c25] text-[19.2px] leading-[20px] tracking-[-2px] font-['Inter',sans-serif]">
              ספל קרמיקה
            </a>
            <p className="text-[#522c25] text-[13.7px] tracking-[-0.274px] font-['Roboto_Mono',monospace] mt-1">$18.00</p>
          </div>
        </div>

        {/* Right illustrations */}
        <div className="w-[400px] p-9 flex flex-col items-center justify-center gap-4 relative">
          <img src={imgBird} alt="" className="absolute top-8 left-8 w-[80px]" />
          <img src={imgAmps1} alt="" className="w-[200px]" />
          <img src={imgAmps2} alt="" className="w-[200px]" />
          <img src={imgSwan} alt="" className="absolute bottom-8 right-8 w-[80px]" />
        </div>
      </div>
    </section>
  );
}
