import StepSwitch from "../StepSwitch";

export const PricingChart = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-alegreya">Tabla de Tarifas</h1>
                <h1 className="text-6xl font-alegreya">Calcula un precio orientativo</h1>
            </div>
            <StepSwitch />
        </div>
    )
};