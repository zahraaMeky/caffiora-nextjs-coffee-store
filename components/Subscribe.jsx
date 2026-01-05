"use client" 
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, Mail, CheckCircle2 } from "lucide-react";
import { images } from '@/constants'
import { Podcast  } from 'lucide-react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section className="relative max-container padding-container py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.subscribebg})` }}
      />
      
      {/* Multi-layered elegant overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f5f1]/95 via-[#f9f5f1]/90 to-[#7A5633]/20" />
      <div className="absolute inset-0 bg-[#7A5633]/10 mix-blend-multiply" />
      
      <div className="container max-w-5xl mx-auto relative z-10 px-2 sm:px-4">
        <div className="bg-white/95 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl shadow-[#7A5633]/20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14 2xl:p-16 border-2 border-[#7A5633]/10 backdrop-blur-xl">
          
          {/* Success State */}
          {isSubscribed && (
            <div className="mb-8 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-medium">Successfully subscribed! Check your inbox.</p>
            </div>
          )}

          {/* Coffee Icon with animated background */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffbf00] rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 rounded-full p-3 sm:p-4 md:p-5 shadow-xl shadow-[#7A5633]/30">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#7A5633] mb-3 sm:mb-4 md:mb-5">
            Stay Brewed In
            <span className="text-[#ffbf00]">.</span>
          </h2>

          {/* Subtext */}
          <p className="text-center text-[#707070] text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Join the <span className="font-semibold text-[#7A5633]">Caffiora Coffee Circle</span> and be the first to discover new blends, 
            exclusive offers, and expert brewing tips delivered straight to your inbox.
          </p>

          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
            <div className="relative flex-1">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#707070]" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 pl-14 pr-5 rounded-full border-2 border-[#7A5633]/20 focus:border-[#7A5633] focus:ring-4 focus:ring-[#ffbf00]/20 transition-all duration-300 bg-white text-[#7A5633] placeholder:text-[#707070]/60 text-base shadow-sm"
                disabled={isSubmitting}
              />
            </div>
            <Button
              className="relative w-full sm:w-auto h-11 sm:h-12 md:h-14 px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffa500]
              text-[#7A5633] font-bold text-sm sm:text-base rounded-full shadow-[0_4px_14px_rgba(255,191,0,0.4)]
              hover:shadow-[0_8px_20px_rgba(255,191,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300
              flex items-center justify-center group overflow-hidden"
            >
              {/* Animated shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center up">
                Subscribe Now
                <Podcast  className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </form>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Weekly Brewing Tips', 'Exclusive Discounts', 'New Blend Alerts'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-[#707070]">
                <CheckCircle2 className="w-4 h-4 text-[#7A5633]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Privacy note */}
          <p className="text-center text-sm text-[#707070]/80">
            🔒 We respect your privacy. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#7A5633]/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#ffbf00]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#7A5633]/5 blur-2xl" />
    </section>
  );
};

export default NewsletterSubscribe;