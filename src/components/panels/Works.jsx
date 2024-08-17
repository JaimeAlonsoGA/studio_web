import { ButtonDefault } from "../Button";
import { useLanguage } from "../../providers/language_provider";
import { useState } from "react";

export const WorksPanel = ({ works }) => {
    return (
        <div className="mt-6 md:mt-0 pb-12 flex flex-col text-center">
            <div className="flex grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 justify-around md:mx-6 p-2">
                {
                    works.map((work, index) => (
                        <WorkCard {...work} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

const WorkCard = ({ name, cover, to, artist }) => {
    return (
        <div className="flex flex-col justify-center items-center p-2">
            {cover === "cta" ? <Cta /> : <WorkCover name={name} to={to} cover={cover} artist={artist} />}
        </div>
    );
};

const WorkCover = ({ name, to, cover, artist }) => {
    const [isHovering, setIsHovering] = useState();
    return (
        <div className="flex flex-col justify-center items-center relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <a target="_blank" href={to} className="z-10 hover:opacity-20">
                <img src={cover} alt={name} className="w-72" />
            </a>
            {isHovering && <TitleAndAuthor name={name} artist={artist} />}
        </div>
    )
};

const TitleAndAuthor = ({ name, artist }) => (
    <div className="flex flex-col items-center justify-center w-full h-full absolute">
        <h1 className="select-none text-white text-xl font-bold" style={{ width: 'fit-content' }}>{name}</h1>
        <h2 className="select-none text-gray-300 font-bold mt-2" style={{ width: 'fit-content' }}>{artist}</h2>
    </div>
);

const Cta = () => {
    const { content } = useLanguage();
    return (
        <div className="w-full max-w-72 h-full border-dashed border-2 flex flex-col items-center justify-center">
            <h1 className="text-gray-400">{content.workCta}</h1>
            <ButtonDefault text={content.toContact} to="/contact" />
        </div>
    );
};