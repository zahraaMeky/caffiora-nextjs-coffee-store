import { Coffee, Leaf, Heart, ShieldCheck } from "lucide-react";

const FeatureSection = () => {
  return (
      <section className="max-container padding-container py-12 sm:py-16 lg:py-24 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ backgroundColor: 'rgba(255, 191, 0, 0.1)', borderColor: 'rgba(255, 191, 0, 0.3)' }}>
                <Heart className="w-4 h-4" style={{ color: '#7A5633' }} />
                <span className="text-sm font-semibold tracking-wide" style={{ color: '#7A5633' }}>OUR PHILOSOPHY</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#7A5633' }}>
                Crafted with Passion,
                <span className="block mt-2" style={{ color: '#ffbf00' }}>Served with Pride</span>
              </h2>
              
              <div className="space-y-4 leading-relaxed text-base md:text-lg text-muted">
                <p>
                  Caffiora was born from a simple belief: that exceptional coffee shouldn't come at the cost of your health or the planet. 
                  We started this journey with a commitment to transparency, purity, and genuine quality.
                </p>
                <p>
                  Every bean we roast tells a story—of sustainable farms, of careful cultivation, of rigorous testing, and of an 
                  unwavering dedication to excellence. We don't just sell coffee; we offer moments of joy, comfort, and connection 
                  in every cup.
                </p>
                <p>
                  From our family to yours, we invite you to experience what coffee should truly be: clean, delicious, and crafted 
                  with love.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="p-6 md:p-8 rounded-2xl shadow-lg border" style={{ backgroundColor: 'white', borderColor: 'rgba(122, 86, 51, 0.1)' }}>
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" style={{ color: '#7A5633' }} />
                  <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#7A5633' }}>Lab Tested</h3>
                  <p className="text-sm md:text-base" style={{ color: '#707070' }}>350+ contaminants checked</p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 191, 0, 0.15)', color: '#7A5633' }}>
                  <Coffee className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" style={{ color: '#7A5633' }} />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Fresh</h3>
                  <p className="text-sm md:text-base" style={{ color: '#707070' }}>Small-batch roasted</p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="p-6 md:p-8 rounded-2xl text-white" style={{ backgroundColor: '#7A5633' }}>
                  <Leaf className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">100%</h3>
                  <p className="text-sm md:text-base opacity-90">Certified Organic</p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl shadow-lg border" style={{ backgroundColor: 'white', borderColor: 'rgba(122, 86, 51, 0.1)' }}>
                  <Heart className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" style={{ color: '#ffbf00' }} />
                  <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#7A5633' }}>Ethical</h3>
                  <p className="text-sm md:text-base" style={{ color: '#707070' }}>Sustainably sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeatureSection;