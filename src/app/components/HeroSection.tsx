import imgHero from "../../imports/HomePage-2/cad2bc5d0fa327ce749e88df3bdc57cd9a4f6413.png";
import imgLogo from "../../imports/HomePage-2/43b62430074079a9654dbf1140aa0ddcf45b556e.png";

export function HeroSection() {
  return (
    <section className="bg-[#febf6f] p-[15px]">
      <div className="relative rounded-[22px] overflow-hidden w-full aspect-[1875/960]">
        <img src={imgHero} alt="בריסטה" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-[38px] right-[37px]">
          <img src={imgLogo} alt="אספרסימו" className="h-[70px] w-auto" />
        </div>
      </div>
    </section>
  );
}
