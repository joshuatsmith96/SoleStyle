//Images
import HeroImage from '../assets/hero-image.jpg'
import { Link } from 'react-router'

export default function Hero(){
    return(
        <div className="Hero relative sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <img src={HeroImage} alt="Shoes - Hero Image" className='w-full max-h-[300px] sm:max-h-[100%] object-cover'/>
            <div className="absolute w-full h-full top-0 bg-[#00000077] flex flex-col justify-center items-center">
                <h1 className='text-white text-3xl font-bold lg:text-4xl xl:text-5xl 2xl:text-6xl'>Step Into Style</h1>
                <p className='text-white text-center text-sm lg:text-lg xl:pt-3 xl:text-xl 2xl:text-2xl'>Discover our new collection of premium footwear</p>
                <Link to="/category/new arrivals" className='py-2 px-20 bg-white rounded-full text-sm mt-10 lg:text-lg xl:text-xl xl:py-3 xl:px-20 2xl:text-2xl 2xl:px-30 2xl:py-5'>Shop Now</Link>
            </div>
        </div>
    )
}