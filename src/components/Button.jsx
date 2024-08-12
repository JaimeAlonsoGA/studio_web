import { Button } from "antd";

export const ButtonCustom = ({ text, button_style, action }) => {
    return (
        <div>
            <Button type="default" className={`${button_style} border-2 rounded-2xl p-3 hover:bg-gray-100`} onClick={action}>{text}</Button>
        </div>
    );
}