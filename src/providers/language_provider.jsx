import { createContext, useContext, useEffect, useState } from "react";
import spanish from "../assets/content/spanish";
import english from "../assets/content/english";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("spanish");
    const [content, setContent] = useState(spanish);
    const selectLanguage = (language) => setSelectedLanguage(language);
    const switchLanguage = () => {
        setSelectedLanguage((prev) => (prev === "spanish" ? "english" : "spanish"));
    };
    useEffect(() => {
        setContent(selectedLanguage === "spanish" ? spanish : english);
    }, [selectedLanguage]);

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, selectLanguage, switchLanguage, content }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);