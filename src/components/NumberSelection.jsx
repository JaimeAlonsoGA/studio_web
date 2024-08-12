import { Radio } from 'antd';

export const NumberSelection = ({ price, value, setter, options }) => {
    const placementChange = (e) => {
        setter(e.target.value);
        price();
    };

    return (
        <div className="flex mx-12 py-4">
            <Radio.Group
                options={options}
                onChange={placementChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
            />
        </div>
    );
};