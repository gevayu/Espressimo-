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

export function ProductPageV2() {
  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <StickyBar />
      <ProductHero onScrolledPast={() => {}} />
      <HighlightsStrip />
      <FeaturesSection />
      <FeatureBlocks />
      <RecipesSection />
      <StoryBlock />
      <AccessoriesSection />
      <ProductAccordion />
      <ProductReviewsV2 />
      <RelatedProductsV2 />
    </div>
  );
}
