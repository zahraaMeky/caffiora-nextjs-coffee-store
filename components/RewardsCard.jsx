import { Card, CardContent } from "@/components/ui/card";
const RewardsCard = ({ 
  points,
  image,
  description,
  name
}) => { 
  return (
    <Card className="bg-white w-full max-w-[380px] overflow-hidden border border-[#707070]/20 shadow-sm hover:shadow-lg transition-all cursor-pointer rounded-2xl border-t-4 border-t-[#ffbf00]">
      
      {/* Image Section with Badge */}
      <div className="relative p-6 pb-2">
        {points && (
        <div className="flex justify-center mb-3">
            <span className="bg-[#f9f5f1] text-[#7A5633] text-xs font-semibold px-5 py-2 rounded-full uppercase whitespace-nowrap border border-[#7A5633]/20">
              {points} Caffiora Points
            </span>
          </div>
        )}
        <div className=" rounded-2xl relative flex items-center justify-center overflow-hidden group mb-2 bg-[#E0D3C5] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply"
          />
        </div>
      </div>
      {/* Content Section */}
      <CardContent className="p-0 pb-6 text-center">
        <h3 className="text-xl font-bold text-[#7A5633]">
          {name}
        </h3>
      </CardContent>
    </Card>
  );
};
export default RewardsCard;