import { InfoCircleOutlined, UserOutlined, ControlOutlined } from '@ant-design/icons';
import { Flex, Form, Input, Rate, Spin, Tooltip } from 'antd';
import { useLanguage } from '../providers/language_provider';
import { Container } from '../components/Container';
import { ButtonDefault } from '../components/Button';
import { ReviewSuccess } from '../components/Succesfully';
import { usePricing } from '../providers/Pricing_provider';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import sendEmailReview from '../providers/emailReviewJS';

export const WriteReview = () => {
    const { content } = useLanguage();
    const { reviewFinished, setReviewFinished } = usePricing();
    const { postId } = useParams();

    return (
        <Container>
            <div>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-40% from-black to-gray-500">
                    {!reviewFinished && <WriteStep setReviewFinished={setReviewFinished} postId={postId} />}
                    {reviewFinished && <SuccessStep />}
                </div>
            </div>
        </Container>
    );
};

const WriteStep = ({ setReviewFinished, postId }) => (
    <div className='px-32 mt-14 py-12 rounded-lg bg-white flex flex-col items-center w-full max-w-4xl'>
        <WriteForm setReviewFinished={setReviewFinished} postId={postId} />
    </div>
);

const SuccessStep = () => (
    <div className='px-32 mt-10 py-12 rounded-lg bg-white flex flex-col items-center w-full max-w-4xl'>
        <ReviewSuccess />
    </div>
);

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

const WriteForm = ({ setReviewFinished, postId }) => {
    const images = require.context('../assets/images/works', false, /\.(png|jpe?g|svg)$/);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(1);
    const submit = (e) => {
        {
            setLoading(true); sendEmailReview(e).then(_ => {
                setLoading(false);
                setReviewFinished(true);
            }
            )
            console.log(e)
        }
    }

    const getImageByPostId = (postId) => {
        try {
            return images(`./${postId}.jpg`);
        } catch (err) {
            console.error(`Image not found: ${postId}`);
            return null;
        }
    };
    const { content } = useLanguage();
    const imageSrc = getImageByPostId(postId);

    return (
        <div className='min-w-64 w-full max-w-4xl'>
            <Form
                name="review-form"
                onFinish={submit}
                validateMessages={validateMessages}
            >
                <div className='flex mx-auto w-fit'>
                    <img src={imageSrc} alt={postId} className='w-28' />
                </div>
                <Form.Item name="postId" initialValue={postId}>
                </Form.Item>
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
                            <Tooltip title="¿Quién escribe la reseña?">
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
                    name='role'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        placeholder="¿Cúal es tu rol? (compositor, productor, músico . . .)"
                        prefix={
                            <ControlOutlined
                                style={{
                                    color: 'rgba(0,0,0,.25)',
                                }}
                            />
                        }
                    />
                </Form.Item>
                <Form.Item name='review'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input.TextArea
                        placeholder='Escribe aquí tu reseña' />
                </Form.Item>
                <Form.Item name='rating'>
                    <StarRate value={rating} onChange={setRating} />
                </Form.Item>
                <div className='flex justify-center'>
                    <Form.Item
                    >
                        {!loading && <ButtonDefault htmlType="submit" text={"Terminar"} />}
                        {loading && <Spin />}
                    </Form.Item>
                </div>
            </Form>
        </div >
    );
};

const desc = ['mala', 'mejorable', 'buena', 'genial', 'maravillosa'];
const StarRate = ({ value, onChange }) => {
    return (
        <Flex vertical className='w-fit mx-auto items-center'>
            <h1 className='text-gray-400'>¿Cúal ha sido tu experiencia?</h1>
            <Rate tooltips={desc} onChange={onChange} value={value} />
        </Flex>
    );
};