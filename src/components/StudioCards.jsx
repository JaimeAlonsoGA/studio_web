import acustic from "../assets/images/acustic.png";
import sonarworks from "../assets/images/sonarworks.png";
import monitor from "../assets/images/monitor.png";
import console from "../assets/images/console.png";
import { useLanguage } from "../providers/language_provider";

export const StudioCards = () => {
    const { content } = useLanguage();

    return (
        <div>
            <h1>{content.studioCardTitle}</h1>
            {studioCards.map((card, index) => (
                <StudioCard {...card} index={index} />
            ))}
        </div>
    );
};

const StudioCard = ({ img, text }) => {
    const { content } = useLanguage();

    return (
        <div className="flex flex-col items-center">
            <img src={img} alt={text} className="w-32 h-32" />
            <h1 className="text-xl font-alegreya mt-4">{content[text]}</h1>
        </div>
    );
}


const studioCards = [
    {
        img: acustic,
        text: "studioCardText1"
    },
    {
        img: sonarworks,
        text: "studioCardText2"
    },
    {
        img: monitor,
        text: "studioCardText3"
    },
    {
        img: console,
        text: "studioCardText4"
    }
]