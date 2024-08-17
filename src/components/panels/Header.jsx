import { Title } from "../Title";
import icon from '../../assets/images/icon.png';
import { useLanguage } from "../../providers/language_provider";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

    return (
        <div className="flex flex-col items-center mjustify-center fixed w-full z-50">
            <div className="flex items-center w-full shadow-md justify-between px-4 bg-white">
                <Title />
                <HeaderButtons setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
                <HeaderButtonsMobile isMobileHeaderOpen={isMobileHeaderOpen} setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            </div>
            {isMobileHeaderOpen && <HeaderMobile setIsMobileHeaderOpen={setIsMobileHeaderOpen} />}
        </div>
    )
};

const HeaderButtons = ({ setIsMobileHeaderOpen }) => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-row items-center hidden lg:flex">
            <HeaderButton text={content.headerButton1} to="/" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton6} to="/services" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton3} to="/catalogue" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton2} to="/pricing" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton4} to="/reviews" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton5} to="/contact" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <img src={icon} alt="icon" className="w-14" />
        </div>
    )
};

const HeaderButton = ({ text, targetId, setIsMobileHeaderOpen, to }) => {
    const navigate = useNavigate();
    //     const handleClick = () => {
    //         const targetElement = document.getElementById(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({ behavior: 'smooth' });
    //             console.log('scrolling to', targetId);
    //             setIsMobileHeaderOpen(false);
    //         }
    // };
    return (
        <div>
            <button onClick={() => {
                navigate(to);
            }}
                className="font-bold font-caprice font-black text-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-500 hover:bg-clip-text hover:text-transparent px-4">{text}</button>
        </div>
    )
};

const HeaderButtonsMobile = ({ isMobileHeaderOpen, setIsMobileHeaderOpen }) => {

    return (
        <button onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)} className="lg:hidden mx-2">
            <LuMenu size={32} />
        </button>
    )
};

const HeaderMobile = ({ setIsMobileHeaderOpen }) => {
    const { content } = useLanguage();
    return (
        <div className="mt-1 flex flex-col items-center rounded-lg lg:hidden bg-white">
            <HeaderButton text={content.headerButton1} to="/" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton6} to="/services" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton3} to="/catalogue" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton2} to="/pricing" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton4} to="/reviews" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
            <HeaderButton text={content.headerButton5} to="/contact" setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
        </div>
    )
};

//bg-gradient-to-r from-black via-40% via-green-700 to-gray-600 bg-clip-text text-transparent