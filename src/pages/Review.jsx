import { reviews } from "../assets/content/reviews";
import { Container } from "../components/Container";
import { ReviewsPanel } from "../components/panels/Reviews";

export const Review = () => {
    return (
        <Container>
            <div className="min-h-screen pb-12 pt-32 flex flex-col bg-gradient-to-b from-40% from-black to-gray-500">
                <ReviewsPanel reviews={reviews} />
            </div>
        </Container>
    );
};