"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Users, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

export default function UIUXDesign() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Palette className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              UI/UX <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Design</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Human-centered design, user journeys, rapid prototypes, accessibility-first interfaces that convert.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Design Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "User Research",
                  description: "Deep user interviews, surveys and usability testing to understand real needs"
                },
                {
                  title: "User Flows & Wireframes",
                  description: "Clear navigation paths and low-fidelity wireframes for validation"
                },
                {
                  title: "Visual Design",
                  description: "Beautiful, modern interfaces that align with your brand identity"
                },
                {
                  title: "Prototyping",
                  description: "Interactive prototypes to test and validate design decisions"
                },
                {
                  title: "Design Systems",
                  description: "Scalable component libraries and style guides for consistency"
                },
                {
                  title: "Accessibility",
                  description: "WCAG compliant designs that work for everyone"
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

        {/* Design Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Design Process</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Understand Users",
                  description: "Research, interviews and user personas to identify real problems and needs"
                },
                {
                  icon: Lightbulb,
                  title: "Ideate Solutions",
                  description: "Brainstorming sessions, sketches and multiple design concepts"
                },
                {
                  icon: Palette,
                  title: "Design & Prototype",
                  description: "High-fidelity mockups and interactive prototypes for validation"
                },
                {
                  icon: Target,
                  title: "Test & Iterate",
                  description: "Usability testing, feedback collection and continuous improvement"
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

        {/* Tools */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Design Tools We Use</h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Notion', 'FigJam', 'Maze'].map((tool, index) => (
                  <div key={index} className="bg-card border border-border px-6 py-3 rounded-full text-sm font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Better User Experiences?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's design interfaces that your users will love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get a Free UX Audit
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Design Work
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