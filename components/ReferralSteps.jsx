'use client';
import { Copy, Share2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { steps } from '@/constants/steps';

export const ReferralSteps = () => {
  const handleCopyLink = () => {
    const referralLink = `${window.location.origin}/ref/YOUR_CODE`;
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  const handleShare = async () => {
    const referralLink = `${window.location.origin}/ref/YOUR_CODE`;
    const shareData = {
      title: "Join me and get $30 off!",
      text: "I'm inviting you to join! Use my referral link and we both get $30 off our next order.",
      url: referralLink,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Thanks for sharing!");
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          toast.error("Failed to share");
        }
      }
    } else {
      navigator.clipboard.writeText(referralLink);
      toast.success("Link copied! Share it with your friends.");
    }
  };

  return (
    <section className="max-container padding-container w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
     style={{
        background: 'linear-gradient(0deg, rgba(249,245,241,1) 0%, rgba(249,245,241,1) 80%, rgba(255,255,255,1) 100%)'
      }}>
      <div className="w-full max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        
        {/* Decorative Element */}
        <div className="text-center mb-4 xs:mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 backdrop-blur-sm border border-[#ffbf00]/30 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <Gift className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="text-xs xs:text-sm sm:text-base font-semibold text-white whitespace-nowrap">
              Start sharing and earning today!
            </span>
          </div>
        </div>

        {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="mainHeading">
            Refer Friends, Earn Rewards
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#ffbf00] mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="paragraphText max-w-2xl mx-auto leading-relaxed px-4">
            Share the love and get rewarded! Invite your friends and both of you will receive amazing benefits.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xs:gap-10 sm:gap-6 md:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-14">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 lg:top-16 left-[55%] xl:left-[60%] w-[90%] xl:w-[80%] h-0.5 border-t-2 border-dashed border-[#ffbf00]/40" />
                )}

                {/* Badge with Icon */}
                <div className="relative z-10 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#ffbf00] to-[#ffbf00]/80 flex flex-col items-center justify-center mb-4 xs:mb-5 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 border-4 border-[#f9f5f1]">
                  <span className="text-3xl xs:text-4xl sm:text-5xl font-bold text-[#7A5633] mb-0.5 xs:mb-1">
                    {step.number}
                  </span>
                  <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#7A5633] opacity-80" />
                </div>

                {/* Content */}
                <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 px-2">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight text-[#7A5633] group-hover:text-[#ffbf00] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#707070] text-xs xs:text-sm sm:text-base md:text-base max-w-[280px] xs:max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
          <Button
            onClick={handleCopyLink}
            size="lg"
            className="w-full sm:w-52 h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
          >
            <Copy className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Copy Your Link</span>
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            size="lg"
            className="w-full sm:w-52 h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-transparent border-2 border-[#7A5633] text-[#7A5633] font-bold hover:bg-[#7A5633] hover:text-white shadow-md hover:shadow-lg hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg"
          >
            <Share2 className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Share Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};