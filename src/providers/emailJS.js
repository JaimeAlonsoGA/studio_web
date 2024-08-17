import emailjs from '@emailjs/browser';

const sendEmail = async (form) => {
    console.log(form);

    await emailjs
        .send('service_zkh8qxk', 'template_y9w8yfr', form, {
            publicKey: 'y0l8xGSladrXZqd2I',
        })
       

    await emailjs
        .send('service_zkh8qxk', 'template_ykyrqgw', form, {
            publicKey: 'y0l8xGSladrXZqd2I',
        })



};

export default sendEmail;
