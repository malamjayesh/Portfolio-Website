"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, CheckCircle, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const TypeScript = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 pt-32 pb-20">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-8xl">🔷</span>
                <div className="text-left">
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 mb-4">
                    Programming Language
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-bold">TypeScript</h1>
                  <p className="text-xl opacity-90">Type-Safe JavaScript</p>
                </div>
              </div>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Enterprise-scale JavaScript with static type definitions for better code quality
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">250+</div>
                  <div className="text-sm opacity-80">Projects Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-sm opacity-80">Fewer Bugs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">v5+</div>
                  <div className="text-sm opacity-80">Latest Version</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Static Type Checking",
                  description: "Catch errors at compile time, not runtime",
                  icon: "🛡️",
                  benefits: ["Early error detection", "Better IDE support", "Safer refactoring"]
                },
                {
                  title: "Advanced Types",
                  description: "Generics, unions, and conditional types",
                  icon: "🧩",
                  benefits: ["Type inference", "Generic constraints", "Mapped types"]
                },
                {
                  title: "Enterprise Ready",
                  description: "Built for large-scale applications",
                  icon: "🏢",
                  benefits: ["Strict mode", "Module resolution", "Declaration files"]
                },
                {
                  title: "Developer Experience",
                  description: "Enhanced tooling and IntelliSense",
                  icon: "⚡",
                  benefits: ["Auto-completion", "Refactoring tools", "Error highlighting"]
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
                  title: "Code Quality",
                  description: "Higher quality, more maintainable code",
                  icon: Shield,
                  metric: "50% fewer bugs"
                },
                {
                  title: "Developer Productivity",
                  description: "Better tooling and faster development",
                  icon: Zap,
                  metric: "30% faster coding"
                },
                {
                  title: "Scalability",
                  description: "Handles large codebases effectively",
                  icon: TrendingUp,
                  metric: "Enterprise scale"
                },
                {
                  title: "Team Collaboration",
                  description: "Self-documenting code with types",
                  icon: CheckCircle,
                  metric: "Better teamwork"
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
        <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with TypeScript?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Create robust, type-safe applications with enterprise-grade reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <Link href="/contact">
                  Start Your TypeScript Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/case-studies">View TypeScript Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TypeScript;