import { useLanguage } from "../../providers/language_provider";
import { ButtonCustom } from "../Button";
import { reviews } from "../../assets/content/reviews";
import Star from "../Stars";

export const ReviewsPanel = () => {
    const { content } = useLanguage();
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-12">
                {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                ))}
            </div>
            <ButtonCustom text={content.writeReview} button_style={"mt-4"} />
            <ButtonCustom text={content.seeMoreReviews} button_style={"mt-4"} />
        </div>
    );
};

const Review = ({ name, rol, stars, review, work }) => {
    return (
        <div className="border-4 rounded-md p-4 min-h-72">
            <div className="flex flex-row text-center w-full h-1/3">
                <div className="w-2/3">
                    <h1 className="font-bold">{name}</h1>
                    <h2>{rol}</h2>
                </div>
                <div className="ml-auto">
                    <img src={work} alt={name} className="w-24 border-2 border-yellow-400 rounded-xl    " />
                </div>
            </div>
            <div className="flex flex-row items-center mt-8 h-1/3">
                <p className="text-justify px-2">{review}</p>
            </div>
            <div className="flex justify-center mt-4">
                <Star starRate={stars} />
            </div>
        </div>
    );
};
