export const ButtonCustom = ({ text, button_style, action }) => {
    return (
        <div>
            <button className={`${button_style} border-2 rounded-2xl p-3 hover:bg-gray-100`} onClick={action}>{text}</button>
        </div>
    );
}