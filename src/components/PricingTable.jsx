import { Button, Collapse, Table } from 'antd';
import { useLanguage } from '../providers/language_provider';
import { ButtonDefault } from './Button';
import { useMediaQuery } from 'react-responsive';

const TagPrice = ({ price }) => (
    <div className='flex justify-center'>
        <div className='text-white w-12 bg-gradient-to-r from-black to-gray-400 border rounded-lg'>
            <h1>{price} €</h1>
        </div>
    </div>
);

const FirstRow = ({ text }) => (
    <div hoverable className='font-bold'>
        <ButtonDefault text={text} type="dashed" to={"/services"} />
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
        ep: '80 €',
        lp: '80 €',
    },
    {
        key: '2',
        trackNumber: "MEZCLA",
        single: '80 €',
        ep: '75 €',
        lp: '70 €',
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
        single: <TagPrice price={180} />,
        ep: <TagPrice price={170} />,
        lp: <TagPrice price={160} />,
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
        <div className='flex flex-col md:flex-row'>
            <div className='flex-grow text-justify'>
                <h1 className='font-medium tracking-wide'>{content.pricingDiscount}</h1>
                {content.discounts.map((discount) => <h1 className='py-1 text-gray-600'>• {discount.condition}</h1>)}
            </div>
            <div className='flex justify-end items-center'>
                <ButtonDefault text={content.toContact} />
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
    const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
    const tableProps = {
        bordered: false,
        loading: false,
        footer: defaultFooter,
        size: isSmScreen ? "small" : "middle",
    };
    return (
        <div className='w-full max-w-4xl cursor-default pt-36'>
            <Table columns={columns} dataSource={data}
                pagination={false}
                {...tableProps}
            />
        </div>
    );
}

const RowData = ({ text }) => (
    <div>
        <h1 className='font-bold font-caprice'>{text}</h1>
    </div>
);
