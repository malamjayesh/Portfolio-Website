"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp, Target, BarChart } from "lucide-react";
import Link from "next/link";

export default function SEOGrowth() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Growth & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SEO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Data-driven acquisition: technical SEO, content strategy and paid funnels that lift conversion velocity.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Technical SEO",
                  description: "Site speed optimization, mobile-friendliness, structured data and Core Web Vitals"
                },
                {
                  title: "Keyword Research",
                  description: "In-depth keyword analysis to find high-intent, low-competition opportunities"
                },
                {
                  title: "Content Strategy",
                  description: "SEO-optimized content calendar with blog posts, guides and landing pages"
                },
                {
                  title: "Link Building",
                  description: "High-quality backlinks from authoritative domains to boost rankings"
                },
                {
                  title: "PPC Campaigns",
                  description: "Google Ads and social media advertising for immediate traffic and leads"
                },
                {
                  title: "Analytics & Reporting",
                  description: "Monthly reports tracking traffic, rankings, conversions and ROI"
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
            <h2 className="text-4xl font-bold text-center mb-12">Our Growth Process</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Audit & Strategy",
                  description: "Comprehensive SEO audit and custom growth strategy based on your goals"
                },
                {
                  icon: Search,
                  title: "Optimization",
                  description: "Technical fixes, content optimization and on-page SEO improvements"
                },
                {
                  icon: TrendingUp,
                  title: "Content & Links",
                  description: "High-quality content creation and strategic link building campaigns"
                },
                {
                  icon: BarChart,
                  title: "Track & Improve",
                  description: "Continuous monitoring, A/B testing and data-driven optimization"
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
            <h2 className="text-4xl font-bold text-center mb-12">Average Results</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { metric: "3x", label: "Organic Traffic Growth" },
                { metric: "150%", label: "Lead Quality Improvement" },
                { metric: "Top 5", label: "Keyword Rankings" }
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
            <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Organic Traffic?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and custom growth strategy for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Growth Results
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