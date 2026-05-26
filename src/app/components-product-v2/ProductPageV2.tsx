import { useParams } from "react-router";
import { Header } from "../components-v2/Header";
import { Footer } from "../components-v2/Footer";
import { StickyBar } from "./StickyBar";
import { ProductHero } from "./ProductHero";
import { HighlightsStrip } from "./HighlightsStrip";
import { FeaturesSection } from "./FeaturesSection";
import { FeatureBlocks } from "./FeatureBlocks";
import { RecipesSection } from "./RecipesSection";
import { StoryBlock } from "./StoryBlock";
import { AccessoriesSection } from "./AccessoriesSection";
import { ProductAccordion } from "./ProductAccordion";
import { ProductReviewsV2 } from "./ProductReviewsV2";
import { RelatedProductsV2 } from "./RelatedProductsV2";
import { MessageCircle, Accessibility } from "lucide-react";
import { getProduct } from "../data/products";

export function ProductPageV2() {
  const { productId } = useParams();
  const product = getProduct(productId);

  return (
    <div className="min-h-screen bg-[#fff9f2]" key={product.id}>
      <Header />
      <StickyBar product={product} />
      <ProductHero onScrolledPast={() => {}} product={product} />
      <FeaturesSection product={product} />
      <FeatureBlocks product={product} />
      <RecipesSection product={product} />
      <StoryBlock product={product} />
      <AccessoriesSection product={product} />
      <ProductAccordion product={product} />
      <ProductReviewsV2 product={product} />
      <RelatedProductsV2 product={product} />
      <HighlightsStrip product={product} />
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
