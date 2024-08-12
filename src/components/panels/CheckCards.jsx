import { IoWifi } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa6";
import { useLanguage } from "../../providers/language_provider";
import { Card, Divider } from "antd";


export const CheckCards = () => {
    const { content } = useLanguage();
    return (
        <div className="bg-gray-300 w-full md:py-16 items-center justify-center">
            <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-around">
                {checkCardList.map((card, index) => (
                    <CheckCard {...card} title={content[card.title]} subtitle={card.subtitle} index={index} />
                ))}
            </div>
        </div>
    )
};

const CheckCard = ({ Icon, title, subtitle }) => {
    return (
        <Card hoverable>
            <div className="flex flex-col items-center py-6 md:py-0">
                <div className="flex flex-col items-center py-6 md:py-0">
                    <Icon size={46} />
                    <div className="flex flex-row items-center mt-4">
                        <h1 className="text-xl font-bold px-4">{title}</h1>
                        <FaCheckDouble color="green" size={22} />
                    </div>
                </div>
                <Divider style={{ borderColor: '#7cb305' }}>
                    <h1 className="text-gray-500">
                        {subtitle}
                    </h1>
                </Divider>
            </div>
        </Card>
    )
};

const checkCardList = [
    {
        Icon: IoWifi,
        title: "checkCard1",
        subtitle: "100%"
    },
    {
        Icon: BsSoundwave,
        title: "checkCard2",
        subtitle: "certificado"
    },
    {
        Icon: CiBoxList,
        title: "checkCard3",
        subtitle: "∞"
    },
    {
        Icon: FaRecordVinyl,
        title: "checkCard4",
        subtitle: "ferreo"
    }
]