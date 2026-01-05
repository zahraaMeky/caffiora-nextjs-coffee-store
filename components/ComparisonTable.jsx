'use client'
import { Check, X, Sparkles,CircleStar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import images from '@/constants/images'
import { defaultFeatures } from '@/constants/defaultFeatures';



const ComparisonTable = ({ features = defaultFeatures }) => {
  return (
    <div className="w-full mx-auto max-container padding-container py-12 sm:py-16 lg:py-24">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
        {/* Exclusive Blend Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffbf00]/20 to-[#ffa500]/20 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full"
          role="banner"
          aria-label="Special feature badge"
        >
          <Sparkles className="w-4 h-4 text-[#7A5633] shrink-0" aria-hidden="true" />
          <span className="text-sm font-semibold text-[#7A5633]">
            The Difference is Clear
          </span>
        </div>
        
        {/* About Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">
            Caffiora vs. Regular Coffee
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
            Experience premium quality in every cup. See what sets us apart from Regular coffee.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Mobile Card Layout (< 768px) */}
        <div className="md:hidden space-y-6">
          {/* Product Headers */}
          <div className="grid grid-cols-2 gap-3">
            {/* Caffiora  Card */}
            <Card className="relative p-3 sm:p-4 bg-gradient-to-br from-[#7A5633] via-[#6b4a2a] to-[#5c3e22] border-0 shadow-lg min-h-[140px] flex flex-col">
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90  text-[#7A5633] hover:bg-[#ffbf00] border-0 text-[9px] font-bold px-2 py-1 shadow-lg tracking-wide whitespace-nowrap z-10">
                <CircleStar className="w-3 h-3 sm:w-4 sm:h-4 text-[#7A5633] shrink-0 inline" /> BEST CHOICE
              </Badge>
              <div className="flex flex-col items-center space-y-2 mt-4 sm:mt-5 flex-1 justify-between">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-14 sm:w-16 sm:h-20 flex items-center justify-center overflow-hidden">
                    <Image src={images.CoffeeBeans} alt="Caffiora Logo" width={50} height={50} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="text-center flex-shrink-0 w-full px-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white break-words">Caffiora</h3>
                  <p className="text-[#ffbf00] text-[9px] sm:text-[10px] font-medium mt-0.5">Premium Coffee</p>
                </div>
              </div>
            </Card>

            {/* Regular Coffee Card */}
            <Card className="p-3 sm:p-4 bg-gradient-to-br from-[#f9f5f1] to-[#ede9e3] border border-[#7A5633]/20 shadow-lg min-h-[140px] flex flex-col">
              <div className="flex flex-col items-center space-y-2 flex-1 justify-between">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-12 h-14 sm:w-16 sm:h-20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={images.coffetableregular}
                      alt="Regular Coffee"
                      width={50} 
                      height={50} 
                      className="w-full h-full object-contain"
                    />                
                  </div>
                </div>
                <div className="text-center flex-shrink-0 w-full px-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#7A5633] break-words">Regular Coffee</h3>
                  <p className="text-[#707070] text-[9px] sm:text-[10px] font-medium mt-0.5">Standard Brands</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <Card key={feature.name} className={`p-4 border-2 border-[#7A5633]/20 ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#f9f5f1]/30'
            }`}>
              <div className="mb-3">
                <p className="text-sm font-semibold text-[#7A5633] mb-1">
                  {feature.name}
                </p>
                {feature.description && (
                  <p className="text-xs text-[#707070]">{feature.description}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* Caffiora  */}
                <div className="flex items-center justify-center bg-[#ffbf00]/10 rounded-lg py-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffbf00]/20 flex items-center justify-center border-2 border-[#ffbf00]">
                    <Check className="w-6 h-6 text-[#7A5633]" strokeWidth={3} />
                  </div>
                </div>
                {/* Regular Coffee */}
                <div className="flex items-center justify-center bg-[#f9f5f1]/50 rounded-lg py-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#707070]">
                    <X className="w-6 h-6 text-[#707070]" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Table Layout (>= 768px) */}
        <Card className="hidden md:block overflow-hidden border-0 shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3">
              <caption className="sr-only">Coffee Comparison: Caffiora  vs Regular Coffee</caption>
              
              <thead>
                <tr>
                  <th scope="col" className="sr-only">Features</th>                  
                  {/* Caffiora  Column Header */}
                  <th scope="col" className="relative p-4 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-br from-[#7A5633] via-[#6b4a2a] to-[#5c3e22] w-3/10 align-top">
                    <Badge className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 text-[#7A5633] hover:bg-[#ffbf00] border-0 text-xs md:text-sm font-bold px-4 md:px-5 py-1.5 md:py-2 shadow-lg tracking-wide whitespace-nowrap z-10">
                      <CircleStar className="w-4 h-4 text-[#7A5633] shrink-0" /> BEST CHOICE
                    </Badge>
                    
                    <div className="flex flex-col items-center justify-start min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
                      <div className="relative w-full flex justify-center flex-shrink-0 mb-3 md:mb-4 lg:mb-6">
                        <div className="relative w-16 h-20 md:w-20 md:h-28 lg:w-28 lg:h-36 xl:w-36 xl:h-44 max-w-full flex items-center justify-center overflow-hidden">
                          <Image
                            src={images.CoffeeBeans}
                            alt="Caffiora Premium Coffee"
                            width={144}
                            height={176}
                            className="w-full h-full object-contain max-h-full"
                          />                        
                        </div>
                      </div>
                      
                      <div className="text-center space-y-1 md:space-y-2 w-full px-2 flex-shrink-0 mt-auto">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white tracking-tight break-words leading-tight">Caffiora</h3>
                        <p className="text-[#ffbf00] text-[10px] md:text-xs lg:text-sm font-medium">Premium Coffee</p>
                      </div>
                    </div>
                  </th>
                  
                  {/* Regular Coffee Column Header */}
                  <th scope="col" className="p-4 md:p-6 lg:p-8 xl:p-10 border-l border-[#7A5633]/20 bg-gradient-to-br from-[#f9f5f1] to-[#ede9e3] w-3/10 align-top">
                    <div className="flex flex-col items-center justify-start min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
                      <div className="relative w-full flex justify-center flex-shrink-0 mb-3 md:mb-4 lg:mb-6">
                        <div className="relative w-16 h-20 md:w-20 md:h-28 lg:w-28 lg:h-36 xl:w-36 xl:h-44 max-w-full flex items-center justify-center overflow-hidden">
                          <Image
                            src={images.coffetableregular}
                            alt="Regular Coffee"
                            width={144}
                            height={176}
                            className="w-full h-full object-contain max-h-full"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center space-y-1 md:space-y-2 w-full px-2 flex-shrink-0 mt-auto">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#7A5633] tracking-tight break-words leading-tight">Regular Coffee</h3>
                        <p className="text-[#707070] text-[10px] md:text-xs lg:text-sm font-medium">Standard Brands</p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className="group">
                    {/* Feature Name Cell */}
                    <th scope="row" className={`text-left p-3 md:p-4 lg:p-5 xl:p-6 border border-[#7A5633]/10 rounded-l-2xl transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white group-hover:bg-[#f9f5f1]/50' : 'bg-[#f9f5f1]/30 group-hover:bg-[#f9f5f1]/60'
                    }`}>
                      <p className="text-sm md:text-base lg:text-lg text-[#7A5633] font-semibold mb-1 break-words">
                        {feature.name}
                      </p>
                      {feature.description && (
                        <p className="text-xs md:text-sm text-[#707070] font-normal break-words">{feature.description}</p>
                      )}
                    </th>
                    
                    {/* Caffiora  Checkmark Cell */}
                    <td className={`p-3 md:p-4 lg:p-5 xl:p-6 text-center border-y border-[#7A5633]/10 transition-all duration-200 ${
                      index % 2 === 0 ? 'bg-[#ffbf00]/10 group-hover:bg-[#ffbf00]/20' : 'bg-[#ffbf00]/15 group-hover:bg-[#ffbf00]/25'
                    }`}>
                      <div className="flex justify-center">
                        <div className="relative group/check">
                          <div className="absolute inset-0 bg-[#ffbf00]/30 rounded-full blur-md opacity-0 group-hover/check:opacity-100 transition-opacity"></div>
                          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#ffbf00]/20 flex items-center justify-center border-2 border-primary shadow-sm group-hover/check:scale-110 group-hover/check:shadow-md transition-all duration-200">
                            <Check className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#7A5633]" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Regular Coffee X Mark Cell */}
                    <td className={`p-3 md:p-4 lg:p-5 xl:p-6 text-center border border-l-0 border-[#7A5633]/10 rounded-r-2xl transition-all duration-200 ${
                      index % 2 === 0 ? 'bg-[#f9f5f1]/50 group-hover:bg-[#f9f5f1]/70' : 'bg-[#f9f5f1]/70 group-hover:bg-[#f9f5f1]/90'
                    }`}>
                      <div className="flex justify-center">
                        <div className="relative group/x">
                          <div className="absolute inset-0 bg-[#707070]/20 rounded-full blur-md opacity-0 group-hover/x:opacity-100 transition-opacity"></div>
                          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#707070] shadow-sm group-hover/x:scale-110 group-hover/x:shadow-md transition-all duration-200">
                            <X className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#707070]" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ComparisonTable;