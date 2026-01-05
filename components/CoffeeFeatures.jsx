import { images } from '@/constants'
import Image from 'next/image'
import { Star } from 'lucide-react'

const CoffeeFeatures = () => {
  return (
    <div className='max-container padding-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 lg:py-12'>
      <div className='grid grid-cols-2 items-center justify-around relative p-4 sm:p-6 md:p-8'>
        <div className='space-y-1 sm:space-y-2 text-center pr-3 sm:pr-4 md:pr-6'>
          <h4 className="text-secondary font-semibold text-xs sm:text-sm md:text-base">Ingredients</h4>
          <h1 className="text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">100% Organic</h1>
        </div>
        <div className='space-y-1 sm:space-y-2 text-center pl-3 sm:pl-4 md:pl-6'>
          <h4 className="text-secondary font-semibold text-xs sm:text-sm md:text-base">Material</h4>
          <h1 className="text-primary text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words">Coffee Beverage</h1>
        </div>
        <div className="absolute h-[20%] w-[1px] sm:w-[2px] bg-primary left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className='flex items-center justify-center h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] p-4 sm:p-6 md:p-8'>
        <div className="flex items-center justify-center w-full h-full">
          <Image 
            src={images.coffeeCup} 
            alt="coffee cup" 
            width={304} 
            height={368} 
            className="w-auto max-h-[180px] xs:max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[368px] object-contain mx-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 w-full">
        {/* Left Section - Reviews */}
        <div className="flex flex-col">
          {/* Stars */}
          <div className="flex gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          
          {/* Text */}
          <div className="flex items-baseline gap-1">
            <span className="text-muted font-medium text-sm sm:text-base md:text-lg">Over</span>
            <span className="text-secondary font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">3,254</span>
          </div>
          <p className="text-primary text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Five Star Reviews</p>
        </div>

        {/* Right Section - Avatars */}
        <div className="flex items-center -space-x-2 sm:-space-x-2.5 md:-space-x-3">
          {/* Avatar 1 - A */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white hover:scale-105 transition-transform">
            A
          </div>
          
           {/* Avatar 2 - R */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full text-white bg-secondary flex items-center justify-center font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white hover:scale-105 transition-transform">
            R
          </div>
          
          {/* Avatar 3 - + */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#A0A0A0] flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white hover:scale-105 transition-transform">
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeFeatures