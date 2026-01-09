"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Target, TrendingUp, Globe, Truck, FileText, BarChart3, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImportExportERP() {
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
                Import-Export ERP Solution
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Streamlining global trade operations with comprehensive ERP integration
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
                  <div className="font-semibold">Global Trading Corp</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                  <div className="font-semibold">24 Weeks</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Industry</div>
                  <div className="font-semibold">International Trade</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Global Trading Corp was managing import-export operations across 15 countries using 
                fragmented systems. Manual processes led to customs delays, compliance issues, and 
                lack of real-time visibility into shipment status. The company needed a unified 
                platform to handle complex multi-country trade regulations and documentation.
              </p>

              {/* <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Key Pain Points</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• 48-hour average customs clearance delays</li>
                    <li>• 15% compliance violation rate</li>
                    <li>• Manual document processing</li>
                    <li>• No real-time shipment tracking</li>
                    <li>• Fragmented data across systems</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">Business Impact</h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• $2M annual losses from delays</li>
                    <li>• 30% increase in operational costs</li>
                    <li>• Customer satisfaction declining</li>
                    <li>• Regulatory compliance risks</li>
                    <li>• Limited scalability for growth</li>
                  </ul>
                </div>
              </div> */}

              <h2 className="text-3xl font-bold mb-6 mt-12">Our Solution</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Multi-Country Trade Management</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built a comprehensive ERP system with country-specific trade regulations, 
                      automated customs documentation, and real-time compliance monitoring across 
                      all operational territories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Integrated Logistics Platform</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed end-to-end shipment tracking with carrier integrations, automated 
                      notifications, and predictive delivery analytics to optimize supply chain operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Automated Documentation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implemented intelligent document generation for customs forms, certificates of 
                      origin, and commercial invoices with automatic validation and digital signatures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Advanced Analytics Dashboard</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Created comprehensive reporting system with trade analytics, cost optimization 
                      insights, and performance metrics to drive data-driven decision making.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Customs Compliance Engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">Real-time Shipment Tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-medium">Automated Document Generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Trade Analytics & Reporting</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-medium">Multi-Currency Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="font-medium">Carrier Integration Hub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-medium">Risk Assessment Tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Cost Optimization Engine</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis', 'GraphQL', 'TypeScript'].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Faster Customs Clearance</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Compliance Accuracy</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$8M</div>
                  <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Real-time Visibility</div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-2xl p-8">
                <div className="text-lg font-semibold mb-3">Client Testimonial</div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "Flexa Digital's ERP solution revolutionized our import-export operations. We now have 
                  complete visibility into our global supply chain, and customs clearance times have 
                  improved dramatically. The ROI was evident within the first quarter of implementation."
                </p>
                <div className="font-semibold">— Robert Chen, COO at Global Trading Corp</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom ERP Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can streamline your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get a Free Consultation
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