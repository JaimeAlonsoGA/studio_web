import { useNavigate } from 'react-router-dom';
import o from '../assets/images/logo.webp'

export const Title = () => {
    const navigate = useNavigate();
    return (
        <button className='flex flex-row' onClick={() => navigate("/")}>
            <h1 className="font-alegreya md:text-4xl text-4xl">El B</h1>
            <img src={o} alt="logo" className='w-6 h-6 md:w-6 md:h-6 mt-3 md:mt-3' />
            <h1 className="font-alegreya md:text-4xl text-4xl">ske</h1>
        </button>
    )
};

//bg-gradient-to-r from-black via-green-900 to-gray-600 bg-clip-text text-transparent