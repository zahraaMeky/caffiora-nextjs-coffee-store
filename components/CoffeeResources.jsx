import Image from 'next/image'
import images from '@/constants/images'

const CoffeeResources = () => {
  return (
    <section 
      className='relative overflow-hidden py-12 sm:py-16 lg:py-24 max-container padding-container md:px-12 lg:px-20'
      style={{
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,245,241,1) 80%, rgba(255,255,255,1) 100%)'
      }}
      aria-labelledby="caffiora-story-heading"
    >
      {/* Background Image - Responsive positioning */}
      <div className='absolute top-0 left-0 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:left-auto xl:right-0 xl:w-1/2 xl:h-full pointer-events-none'>
        <div className='relative w-full h-full'>
          <Image 
            src={images.coffeeresourcesbg}
            alt="" 
            fill
            className='object-cover object-center xl:object-right'
            priority={false}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Text Content - Responsive positioning */}
      <div className='relative z-10 w-full max-w-full xl:max-w-lg mt-72 sm:mt-96 md:mt-[420px] lg:mt-[520px] xl:mt-0 px-4 sm:px-6 md:px-0'>
        <h3 
          id="caffiora-story-heading"
          className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 leading-tight'
        >
          This is how Caffiora was born…
        </h3>
        
        <p className='paragraphText text-sm sm:text-base md:text-base leading-relaxed'>
          Having experienced the cleanest, purest coffee on a mountainside in Peru, 
          we struggled to find something like it after coming home. 
          Since then, it became our life mission to find the purest, most delicious 
          organic coffee beans on this planet that not only taste good but are good for us. 
          We traveled the world and the seven seas to research and partner with the most 
          treasured, small organic coffee farms to create and share something exceptional; 
          Caffiora Coffee.
        </p>
      </div>
    </section>
  )
}

export default CoffeeResources