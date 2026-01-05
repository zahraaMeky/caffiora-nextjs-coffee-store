import {
  Handbag,
  PackageSearch,
  ShoppingBasket,
  ShoppingCart,
  Check,
  Gift,
  Leaf,
  Sprout,
  Grid3x3,
  Heart,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import images from "@/constants/images";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section className="max-container padding-container relative py-8  lg:py-0 bg-[rgba(249,245,241,0.9)]  overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
        {" "}
        {/* Left Content */}
        <div className="space-y-8 order-2 md:order-1">
          {/* Heading with underline */}
          <div className="space-y-4">
            {/* Badge - Placed before h1 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full">
              <Award className="w-4 h-4 text-[#7A5633]" />
              <span className="text-sm font-semibold text-[#7A5633]">
                Clean & Healthy Guarantee
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
              <span className="relative inline lg:block text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
                Better Coffee
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 3 100 2 150 5C200 8 250 3 298 10"
                    stroke="#ffbf00"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="inline lg:block lg:mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#7A5633] via-[#5c3d22] to-[#3d2a17]">
                {" "}
                for a Better
              </span>
            </h1>
            <p className="paragraphText">
              Exceptionally Pure. Remarkably Delicious.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 
                      shadow-[0_4px_14px_rgba(255,191,0,0.4)] flex items-center justify-center"
              >
                <Check className="w-4 h-4  text-white" strokeWidth={3} />
              </div>
              <p className="paragraphText">Low acid. No tummy burn.</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 
                      shadow-[0_4px_14px_rgba(255,191,0,0.4)] flex items-center justify-center"
              >
                <Check className="w-4 h-4  text-white" strokeWidth={3} />
              </div>
              <p className="paragraphText">Mold Free. Guaranteed.</p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 
                      shadow-[0_4px_14px_rgba(255,191,0,0.4)] flex items-center justify-center"
              >
                <Check className="w-4 h-4  text-white" strokeWidth={3} />
              </div>
              <p className="paragraphText">Clean. Healthy. Always.</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="pt-4">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 fill-[#ffbf00]"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-semibold text-[#7A5633]">
                over 25,254 Five Star Reviews
              </span>
            </div>
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
              src={images.caffioraproducts}
              alt="caffiora products"
              width={600}
              height={680}
              className="w-auto h-auto max-h-[600px] md:max-h-[680px] lg:max-h-[720px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Quality Badges - Right Side - Circle Only */}
          <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 space-y-6 z-20">
            {/* USDA Organic Badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-primary bg-white flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-xs text-[#7A5633]">100%</p>
                <p className="text-xs text-primary font-semibold">ORGANIC</p>
              </div>
            </div>

            {/* NON GMO Badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <Sprout className="w-8 h-8 text-[#7A5633]" />
              </div>
              <div className="text-center">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">
                  NON GMO
                </p>
              </div>
            </div>

            {/* SINGLE ORIGIN Badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <Grid3x3 className="w-8 h-8 text-[#7A5633]" />
              </div>
              <div className="text-center">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">
                  SINGLE
                  <br />
                  ORIGIN
                </p>
              </div>
            </div>

            {/* MOLD-FREE Badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-[#7A5633] bg-white flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-[#7A5633]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs text-[#7A5633] font-semibold leading-tight">
                  MOLD-FREE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
