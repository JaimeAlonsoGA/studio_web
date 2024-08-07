import o from '../assets/images/logo.png'

export const Title = () => {
    return (
        <div className='flex flex-row'>
            <h1 className="font-alegreya text-6xl">El B</h1>
            <img src={o} alt="logo" className='w-10 h-10 mt-4' />
            <h1 className="font-alegreya text-6xl">ske</h1>
        </div>
    )
}