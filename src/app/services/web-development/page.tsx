"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield, Smartphone } from "lucide-react";
import Link from "next/link";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="bg-primary/10 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Code className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Web & Product <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Engineering</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
              Modern, maintainable websites and SaaS platforms built with React, Next.js and serverless architectures—fast, secure and SEO-ready.
            </p>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">What We Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Corporate Websites",
                  description: "Professional, SEO-optimized websites that represent your brand and convert visitors into customers."
                },
                {
                  title: "SaaS Platforms",
                  description: "Scalable cloud applications with subscription management, user dashboards and API integrations."
                },
                {
                  title: "E-Commerce Stores",
                  description: "Complete online stores with payment processing, inventory management and order tracking."
                },
                {
                  title: "Web Applications",
                  description: "Custom web apps with complex workflows, real-time features and database integration."
                },
                {
                  title: "Progressive Web Apps",
                  description: "Fast, installable web apps that work offline and provide native-like experiences."
                },
                {
                  title: "Landing Pages",
                  description: "High-converting landing pages optimized for marketing campaigns and lead generation."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-card transition-all">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 sm:py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized for Core Web Vitals with <1s load times and 90+ Lighthouse scores"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "SSL certificates, secure authentication, data encryption and regular security audits"
                },
                {
                  icon: Smartphone,
                  title: "Mobile First",
                  description: "Responsive design that works perfectly on all devices and screen sizes"
                },
                {
                  icon: Code,
                  title: "Clean Code",
                  description: "Well-documented, maintainable code with automated testing and CI/CD pipelines"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3 sm:gap-4 bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                    <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Tech Stack</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                  { category: "Backend", techs: ["Node.js", "Express", "GraphQL", "PostgreSQL"] },
                  { category: "Cloud & DevOps", techs: ["AWS", "Vercel", "Docker", "GitHub Actions"] }
                ].map((stack, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.techs.map((tech, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Product?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a scalable solution
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
                  View Our Work
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