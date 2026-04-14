import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AppV2 from "./app/AppV2.tsx";
import ProductPage from "./ProductPage.tsx";
import { ProductPageV2 } from "./app/components-product-v2/ProductPageV2.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/v2" element={<AppV2 />} />
      <Route path="/v2/product" element={<ProductPage />} />
      <Route path="/v2/productv2" element={<ProductPageV2 />} />
    </Routes>
  </BrowserRouter>
);
  