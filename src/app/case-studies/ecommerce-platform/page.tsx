"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EcommercePlatform() {
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
                E-Commerce Platform Redesign
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                How we increased sales by 300% with a complete platform rebuild
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
                  <div className="font-semibold">RetailX Inc.</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                  <div className="font-semibold">16 Weeks</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Industry</div>
                  <div className="font-semibold">E-Commerce</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                RetailX was experiencing high cart abandonment rates (43%) and struggling with a slow, 
                outdated platform that couldn't scale during peak shopping seasons. Their legacy system 
                was costing them thousands in lost sales every month.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Our Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Research & Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We conducted user interviews, analyzed analytics data, and identified key pain points 
                    in the checkout flow. Heat maps revealed where users were dropping off.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Architecture Redesign</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rebuilt the entire platform using Next.js for optimal performance, implemented 
                    serverless architecture for scalability, and integrated with Stripe for secure payments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. UX Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simplified the checkout process from 5 steps to 3, added guest checkout option, 
                    and implemented real-time inventory updates to prevent order failures.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Vercel'].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300%</div>
                  <div className="text-sm text-muted-foreground">Sales Increase</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Page Load</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">28%</div>
                  <div className="text-sm text-muted-foreground">Lower Abandonment</div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-2xl p-8">
                <div className="text-lg font-semibold mb-3">Client Testimonial</div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "FlexaDigital transformed our business. The new platform not only looks amazing but 
                  performs incredibly well. Our sales have tripled and our customers love the seamless 
                  checkout experience."
                </p>
                <div className="font-semibold">— Sarah Johnson, CEO at RetailX</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Similar Results?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business
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
                  More Case Studies
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