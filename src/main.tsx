import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AppV2 from "./app/AppV2.tsx";
import ProductPage from "./app/ProductPage.tsx";
import { ProductPageV2 } from "./app/components-product-v2/ProductPageV2.tsx";
import { CategoryPageV2 } from "./app/components-category-v2/CategoryPageV2.tsx";
import { ArticlePageV2 } from "./app/components-article-v2/ArticlePageV2.tsx";
import { AboutPageV2 } from "./app/components-about-v2/AboutPageV2.tsx";
import { CheckoutPageV2 } from "./app/components-checkout-v2/CheckoutPageV2.tsx";
import { NotFoundV2 } from "./app/components-v2/NotFoundV2.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/v2" element={<AppV2 />} />
      <Route path="/v2/product" element={<ProductPage />} />
      <Route path="/v2/productv2" element={<ProductPageV2 />} />
      <Route path="/v2/productv2/:productId" element={<ProductPageV2 />} />
      <Route path="/v2/category" element={<CategoryPageV2 />} />
      <Route path="/v2/article" element={<ArticlePageV2 />} />
      <Route path="/v2/article/:slug" element={<ArticlePageV2 />} />
      <Route path="/v2/about" element={<AboutPageV2 />} />
      <Route path="/v2/checkout" element={<CheckoutPageV2 />} />
      <Route path="*" element={<NotFoundV2 />} />
    </Routes>
  </BrowserRouter>
);
  