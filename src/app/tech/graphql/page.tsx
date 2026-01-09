"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, CheckCircle2, Rocket, Award, Database, Link2, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const GraphQL = () => {
  const features = [
    { title: "Type Safety", description: "Strongly typed schema for reliable APIs", icon: Shield },
    { title: "Real-time Updates", description: "Subscriptions for live data synchronization", icon: Zap },
    { title: "Federation", description: "Microservices architecture with unified graph", icon: Link2 },
    { title: "Efficient Caching", description: "Smart caching strategies for optimal performance", icon: Database },
    { title: "Single Endpoint", description: "One endpoint for all data requirements", icon: CheckCircle2 },
    { title: "Developer Tools", description: "GraphQL Playground and introspection", icon: Rocket }
  ];

  const stats = [
    { number: "120+", label: "GraphQL Projects", icon: Rocket },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "50%", label: "Less Data Transfer", icon: Zap },
    { number: "Real-time", label: "Data Updates", icon: Database }
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
                GraphQL APIs - Latest
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">GraphQL</span>
                <br />
                <span className="text-foreground">APIs</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Efficient data fetching layer for modern applications
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 + index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                      <Icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-pink-500 mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-8 py-6 rounded-full hover:shadow-glow transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Explore GraphQL
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">GraphQL Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern API architecture for efficient data management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all">
                    <Icon className="w-12 h-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-pink-500 to-purple-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Ready for GraphQL?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Build efficient, type-safe APIs with GraphQL
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-pink-600 text-lg px-8 py-6 rounded-full hover:shadow-glow" asChild>
                  <Link href="/contact">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10" asChild>
                  <Link href="/tech-stack?category=backend">
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

export default GraphQL;