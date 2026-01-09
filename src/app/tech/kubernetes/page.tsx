"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, CheckCircle2, Rocket, Award, Layers, Shield, Zap, Cloud } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Kubernetes = () => {
  const features = [
    { title: "Microservices", description: "Container-based microservices architecture", icon: Layers },
    { title: "Auto-scaling", description: "Automatic horizontal and vertical scaling", icon: Zap },
    { title: "Load Balancing", description: "Intelligent traffic distribution", icon: Cloud },
    { title: "Service Mesh", description: "Advanced service-to-service communication", icon: CheckCircle2 },
    { title: "Self-healing", description: "Automatic container recovery and restart", icon: Shield },
    { title: "Rolling Updates", description: "Zero-downtime deployments", icon: Rocket }
  ];

  const stats = [
    { number: "180+", label: "K8s Projects", icon: Rocket },
    { number: "97%", label: "Client Satisfaction", icon: Star },
    { number: "90%", label: "Faster Deploy", icon: Zap },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
                <Star className="w-4 h-4 mr-2" />
                Docker & Kubernetes - Latest
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Docker</span>
                <br />
                <span className="text-foreground">& Kubernetes</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Container orchestration at scale for modern applications
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 + index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                      <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-500 mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg px-8 py-6 rounded-full hover:shadow-glow transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Kubernetes
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Kubernetes Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade container orchestration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all">
                    <Icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-blue-500 to-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Ready for Kubernetes?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Scale your applications with container orchestration
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-blue-600 text-lg px-8 py-6 rounded-full hover:shadow-glow" asChild>
                  <Link href="/contact">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10" asChild>
                  <Link href="/tech-stack?category=cloud">
                    <Award className="w-5 h-5 mr-2" />
                    Back to Tech Stack
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kubernetes;