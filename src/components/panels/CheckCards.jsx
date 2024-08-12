import { IoWifi } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FaRecordVinyl } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa6";
import { useLanguage } from "../../providers/language_provider";
import { Badge, Card, Divider } from "antd";
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

export const CheckCards = () => {
    const { content } = useLanguage();
    return (
        <div className="w-full md:py-16 items-center justify-center">
            <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-around">
                {checkCardList.map((card, index) => (
                    <div className="md:flex-1 p-4 md:p-16">
                    <CheckCard {...card} title={content[card.title]} subtitle={card.subtitle} index={index} />
                    </div>
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
                    <div className="flex flex-row text-center mt-4">
                        {/* <SmileTwoTone /> */}
                        <h1 className="ml-2 text-lg font-bold px-4">{title}</h1>
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                        {/* <Badge status="success" /> */}
                    </div>
                </div>
                <Divider style={{ borderColor: 'gray' }}>
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
        subtitle: "mutuo"
    }
]