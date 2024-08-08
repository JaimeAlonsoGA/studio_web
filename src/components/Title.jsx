import o from '../assets/images/logo.png'

export const Title = () => {
    return (
        <div className='flex flex-row'>
            <h1 className="font-alegreya md:text-6xl text-4xl">El B</h1>
            <img src={o} alt="logo" className='w-6 h-6 md:w-10 md:h-10 mt-3 md:mt-4' />
            <h1 className="font-alegreya md:text-6xl text-4xl">ske</h1>
        </div>
    )
}