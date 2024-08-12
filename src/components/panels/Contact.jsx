import { InfoCircleOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Tooltip } from 'antd';

export const ContactPanel = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-alegreya">Contacto</h1>
                <ContactForm />
                <div>
                    <ContactButtonCard text='+34 684332575' />
                    <ContactButtonCard text='elboske@gmail.com' />
                </div>
            </div>
        </div>
    );
};

const onFinish = (values) => {
    console.log(values);
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const ContactForm = () => (
    <div className='w-full max-w-4xl mt-12'>
        <Form
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <Form.Item
                name="nombre"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
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
                        <Tooltip title="Extra information">
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
                name={['user', 'email']}
                rules={[
                    {
                        type: 'email',
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
            <Form.Item
            >
                <Button type="dashed" htmlType="submit">
                    Prespuesto +
                </Button>
            </Form.Item>
            <Form.Item name={['user', 'introduction']}>
                <Input.TextArea
                    placeholder='Explícanos tu proyecto!' />
            </Form.Item>
            <div className='flex justify-center'>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        Contactar
                    </Button>
                </Form.Item>
            </div>
        </Form>
    </div >
);

const ContactButtonCard = ({ text }) => (
    <Button type='default' className='mx-4'>
        {text}
    </Button>
)