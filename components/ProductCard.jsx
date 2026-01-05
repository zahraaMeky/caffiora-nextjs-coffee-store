import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star,ShoppingCart} from 'lucide-react';
import { Button } from '@/components/ui/button';
export const ProductCard = ({ 
  title, 
  price, 
  oldPrice,
  oldprice, // Add support for oldprice from data
  image,
  description,
  rating,
  reviewCount,
  badge
}) => {
  // Use oldPrice or oldprice from the data
  const finalOldPrice = oldPrice || oldprice;

  // Function to render stars with half star support
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-secondary text-secondary"
        />
      );
    }

    // Render half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-gray-200 text-gray-200 absolute" />
          <div className="overflow-hidden absolute w-1/2">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-secondary text-secondary" />
          </div>
        </div>
      );
    }

    // Render empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-gray-200 text-gray-200"
        />
      );
    }

    return stars;
  };

  return (
    <Card className="w-full max-w-full overflow-hidden border border-primary/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer mx-auto">
      {/* Image Section with Badge */}
      <div className="relative m-3 sm:m-4 mb-0">
        {badge && (
          <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-20">
            <span className="inline-flex bg-secondary text-primary text-[10px] xs:text-xs font-semibold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full uppercase tracking-wide">
              {badge}
            </span>
          </div>
        )}
        <div className="aspect-square bg-[rgba(249,245,241,0.9)] rounded-xl sm:rounded-2xl relative flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4 sm:p-5 md:p-6 pt-2 sm:pt-3 md:pt-4">
        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1.5 sm:mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-muted text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        )}

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex gap-0.5">
              {renderStars(rating)}
            </div>
            {reviewCount && (
              <span className="text-secondary font-medium text-xs sm:text-sm">
                {reviewCount.toLocaleString()}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-secondary text-xl sm:text-2xl font-semibold">
              ${price}
            </span>
          </div>
          {finalOldPrice && (
            <span className="text-muted text-base sm:text-lg line-through">
              ${finalOldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
          <div className="flex justify-center">
              <Button
                  size="lg"
                  className="w-full h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 lg:px-8 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
                >
            <ShoppingCart className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <span className="whitespace-nowrap uppercase text-[10px] xs:text-xs sm:text-sm">ADD TO CART </span>
          </Button>
          
          </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;