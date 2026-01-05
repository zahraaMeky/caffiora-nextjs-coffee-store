import Image from "next/image";
import { images } from "@/constants";
import Banner from "@/components/Banner";
import CoffeeFeatures from "@/components/CoffeeFeatures";
import CoffeeProducts from "@/components/ProductCard";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import Subscribe from "@/components/Subscribe";
import AboutSection  from "@/components/AboutSection";
export default function Home() {
  return (
   <>
   <main>
    <Banner />
    <AboutSection />
    <CoffeeFeatures />
    <FeaturedProducts />
    <Subscribe />
   </main>
   
   </>
  );
}
