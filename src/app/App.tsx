import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { InstagramStrip } from "./components/InstagramStrip";
import { FeaturedCoffee } from "./components/FeaturedCoffee";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { CoffeeShopSection } from "./components/CoffeeShopSection";
import { MerchSection } from "./components/MerchSection";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fff9f2] font-['Heebo',sans-serif]">
      <Header />
      <HeroSection />
      <IntroSection />
      <FeaturedCoffee />
      <SubscriptionSection />
      <CoffeeShopSection />
      <MerchSection />
      <BlogSection />
      <InstagramStrip />
      <Footer />
    </div>
  );
}
