import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import images from "@/constants/images";
import { Gift, UserPlus, Percent } from 'lucide-react';

const ReferalDiscount = () => {
  return (
    <section className="w-full bg-background pt-12 sm:pt-16 lg:pt-24 max-container padding-container">
      <div className="max-container padding-container px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left side - Image */}
            <div className="relative h-[350px] md:h-full order-1">
              <div className="absolute inset-0">
                <Image
                  src={images.referalbg2}
                  alt="Friends enjoying coffee together at Caffiora"
                  fill
                  className="object-cover w-full h-full "
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-secondary/30 z-10 animate-bounce">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7A5633] whitespace-nowrap">Limited Offer</span>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div
              className="
              bg-gradient-to-br from-[#7A5633] via-[#6b4d2f] to-[#5c3d22]
              flex flex-col justify-center
              p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10
              order-2 relative overflow-hidden
              h-[350px] md:h-full        /* Equal height fix */
            "
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#ffa500]/5 rounded-full blur-3xl"></div>

              <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-secondary/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-secondary/30">
                  <UserPlus className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  <span className="text-secondary font-semibold text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase">
                    Refer a Friend
                  </span>
                </div>

                {/* Heading - Smaller */}
                <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white leading-tight">
                  Give{' '}
                  <span className="inline-flex items-center gap-1 sm:gap-2 text-secondary">
                    <Percent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 inline" />
                    <span>40% off</span>
                  </span>
                  <span className="block mt-1 sm:mt-2">
                    coupon, Get{' '}
                    <span className="text-secondary">$30 off</span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-white/90 text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl max-w-xl leading-relaxed">
                  Give your friends 40% off on their first order and get $30 off for each successful referral.
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 xs:p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                    <div className="text-secondary text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold">40%</div>
                    <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm mt-0.5 sm:mt-1">Friend's Discount</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 xs:p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                    <div className="text-secondary text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold">$30</div>
                    <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm mt-0.5 sm:mt-1">Your Reward</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferalDiscount;
