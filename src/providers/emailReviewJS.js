import emailjs from '@emailjs/browser';

const sendEmailReview = async (form) => {
    console.log(form);       

    await emailjs
        .send('service_zkh8qxk', 'template_ykyrqgw', form, {
            publicKey: 'y0l8xGSladrXZqd2I',
        })
};

export default sendEmailReview;