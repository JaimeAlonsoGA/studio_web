import acustic from "../../assets/images/acustic.png";
import sonarworks from "../../assets/images/sonarworks.png";
import monitor from "../../assets/images/monitor.png";
import console from "../../assets/images/console.png";
import Marquee from "react-fast-marquee";
import { useLanguage } from "../../providers/language_provider";

export const StudioCards = () => {
    const { content } = useLanguage();

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center py-24">
                <div className="hidden md:flex flex md:w-2/3 items-center">
                    {studioCards.map((card, index) => (
                        <StudioCardImage {...card} index={index} />
                    ))}
                </div>
                <div className="flex flex-col md:w-1/3">
                    <h1 className="text-center font-arial text-6xl font-bold">{content.studioCardTitle}</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-black to-white h-60 text-white items-center">
                <h2 className="text-center text-3xl md:text-4xl font-bold w-1/3 md:w-1/6">{content.studioCardSubtitle}</h2>
                <Marquee autoFill={true} className="flex justify-between">
                    {studioCards.map((card, index) => (
                        <StudioCardText text={content[card.text]} index={index} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

const StudioCardImage = ({ img, text }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={img} alt={text} className="w-96" />
        </div>
    );
};

const StudioCardText = ({ text }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl px-6 italic">{text}</h1>
        </div>
    );
};


const studioCards = [
    {
        img: acustic,
        text: "studioCard1"
    },
    {
        img: monitor,
        text: "studioCard2"
    },
    {
        img: sonarworks,
        text: "studioCard3"
    },
    {
        img: console,
        text: "studioCard4"
    }
]