"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Target, TrendingUp, Building2, Users, Database, Workflow, BarChart3, Zap, Shield, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomERPSolution() {
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
                Custom ERP Solution
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Unifying enterprise operations with tailored ERP system and advanced analytics
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
                  <div className="font-semibold">Manufacturing Enterprise</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                  <div className="font-semibold">20 Weeks</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Industry</div>
                  <div className="font-semibold">Manufacturing</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A large manufacturing enterprise with 50+ departments was struggling with disconnected 
                systems, manual processes, and lack of real-time visibility across operations. Each 
                department used different software solutions, leading to data silos, inefficient 
                workflows, and difficulty in making informed business decisions.
              </p>

              {/* <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Operational Challenges</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• 50+ disconnected systems</li>
                    <li>• Manual data entry and reporting</li>
                    <li>• 40% time wasted on redundant tasks</li>
                    <li>• No real-time inventory visibility</li>
                    <li>• Delayed decision-making processes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">Business Impact</h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• $5M annual operational inefficiencies</li>
                    <li>• 25% increase in production costs</li>
                    <li>• Poor resource utilization</li>
                    <li>• Compliance reporting difficulties</li>
                    <li>• Limited scalability for growth</li>
                  </ul>
                </div>
              </div> */}

              <h2 className="text-3xl font-bold mb-6 mt-12">Our Solution</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Unified Enterprise Platform</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed a comprehensive ERP system that integrates all departments including 
                      HR, Finance, Production, Inventory, Sales, and Quality Control into a single 
                      unified platform with role-based access controls.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Automated Workflow Engine</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built intelligent workflow automation for approval processes, inventory management, 
                      production scheduling, and quality control with customizable business rules and 
                      automated notifications.
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
                      Created comprehensive reporting and analytics system with real-time KPI monitoring, 
                      predictive analytics, and customizable dashboards for different management levels.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Data Integration & Migration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Seamlessly migrated data from 50+ legacy systems with zero downtime, implemented 
                      data validation and cleansing processes, and established master data management.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Core Modules</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Human Resources</h3>
                  <p className="text-sm text-muted-foreground">Employee management, payroll, attendance, and performance tracking</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <BarChart3 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Financial Management</h3>
                  <p className="text-sm text-muted-foreground">Accounting, budgeting, cost control, and financial reporting</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Workflow className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Production Planning</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing schedules, resource allocation, and capacity planning</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Database className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Inventory Management</h3>
                  <p className="text-sm text-muted-foreground">Stock control, procurement, supplier management, and warehousing</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Sales & CRM</h3>
                  <p className="text-sm text-muted-foreground">Customer management, order processing, and sales analytics</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Quality Control</h3>
                  <p className="text-sm text-muted-foreground">Quality assurance, compliance tracking, and audit management</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium">Real-time Data Synchronization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-primary" />
                    <span className="font-medium">Modular Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Role-based Access Control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Advanced Reporting Engine</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Workflow className="h-5 w-5 text-primary" />
                    <span className="font-medium">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-primary" />
                    <span className="font-medium">Master Data Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Audit Trail & Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Predictive Analytics</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['Next.js', 'Python', 'MongoDB', 'Redis', 'Kubernetes', 'Docker', 'GraphQL', 'TypeScript'].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Departments Integrated</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Real-time Visibility</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$6M</div>
                  <div className="text-sm text-muted-foreground">Annual Savings</div>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-2xl p-8">
                <div className="text-lg font-semibold mb-3">Client Testimonial</div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "The custom ERP solution from Flexa Digital has transformed our entire organization. 
                  We now have unified data across all departments, automated workflows have eliminated 
                  manual errors, and our decision-making is faster and more informed. The ROI exceeded 
                  our expectations within the first year."
                </p>
                <div className="font-semibold">— Maria Rodriguez, CIO at Manufacturing Enterprise</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how a custom ERP solution can streamline your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View All Case Studies
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