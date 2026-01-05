import { ArrowRight,BookmarkCheck  } from 'lucide-react';
import images from '@/constants/images'
import { Button } from './ui/button';
const AboutSection = () => {

  return (
    <section className="relative max-container padding-container flex items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain lg:bg-cover  bg-center bg-no-repeat pointer-events-none -z-10 opacity-50 sm:opacity-75 md:opacity-75 lg:opacity-90"
        style={{ backgroundImage: `url(${images.coffeeBg})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">
            About Caffiora Coffee
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
            Caffiora brews joy in every cup, crafted with passion and care. Our beans awaken warmth, comfort, and connection.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-container padding-container grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Tailored-Made Coffee */}
          <div className="text-primary space-y-3 sm:space-y-4 md:space-y-5 animate-fade-in px-2 lg:px-0">
            <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold tracking-wider text-[#ffbf00] uppercase">
              Tailored-Made Coffee
            </h3>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              We offer a unique coffee house environment unlike any other.
            </h2>
             
            <Button
              className="relative w-full sm:w-auto h-10 sm:h-11 md:h-12 lg:h-14 px-5 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffa500]
              text-primary font-bold text-xs sm:text-sm md:text-base rounded-full shadow-[0_4px_14px_rgba(255,191,0,0.4)]
              hover:shadow-[0_8px_20px_rgba(255,191,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300
              flex items-center justify-center group overflow-hidden"
            >
              {/* Animated shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center up">
                Read More
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in px-2 lg:px-0">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-primary">
                The perfect place to enjoy your coffee
              </h3>
              <p className="paragraphText">
               At Caffiora, every sip tells a story of flavor and comfort. Crafted with passion, our blends bring moments of warmth, joy, and pure indulgence to your day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#ffbf00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutSection;