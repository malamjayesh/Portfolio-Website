"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Import-Export ERP Solution",
      client: "Global Trading Corporation",
      challenge: "Complex multi-country trade operations management",
      solution: "Comprehensive ERP system with customs integration",
      results: [
        "70% faster customs clearance",
        "Real-time shipment tracking", 
        "$8M cost reduction annually",
        "95% compliance accuracy"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      href: "/case-studies/import-export-erp"
    },
    {
      title: "Custom ERP Solution",
      client: "Manufacturing Enterprise",
      challenge: "Streamline operations across multiple departments",
      solution: "Tailored ERP system with advanced analytics",
      results: [
        "60% improvement in efficiency",
        "Unified data management",
        "Real-time reporting dashboard",
        "50+ departments integrated"
      ],
      tech: ["Next.js", "Python", "MongoDB", "Redis", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      href: "/case-studies/custom-erp-solution"
    },
    {
      title: "E-commerce Marketplace",
      client: "Multi-billion Dollar Retailer",
      challenge: "Global marketplace with complex logistics",
      solution: "Scalable microservices with real-time inventory",
      results: [
        "300% increase in GMV",
        "10M+ concurrent users supported",
        "45% improvement in conversion",
        "Global expansion to 25 countries"
      ],
      tech: ["Next.js", "GraphQL", "AWS", "MongoDB", "ElasticSearch"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      href: "/case-studies/financial-dashboard"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              Case <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Studies</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            >
              Real projects, real impact. See how we've helped enterprises and startups achieve breakthrough results.
            </motion.p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-12 sm:space-y-14 md:space-y-16">
              {caseStudies.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Badge variant="secondary" className="mb-4">{project.client}</Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{project.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{project.challenge}</p>
                    <p className="text-base sm:text-lg mb-6 sm:mb-8">{project.solution}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild className="group">
                      <Link href={project.href}>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}