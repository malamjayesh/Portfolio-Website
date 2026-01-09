"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Zap, Server } from "lucide-react";
import Link from "next/link";

export default function CloudDevOps() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Cloud & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DevOps</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Secure CI/CD, containerization & autoscaling on AWS/GCP — production reliability with cost efficiency.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "AWS Infrastructure",
                  description: "EC2, Lambda, RDS, S3 and other AWS services setup and management"
                },
                {
                  title: "CI/CD Pipelines",
                  description: "Automated deployment pipelines with GitHub Actions, GitLab CI or Jenkins"
                },
                {
                  title: "Docker & Kubernetes",
                  description: "Containerization and orchestration for scalable microservices architecture"
                },
                {
                  title: "Monitoring & Logging",
                  description: "Comprehensive monitoring with Datadog, New Relic or CloudWatch"
                },
                {
                  title: "Security & Compliance",
                  description: "SSL certificates, security audits, backup strategies and disaster recovery"
                },
                {
                  title: "Cost Optimization",
                  description: "Cloud cost analysis and optimization to reduce infrastructure expenses"
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

        {/* Features */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "99.9% Uptime",
                  description: "Highly available infrastructure with automatic failover and load balancing"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Multi-layer security with encryption, firewalls and regular security patches"
                },
                {
                  icon: Cloud,
                  title: "Auto-Scaling",
                  description: "Automatic resource scaling based on traffic to handle any load"
                },
                {
                  icon: Server,
                  title: "Cost Efficient",
                  description: "Pay only for what you use with optimized resource allocation"
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

        {/* Tech Stack */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Technologies We Work With</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
                { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Terraform", "Ansible"] },
                { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"] }
              ].map((stack, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your infrastructure needs and create a scalable cloud solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tech-stack">
                  View Tech Stack
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