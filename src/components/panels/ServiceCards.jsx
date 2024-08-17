import { useLanguage } from '../../providers/language_provider';
import altavozReves from '../../assets/images/altavozReves2.webp';
import mezcla from '../../assets/images/mezclaRev.webp';
import instrus from '../../assets/images/instrus2.webp';
import { ButtonDefault } from '../Button';
import { motion } from "framer-motion"

const ServicePanel = () => {
    const { content } = useLanguage();

    return (
        <div className="flex flex-col items-center">
            <div className="my-32 w-full my-2">
                <ServiceCardLeft text={content.serviceContent1} section={content.serviceSection1} img={altavozReves} buttonText={content.sectionButton1} subText={content.sectionSubText1} to="/pricing" />
            </div>
            <div className="mb-32 w-full flex justify-end my-2">
                <ServiceCardRight text={content.serviceContent2} section={content.serviceSection2} img={mezcla} buttonText={content.sectionButton2} subText={content.sectionSubText2} to="/services" />
            </div>
            <div className="mb-12 w-full flex justify-start my-2">
                <ServiceCardLeft text={content.serviceContent3} section={content.serviceSection3} img={instrus} buttonText={content.sectionButton3} subText={content.sectionSubText3} to="catalogue" />
            </div>
        </div>
    );
};

export const ServiceCardLeft = ({ text, img, subText, buttonText, section, to, borderRadius }) => (
    <div className='w-full px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-around text-white'>
        <div className='w-full md:w-2/3 md:mr-4 flex flex-col'>
            <p className='pl-2 font-bold font-bold bg-gradient-to-r from-blue-600 via-40% via-green-400 to-70% to-yellow-500 text-zinc-800'>{section}</p>
            <h1 className='text-4xl font-bold py-2'>{text}</h1>
            <h2 className='py-2'>{subText}</h2>
            <div className='py-2'>
                <ButtonDefault text={buttonText} to={to} />
            </div>
        </div>
        <img
            style={{
                borderRadius: borderRadius,
            }}
            src={img} alt="avatar" className='mt-4 md:mt-0 w-full lg:w-auto max-w-lg' />
    </div>
);

const ServiceCardRight = ({ text, img, subText, buttonText, section, to }) => (
    <div className='px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-around text-white'>
        <img src={img} alt="avatar" className="w-full lg:w-auto max-w-lg" />
        <div className='w-full mt-4 md:mt-0 md:w-2/3 md:ml-4 flex flex-col text-right justify-end'>
            <p className='pr-2 font-bold font-bold bg-gradient-to-r from-yellow-500 via-40% via-green-400 to-70% to-blue-600 text-zinc-800'>{section}</p>
            <h1 className='text-4xl font-bold py-2'>{text}</h1>
            <h2 className='py-2'>{subText}</h2>
            <div className='py-2'>
                <ButtonDefault text={buttonText} to={to} />
            </div>
        </div>
    </div>
);

export default ServicePanel;
