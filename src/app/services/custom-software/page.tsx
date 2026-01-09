"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cog, Users } from "lucide-react";
import Link from "next/link";

export default function CustomSoftware() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Custom <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Software</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Enterprise integrations, CRM/ERP modules, dashboards and automation that reduce manual work and errors.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Custom Solutions We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "ERP Systems",
                  description: "Enterprise resource planning systems for inventory, finance and operations management"
                },
                {
                  title: "CRM Platforms",
                  description: "Customer relationship management tools to track leads, deals and customer interactions"
                },
                {
                  title: "HR Management",
                  description: "Employee management, payroll, attendance tracking and performance review systems"
                },
                {
                  title: "Custom Dashboards",
                  description: "Real-time analytics dashboards with data visualization and reporting"
                },
                {
                  title: "Workflow Automation",
                  description: "Automated workflows to reduce manual tasks and improve efficiency"
                },
                {
                  title: "API Integrations",
                  description: "Connect multiple systems and automate data flow between platforms"
                }
              ].map((solution, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all">
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Benefits of Custom Software</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Cog,
                  title: "Tailored to Your Needs",
                  description: "Built specifically for your business processes and requirements"
                },
                {
                  icon: Users,
                  title: "Competitive Advantage",
                  description: "Unique features that set you apart from competitors"
                },
                {
                  icon: Database,
                  title: "Scalable Architecture",
                  description: "Grows with your business without costly replacements"
                },
                {
                  icon: Code,
                  title: "Full Ownership",
                  description: "You own the code and can modify it anytime"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 bg-background border border-border rounded-2xl p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
            <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Discovery", desc: "Understand requirements" },
                { step: "2", title: "Design", desc: "Plan architecture" },
                { step: "3", title: "Develop", desc: "Build features" },
                { step: "4", title: "Test", desc: "Quality assurance" },
                { step: "5", title: "Deploy", desc: "Launch & support" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Custom Software?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a solution that fits perfectly
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
                  View Case Studies
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