"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HealthFitnessApp() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-accent mb-4"
              >
                Case Study
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Health & Fitness Mobile App
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Building a cross-platform fitness app with 100K+ downloads
              </motion.p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Client</div>
                  <div className="font-semibold">FitLife Pro</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                  <div className="font-semibold">20 Weeks</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Platform</div>
                  <div className="font-semibold">iOS & Android</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                FitLife Pro wanted to create a comprehensive fitness app that could track workouts, 
                provide meal plans, and offer social features—all while working offline and syncing 
                seamlessly across devices.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Key Features</h2>
              <ul className="space-y-3 mb-12">
                {[
                  "Workout tracking with exercise library and video tutorials",
                  "Personalized meal plans with calorie tracking",
                  "Social features: friend challenges and leaderboards",
                  "Offline mode with automatic sync",
                  "Wearable device integration (Apple Watch, Fitbit)",
                  "Push notifications for workout reminders"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['React Native', 'Firebase', 'Redux', 'AWS', 'Node.js', 'MongoDB'].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4.7/5</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">User Retention</div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-2xl p-8">
                <div className="text-lg font-semibold mb-3">Client Testimonial</div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "The team delivered beyond expectations. The app is beautiful, fast, and our users 
                  love it. The offline functionality is a game-changer."
                </p>
                <div className="font-semibold">— Michael Chen, Founder at FitLife Pro</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Mobile App?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build your next great mobile experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/mobile-apps">
                  Mobile App Services
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