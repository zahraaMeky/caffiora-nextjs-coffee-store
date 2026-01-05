import CoffeeResources  from "@/components/CoffeeResources"
import FeatureHeroSection from "@/components/FeatureHeroSection"
import FeatureSection from "@/components/FeatureSection"
import ComparisonTable from "@/components/ComparisonTable"
const page = () => {
  return (
    <>
      <FeatureHeroSection />  
      <FeatureSection />
      <CoffeeResources />
      <ComparisonTable/>
    </>
  )
}

export default page