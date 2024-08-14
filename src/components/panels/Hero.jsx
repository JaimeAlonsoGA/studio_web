import { useEffect, useState } from "react";
import { Button } from "antd";
import { useLanguage } from "../../providers/language_provider";

export const HeroPanel = () => {
    const { content } = useLanguage();
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 500;
            const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="text-white h-screen flex items-center justify-center hero-background">
            <div
                className="flex flex-col bg-gradient-to-b from-transparent to-50% to-black p-12 fixed"
                style={{ opacity }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="tracking-wide mt-4 text-6xl font-bold font-caprice bg-gradient-to-r from-blue-600 via-40% via-green-400 to-70% to-yellow-500 bg-clip-text text-transparent">
                        {content.heroTitle}
                    </h1>
                    <h1 className="font-bold mt-4 text-white text-xl tracking-wide">
                        {content.heroSubtitle}
                    </h1>
                </div>
                <div className="flex items-end justify-end mt-4">
                    <Button type="primary" className="font-bold p-4">
                        {content.toContact}
                    </Button>
                </div>
            </div>
        </div>
    );
};

    //bg-gradient-to-r from-green-400 via-red-500 to-yellow-300