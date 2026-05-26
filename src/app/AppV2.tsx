import { Header } from "./components-v2/Header";
import { HeroSection } from "./components-v2/HeroSection";
import { IntroSection } from "./components-v2/IntroSection";
import { FeaturedCoffee } from "./components-v2/FeaturedCoffee";
import { BrandsStrip } from "./components-v2/BrandsStrip";
import { PromoSection } from "./components-v2/PromoSection";
import { SubscriptionSection } from "./components-v2/SubscriptionSection";
import { CoffeeShopSection } from "./components-v2/CoffeeShopSection";
import { MerchSection } from "./components-v2/MerchSection";
import { BlogSection } from "./components-v2/BlogSection";
import { InstagramStrip } from "./components-v2/InstagramStrip";
import { Footer } from "./components-v2/Footer";
import { MessageCircle, Accessibility } from "lucide-react";

export default function AppV2() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fff9f2] font-['Dialect_PM',sans-serif]">
      <Header />
      <HeroSection />
      <IntroSection />
      <BrandsStrip />
      <FeaturedCoffee />
      <PromoSection />
      <SubscriptionSection />
      <CoffeeShopSection />
      <MerchSection />
      <BlogSection />
      <InstagramStrip />
      <Footer />

      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/9720585335035"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צור קשר בוואטסאפ"
        className="fixed bottom-[124px] right-[64px] z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>

      {/* Accessibility — bottom left */}
      <button
        aria-label="הצהרת נגישות"
        className="fixed bottom-[124px] left-[64px] z-50 w-14 h-14 rounded-full bg-[#522c25] flex items-center justify-center shadow-lg hover:bg-[#8B3A00] hover:scale-110 transition-all"
      >
        <Accessibility size={26} className="text-white" />
      </button>
    </div>
  );
}
