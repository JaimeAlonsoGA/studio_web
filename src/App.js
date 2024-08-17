import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { LanguageProvider } from "./providers/language_provider";
import { PricingPanel } from "./pages/Pricing";
import { PricingProvier } from "./providers/Pricing_provider";
import { ContactPanel } from "./pages/Contact";
import { Catalogue } from "./pages/Catalogue";
import { Review } from "./pages/Review";
import { WriteReview } from "./pages/WriteReview";
import { ServicesPage } from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <PricingProvier>
          <AppRoutes />
        </PricingProvier>
      </LanguageProvider>
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/pricing" element={<PricingPanel />} />
      <Route path="/contact" element={<ContactPanel />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews/write/:postId" element={<WriteReview />} />
    </Routes>
  );
};

export default App;
