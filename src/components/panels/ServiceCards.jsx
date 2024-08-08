import { useLanguage } from "../../providers/language_provider";

export const ServiceCards = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-around">
                {serviceCardList.map((card, index) => (
                    <ServiceCard {...card} index={index} />
                ))}
            </div>
        </div>
    )
};

const ServiceCard = ({ title }) => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-alegreya mt-4">{content[title]}</h1>
            <div className="w-24 h-96 border-2 bg-red rounded-xl">
                
            </div>
        </div>
    )
};

const serviceCardList = [
    {
        title: "serviceCard1",
    },
    {
        title: "serviceCard2",
    },
    {
        title: "serviceCard3",
    },
]