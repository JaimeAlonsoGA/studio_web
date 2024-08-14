
import { CheckCards } from "../components/panels/CheckCards";
import { ReviewsPanel } from "../components/panels/Reviews";
import { StudioCards } from "../components/panels/StudioCards";
import { WorksPanel } from "../components/panels/Works";
import ServicePanel from "../components/panels/ServiceCards";
import { Container } from "../components/Container";
import { HeroPanel } from "../components/panels/Hero";

const Home = () => {
    return (
        <div>
            <Container>
                <Hero />
                <Services />
                <Works />
                <Reviews />
            </Container>
        </div>
    )
};

const Hero = () => (
    <div>
        <HeroPanel />
    </div>
);

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

export default Home;