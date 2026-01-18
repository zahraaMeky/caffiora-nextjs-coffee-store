import {Handbag , PackageSearch,ShoppingBasket,ShoppingCart,Check, Flame , Leaf, MapPin , Coffee, Heart,Sunrise } from 'lucide-react';

import { Button } from '@/components/ui/button';
import images from '@/constants/images'
import Image from 'next/image'; 

const FeatureHeroSection = () => {
  return (
    <section className="max-container padding-container relative py-8 lg:py-0 bg-[rgba(249,245,241,0.9)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 order-2 md:order-1">
          {/* Heading with underline */}
          <div className="space-y-4">
            {/* Badge - Placed before h1 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full">
              <Flame className="w-4 h-4 text-[#7A5633]" />
              <span className="text-sm font-semibold text-[#7A5633]">Exclusive Caffiora Blend</span>
            </div>

            {/* Main Heading */}
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight"
            >
              <span className="inline lg:block text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
                Discover Coffee 
              </span>
              <span className="inline lg:block lg:mt-2 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 bg-clip-text text-transparent">
                That Feels Warm
              </span>
            </h1>

            {/* Description */}
            <p className="paragraphText">
              Caffiora delivers expertly roasted coffee made from carefully selected beans. Each blend is created in small batches to ensure full aroma, smooth texture, and rich balanced flavor.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
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
              <PackageSearch className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
              <ShoppingBasket className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">SHOP NOW</span>
            </Button>
          </div>
        </div>

        {/* Right - Product Image with Badges */}
        <div className="relative flex items-center justify-center min-h-[600px] order-1 md:order-2">
          {/* Background Image - Behind everything */}
          <div 
            className="absolute left-0 top-0 bottom-0 right-0 bg-contain bg-left bg-no-repeat pointer-events-none z-0 opacity-60" 
            style={{ backgroundImage: `url(${images.aboutherobg})` }}
          ></div>
          
          {/* Main Coffee Image */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Image 
              src={images.productherobg} 
              alt="caffiora products" 
              width={600} 
              height={680} 
              className="w-auto h-auto max-h-[600px] md:max-h-[680px] lg:max-h-[720px] object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Product Advantages - Right Side */}
          <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 space-y-6 z-20">
            {/* 1️⃣ Handcrafted in Small Batches */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <Coffee className="w-8 h-8 text-[#7A5633]" />
              </div>
              <div className="text-center max-w-[80px]">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">Handcrafted</p>
                <p className="text-[10px] text-[#707070] leading-tight">Small batch roasts for perfect flavor</p>
              </div>
            </div>

            {/* 2️⃣ Single-Origin Beans */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-[#7A5633]" />
              </div>
              <div className="text-center max-w-[80px]">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">Single-Origin</p>
                <p className="text-[10px] text-[#707070] leading-tight">Sourced from select coffee regions</p>
              </div>
            </div>

            {/* 3️⃣ Rich Aroma & Flavor */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <Flame className="w-8 h-8 text-[#7A5633]" />
              </div>
              <div className="text-center max-w-[80px]">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">Rich Aroma</p>
                <p className="text-[10px] text-[#707070] leading-tight">Full-bodied taste that delights the senses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHeroSection;