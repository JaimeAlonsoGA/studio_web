import React, { useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { useLanguage } from '../providers/language_provider';
import StepSwitch from './StepSwitch';
import { usePricing } from '../providers/Pricing_provider';

export const CollapsePricing = () => {
    const { setSelection, setPrice, setTrackNumber, setStemNumber, setProvisionalPrice } = usePricing();
    const { content } = useLanguage();
    const [activeKey, setActiveKey] = useState([]);
    const getItems = (panelStyle) => [
        {
            key: '1',
            label: content.makeYourPricing,
            children: <StepSwitch setActiveKey={setActiveKey} />,
            style: panelStyle,
        }
    ];

    const { token } = theme.useToken();
    const panelStyle = {
        background: 'white',
        borderRadius: token.borderRadiusLG,
        borderWidth: 4,
    };

    const handleCollapseChange = (key) => {
        setActiveKey(key);
        resetPrice();
    };

    const resetPrice = () => {
        setPrice(0);
        setSelection({
            production: false,
            mixing: false,
            mastering: false,
        });
        setProvisionalPrice(0);
        setTrackNumber(1);
        setStemNumber(1);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <Collapse
                bordered={true}
                activeKey={activeKey}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle)}
                onChange={handleCollapseChange}
                className='w-full max-w-4xl text-center mt-12'
            />
        </div>
    );
};


export default Collapse;