import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useLanguage } from '../providers/language_provider';
import { ServiceContent } from './ServicesPricing';
import { NumberSelection } from './NumberSelection';
import { usePricing } from '../providers/Pricing_provider';

const StepSwitch = ({ setActiveKey }) => {
    const { selection, setSelection, setPrice, trackNumber, setTrackNumber, stemNumber, setStemNumber, setIsFinished, provisionalPrice, setProvisionalPrice } = usePricing();
    const { content } = useLanguage();
    const [canBeFinished, setCanBeFinished] = useState(true);

    const getTrackPrice = () => {
        const newPrice = provisionalPrice * trackNumber;
        setProvisionalPrice(newPrice);
        return newPrice;
    };

    const getFinalPrice = () => {
        const newPrice = provisionalPrice * trackNumber;
        setPrice(newPrice);
        return newPrice;
    };

    const handleClick = () => {
        const finalPrice = getFinalPrice();
        message.success(`Presupuesto terminado! ${finalPrice}€`);
        setActiveKey([]);
        setIsFinished(true);
    }

    return (
        <>
            <h1 className='pl-12 text-xl text-left font-bold'>{content.trackNumber}</h1>
            <NumberSelection value={trackNumber} setter={setTrackNumber} price={getTrackPrice} options={tracks} />
            <h1 className='pl-12 text-xl text-left font-bold'>{content.servicesTitle}</h1>
            <ServiceContent question="productionContent1" service="productionContent2" step="production" current={0} setProvisionalPrice={setProvisionalPrice} selection={selection} setSelection={setSelection} setCanBeFinished={setCanBeFinished} />
            <ServiceContent question="mixingContent1" service="mixingContent2" step="mixing" current={1} setProvisionalPrice={setProvisionalPrice} selection={selection} setSelection={setSelection}  setCanBeFinished={setCanBeFinished} />
            <ServiceContent question="masteringContent1" service="masteringContent2" step="mastering" current={2} setProvisionalPrice={setProvisionalPrice} selection={selection} setSelection={setSelection}  setCanBeFinished={setCanBeFinished} />,
            <h1 className='pl-12 text-xl text-left font-bold'>{content.stemNumber}</h1>
            <NumberSelection value={stemNumber} price={getTrackPrice} setter={setStemNumber} options={stems} />
            <div className='ml-12 mt-8'>
                <Button type="primary" disabled={canBeFinished} onClick={handleClick}>
                    {content.buttonFinish}
                </Button>
            </div>
        </>
    );
};

const tracks = [
    { label: 'Single', value: 1 },
    { label: '3+ Tracks', value: 3 },
    { label: '5+ Tracks', value: 5 },
    { label: '10+ Tracks', value: 10 },
];

const stems = [
    { label: '3+ Stems', value: 1 },
    { label: '20+ Stems', value: 10 },
    { label: '40+ Stems', value: 100 },
    { label: '80+ Stems', value: 1000 },
];

export default StepSwitch;