import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Heart, Clock, ArrowUp } from "lucide-react";
export const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Rewards", href: "/rewards" },
  ];

export const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

export const contactInfo = [
    { icon: Heart, text: "Caffiora Coffee Shop", href: "#" },
    { icon: Phone, text: "(968) 9949-5057", href: "tel:+96899495057" },
    { icon: Mail, text: "hello@caffiora.com", href: "mailto:hello@caffiora.com" },
    { icon: MapPin, text: "Muscat, Oman", href: "#" },
  ];

export const openingHours = [
    { days: "Monday – Friday", hours: "8AM – 8PM", isOpen: true },
    { days: "Saturday", hours: "9AM – 4PM", isOpen: true },
    { days: "Sunday", hours: "Closed", isOpen: false },
  ];