
import { EarnPointCard } from "./EarnPointCard"
import { earnPointsOptions } from "@/constants"
const EarnPoints = () => {
  return (
    <div className="max-container padding-container pt-12 sm:pt-16 lg:pt-24"
    //  style={{
    //     background: 'linear-gradient(0deg, rgba(249,245,241,1) 0%, rgba(249,245,241,1) 80%, rgba(255,255,255,1) 100%)'
    //   }}
    >
         <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">
           Earn Points Easily
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
            Rack up points with every purchase and enjoy quick rewards, exclusive perks, and special offers.
          </p>
        </div>
          {/* Earn Points Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnPointsOptions.map((option, index) => (
            <EarnPointCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              points={option.points}
              description={option.description}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default EarnPoints