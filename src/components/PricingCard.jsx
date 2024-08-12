import { Button, Badge } from 'antd';
import { usePricing } from '../providers/Pricing_provider';
import { servicePrice } from './ServicesPricing';

export const PricingCard = () => {
    return (
        <div className='flex items-center justify-center mt-12'>
            <CardContent />
        </div>
    );
};

const CardContent = () => {
    const { selection, price, trackNumber, stemNumber } = usePricing();

    return (
        <Badge.Ribbon text="Descuento" color="green">
            <div className='flex flex-row w-80 h-48 border-2 rounded-xl bg-black text-white'>
                <div className='flex-grow p-2'>
                    <div className='flex flex-row'>
                        <h1 className='text-gray-300 font-medium text-xl'>Presupuesto</h1>
                    </div>
                    <div className='text-gray-200 mt-3 ml-2'>
                        <Service selection={selection} />
                        <h1>{trackNumber}+ Tracks</h1>
                        <h1>{stemNumber}+ Stems</h1>
                        <div className='mt-5 border-2 rounded-xl'>
                            <h1 className='ml-2'>{price} € ∼</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-end p-4'>
                    <h1 className='font-alegreya text-gray-300 font-bold text-2xl'>El Boske</h1>
                    <h2 className='text-gray-500 font-medium mb-2'>Estudio de mezcla</h2>
                    <Button type="primary">
                        Contáctanos
                    </Button>
                </div>
            </div>
        </Badge.Ribbon>
    );
};

const Service = ({ selection }) => {
    return (
        <div className='flex flex-row items-left'>
            {selection.production && servicePrice[0].icon}
            {selection.mixing && servicePrice[1].icon}
            {selection.mastering && servicePrice[2].icon}
        </div>
    );
}
