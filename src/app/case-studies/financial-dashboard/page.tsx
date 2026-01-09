"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinancialDashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6">
            <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                UI/UX Design & Development
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Financial Analytics Dashboard for FinTech Startup
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                Transformed complex financial data into an intuitive, real-time analytics platform that improved decision-making speed by 65%
              </motion.p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Client</div>
                <div className="font-semibold">FinTech Innovations</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Industry</div>
                <div className="font-semibold">Financial Technology</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                <div className="font-semibold">18 weeks</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Team Size</div>
                <div className="font-semibold">6 members</div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                FinTech Innovations, a growing startup in the financial analytics space, was struggling with their existing dashboard. Users complained about slow load times, confusing navigation, and difficulty accessing critical financial metrics. The legacy system was built on outdated technology and couldn't handle real-time data processing efficiently. They needed a complete redesign and rebuild to meet modern standards and user expectations.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Discovery & User Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We conducted in-depth interviews with 15 power users and analyzed usage data to understand pain points. Created detailed user personas and mapped current user journeys to identify friction areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Information Architecture Redesign</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Restructured the entire navigation and data hierarchy based on user mental models. Grouped related features together and created clear pathways to the most-used functions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. UI/UX Design & Prototyping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed a clean, modern interface with data visualization best practices. Created interactive prototypes and conducted usability testing with 20+ users, iterating based on feedback.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Technical Implementation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built the dashboard using React, TypeScript and D3.js for visualizations. Implemented real-time WebSocket connections for live data updates and optimized performance with lazy loading and caching strategies.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['React', 'TypeScript', 'D3.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'].map((tech, index) => (
                  <span key={index} className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { metric: "65%", label: "Faster Decision Making" },
                  { metric: "4x", label: "Improved Load Speed" },
                  { metric: "85%", label: "User Satisfaction Score" }
                ].map((stat, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Key Features Delivered</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Real-time data visualization with interactive charts and graphs",
                  "Customizable dashboards with drag-and-drop widgets",
                  "Advanced filtering and data segmentation capabilities",
                  "Automated report generation and scheduled exports",
                  "Role-based access control and audit logging",
                  "Mobile-responsive design for on-the-go access"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-secondary border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-lg italic mb-4">
                  "FlexaDigital completely transformed how our team works with data. The new dashboard is not only beautiful but incredibly functional. Our analysts can now access insights in seconds that used to take minutes to find."
                </p>
                <div className="font-semibold">David Wilson</div>
                <div className="text-sm text-muted-foreground">Product Manager, FinTech Innovations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Have a Similar Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your data into actionable insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View More Case Studies
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