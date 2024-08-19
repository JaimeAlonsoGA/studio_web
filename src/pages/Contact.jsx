import { InfoCircleOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Spin, Tooltip } from 'antd';
import { useLanguage } from '../providers/language_provider';
import { Container } from '../components/Container';
import { ButtonDefault } from '../components/Button';
import sendEmail from '../providers/emailJS';
import { EmailSuccess } from '../components/Succesfully';
import { usePricing } from '../providers/Pricing_provider';
import { useState } from 'react';

export const ContactPanel = () => {
    const { content } = useLanguage();
    const { isFinished, setIsFinished } = usePricing();

    return (
        <Container>
            <div>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-40% from-black to-gray-500">
                    {/* <h1 className="mt-32 text-6xl font-alegreya text-white">{content.contact}</h1> */}
                    {!isFinished && <ContactStep setIsFinished={setIsFinished} isFinished={isFinished} />}
                    {isFinished && <SuccessStep />}
                </div>
            </div>
        </Container>
    );
};

const ContactStep = ({ setIsFinished, isFinished }) => (
    <div className='px-32 py-12 rounded-lg bg-white flex flex-col items-center w-full max-w-4xl'>
        <ContactForm setIsFinished={setIsFinished} isFinished={isFinished} />
        {/* <div>
            <ContactButtonCard text='+34 684332575' />
            <ContactButtonCard text='elboskestudio@gmail.com' />
        </div> */}
    </div>
);

const SuccessStep = () => (
    <div className='px-32 mt-10 py-12 rounded-lg bg-white flex flex-col items-center w-full max-w-4xl'>
        <EmailSuccess />
    </div>
)

const validateMessages = {
    required: 'Es obligatorio completar este campo',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const ContactForm = ({ setIsFinished, isFinished }) => {
    const [loading, setLoading] = useState(false);
    const submit = (e) => {
        {
            setLoading(true); sendEmail(e).then(_ => {
                setLoading(false);
                setIsFinished(true);
            }
            )
        }
    }
    
    const { content } = useLanguage();
    return (
        <div className='min-w-64 w-full max-w-4xl mt-12'>
            <Form
                name="contact"
                onFinish={submit}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name="to_name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        placeholder="Nombre"
                        prefix={
                            <UserOutlined
                                style={{
                                    color: 'rgba(0,0,0,.25)',
                                }}
                            />
                        }
                        suffix={
                            <Tooltip title="Como quieres que te llamemos">
                                <InfoCircleOutlined
                                    style={{
                                        color: 'rgba(0,0,0,.45)',
                                    }}
                                />
                            </Tooltip>
                        }
                    />
                </Form.Item>
                <Form.Item
                    name='email'
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input
                        placeholder="Email"
                        prefix={
                            <MailOutlined
                                style={{
                                    color: 'rgba(0,0,0,.25)',
                                }}
                            />
                        }
                    />
                </Form.Item>
                <Form.Item name='project'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input.TextArea
                        placeholder='¡Explícanos tu proyecto!' />
                </Form.Item>
                <div className='flex justify-center'>
                    <Form.Item
                    >
                        {!loading && <ButtonDefault htmlType="submit" text={content.toContact} />}
                        {loading && <Spin />}
                    </Form.Item>
                </div>
            </Form>
        </div >
    );
};

const ContactButtonCard = ({ text }) => (
    <ButtonDefault text={text} button_style={"mx-12"} type="default" />
)