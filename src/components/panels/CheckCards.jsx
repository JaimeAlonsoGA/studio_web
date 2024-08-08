import { FaWifi } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa6";
import { useLanguage } from "../../providers/language_provider";


export const CheckCards = () => {
    const { content } = useLanguage();
    return (
        <div className="w-full bg-gray-50 md:py-24 mt-24 items-center justify-center">
            <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-around">
                {checkCardList.map((card, index) => (
                    <CheckCard {...card} title={content[card.title]} index={index} />
                ))}
            </div>
        </div>
    )
};

const CheckCard = ({ Icon, title }) => {
    return (
        <div className="flex flex-col items-center py-6 md:py-0">
            <Icon size={46} />
            <div className="flex flex-row items-center mt-4">
                <h1 className="text-2xl font-bold font-alegreya px-4">{title}</h1>
                <FaCheckDouble color="green" size={22} />
            </div>
        </div>
    )
};

const checkCardList = [
    {
        Icon: FaWifi,
        title: "checkCard1",
    },
    {
        Icon: BsSoundwave,
        title: "checkCard2",
    },
    {
        Icon: CiBoxList,
        title: "checkCard3",
    },
    {
        Icon: FaRecordVinyl,
        title: "checkCard4",
    }
]