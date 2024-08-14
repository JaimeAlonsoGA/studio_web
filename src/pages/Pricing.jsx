import { Container } from "../components/Container";
import { PricingTable } from "../components/PricingTable";
import { useLanguage } from "../providers/language_provider";


export const PricingPanel = () => {
    const { content } = useLanguage();
    return (
        <Container>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-32 text-6xl font-alegreya mb-12">{content.pricing}</h1>
                <PricingTable />
            </div>
        </Container>
    )
};