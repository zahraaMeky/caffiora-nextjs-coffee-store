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
      className='max-container padding-container bg-[rgba(249,245,241,0.9)] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'
      aria-labelledby="hero-heading"
    >
      {/* Text Content */}
      <div className='space-y-4 md:space-y-6 flex flex-col justify-center items-start px-6'>
        {/* Exclusive Blend Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full"
          role="banner"
          aria-label="Special feature badge"
        >
          <Sunrise className="w-4 h-4 text-[#7A5633] shrink-0" aria-hidden="true" />
          <span className="text-sm font-semibold text-[#7A5633]">
           Morning Comfort Roast
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-heading"
          className='relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-tight tracking-tight'
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
             Morning Starts
          </span>
          <span className="block bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 bg-clip-text text-transparent">
            With Caffiora's
          </span>
        </h1>

        {/* Description */}
        <p className='paragraphText max-w-xl'>
          Caffiora brings you handcrafted coffee made from the finest single-origin beans.
          Each roast is crafted in small batches for deeper aroma and richer flavor.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-wrap gap-4 md:gap-6 pt-2'>
          <Button
            variant="outline"
            size="lg"
            className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-transparent border-2 border-[#7A5633] text-[#7A5633] font-bold hover:bg-[#7A5633] hover:text-white shadow-md hover:shadow-lg hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg"
            aria-label="Explore more about our coffee collection"
          >
            <PackageSearch className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Explore More</span>
          </Button>

          <Button
            size="lg"
            className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
            aria-label="Shop now for Caffiora coffee"
          >
            <ShoppingBasket className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Shop Now</span>
          </Button>
        </div>
      </div>

      {/* Image Container */}
      <div 
        className='relative flex items-center justify-center w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]'
        role="img"
        aria-label="Featured Caffiora coffee product"
      >
        {/* Main Coffee Image */}
        <div className='relative z-10 w-full h-full flex items-center justify-center'>
          <Image 
            src={images.featurebg} 
            alt='Premium Caffiora coffee blend in elegant packaging' 
            fill
            className='object-contain drop-shadow-2xl' 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroProductSection