import { Card } from "@/components/ui/card";

export const EarnPointCard = ({ 
  icon: Icon, 
  title, 
  points, 
  description,
  delay = 0 
}) => {
  return (
    <Card  
      className="group relative overflow-hidden  border border-[#7A5633]/10 hover:border-primary transition-all duration-300 hover:shadow-lg p-6 flex flex-col items-center text-center"
      style={{ animationDelay: `${delay}ms` , background: 'linear-gradient(0deg, rgba(249,245,241,1) 0%, rgba(249,245,241,1) 80%, rgba(255,255,255,1) 100%)'}}
    >
      {/* Decorative gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffbf00]/10 to-[#7A5633]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-[#7A5633]/20 group-hover:border-[#ffbf00] group-hover:bg-[#ffbf00]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="w-8 h-8 text-[#7A5633] group-hover:text-[#ffbf00] transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="font-semibold text-lg text-primary transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-bold text-[#ffbf00]">
          {points} <span className="text-sm text-primary font-normal">points</span>
        </p>
        {description && (
          <p className="text-sm text-[#707070]">
            {description}
          </p>
        )}
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#ffbf00]/15 blur-3xl rounded-full" />
      </div>
    </Card>
  );
};