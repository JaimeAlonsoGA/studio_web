import { Button, Result } from 'antd';
import { ButtonDefault } from './Button';

export const EmailSuccess = () => {
    return (
        <Result
            className='min-h-screen'
            status="success"
            title="¡Hemos recibido tu mensaje!"
            subTitle="Nos pondremos en contacto contigo en menos de 48 horas laborales. Gracias por confiar en El Boske"
            extra={[
                <ButtonDefault text={"Inicio"} button_style="mb-4 md:mb-0" type="primary" to={"/"} />,
                <ButtonDefault text={"Catálogo"} type="default" to={"/catalogue"} />,
            ]}
        />
    );
}

export const ReviewSuccess = () => {
    return (
        <Result className='min-h-screen'
            status="success"
            title="¡Hemos recibido tu reseña!"
            subTitle="Gracias por tomarte el tiempo para redactarla, pronto estará en la web. Esperamos que tu música llegue a aquellos que necesiten oirla."
            extra={[
                <ButtonDefault text={"Inicio"} button_style="mb-4 md:mb-0" type="primary" to={"/"} />,
                <ButtonDefault text={"Catálogo"} type="default" to={"/catalogue"} />,
            ]}
        />
    );
}