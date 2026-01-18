import React from 'react'
import { Check } from 'lucide-react'
import { images } from '@/constants'

const AboutCoffeeProductCard = ({ product, index }) => {
  return (
    <div className="relative">
      {/* Decorative Image - Above card on mobile, Right Side on larger screens */}
      {product?.image && (
        <div className="w-48 h-48 mx-auto sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-0 sm:w-56 sm:h-56  md:w-64 md:h-64 pointer-events-none" style={{ zIndex: 15 }}>
          <img 
            src={product.image} 
            alt={product?.title || 'Product'} 
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      <div 
        key={index}
        className="rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
        style={{
          backgroundImage: `url(${images.aboutProductbg})` ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background Color Overlay */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{ 
            backgroundColor: product.bg,
            opacity: 0.3,
            zIndex: 0
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-20">
        {/* Product Header */}
        <div className="mb-6">
          <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3">
            {product?.title}
          </h4>
          <p className="text-sm sm:text-base text-muted  max-w-72  text-justify">
            {product?.description}
          </p>
        </div>

        {/* Features List */}
        {product?.features && Array.isArray(product.features) && product.features.length > 0 && (
          <div className="space-y-4">
            {product.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary shadow-[0_4px_14px_rgba(255,191,0,0.4)] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default AboutCoffeeProductCard