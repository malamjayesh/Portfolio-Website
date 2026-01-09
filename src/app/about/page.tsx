"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            >
              Building exceptional digital solutions for over 5 years
            </motion.p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Product People. Technology Experts. Partners in Growth.</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  FlexaDigital is a compact, cross-disciplinary product studio that partners with founders 
                  and enterprise teams to design, build and scale digital products. We combine strategic 
                  product discovery, refined UX practices and reliable engineering to turn ideas into 
                  revenue-generating experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines technical excellence with user-centered design, ensuring 
                  that every project we deliver not only meets but exceeds expectations.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">5+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-background border border-border rounded-2xl p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build honest, scalable digital products that deliver measurable business value.
                </p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the go-to engineering partner for startups and growth-stage companies that 
                  want predictable outcomes and fast iteration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Craftsmanship",
                  description: "Every line of code, every design element is crafted with precision and care."
                },
                {
                  title: "Transparency",
                  description: "Clear communication, visible progress and honest expectations throughout every project."
                },
                {
                  title: "Empathy",
                  description: "We listen deeply to understand your users and business needs before we build."
                },
                {
                  title: "Measurable Outcomes",
                  description: "We track KPIs and measure real business impact—not just feature delivery."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300 text-center"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                5 Years of Innovation
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                From startup to industry leader - our growth story
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              
              {[
                { year: "2020", title: "Founded", desc: "Started with 2 developers", metric: "2 Team Members" },
                { year: "2021", title: "First Enterprise Client", desc: "Landed Fortune 10 contract", metric: "50+ lakhs revenue" },
                { year: "2022", title: "Global Expansion", desc: "Opened offices in 3 countries", metric: "10+ Projects" },
                { year: "2023", title: "AI Integration", desc: "Launched AI-powered solutions", metric: "20+ Projects" },
                { year: "2024", title: "Industry Leader", desc: "Recognized as top digital agency", metric: "30+ Projects" }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mb-3">{milestone.desc}</p>
                      <div className="text-sm font-bold text-accent">{milestone.metric}</div>
                    </motion.div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}