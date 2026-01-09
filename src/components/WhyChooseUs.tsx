"use client";

import { Zap, Eye, DollarSign, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Delivery Discipline",
      description: "Weekly demos, clear sprint goals and a single roadmap everyone understands."
    },
    {
      icon: Eye,
      title: "Outcome Orientation",
      description: "We don't ship features — we ship measurable business outcomes."
    },
    {
      icon: DollarSign,
      title: "Tech Maturity",
      description: "Modern stacks + automated tests = lower maintenance and faster iteration."
    },
    {
      icon: Headphones,
      title: "Full-Stack Partner",
      description: "Design → Engineering → Growth → Support. End-to-end product delivery."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Why Clients Choose FlexaDigital
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Proof-driven partnerships that deliver real business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300 text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;