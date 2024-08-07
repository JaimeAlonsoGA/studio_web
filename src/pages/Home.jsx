import { CheckCards } from "../components/CheckCards";
import { Header } from "../components/Header";
import { StudioCards } from "../components/StudioCards";
import { useLanguage } from "../providers/language_provider";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Studio />
        </div>
    )
};

const Hero = () => {
    const { content } = useLanguage();

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-alegreya">{content.heroTitle}</h1>
            <h1>{content.heroSubtitle}</h1>
        </div>
    )
}

const Services = () => {
    return (
        <div className="mt-64" id="services">
            <h1>Services</h1>
            <div className="flex justify-center items-center">
                <CheckCards />
            </div>
        </div>
    )
};

const Studio = () => {
    return (
        <div className="mt-64" id="studio">
            <h1>Studio</h1>
            <StudioCards />
        </div>
    )
};


export default Home;