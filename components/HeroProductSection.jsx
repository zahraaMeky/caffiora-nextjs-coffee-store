import { Button } from '@/components/ui/button'
import images from '@/constants/images'
import { PackageSearch, ShoppingBasket, Flame,Sunrise } from 'lucide-react'
import Image from 'next/image'

/**
 * FeatureHeroSection Component
 * Hero section showcasing Caffiora's exclusive coffee blend with CTA buttons
 */
const HeroProductSection = () => {
  return (
    <section 
      className='max-container padding-container py-8 lg:py-0 bg-[rgba(249,245,241,0.9)] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center'
      aria-labelledby="hero-heading"
    >
      {/* Text Content */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-0 order-2 lg:order-1">
        {/* Exclusive Blend Badge */}
        <div 
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full"
          role="banner"
          aria-label="Special feature badge"
        >
          <Sunrise className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A5633] shrink-0" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold text-[#7A5633]">
           Morning Comfort Roast
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-heading"
          className='relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-tight sm:leading-tight tracking-tight'
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
             Morning Starts
          </span>
          <span className="block bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 bg-clip-text text-transparent">
            With Caffiora's
          </span>
        </h1>

        {/* Description */}
        <p className='text-sm sm:text-base md:text-lg text-muted leading-relaxed max-w-xl'>
          Caffiora brings you handcrafted coffee made from the finest single-origin beans.
          Each roast is crafted in small batches for deeper aroma and richer flavor.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto'>
          <Button
             variant="outline"
            size="lg"
            className="
                  w-full sm:w-auto
                  h-11 sm:h-12 md:h-13 lg:h-14
                  text-sm sm:text-base md:text-lg
                  px-5 sm:px-6 md:px-8 lg:px-10
                  bg-transparent border-2 border-[#7A5633]
                  text-[#7A5633] font-bold
                  hover:bg-[#7A5633] hover:text-white
                  shadow-md hover:shadow-lg
                  hover:scale-[1.02] sm:hover:scale-105 active:scale-95
                  transition-all duration-300
                  rounded-lg
                  flex items-center justify-center
                "
          >
            <PackageSearch className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="whitespace-nowrap">Explore More</span>
          </Button>

          <Button
            size="lg"
            className="
                  w-full sm:w-auto
                  h-11 sm:h-12 md:h-13 lg:h-14
                  text-sm sm:text-base md:text-lg
                  px-5 sm:px-6 md:px-8 lg:px-10
                  bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90
                  hover:from-[#ffbf00]/90 hover:to-[#ffbf00]
                  text-[#7A5633] font-bold
                  shadow-lg hover:shadow-xl
                  hover:scale-[1.02] sm:hover:scale-105 active:scale-95
                  transition-all duration-300
                  border-2 border-[#ffbf00]
                  rounded-lg
                  flex items-center justify-center
                "
          >
            <ShoppingBasket className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="whitespace-nowrap">Shop Now</span>
          </Button>
        </div>
      </div>

      {/* Image Container */}
      <div 
       className="relative flex items-center justify-center w-full h-[280px] xs:h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[550px] 2xl:h-[600px] order-1 lg:order-2"
        role="img"
        aria-label="Featured Caffiora coffee product"
      >
        {/* Main Coffee Image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
          <Image 
            src={images.featurebg} 
            alt='Premium Caffiora coffee blend in elegant packaging' 
            width={595}
            height={676}
            className="w-auto h-full max-h-full max-w-full object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroProductSection