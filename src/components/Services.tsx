"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: "web-dev",
      title: "Web & Product Engineering",
      description: "Modern, maintainable websites and SaaS platforms built with React, Next.js and serverless architectures—fast, secure and SEO-ready.",
      link: "/solutions"
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      description: "Native and cross-platform apps with clean UX, offline support, push notifications and analytics.",
      link: "/solutions"
    },
    {
      id: "ui-ux",
      title: "UI / UX Design",
      description: "Human-centered design, user journeys, rapid prototypes, accessibility-first interfaces that convert.",
      link: "/solutions"
    },
    {
      id: "growth",
      title: "Growth & SEO",
      description: "Data-driven acquisition: technical SEO, content strategy and paid funnels that lift conversion velocity.",
      link: "/solutions"
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      description: "Secure CI/CD, containerization & autoscaling on AWS/GCP — production reliability with cost efficiency.",
      link: "/solutions"
    },
    {
      id: "custom",
      title: "Custom Software",
      description: "Enterprise integrations, CRM/ERP modules, dashboards and automation that reduce manual work and errors.",
      link: "/solutions"
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <Button variant="outline" className="group w-full sm:w-auto" asChild>
                <Link href={service.link}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;