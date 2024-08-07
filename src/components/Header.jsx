import { Title } from "./Title";
import icon from '../assets/images/icon.png';
import { useLanguage } from "../providers/language_provider";

export const Header = () => {
    return (
        <div className="flex items-center justify-center mx-auto">
            <div className="flex items-center mt-4 border-2 w-11/12 h-20 rounded-md drop-shadow-md justify-between">
                <Title />
                <HeaderButtons />
            </div>
        </div>
    )
};

const HeaderButtons = () => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-row items-center">
            <HeaderButton text={content.headerButton1} targetId="services" />
            <HeaderButton text={content.headerButton2} targetId="studio" />
            <HeaderButton text={content.headerButton3} targetId="works" />
            <HeaderButton text={content.headerButton4} targetId="contact" />
            <img src={icon} alt="icon" className="w-16" />
        </div>
    )
};

const HeaderButton = ({ text, targetId }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            console.log('scrolling to', targetId);
        }
    };
    return (
        <div>
            <button onClick={handleClick} className="font-alegreya text-2xl hover:text-gray-500 px-4">{text}</button>
        </div>
    )
};

