import React from 'react'
import Image from 'next/image'
import { images, featuredProductsList } from '@/constants'
import ProductCard from './ProductCard'

export const FeaturedProducts = () => {
  return (
    <section className="max-container padding-container py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      {/* Hero Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
        <div className="space-y-2 md:col-span-1 lg:col-span-1">
          <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight'>Best Seller</h2>
        </div>
        <div className="flex items-center justify-center md:col-span-1 lg:col-span-1 order-3 md:order-2 lg:order-2">
          <Image 
            src={images.yellowarrow} 
            alt="fabulabeans banner" 
            width={300} 
            height={300} 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 scale-x-[-1] transform -rotate-12 object-contain"
            priority
          />
        </div>
        <div className="flex items-center md:col-span-2 lg:col-span-2 order-2 md:order-3 lg:order-3">
          <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-justify">
            Welcome to Caffiora Coffee, where every cup tells a story.{' '}
            Explore our finest selection of freshly roasted coffee beans.{' '}
            Each blend is crafted for rich aroma and unforgettable flavor.{' '}
            Perfect for espresso lovers and smooth brew seekers alike.{' '}
            Taste the passion — discover your favorite cup today!
          </p>
        </div>
        
      </div>

      {/* Featured Products Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {featuredProductsList.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              oldPrice={product.oldprice}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}