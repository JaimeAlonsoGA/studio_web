import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./providers/language_provider";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
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
