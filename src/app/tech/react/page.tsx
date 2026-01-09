"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Zap, CheckCircle, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ReactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 pt-32 pb-20">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-8xl">⚛️</span>
                <div className="text-left">
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 mb-4">
                    Frontend Framework
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-bold">React.js</h1>
                  <p className="text-xl opacity-90">Component-based UI Library</p>
                </div>
              </div>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Building interactive user interfaces with the world's most popular frontend library
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">300+</div>
                  <div className="text-sm opacity-80">Projects Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-sm opacity-80">Faster Development</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "React Hooks",
                  description: "Modern state management with useState, useEffect, and custom hooks",
                  icon: "🎣",
                  benefits: ["Cleaner Code", "Better Performance", "Reusable Logic"]
                },
                {
                  title: "Component Architecture",
                  description: "Scalable component design patterns for enterprise applications",
                  icon: "🧩",
                  benefits: ["Modular Design", "Easy Testing", "Code Reusability"]
                },
                {
                  title: "Performance Optimization",
                  description: "React.memo, useMemo, and Suspense for optimal performance",
                  icon: "⚡",
                  benefits: ["Faster Rendering", "Lazy Loading", "Code Splitting"]
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Faster Development",
                  description: "Component reusability speeds up development cycles",
                  icon: Zap,
                  metric: "40% faster delivery"
                },
                {
                  title: "Better UX",
                  description: "Smooth interactions and responsive interfaces",
                  icon: Star,
                  metric: "85% user satisfaction"
                },
                {
                  title: "Scalable Growth",
                  description: "Architecture that grows with your business",
                  icon: TrendingUp,
                  metric: "Unlimited scaling"
                },
                {
                  title: "Strong Ecosystem",
                  description: "Vast library ecosystem and community support",
                  icon: Users,
                  metric: "200M+ downloads/week"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="text-lg font-bold text-accent">{benefit.metric}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with React?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Let's create exceptional user experiences that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" asChild>
                <Link href="/contact">
                  Start Your React Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/case-studies">View React Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReactPage;