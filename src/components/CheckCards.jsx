import { FaWifi } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { useLanguage } from "../providers/language_provider";
import { FaCheckDouble } from "react-icons/fa6";


export const CheckCards = () => {
    return (
        <div>
            <div className="flex flex-row items-center">
                {checkCardList.map((card, index) => (
                    <CheckCard {...card} index={index} />
                ))}
            </div>
        </div>
    )
}

const CheckCard = ({ Icon, size, title }) => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-col items-center">
            <Icon size={size} />
            <h1 className="text-xl font-alegreya mt-4">{content[title]}</h1>
            <FaCheckDouble color="green" />
        </div>
    )
}

const checkCardList = [
    {
        Icon: FaWifi,
        size: 32,
        title: "checkCard1",
    },
    {
        Icon: BsSoundwave,
        size: 32,
        title: "checkCard2",
    },
    {
        Icon: CiBoxList,
        size: 32,
        title: "checkCard3",
    },
    {
        Icon: FaRecordVinyl,
        size: 32,
        title: "checkCard4",
    }
]