"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationConfig } from "@/config/navigation";
import { useEffect, useRef, useState } from "react";

const ServicesSlider = () => {
  const services = navigationConfig.services.filter(s => s.title !== "All Services");
  const [items, setItems] = useState([...services, ...services]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollSpeed = 1;

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setScrollPosition(prev => {
          const newPosition = prev + scrollSpeed;
          const itemWidth = 320 + 32; // w-80 + gap
          const resetPoint = services.length * itemWidth;
          
          if (newPosition >= resetPoint) {
            setItems(prevItems => [...prevItems, ...services]);
            return newPosition - resetPoint;
          }
          return newPosition;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, services.length]);

  return (
    <section id="services" className="py-20 bg-secondary/30 overflow-hidden relative">
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          <div 
            className="flex space-x-8"
            style={{ transform: `translateX(${-scrollPosition}px)` }}
          >
            {items.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={`${service.href}-${index}`}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="flex-shrink-0 w-80"
                >
                  <motion.div 
                    className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-glow transition-all duration-500 relative overflow-hidden group"
                    whileHover={{ borderColor: "hsl(var(--primary))" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                    
                    <div className="relative z-10">
                      {Icon && (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary" />
                        </motion.div>
                      )}
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <Button variant="outline" className="group/btn w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                        <Link href={service.href}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;