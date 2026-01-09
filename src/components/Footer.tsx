"use client";

import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram,
  Facebook,
  Linkedin,
  Award,
  Shield,
  Zap,
  Globe,
  Send
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/flexa-digital.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/50 to-background border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-4">Stay Updated</Badge>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Get the latest insights & updates
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Join 10,000+ tech leaders getting our weekly newsletter with industry insights, 
                case studies, and exclusive content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-card/50 border-border"
                />
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  Subscribe
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. Read our privacy policy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img src={logo.src} alt="Flexa Digital" className="h-10 sm:h-12 w-auto" />
              </Link>
              {/* <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                We're a product studio that builds exceptional digital experiences. 
                From startups to Fortune 500 companies, we deliver scalable solutions 
                that drive real business results.
              </p> */}
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span>malamj001@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span>+91 9773459630</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>B-623 RK Iconic, Shital Park Rajkot,<br className="hidden sm:block" /> Gujarat 360006, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/flexadigital.in/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/flexadigital", label: "LinkedIn" },
                  { icon: FaWhatsapp, href: "https://wa.me/99795834289", label: "WhatsApp" }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-card/50 hover:bg-primary/20 border border-border hover:border-primary/50 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigationConfig.footerNav.services.map((item) => (
                  <li key={item.href + item.title}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigationConfig.footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Contact */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Resources</h4>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {navigationConfig.footerNav.contact.map((item) => (
                  <li key={item.href + item.title}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Certifications */}
              {/* <div>
                <h5 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Award, label: "ISO 27001" },
                    { icon: Shield, label: "SOC 2" },
                    { icon: Zap, label: "AWS Partner" }
                  ].map((cert) => {
                    const Icon = cert.icon;
                    return (
                      <Badge key={cert.label} variant="outline" className="text-xs bg-card/30">
                        <Icon className="h-3 w-3 mr-1" />
                        {cert.label}
                      </Badge>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-card/20">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                <p>© 2020 FlexaDigital. All rights reserved.</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                  <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="hidden sm:inline">Serving 5+ countries worldwide</span>
                  <span className="sm:hidden">Global Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;