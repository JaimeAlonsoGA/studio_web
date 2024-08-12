import { Switch } from "antd";
import { useLanguage } from "../providers/language_provider";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PiFadersBold } from "react-icons/pi";
import { MdSpeakerGroup } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";


export const servicePrice = [
    { service: "production", price: 100, icon: <BiHeadphone size={28} /> },
    { service: "mixing", price: 150, icon: <PiFadersBold size={28} /> },
    { service: "mastering", price: 50, icon: <MdSpeakerGroup size={28} /> },
]

export const ServiceContent = ({ question, service, step, selection, setSelection, current, setProvisionalPrice,  setCanBeFinished }) => {
    const { content } = useLanguage();

    const handleToggle = (name) => {
        setSelection(prevSelection => ({
            ...prevSelection,
            [name]: !prevSelection[name]
        }));
        setProvisionalPrice(prevPrice => {
            if (selection[name]) {
                return prevPrice - servicePrice[current].price;
            } else {
                return prevPrice + servicePrice[current].price;
            }
        });
        console.log(current);
        setCanBeFinished(false);
    };

    return (
        <div className='mx-12 border-4 rounded-lg border-gray-200 my-4'>
            <div className="pl-4 flex h-24 items-center gap-4">
                {servicePrice[current].icon}
                <div className="flex flex-col text-left">
                    <h1 className="font-bold">{content[question]}</h1>
                    <h2 className="text-gray-400">{content[service]}</h2>
                </div>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultValue={false}
                    value={selection[step]}
                    className="ml-auto mr-8"
                    onClick={() => handleToggle(step)}
                />
            </div>
        </div>
    );
};

const Offer = () => {
    return (
        <div>
            <h1>Hay una oferta disponible</h1>
        </div>
    );
};

