import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { useLanguage } from '../providers/language_provider';
import { ServiceContent } from './ServicesPricing';

const StepSwitch = () => {
    const [price, setPrice] = useState({
        production: false,
        mixing: false,
        mastering: false,
    });
    const steps = [
        {
            title: 'production',
            content: <ServiceContent question="productionContent1" service="productionContent2" step="production" price={price} setPrice={setPrice} />,
        },
        {
            title: 'mixing',
            content: <ServiceContent question="mixingContent1" service="mixingContent2" step="mixing" price={price} setPrice={setPrice} />,
        },
        {
            title: 'mastering',
            content: <ServiceContent question="masteringContent1" service="masteringContent2" step="mastering" price={price} setPrice={setPrice} />,
        },
    ];

    const { content } = useLanguage();
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: content[item.title],
        title: content[item.title],
    }));
    const contentStyle = {
        // lineHeight: '260px',
        // color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${token.colorBorder}`,
        marginTop: 12,
    };
    return (
        <>
            <Steps current={current} items={items} className='p-12' />
            <div style={contentStyle} className='mx-12 border-4 border-gray-200'>{steps[current].content}</div>
            <div className='ml-12 mt-12'>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        {content.buttonNext}
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Presupuesto terminado!')}>
                        {content.buttonFinish}
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        {content.buttonPrev}
                    </Button>
                )}
            </div>
        </>
    );
};

export default StepSwitch;