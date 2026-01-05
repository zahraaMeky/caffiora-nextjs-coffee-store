import React from 'react'
import AboutHeroSection from '@/components/AboutHeroSection'
import WhatInCoffee  from '@/components/WhatInCoffee'
import AboutCoffeeProducts  from '@/components/AboutCoffeeProducts'
import Testimonials  from '@/components/Testimonial'

const page = () => {
  return (
    <>
        <AboutHeroSection />
        <Testimonials/>
        <WhatInCoffee/>
        <AboutCoffeeProducts/>
    </>
  )
}

export default page