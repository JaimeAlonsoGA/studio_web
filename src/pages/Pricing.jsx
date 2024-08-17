import { Container } from "../components/Container";
import { PricingTable } from "../components/PricingTable";
import { useLanguage } from "../providers/language_provider";


export const PricingPanel = () => {
    const { content } = useLanguage();
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-40% from-black to-gray-500 pb-32">
                <PricingTable />
            </div>
        </Container>
    )
};