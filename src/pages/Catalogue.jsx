import { reviews } from "../assets/content/reviews";
import { works } from "../assets/content/works";
import { Container } from "../components/Container";
import { ReviewsPanel } from "../components/panels/Reviews";
import { WorksPanel } from "../components/panels/Works";
import { useLanguage } from "../providers/language_provider";

export const Catalogue = () => {
    const { content } = useLanguage();
    return (
        <Container>
            <div className="min-h-screen pb-12 pt-32 flex flex-col justify-center bg-gradient-to-b from-40% from-black to-gray-500">
                <WorksPanel works={works} />
            </div>
        </Container>
    );
};