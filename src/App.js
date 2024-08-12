import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { LanguageProvider } from "./providers/language_provider";
import { PricingProvier } from "./providers/Pricing_provider";

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
    </Routes>
  );
};

export default App;
