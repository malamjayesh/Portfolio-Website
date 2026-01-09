"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Bell, Wifi, Battery } from "lucide-react";
import Link from "next/link";

export default function MobileApps() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Mobile App <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Native and cross-platform apps with clean UX, offline support, push notifications and analytics.
            </p>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Platforms We Build For</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "iOS Apps",
                  description: "Native iOS apps using Swift and SwiftUI for iPhone and iPad with App Store optimization."
                },
                {
                  title: "Android Apps",
                  description: "Native Android apps using Kotlin with Material Design and Google Play Store deployment."
                },
                {
                  title: "Cross-Platform",
                  description: "React Native and Flutter apps that work on both iOS and Android from a single codebase."
                }
              ].map((platform, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all text-center">
                  <h3 className="text-xl font-semibold mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">App Features We Implement</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Bell,
                  title: "Push Notifications",
                  description: "Real-time notifications to keep users engaged with personalized messaging"
                },
                {
                  icon: Wifi,
                  title: "Offline Support",
                  description: "Apps that work without internet and sync when connection is restored"
                },
                {
                  icon: Battery,
                  title: "Performance Optimized",
                  description: "Battery-efficient apps with smooth animations and fast load times"
                },
                {
                  icon: Smartphone,
                  title: "Native Features",
                  description: "Camera, GPS, contacts, biometrics and other device capabilities integration"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 bg-background border border-border rounded-2xl p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Requirements analysis and wireframing" },
                { step: "2", title: "Design", desc: "UI/UX design and prototype creation" },
                { step: "3", title: "Development", desc: "Coding, testing and iteration" },
                { step: "4", title: "Launch", desc: "App Store submission and deployment" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's turn your app idea into reality with our expert mobile development team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View App Projects
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