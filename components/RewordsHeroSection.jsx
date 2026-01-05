import Image from 'next/image'
import { Button } from '@/components/ui/button'
import images from '@/constants/images'
import { ShoppingBag,Handbag,Telescope,PackageSearch,ShoppingBasket,ShoppingCart,Bomb, Gift, Sparkles } from 'lucide-react';

const RewardsHeroSection = () => {
  return (
     <div className='max-container padding-container bg-[rgba(249,245,241,0.9)] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
        {/* Text Content */}
        <div className='space-y-4 md:space-y-6 flex flex-col justify-center items-start px-6'>
            {/* New Loyalty Program Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full">
              <Gift className="w-4 h-4 text-[#7A5633]" />
              <span className="text-sm font-semibold text-[#7A5633]">New Loyalty Program</span>
            </div>

            <h1 className='relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-tight tracking-tight'>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
                    Caffiora Rewards 
                </span>
                <span className="block bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 bg-clip-text text-transparent"> Sip, Earn, Enjoy!</span>

            </h1>
            <p className='paragraphText max-w-xl'>
                Make every purchase count with Caffiora  Rewards. Collect points effortlessly and redeem them for delightful discounts and special perks.
            </p>
            <div className='flex flex-wrap gap-4 md:gap-6'>
           
   <Button
            variant="outline"
            size="lg"
            className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-transparent border-2 border-[#7A5633] text-[#7A5633] font-bold hover:bg-[#7A5633] hover:text-white shadow-md hover:shadow-lg hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg"
          >
            <Gift className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap"> Reward More</span>
            </Button>
            <Button
                  size="lg"
                  className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
                >
            <ShoppingBasket className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap"> SHOP NOW</span>
          </Button>
            
          </div>
        </div>

        {/* Image Container */}
        <div className='relative flex items-center justify-center w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]'>
            {/* 2x Points Badge */}
            <div className='absolute top-8 left-4 sm:left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#ffbf00]/20 animate-bounce z-20'>
              <div className='flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-[#ffbf00]' />
                <span className='text-sm font-bold text-[#7A5633]'>2x Points</span>
              </div>
            </div>

            {/* Free Gift Badge */}
            <div className='absolute bottom-12 right-4 sm:right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#ffbf00]/20 animate-pulse z-20'>
              <div className='flex items-center gap-2'>
                <Gift className='w-4 h-4 text-[#7A5633]' />
                <span className='text-sm font-bold text-[#7A5633]'>Free Gift</span>
              </div>
            </div>

            {/* Main Coffee Image */}
            <div className='relative z-10 w-full h-full flex items-center justify-center'>
                <Image 
                    src={images.rewardsbg5} 
                    alt='banner' 
                    width={595} 
                    height={676} 
                    className='w-auto h-full max-h-full object-contain drop-shadow-2xl' 
                    priority
                />
            </div>
        </div>
    </div>
  )
}

export default RewardsHeroSection