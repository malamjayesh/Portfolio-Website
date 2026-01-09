"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, CheckCircle, TrendingUp, Server } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NodeJS = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 pt-32 pb-20">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-8xl">🟢</span>
                <div className="text-left">
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 mb-4">
                    JavaScript Runtime
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-bold">Node.js</h1>
                  <p className="text-xl opacity-90">Server-Side JavaScript</p>
                </div>
              </div>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                High-performance JavaScript runtime for scalable network applications
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">280+</div>
                  <div className="text-sm opacity-80">Projects Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-sm opacity-80">Faster APIs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">96%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">v20+</div>
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
                  title: "Event-Driven Architecture",
                  description: "Non-blocking I/O for high concurrency",
                  icon: "⚡",
                  benefits: ["High performance", "Scalable connections", "Real-time apps"]
                },
                {
                  title: "NPM Ecosystem",
                  description: "Largest package ecosystem available",
                  icon: "📦",
                  benefits: ["1M+ packages", "Active community", "Rapid development"]
                },
                {
                  title: "Microservices Ready",
                  description: "Perfect for distributed architectures",
                  icon: "🔗",
                  benefits: ["Service isolation", "Independent scaling", "Technology diversity"]
                },
                {
                  title: "Modern JavaScript",
                  description: "Latest ES features and async/await",
                  icon: "🚀",
                  benefits: ["ES modules", "Worker threads", "Performance hooks"]
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
                  title: "Performance",
                  description: "Handle thousands of concurrent connections",
                  icon: Zap,
                  metric: "3x faster APIs"
                },
                {
                  title: "Scalability",
                  description: "Horizontal and vertical scaling capabilities",
                  icon: TrendingUp,
                  metric: "Enterprise scale"
                },
                {
                  title: "Development Speed",
                  description: "Rapid prototyping and deployment",
                  icon: Server,
                  metric: "50% faster dev"
                },
                {
                  title: "Cost Efficiency",
                  description: "Lower infrastructure costs",
                  icon: CheckCircle,
                  metric: "40% cost savings"
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
        <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with Node.js?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Create high-performance backend systems that scale with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-white/90" asChild>
                <Link href="/contact">
                  Start Your Node.js Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/case-studies">View Node.js Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NodeJS;