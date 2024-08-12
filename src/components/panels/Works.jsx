import { ButtonCustom } from "../Button";
import { works } from "../../assets/content/works";
import { useLanguage } from "../../providers/language_provider";
import { Button, Card } from "antd";

export const WorksPanel = () => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-col text-center">
            <div className="flex grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 justify-around mx-6 p-2">
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
        <div className="flex flex-col items-center p-2">
            {cover === "cta" ? <Cta /> : <img src={cover} alt={name} className="w-72" />}
            {/* <h1 className="text-xl font-bold">{name}</h1>
            <h2>{artist}</h2> */}

        </div>
    );
};

const Cta = () => {
    return (
        <div className="w-72 h-72 border-dashed border-2 flex flex-col items-center justify-center">
            <h1 className="text-gray-400">AQUÍ VAS TÚ</h1>
            <Button type="primary" className="font-bold p-4">
                Contactar
            </Button>
        </div>
    );
};