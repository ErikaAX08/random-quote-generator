import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import ScrollToTop from "./components/ScrollToTop";
import Random from "./components/Random";
import QuoteLayout from "./layout/QuoteLayout";
import QuotesLayout from "./layout/QuotesLayout";
import Footer from "./components/Footer";

import "./styles/Global.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Random />
        <Routes>
          <Route path="/" element={<QuoteLayout />} />
          <Route path="/author/:name" element={<QuotesLayout />} />
          <Route path="*" element={<QuoteLayout />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  </>
);
