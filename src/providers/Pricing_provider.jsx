import { createContext, useContext, useState } from "react";

export const PricingContext = createContext();
export const PricingProvier = ({ children }) => {
    const [selection, setSelection] = useState({
        production: false,
        mixing: false,
        mastering: false,
    });
    const [price, setPrice] = useState(1);
    const [trackNumber, setTrackNumber] = useState(1);
    const [stemNumber, setStemNumber] = useState(1);
    const [isFinished, setIsFinished] = useState(false);
    const [provisionalPrice, setProvisionalPrice] = useState(1);
    return (
        <PricingContext.Provider value={{ selection, setSelection, price, setPrice, trackNumber, setTrackNumber, stemNumber, setStemNumber, isFinished, setIsFinished, provisionalPrice, setProvisionalPrice }}>
            {children}
        </PricingContext.Provider>
    );
};
export const usePricing = () => useContext(PricingContext);