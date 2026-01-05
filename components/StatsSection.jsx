

const StatItem = ({ number, label, delay = 0 }) => {
  return (
    <div 
      className="text-right animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary">
        {number}
      </div>
      <div className="text-sm text-muted-foreground font-body tracking-wide">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    { number: "80+", label: "Private Room" },
    { number: "30+", label: "Event Space" },
    { number: "20+", label: "Creative Studio" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <p className="text-sm text-muted-foreground font-body italic text-right max-w-[180px] ml-auto">
        Enjoy your coffee in our comfortable place
      </p>
      <div className="flex flex-col gap-6">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            number={stat.number}
            label={stat.label}
            delay={200 + index * 150}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
