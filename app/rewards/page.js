import RewordsHeroSection from '@/components/RewordsHeroSection'
import EarnPoints from '@/components/EarnPoints'
import ReferalDiscount from '@/components/ReferalDiscount'
import {ReferralSteps} from '@/components/ReferralSteps'
import RewardsGifts  from '@/components/RewardsGifts'
const page = () => {
  return (
    <>
        <RewordsHeroSection />
        <EarnPoints /> 
        <RewardsGifts />
        <ReferalDiscount />
        <ReferralSteps />
    </>
  )
}

export default page