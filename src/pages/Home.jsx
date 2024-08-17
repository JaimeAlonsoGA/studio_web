
import { CheckCards } from "../components/panels/CheckCards";
import { ReviewsPanel } from "../components/panels/Reviews";
import { StudioCards } from "../components/panels/StudioCards";
import { WorksPanel } from "../components/panels/Works";
import ServicePanel from "../components/panels/ServiceCards";
import { Container } from "../components/Container";
import { HeroPanel } from "../components/panels/Hero";
import { tempWorks } from "../assets/content/works";
import { ButtonCustom } from "../components/Button";
import { useLanguage } from "../providers/language_provider";
import { tempReviews } from "../assets/content/reviews";
import { ColorDiv } from "../components/ColorDiv";

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
        <div className="bg-gradient-to-b from-black from-70% via-gray-500 via-90% to-gray-200" id="services">
            <ServicePanel />
            <div className="flex justify-center items-center">
                <CheckCards />
            </div>
        </div>
    )
};

const Works = () => {
    const { content } = useLanguage();
    return (
        <div className="pb-32 bg-gradient-to-b from-gray-200 via-20% via-gray-500 to-black flex flex-col text-center" id="works">
            <WorksPanel works={tempWorks} />
            <ButtonCustom text={content.seeMore} button_style={"mt-4"} to={"/catalogue"}/>
            {/* <ColorDiv size={"w-4/5"} color={"bg-gradient-to-r from-blue-600 to-red-500"} /> */}
        </div>
    )
};

const Reviews = () => {
    const { content } = useLanguage();
    return (
        <div className="pb-32 bg-black flex flex-col text-center" id="reviews">
            <ReviewsPanel reviews={tempReviews} />
            <ButtonCustom text={content.seeMoreReviews} button_style={"mt-4"} to={"/reviews"} />
        </div>
    )
};

export default Home;