import { FooterPanel } from "./panels/Footer";
import { Header } from "./panels/Header";

export const Container = ({ children }) => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex-grow">
                {children}
            </div>
            <FooterPanel />
        </div>
    );
}