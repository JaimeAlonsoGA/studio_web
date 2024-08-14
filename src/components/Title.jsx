import o from '../assets/images/logo.webp'

export const Title = () => {
    return (
        <button className='flex flex-row font-bold'>
            <h1 className="font-caprice md:text-4xl text-4xl bg-gradient-to-r from-black via-green-900 to-gray-600 bg-clip-text text-transparent">El B</h1>
            <img src={o} alt="logo" className='w-6 h-6 md:w-6 md:h-6 mt-3 md:mt-3' />
            <h1 className="font-caprice md:text-4xl text-4xl bg-gradient-to-r from-black via-green-900 to-gray-600 bg-clip-text text-transparent">ske</h1>
        </button>
    )
}