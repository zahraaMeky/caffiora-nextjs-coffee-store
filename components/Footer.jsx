import { Instagram, Heart ,Facebook, Twitter, Mail, MapPin, Phone, Clock, ArrowUp } from "lucide-react";
import images from '@/constants/images';
import { quickLinks, socialLinks, contactInfo, openingHours } from '@/constants/FooterLinks';

const Footer = () => {
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Coffee Beans Background Section */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${images.coffeeBeansPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient Overlay - Creates depth and ensures text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98"></div>
        
        {/* Additional dark overlay for better contrast */}
        <div className="absolute inset-0 z-20 bg-black/40"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffbf00] to-transparent z-30"></div>
        
        <div className="relative z-30 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 ">
                 <img 
                  src={images.whiteCaffioraLogo} 
                  alt="Caffiora Logo" 
                  className="h-12 w-auto object-contain -mt-2.5"
                />
                <h3 className="text-xl font-semibold text-cream">
                  <span className="font-bold">
                    Just <span className="font-serif italic text-[#ffbf00]">Coffee</span>
                  </span>
                </h3>
              </div>
              <p className="text-cream text-sm leading-relaxed max-w-xs opacity-90">
                Brewed with passion — every cup tells a story. Its very easy to use and powered by premium coffee beans.
              </p>
              
              {/* Social Media Icons - Circular */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full border-2 border-[#ffbf00]/40 flex items-center justify-center text-cream hover:text-[#7A5633] hover:bg-[#ffbf00] hover:border-[#ffbf00] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ffbf00]/50"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-cream mb-6 relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ffbf00]"></span>
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-3 group">
                      <Icon className="w-5 h-5 text-[#ffbf00] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      {item.href && item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-cream hover:text-[#ffbf00] transition-colors duration-300 text-sm"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-cream text-sm">{item.text}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-cream mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ffbf00]"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-cream hover:text-[#ffbf00] hover:translate-x-2 transition-all duration-300 text-sm inline-block"
                    >
                      - {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-cream mb-6 relative inline-block">
                Opening Hours
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ffbf00]"></span>
              </h4>
              <ul className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <li key={index} className="text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-cream font-medium">{schedule.days}</span>
                      <span className={schedule.isOpen ? "text-[#ffbf00] font-semibold" : "text-secondary font-semibold"}>
                        {schedule.hours}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scroll to Top Button */}
         
        </div>
      </div>

      {/* Copyright Section with subtle gradient */}
      <div className="relative bg-gradient-to-r from-[#2a1810] via-[#1f120c] to-[#2a1810] border-t border-[#ffbf00]/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream">
            <p className="opacity-90">© 2025 Caffiora. All rights reserved.</p>
            <p className="opacity-90">
              Developed with <Heart className="text-[#ffbf00] inline-block animate-pulse w-4 h-4 fill-[#ffbf00]" /> zahraa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;