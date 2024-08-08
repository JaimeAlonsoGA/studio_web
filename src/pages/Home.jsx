
import { CheckCards } from "../components/panels/CheckCards";
import { Header } from "../components/panels/Header";
import { PricingChart } from "../components/panels/Pricing";
import { ReviewsPanel } from "../components/panels/Reviews";
import { ServiceCards } from "../components/panels/ServiceCards";
import { StudioCards } from "../components/panels/StudioCards";
import { WorksPanel } from "../components/panels/Works";
import { useLanguage } from "../providers/language_provider";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Studio />
            <Works />
            <Reviews />
            <Pricing />
            <Contact />
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
};

const Services = () => {
    return (
        <div id="services">
            <ServiceCards />
            <div className="flex justify-center items-center">
                <CheckCards />
            </div>
        </div>
    )
};

const Studio = () => {
    return (
        <div id="studio">
            <StudioCards />
        </div>
    )
};

const Works = () => {
    return (
        <div className="mt-12" id="works">
            <WorksPanel />
        </div>
    )
};

const Pricing = () => {
    return (
        <div className="mt-12" id="pricing">
            <PricingChart />
        </div>
    )
};

const Reviews = () => {
    return (
        <div className="mt-12" id="reviews">
            <ReviewsPanel />
        </div>
    )
};

const Contact = () => {
    return (
        <div className="mt-12">
            <h1>Contact</h1>
        </div>
    )
};


export default Home;