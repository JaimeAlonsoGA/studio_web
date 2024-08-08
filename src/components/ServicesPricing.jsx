import { Switch } from "antd";
import { useLanguage } from "../providers/language_provider";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect } from "react";

export const ServiceContent = ({ question, service, step, price, setPrice }) => {
    const { content } = useLanguage();

    const handlePress = (name) => {
        setPrice({ ...price, [name]: !price[name] });
    };

    // useEffect(() => {
    //     console.log(price);
    //     console.log(price[step]);
    // }, [price]);

    return (
        <div className="flex h-24 items-center">
            <h1 className="w-1/3 px-4">{content[question]}</h1>
            <h2 className="text-gray-500 text-center">{content[service]}</h2>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultValue={false}
                value={price[step]}
                className="ml-auto mr-8"
                onClick={() => handlePress(step)}
            />
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

