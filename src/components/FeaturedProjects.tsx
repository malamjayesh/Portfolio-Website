"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      slug: "ecommerce-platform",
      description: "Complete redesign and development of a high-traffic e-commerce platform with 300% increase in conversions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      href: "/case-studies/ecommerce-platform"
    },
    {
      title: "Health & Fitness Mobile App",
      category: "Mobile Development",
      slug: "health-fitness-app",
      description: "Cross-platform fitness app with workout tracking, meal planning, and social features with 100K+ downloads",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
      href: "/case-studies/health-fitness-app"
    },
    {
      title: "Financial Analytics Dashboard",
      category: "UI/UX Design",
      slug: "financial-dashboard",
      description: "Real-time analytics platform for FinTech startup that improved decision-making speed by 65%",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      href: "/case-studies/financial-dashboard"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Showcasing our expertise across different domains and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300"
            >
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="text-xs sm:text-sm text-accent mb-2">{project.category}</div>
                <div className="text-xs text-muted-foreground mb-2 sm:mb-3 font-mono">/{project.slug}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link href={project.href}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/case-studies">
              View All Projects
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;