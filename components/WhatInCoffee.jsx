import images from "@/constants/images";
import Image from "next/image";
import { features } from "@/constants";

const WhatInCoffee = () => {
  return (
    <section className="bg-[linear-gradient(0deg,rgba(249,245,241,1)_0%,rgba(249,245,241,1)_80%,rgba(255,255,255,1)_100%)] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-container padding-container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">What's in it for you?</h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands enjoying smoother, cleaner, healthier coffee every
            day.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start lg:items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start w-full">
            <div className="w-full max-w-sm lg:max-w-none">
              <Image
                src={images.ExperienceofCaffioraCoffee}
                alt="Experience of Caffiora Coffee"
                width={500}
                height={500}
                className="rounded-lg shadow-md w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:col-span-2">
            {features.map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="paragraphText text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatInCoffee;
