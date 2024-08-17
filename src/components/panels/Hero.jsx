import { useEffect, useState } from "react";
import { useLanguage } from "../../providers/language_provider";
import { ButtonDefault } from "../Button";

export const HeroPanel = () => {
    const { content } = useLanguage();
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 300;
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="text-white h-screen flex justify-center md:justify-start items-center hero-background">
            <div
                className={`flex flex-col bg-black p-6 text-center md:text-left md:p-12 fixed w-10/12 md:w-1/3 mt-12 md:ml-12 mb-80 md:mb-24 ${opacity === 0 ? "hidden" : "flex"}`}
                style={{ opacity }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="tracking-wide mt-4 text-3xl md:text-6xl font-bold font-caprice bg-gradient-to-r from-blue-600 via-40% via-green-400 to-70% to-yellow-500 bg-clip-text text-transparent">
                        {content.heroTitle}
                    </h1>
                    <h1 className="text-left font-bold mt-4 text-white text-md md:text-2xl tracking-wide">
                        {content.heroSubtitle}
                    </h1>
                </div>

                <div className="flex items-end justify-end mt-4">
                    <ButtonDefault text={content.toContact} to="/contact" />
                </div>
            </div>
        </div>
    );
};