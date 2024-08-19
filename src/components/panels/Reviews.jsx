import { useLanguage } from "../../providers/language_provider";
import { ButtonDefault } from "../Button";
import Star from "../Stars";
import { Button } from "antd";

export const ReviewsPanel = ({ reviews }) => {
    const { content } = useLanguage();
    return (
        <div className="pb-12 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-16">
                {reviews.map((review, index) => <Review key={index} {...review} />)}
            </div>
        </div>
    );
};

const Review = ({ name, rol, stars, review, work }) => {
    return (
        <div className="border rounded-md p-4">
            <div className="text-white flex flex-row w-full">
                <div className="text-left w-2/3">
                    <h1 className="font-bold">{name}</h1>
                    <h2>{rol}</h2>
                </div>
                <div className="ml-auto">
                    <img src={work} alt={name} className="w-24 border border-yellow-400 rounded-md" />
                </div>
            </div>
            <div className="text-white flex flex-col items-center mt-4">
                <p className="text-justify px-2">{review}</p>
                <div className="flex justify-center pt-4">
                    <Star starRate={stars} />
                </div>
            </div>
        </div>
    );
};

const Cta = ({ text, writeReviewSubtitle }) => {
    return (
        <div className="flex flex-col border-dashed border-2 rounded-md p-4 min-h-72 items-center justify-center">
            <h1 className="text-gray-400">{writeReviewSubtitle}</h1>
            <ButtonDefault text={text} to={"/reviews/write"} />
        </div>
    )
};

// {reviews.map((review, index) => {
//     if (review.name === "cta") return <Cta key={index} text={content[review.review]} writeReviewSubtitle={content[review.rol]} />;
//     else return <Review key={index} {...review} />
// }
// )}