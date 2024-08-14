import { Button, Collapse, Table } from 'antd';
import { useLanguage } from '../providers/language_provider';

const TagPrice = ({ price }) => (
    <div className='flex justify-center'>
        <div className='text-white w-12 bg-gradient-to-r from-black to-gray-400 border rounded-lg'>
            <h1>{price} €</h1>
        </div>
    </div>
);

const FirstRow = ({ text }) => (
    <div hoverable className='font-bold'>
        <Button type='dashed' className='font-bold'>{text}</Button>
    </div>
);

const RowTitle = ({ text, alt }) => (
    <div>
        <h1 className='font-bold'>{text}</h1>
        <h2 className='text-gray-400'>{alt}</h2>
    </div>
);

const columns = [
    {
        title: <RowTitle alt='*precio por obra (€/obra)' />,
        dataIndex: 'trackNumber',
        key: 'trackNumber',
        render: (text) => <FirstRow text={text} />,
        rowScope: 'row',
        align: 'center',
    },
    {
        title: <RowTitle text='Single' alt='(1 a 2 obras)' />,
        dataIndex: 'single',
        key: 'single',
        align: 'center',
        render: (text) => <RowData text={text} />,
    },
    {
        title: <RowTitle text='EP' alt='(3 a 6 obras)' />,
        dataIndex: 'ep',
        key: 'ep',
        align: 'center',
        render: (text) => <RowData text={text} />,
    },
    {
        title: <RowTitle text='LP' alt='(7 a 12 obras)' />,
        dataIndex: 'lp',
        key: 'lp',
        align: 'center',
        render: (text) => <RowData text={text} />,
    },
];

const data = [
    {
        key: '1',
        trackNumber: "PRODUCCIÓN",
        single: '80 €',
        ep: '60 €',
        lp: '50 €',
    },
    {
        key: '2',
        trackNumber: "MEZCLA",
        single: '80 €',
        ep: '60 €',
        lp: '50 €',
    },
    {
        key: '3',
        trackNumber: "MASTERIZACIÓN",
        single: '20 €',
        ep: '15 €',
        lp: '10 €',
    },
    {
        key: '4',
        trackNumber: "COMPLETO",
        single: <TagPrice price={120} />,
        ep: <TagPrice price={100} />,
        lp: <TagPrice price={90} />,
        align: 'center',
    },
];

const defaultFooter = () => <FooterDropdown />;

const FooterDropdown = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return <Collapse items={items} defaultActiveKey={[]} onChange={onChange} />;
};

const Discounts = () => {
    const { content } = useLanguage();
    return (
        <div className='flex flex-row'>
            <div className='flex-grow text-justify'>
                <h1 className='font-medium'>{content.pricingDiscount}</h1>
                <h1>{content.pricingDiscount1}</h1>
                <h1>{content.pricingDiscount2}</h1>
                <h1>{content.pricingDiscount3}</h1>
            </div>
            <div className='flex justify-end items-center'>
                <Button type='primary'>{content.toContact}</Button>
            </div>
        </div >
    );
}

const items = [
    {
        key: '1',
        label: 'Descuentos',
        children: <Discounts />,
    },
]

export const PricingTable = () => {
    const tableProps = {
        bordered: false,
        loading: false,
        footer: defaultFooter,
    };
    return (
        <div className='w-full max-w-4xl'>
            <Table columns={columns} dataSource={data}
                pagination={false}
                {...tableProps}
            />
        </div>
    );
}

const RowData = ({ text }) => (
    <div className='border-l-2 border-r-2'>
        <h1 className='font-bold font-caprice'>{text}</h1>
    </div>
);
