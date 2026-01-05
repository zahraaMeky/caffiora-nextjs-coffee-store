import { Coffee, Droplets, Timer, Thermometer,CloudDownload } from "lucide-react";
import { Button } from '@/components/ui/button';

const tips = [
  {
    icon: Coffee,
    title: "Coffee to Water Ratio",
    description: "Use 1:16 ratio - 15g of coffee for every 240ml of water for optimal extraction.",
  },
  {
    icon: Thermometer,
    title: "Water Temperature",
    description: "Heat water to 195-205°F (90-96°C). Just off the boil is perfect for most brewing methods.",
  },
  {
    icon: Timer,
    title: "Brew Time",
    description: "Pour-over: 3-4 minutes. French press: 4 minutes. Espresso: 25-30 seconds.",
  },
  {
    icon: Droplets,
    title: "Freshness Matters",
    description: "Grind beans just before brewing. Use within 2-4 weeks of roast date for peak flavor.",
  },
];

const BrewingTips = () => {
  return (
    <section id="story" className="max-container padding-container  py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-[#7A5633] via-[#8b6442] to-[#7A5633]">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[#ffbf00] uppercase tracking-wider">
            Master Your Brew
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f5f1] mt-2">
            Brewing Tips from Our Experts
          </h2>
          <p className="text-[#f9f5f1]/90 text-lg max-w-2xl mx-auto mt-4">
            Unlock the full potential of your Caffiora beans with these professional brewing techniques.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="group p-6 rounded-2xl bg-[#f9f5f1]/10 backdrop-blur-sm border border-[#f9f5f1]/20 hover:bg-[#f9f5f1]/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#ffbf00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <tip.icon className="w-7 h-7 text-[#7A5633]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#f9f5f1] mb-2">
                {tip.title}
              </h3>
              <p className="text-[#f9f5f1]/80 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
            <Button
                  size="lg"
                  className="h-11 xs:h-12 sm:h-13 md:h-14 text-sm sm:text-base md:text-lg px-5 xs:px-6 sm:px-8 lg:px-10 bg-gradient-to-r from-[#ffbf00] to-[#ffbf00]/90 hover:from-[#ffbf00]/90 hover:to-[#ffbf00] text-[#7A5633] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#ffbf00] rounded-lg"
                >          
                <CloudDownload  className="mr-1.5 xs:mr-2 h-4 w-4 sm:h-5 sm:w-5"/>
                <span className="whitespace-nowrap">Download Brewing Guide</span>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default BrewingTips;