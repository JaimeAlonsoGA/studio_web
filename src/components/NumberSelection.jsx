import { Col, InputNumber, Radio, Row, Slider, Space } from 'antd';

export const NumberSelectionSelect = ({ price, value, setter, options }) => {
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

export const NumberSelectionNumber = ({ price, value, setter }) => {
    // const marks = {
    //     1: {
    //         label: <strong>-0%</strong>,
    //     },
    //     3: {
    //         label: <strong>-20%</strong>,
    //     },
    //     5: {
    //         label: <strong>-30%</strong>,
    //     },
    //     10: {
    //         label: <strong>-40%</strong>,
    //     },
    // };

    return (
        <div className='mx-12 py-4'>
            <Row>
                <Col span={12}>
                    <Slider value={value} step={1} defaultValue={1} min={1} max={15} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={15}
                        style={{
                            margin: '0 16px',
                        }}
                        value={value}
                        onChange={setter}
                    />
                </Col>
            </Row>
        </div>
    );
};
