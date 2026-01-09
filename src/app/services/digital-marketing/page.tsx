"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, BarChart } from "lucide-react";
import Link from "next/link";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Digital <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive digital marketing solutions to grow your brand and reach your target audience with data-driven strategies.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Marketing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Social Media Marketing",
                  description: "Strategic campaigns across Facebook, Instagram, LinkedIn and Twitter to build brand awareness"
                },
                {
                  title: "Content Marketing",
                  description: "High-quality blog posts, videos and infographics that engage and convert your audience"
                },
                {
                  title: "Email Marketing",
                  description: "Automated email sequences and newsletters that nurture leads and drive sales"
                },
                {
                  title: "PPC Advertising",
                  description: "Google Ads, Facebook Ads and retargeting campaigns with high ROI"
                },
                {
                  title: "Influencer Marketing",
                  description: "Partner with relevant influencers to expand reach and build credibility"
                },
                {
                  title: "Analytics & Reporting",
                  description: "Track performance metrics and optimize campaigns for maximum results"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Marketing Process</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Strategy & Planning",
                  description: "Define goals, target audience and create comprehensive marketing roadmap"
                },
                {
                  icon: Users,
                  title: "Content Creation",
                  description: "Develop engaging content across multiple channels and formats"
                },
                {
                  icon: TrendingUp,
                  title: "Campaign Execution",
                  description: "Launch and manage campaigns with continuous optimization"
                },
                {
                  icon: BarChart,
                  title: "Analysis & Reporting",
                  description: "Monitor performance, analyze data and refine strategies for better ROI"
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="flex gap-4 bg-background border border-border rounded-2xl p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Average Campaign Results</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { metric: "250%", label: "Increase in Social Engagement" },
                { metric: "5x", label: "Return on Ad Spend" },
                { metric: "180%", label: "Growth in Lead Generation" }
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Brand?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a custom marketing strategy that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get Free Marketing Audit
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Success Stories
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