"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, ShoppingCart, Heart, Wallet, GraduationCap, Truck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MarketsOverview() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Industries We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Serve</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Deep expertise across multiple industries, delivering tailored digital solutions that drive business growth
            </motion.p>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: ShoppingCart,
                  title: "E-Commerce & Retail",
                  description: "Custom e-commerce platforms, marketplaces, inventory management and omnichannel experiences that increase conversions and customer loyalty.",
                  color: "text-blue-500"
                },
                {
                  icon: Wallet,
                  title: "FinTech & Banking",
                  description: "Secure payment systems, mobile banking apps, financial dashboards and compliance-ready solutions for modern financial services.",
                  color: "text-green-500"
                },
                {
                  icon: Heart,
                  title: "Healthcare & Wellness",
                  description: "HIPAA-compliant patient portals, telemedicine platforms, health tracking apps and clinic management systems.",
                  color: "text-red-500"
                },
                {
                  icon: GraduationCap,
                  title: "Education & E-Learning",
                  description: "Learning management systems, online course platforms, student portals and educational content delivery solutions.",
                  color: "text-purple-500"
                },
                {
                  icon: Building2,
                  title: "Real Estate & PropTech",
                  description: "Property listing platforms, virtual tours, CRM systems and smart building management solutions.",
                  color: "text-orange-500"
                },
                {
                  icon: Truck,
                  title: "Logistics & Supply Chain",
                  description: "Fleet management, warehouse automation, delivery tracking and supply chain optimization platforms.",
                  color: "text-cyan-500"
                }
              ].map((market, index) => {
                const Icon = market.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${market.color}`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{market.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{market.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Why Industry Expertise Matters</h2>
              <p className="text-lg text-muted-foreground">
                We don't just build software—we understand the unique challenges, regulations, and opportunities in your industry
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Domain Knowledge",
                  description: "We speak your industry's language and understand your users' needs"
                },
                {
                  title: "Compliance Ready",
                  description: "Built-in security and compliance for regulated industries"
                },
                {
                  title: "Best Practices",
                  description: "Proven patterns and solutions specific to your market"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-background border border-border rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Industry Case Studies
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}