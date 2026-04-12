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

export default function AppV2() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fff9f2] font-['Heebo',sans-serif]">
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
    </div>
  );
}
