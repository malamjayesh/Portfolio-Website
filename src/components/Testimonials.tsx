"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "FlexaDigital turned an idea into a growing product in 14 weeks. Their discipline and communication made the difference.",
      author: "Asha Patel",
      position: "Founder",
      company: "HealthKit"
    },
    {
      quote: "We saw a 3x lift in lead quality after their SEO and funnel work.",
      author: "Karan Mehta",
      position: "Head of Marketing",
      company: "RetailX"
    },
    {
      quote: "Reliable delivery, strong engineering and zero surprises—highly recommended.",
      author: "Rahul Singh",
      position: "CTO",
      company: "FinSolve"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">What Our Clients Say</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            Real projects. Real outcomes. Real partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-3 sm:mb-4" />
              </motion.div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-base sm:text-lg">{testimonial.author}</h4>
                <p className="text-xs sm:text-sm text-accent">{testimonial.position}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Companies */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Trusted by Growing Businesses</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 md:gap-8 items-center opacity-60">
            {['HealthKit', 'RetailX', 'FinSolve', 'CloudNine', 'DataFlow', 'BrandWorks', 'InnovateCo', 'TechVentures'].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-center text-xs sm:text-sm font-semibold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;