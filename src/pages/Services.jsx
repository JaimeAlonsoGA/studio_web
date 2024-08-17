import { ButtonDefault } from "../components/Button";
import { Container } from "../components/Container"
import { useLanguage } from "../providers/language_provider"

export const ServicesPage = () => {
    const { content } = useLanguage();
    return (
        <Container>
            <div className="py-24 items-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-40% from-black to-gray-500">
                <div className='text-center md:text-left px-12 md:px-32 py-16 rounded-lg bg-white flex flex-col items-center md:items-start justify-around w-full max-w-4xl'>
                    <div className="flex flex-col md:flex-row">
                        <Service service="serviceCard1" skills={content["production"]} />
                        <Service service="serviceCard2" skills={content["mixing"]} />
                        <Service service="serviceCard3" skills={content["mastering"]} />
                    </div>
                    <h1 className="mt-8 text-gray-600">{content.serviceOther}</h1>
                    <ButtonDefault button_style=" mx-auto w-fit mt-8 md:mt-2"  text={content.toContact} to="/contact"/>
                </div>
            </div>
        </Container>
    );
};

const Service = ({ service, skills }) => {
    const { content } = useLanguage();
    return (
        <div className="my-12 md:my-0 flex flex-col w-full max-w-1/3 ">
            <h1 className="pb-2 tracking-wide font-bold text-gray-800 text-lg">{content[service]}</h1>
            {skills.map((skill, i) => <p className="text-gray-600 py-1" key={i}>• {skill.s}</p>)}
        </div>
    )
};