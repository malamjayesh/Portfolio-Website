"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/flexa-digital.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationConfig, isActiveRoute } from "@/config/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={logo.src} alt="Flexa Digital" className="h-10 sm:h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Home Link First */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActiveRoute(pathname, "/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      {navigationConfig.services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link 
                                href={service.href} 
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                              >
                                <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                  {Icon && <Icon className="h-4 w-4" />}
                                  {service.title}
                                </div>
                                {service.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Nav Items */}
            {navigationConfig.mainNav
              .filter(item => item.title !== "Services" && item.title !== "Home")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActiveRoute(pathname, item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-card/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 space-y-4 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
            >
              {/* Home Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                <Link
                  href="/"
                  className={`block text-base font-medium transition-colors py-2 ${
                    isActiveRoute(pathname, "/")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services Submenu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="border-b border-border pb-4"
              >
                <div className="text-base font-medium text-foreground mb-3">Services</div>
                <div className="space-y-2 pl-4">
                  {navigationConfig.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

              {/* Other Nav Items */}
              {navigationConfig.mainNav
                .filter(item => item.title !== "Services" && item.title !== "Home")
                .map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 2) * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-base font-medium transition-colors py-2 ${
                        isActiveRoute(pathname, item.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;