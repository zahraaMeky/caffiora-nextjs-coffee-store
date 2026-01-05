import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle2, Coffee } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";
import { images } from "@/constants";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section
      className="relative max-container padding-container pt-12 sm:pt-16 lg:pt-24  overflow-hidden"
      // style={{
      //   backgroundImage: `url(${images.subscribebg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      {/* Enhanced Background Overlay with Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#f9f5f1]/95 via-[#f9f5f1]/90 to-[#7A5633]/20" />
      <div className="absolute inset-0 bg-[#7A5633]/10 mix-blend-multiply" />        */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6 px-4">
          <div className="inline-block">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 
              text-white rounded-full text-sm font-semibold mb-4"
            >
              <Coffee className="w-4 h-4" />
              Customer Reviews
            </span>
          </div>
          {/* Testimonials Header */}
          <div className="text-center animate-fade-in">
            <h2 className="mainHeading">30+ Million Tasty Coffees Made</h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
              Join thousands enjoying smoother, cleaner, healthier coffee every
              day.
            </p>
          </div>
          {/* Trust Indicators */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-primary/85">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-secondary text-secondary" />
                <span className="text-sm md:text-base font-medium">
                  4.9/5 Average Rating
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="text-sm md:text-base font-medium">
                  100% Verified Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel - Displaying 2 per row */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-3 md:pl-4 basis-full md:basis-1/2"
              >
                <Card className="h-full bg-transparent hover:scale-[1.02] transition-all duration-300 overflow-hidden border-primary/10">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Vertical Layout for Mobile, Horizontal for Desktop */}
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Customer Image */}
                      <div className="w-full lg:w-2/5 flex-shrink-0 relative p-2">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 lg:hidden rounded-3xl" />

                        <div className="relative w-full h-72 sm:h-80 lg:h-full rounded-3xl overflow-hidden bg-background/50">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-6 sm:p-8 lg:p-4 flex flex-col justify-between">
                        <div>
                          {/* Star Rating */}
                          <div className="flex gap-1 mb-5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 lg:w-6 lg:h-6 fill-secondary text-secondary drop-shadow-sm"
                              />
                            ))}
                          </div>

                          {/* Title */}
                          <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                            {testimonial.title}
                          </h4>

                          {/* Content */}
                          <blockquote className="text-sm sm:text-base text-muted  max-w-72">
                            "{testimonial.content}"
                          </blockquote>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50 border-primary/40 mt-6">
                          <div className="flex flex-col">
                            <span className="text-lg lg:text-xl font-bold text-primary">
                              {testimonial.author}
                            </span>
                            {testimonial.verified && (
                              <div className="flex items-center gap-1.5  mt-1.5">
                                <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
                                <span className="text-sm lg:text-base font-semibold text-secondary">
                                  Verified Buyer
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Navigation */}
          <div className="flex justify-center gap-3 md:gap-4 mt-10 md:mt-16">
            <CarouselPrevious className="static translate-y-0 bg-background/80 backdrop-blur-sm border-2 border-border hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 h-12 w-12 md:h-14 md:w-14 shadow-lg" />
            <CarouselNext className="static translate-y-0 bg-background/80 backdrop-blur-sm border-2 border-border hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 h-12 w-12 md:h-14 md:w-14 shadow-lg" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
