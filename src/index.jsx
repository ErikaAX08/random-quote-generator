import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Random from "./components/Random";
import ScrollToTop from "./components/ScrollToTop";
import QuoteLayout from "./layout/QuoteLayout";
import QuotesLayout from "./layout/QuotesLayout";

import "./styles/Global.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <Random />
      <Routes>
        <Route path="/" element={<QuoteLayout />} />
        <Route path="author/*" element={<QuotesLayout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
