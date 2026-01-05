import { Check } from 'lucide-react';
import { images, AboutProducts } from '@/constants'
import { AboutCoffeeProductCard } from '.';

const AboutCoffeeProducts = () => {
  return (
    <section className="max-container padding-container relative mx-auto flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
      {/* About Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full">
        <h2 className="mainHeading px-4">
          <span className="inline sm:block">Something Delicious</span>
          <span className="inline sm:block"> for Everyone</span>
        </h2>
        <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
        <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4 text-sm sm:text-base">
          Clean, healthy, and tasty choices crafted to elevate your daily ritual.
        </p>
      </div>

      {/* Products Grid */}
      <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {AboutProducts.map((product, index) => (
          <AboutCoffeeProductCard
            key={index}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutCoffeeProducts;