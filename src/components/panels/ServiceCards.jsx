import { Button } from 'antd';
import { useLanguage } from '../../providers/language_provider';
import monitor from '../../assets/images/monitor.png';
import sonarworks from '../../assets/images/sonarworks.png';

const ServicePanel = () => {
    const { content } = useLanguage();

    return (
        <div className="flex flex-col items-center">
            <div className="my-32 w-full my-2">
                <ServiceCardLeft text={content.serviceContent1} />
            </div>
            <div className="mb-32 w-full flex justify-end my-2">
                <ServiceCardRight text={content.serviceContent2} />
            </div>
            <div className="mb-12 w-full flex justify-start my-2">
                <ServiceCardLeft text={content.serviceContent3} />
            </div>
        </div>
    );
};

export const ServiceCardLeft = ({ text }) => (
    <div className='px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-around text-white'>
        <div className='flex flex-col'>
            <p className='text-gray-400'>PRODUCCIÓN</p>
            <h1 className='text-4xl font-bold py-2'>{text}</h1>
            <h2 className='py-2'>Explora sonidos con la producción musical avanzada que ofrece El Boske y todos sus servicios.</h2>
            <div className='py-2'>
                <Button type="primary" target="_blank" className='font-bold'>
                    Explorar
                </Button>
            </div>
        </div>
        <img src={monitor} alt="avatar" className='w-full lg:w-auto max-w-lg' />
    </div>
);

const ServiceCardRight = ({ text }) => (
    <div className='px-32 flex flex-row items-center justify-around text-white'>
        <img src={sonarworks} alt="avatar" className="w-1/3" />
        <div className='flex flex-col items-end justify-end'>
            <p className='text-gray-400'>SONIDO</p>
            <h1 className='text-4xl font-bold py-2'>{text}</h1>
            <h2 className='py-2'>Explora sonidos con la producción musical avanzada que ofrece El Boske y todos sus servicios.</h2>
            <div className='py-2'>
                <Button type="primary" target="_blank" className='font-bold'>
                    Contactar
                </Button>
            </div>
        </div>
    </div>
);

export default ServicePanel;

