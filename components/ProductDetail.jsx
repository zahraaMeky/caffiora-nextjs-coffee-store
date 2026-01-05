import { cn } from "@/lib/utils";
import { Star, Leaf, MapPin, Flame,ShoppingCart} from "lucide-react";
import images from '@/constants/images'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
const ProductDetail = ({ className }) => {
  const details = [
    { icon: MapPin, label: "Origin", value: "Ethiopian Yirgacheffe" },
    { icon: Flame, label: "Roast Level", value: "Medium-Dark" },
    { icon: Leaf, label: "Aroma Notes", value: "Chocolate, Berry, Citrus" },
  ];

  return (
    <section  
      className="max-container padding-container  py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ 
                background: 'linear-gradient(to bottom right, rgba(255, 191, 0, 0.2), rgba(122, 86, 51, 0.1))' 
              }} />
              <div className="relative card-premium p-8 h-full flex items-center justify-center rounded-3xl" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(122, 86, 51, 0.1)',
                boxShadow: '0 10px 30px rgba(122, 86, 51, 0.1)'
              }}>
                <Image
                  src={images.coffeeproduct} 
                  fill
                  alt="Caffiora Signature Blend Coffee"
                  className="object-contain rounded-xl animate-float"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-0">
              <div className="px-6 py-3 rounded-full font-semibold" style={{
                backgroundColor: '#ffbf00',
                color: '#7A5633',
                boxShadow: '0 8px 24px rgba(255, 191, 0, 0.4)'
              }}>
                Best Seller
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted" style={{ color: '#707070' }}>
                Signature Collection
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-primary" >
                Ethiopian Origins
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{
                      fill: i < 4 ? '#ffbf00' : 'rgba(255, 191, 0, 0.3)',
                      color: i < 4 ? '#ffbf00' : 'rgba(255, 191, 0, 0.3)'
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-muted" >(4.8 • 256 reviews)</span>
            </div>

            <p className="text-lg leading-relaxed text-muted" >
              Sourced from the highlands of Ethiopia, this exceptional single-origin coffee 
              delivers a symphony of flavors. Experience notes of dark chocolate melting into 
              wild berries, finished with a bright citrus acidity that lingers pleasantly.
            </p>

            {/* Details Grid */}
            <div className="grid gap-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(122, 86, 51, 0.05)',
                    border: '1px solid rgba(122, 86, 51, 0.1)'
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                    backgroundColor: 'rgba(122, 86, 51, 0.1)'
                  }}>
                    <Icon className="w-5 h-5" style={{ color: '#7A5633' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#707070' }}>{label}</p>
                    <p className="font-semibold" style={{ color: '#7A5633' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <div>
                <p className="text-sm text-muted" >Price</p>
                <p className="text-3xl font-display font-bold text-primary" >
                  $24.99 <span className="text-lg font-normal text-muted" >/ 250g</span>
                </p>
              </div>
              
                <Button
                  size="lg"
                  className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
                >
            <ShoppingCart className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap uppercase">ADD TO CART </span>
          </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Free Shipping over $50
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Freshly Roasted
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                100% Arabica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;