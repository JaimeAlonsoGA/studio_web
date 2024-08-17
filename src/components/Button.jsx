import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ButtonCustom = ({ text, button_style, to, ...props }) => {
    const nav = useNavigate();
    return (
        <button {...props} onClick={() => nav(to)} className={`${button_style} mx-auto w-fit border-2 border-white rounded-lg p-2 px-3 text-blue-500 hover:bg-gray-800 ${props.className}`}>{text}</button>
    )
}

export const ButtonDefault = ({ text, button_style, to, ...props }) => {
    const nav = useNavigate();
    return (
        <Button type="primary" onClick={() => nav(to)} {...props} className={`${button_style} ${props.className}`}>{text}</Button>
    );
};
