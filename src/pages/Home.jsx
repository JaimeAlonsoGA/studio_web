
import { CheckCards } from "../components/panels/CheckCards";
import { ContactPanel } from "../components/panels/Contact";
import { Header } from "../components/panels/Header";
import { ReviewsPanel } from "../components/panels/Reviews";
import { StudioCards } from "../components/panels/StudioCards";
import { WorksPanel } from "../components/panels/Works";
import { useLanguage } from "../providers/language_provider";
import { CollapsePricing } from "../components/Collapse";
import { PricingCard } from "../components/PricingCard";
import { usePricing } from "../providers/Pricing_provider";
import { Button } from "antd";
import ServicePanel from "../components/panels/ServiceCards";
import { FooterPanel } from "../components/panels/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            {/* <Studio /> */}
            <Works />
            <Reviews />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
};

const Hero = () => {
    const { content } = useLanguage();

    return (
        <div className="text-white font-bold h-screen flex flex-col justify-center hero-background">
            <h1 className="ml-12 mt-64 text-6xl font-alegreya">{content.heroTitle}</h1>
            <h1>{content.heroSubtitle}</h1>
            <div>
                <Button type="primary">
                    {content.contact}
                </Button>
            </div>
        </div>
    )
};

const Services = () => {
    return (
        <div className="bg-gradient-to-b from-black from-70% via-gray-500 via-90%" id="services">
            <ServicePanel />
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
        <div className="" id="works">
            <WorksPanel />
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

const Pricing = () => {
    const { isFinished } = usePricing();
    return (
        <div className="mt-12" id="pricing">
            <CollapsePricing />
            {isFinished && <PricingCard />}
        </div>
    )
};

const Contact = () => {
    return (
        <div className="mt-12">
            <ContactPanel />
        </div>
    )
};

const Footer = () => {
    return (
        <div>
            <FooterPanel />
        </div>
    )
};


export default Home;