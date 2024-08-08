import { ButtonCustom } from "../Button";
import { works } from "../../assets/content/works";
import { useLanguage } from "../../providers/language_provider";

export const WorksPanel = () => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-col text-center">
            <div className="flex grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 justify-around">
                {
                    works.map((work, index) => (
                        <WorkCard {...work} index={index} />
                    ))
                }
            </div>
            <ButtonCustom text={content.seeMore} button_style={"mt-4"} />
        </div>
    );
};

const WorkCard = ({ name, artist, cover }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={cover} alt={name} className="w-72" />
            <h1 className="text-2xl font-alegreya font-medium">{name}</h1>
            <h2 className="font-alegreya">{artist}</h2>
        </div>
    );
};