import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { LanguageProvider } from "./providers/language_provider";
import { PricingPanel } from "./pages/Pricing";
import { PricingProvier } from "./providers/Pricing_provider";
import { ContactPanel } from "./pages/Contact";

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
    </Routes>
  );
};

export default App;
