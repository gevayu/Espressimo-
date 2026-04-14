import { Header } from "./components-v2/Header";
import { Footer } from "./components-v2/Footer";
import { ProductGallery } from "./components-product/ProductGallery";
import { ProductInfo } from "./components-product/ProductInfo";
import { ProductSpecs } from "./components-product/ProductSpecs";
import { ProductReviews } from "./components-product/ProductReviews";
import { RelatedProducts } from "./components-product/RelatedProducts";

export default function ProductPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fff9f2] font-['Dialect_PM',sans-serif]">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="border-b border-[#e6dad4] px-10 py-3 flex items-center gap-2 text-[18px] font-['Dialect_PM',sans-serif] text-[#522c25]">
          <a href="/v2" className="opacity-50 hover:opacity-100 transition-opacity">דף הבית</a>
          <span className="opacity-30">›</span>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">מכונות קפה אוטומטיות</a>
          <span className="opacity-30">›</span>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Jura</a>
          <span className="opacity-30">›</span>
          <span className="font-bold">JURA Z10</span>
        </div>

        {/* Main product section */}
        <div className="flex items-start border-b border-[#e6dad4]">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductSpecs />
        <ProductReviews />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}
