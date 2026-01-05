import { RewardsList } from "@/constants"
import { RewardsCard } from ".";
const RewardsGifts = () => {
  return (
    <section className="max-container padding-container">
         <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">
            Get Your Rewards
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
           Redeem your points for any reward you like.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {RewardsList.map((reward, index) => (
          <RewardsCard
            key={reward.id} 
            {...reward} 
          />
        ))}
        </div>
    </section>
  )
}

export default RewardsGifts