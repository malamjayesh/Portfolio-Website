"use client";

import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoSSR from "@/components/NoSSR";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Globe,
  Code,
  Smartphone,
  Palette,
  Search,
  Cloud,
  BarChart3,
  MessageSquare,
  Calendar,
  Play,
  TrendingUp,
  Target,
  Rocket,
  Building2,
  Clock,
  DollarSign,
  Lightbulb,
  Database,
  Lock,
  Headphones,
  GitBranch,
  Monitor,
  Layers,
  Cpu,
  Workflow,
  ChevronRight,
  ExternalLink,
  Download,
  FileText,
  Video,
  Briefcase
} from "lucide-react";
import heroGlobe from "@/assets/hero-coding.svg";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const enterpriseStats = [
    { number: "30+", label: "Enterprise Projects", sublabel: "Fortune 500 & Startups", icon: Building2 },
    { number: "99.9%", label: "Uptime Guarantee", sublabel: "SLA Compliance", icon: Shield },
    { number: "24/7", label: "Global Support", sublabel: "Multi-timezone Coverage", icon: Headphones },
    // { number: "$50M+", label: "Revenue Generated", sublabel: "For Our Clients", icon: DollarSign }
  ];

  const techStack = [
    { name: "React/Next.js", category: "Frontend", icon: Code, expertise: "Expert" },
    { name: "Node.js/Python", category: "Backend", icon: Database, expertise: "Expert" },
    { name: "AWS/Azure/GCP", category: "Cloud", icon: Cloud, expertise: "Expert" },
    { name: "React Native/Flutter", category: "Mobile", icon: Smartphone, expertise: "Expert" },
    { name: "Docker/Kubernetes", category: "DevOps", icon: Layers, expertise: "Expert" },
    { name: "AI/ML Integration", category: "AI", icon: Cpu, expertise: "Advanced" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep-dive analysis of your business goals, user needs, and technical requirements",
      duration: "1-2 weeks",
      deliverables: ["Technical Architecture", "Project Roadmap", "Resource Planning"]
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "User-centered design with interactive prototypes and comprehensive design systems",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, automated testing, and code reviews",
      duration: "8-16 weeks",
      deliverables: ["MVP Development", "Quality Assurance", "Performance Testing"]
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Seamless deployment with monitoring, analytics setup, and post-launch optimization",
      duration: "1-2 weeks",
      deliverables: ["Production Deployment", "Monitoring Setup", "Performance Optimization"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", icon: Award },
    { name: "Google Cloud Professional", icon: Award },
    { name: "Microsoft Azure Expert", icon: Award },
    { name: "ISO 27001 Certified", icon: Shield },
    { name: "SOC 2 Type II Compliant", icon: Lock },
    { name: "GDPR Compliant", icon: Shield }
  ];

  const industries = [
    { name: "FinTech & Banking", projects: "120+", icon: DollarSign },
    { name: "Healthcare & MedTech", projects: "85+", icon: Headphones },
    { name: "E-commerce & Retail", projects: "150+", icon: Building2 },
    { name: "SaaS & Enterprise", projects: "200+", icon: Monitor },
    { name: "Education & EdTech", projects: "60+", icon: FileText },
    { name: "Real Estate & PropTech", projects: "45+", icon: Globe }
  ];

  const caseStudyHighlights = [
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

  const testimonialsFeatured = [
    {
      name: "David Chen",
      role: "CTO",
      company: "TechCorp (Series C Startup)",
      content: "Flexa Digital didn't just build our platform - they architected our entire technical foundation for scale. Their team's expertise in microservices and cloud architecture helped us handle 10x growth without breaking a sweat. The ROI has been phenomenal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      metrics: ["10x user growth", "$50M Series C raised", "99.9% uptime"],
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "VP of Engineering",
      company: "HealthTech Solutions (Fortune 500)",
      content: "Working with Flexa Digital was transformational. They modernized our legacy healthcare platform while maintaining HIPAA compliance and zero downtime. Their attention to security and scalability is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      metrics: ["Zero security incidents", "500% performance boost", "HIPAA compliant"],
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Digital Officer",
      company: "RetailGiant (Fortune 100)",
      content: "Flexa Digital delivered our omnichannel e-commerce platform ahead of schedule and under budget. The platform now processes $2B+ in annual transactions with sub-second response times. Exceptional team and results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      metrics: ["$2B+ transactions", "Sub-second response", "40% cost reduction"],
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              We build digital products that grow businesses
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
            >
              Product-led design. Scalable engineering. Clear results. From discovery to launch, 
              we deliver robust web and mobile apps that users love and stakeholders measure.
            </motion.p>   
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/case-studies">
                      See Our Work
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4">
              {[
                { number: "30+", label: "Projects Completed", color: "text-primary" },
                { number: "5+", label: "Years Experience", color: "text-accent" },
                { number: "98%", label: "Client Satisfaction", color: "text-primary" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted by Industry Leaders */}
        <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Real websites we've built for our clients across various industries
              </p>
            </motion.div>

            {/* Infinite Scrolling Slider */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll space-x-4 sm:space-x-6 md:space-x-8 hover:pause-animation">
                {[
                  { name: "Vegnar Surfaces", logo: "https://www.google.com/s2/favicons?domain=www.vegnarsurfaces.com&sz=64", fallback: "🏭", industry: "Manufacturing", project: "E-commerce Platform", url: "https://www.vegnarsurfaces.com/" },
                  { name: "Vegnar", logo: "https://www.google.com/s2/favicons?domain=vegnar.com&sz=64", fallback: "🏢", industry: "Corporate", project: "Business Website", url: "https://www.vegnar.com/" },
                  { name: "Vegnar GFRP", logo: "https://www.google.com/s2/favicons?domain=vegnargfrp.com&sz=64", fallback: "🔧", industry: "Industrial", project: "Product Catalog", url: "https://www.vegnargfrp.com/" },
                  { name: "Vegnar Architecture", logo: "https://www.google.com/s2/favicons?domain=vegnararch.com&sz=64", fallback: "🏗️", industry: "Architecture", project: "Portfolio Site", url: "https://www.vegnararch.com/" },
                  { name: "Axocera", logo: "https://www.google.com/s2/favicons?domain=axocera.com&sz=64", fallback: "💻", industry: "Technology", project: "Tech Platform", url: "https://www.axocera.com/" }
                ].concat([
                  { name: "Vegnar Surfaces", logo: "https://www.google.com/s2/favicons?domain=www.vegnarsurfaces.com&sz=64", fallback: "🏭", industry: "Manufacturing", project: "E-commerce Platform", url: "https://www.vegnarsurfaces.com/" },
                  { name: "Vegnar", logo: "https://www.google.com/s2/favicons?domain=vegnar.com&sz=64", fallback: "🏢", industry: "Corporate", project: "Business Website", url: "https://www.vegnar.com/" },
                  { name: "Vegnar GFRP", logo: "https://www.google.com/s2/favicons?domain=vegnargfrp.com&sz=64", fallback: "🔧", industry: "Industrial", project: "Product Catalog", url: "https://www.vegnargfrp.com/" },
                  { name: "Vegnar Architecture", logo: "https://www.google.com/s2/favicons?domain=vegnararch.com&sz=64", fallback: "🏗️", industry: "Architecture", project: "Portfolio Site", url: "https://www.vegnararch.com/" },
                  { name: "Axocera", logo: "https://www.google.com/s2/favicons?domain=axocera.com&sz=64", fallback: "💻", industry: "Technology", project: "Tech Platform", url: "https://www.axocera.com/" }
                ]).map((client, index) => (
                  <motion.div
                    key={`${client.name}-${index}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-gradient-card backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-12 h-12">
                        <img 
                          src={client.logo} 
                          alt={`${client.name} favicon`} 
                          className="w-12 h-12 rounded-lg object-contain bg-white/10 p-2"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'block';
                            }
                          }}
                        />
                        <div className="text-4xl hidden">{client.fallback}</div>
                      </div>
                      <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {client.industry}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                      {client.project}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs" asChild>
                        <a href={client.url} target="_blank" rel="noopener noreferrer">
                          Visit Site
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics Slider */}
            <div className="mt-12 sm:mt-14 md:mt-16 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll-reverse space-x-8 sm:space-x-10 md:space-x-12 hover:pause-animation">
                {[
                  { metric: "10+", label: "Projects Delivered", icon: "🚀" },
                  { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
                  // { metric: "$50M+", label: "Revenue Generated", icon: "💰" },
                  { metric: "24/7", label: "Global Support", icon: "🌍" },
                  { metric: "99.9%", label: "Uptime SLA", icon: "🛡️" },
                  { metric: "15", label: "Team Members", icon: "👥" },
                  { metric: "10+", label: "Countries Served", icon: "🌐" },
                  { metric: "5+", label: "Years Experience", icon: "📈" }
                ].concat([
                  { metric: "10+", label: "Projects Delivered", icon: "🚀" },
                  { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
                  // { metric: "$50M+", label: "Revenue Generated", icon: "💰" },
                  { metric: "24/7", label: "Global Support", icon: "🌍" },
                  { metric: "99.9%", label: "Uptime SLA", icon: "🛡️" },
                  { metric: "15+", label: "Team Members", icon: "👥" },
                  { metric: "10+", label: "Countries Served", icon: "🌐" },
                  { metric: "5+", label: "Years Experience", icon: "📈" }
                ]).map((stat, index) => (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 text-center group cursor-pointer"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                      {stat.metric}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live Project Showcase */}
        <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <Badge variant="outline" className="mb-4">Live Projects</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Real-Time Project Dashboard
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
                See what we're building right now for our clients worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  project: "Import-Export ERP",
                  client: "Trading Corporation",
                  progress: 85,
                  status: "Testing Phase",
                  team: "8 developers",
                  tech: ["React", "Node.js", "AWS"],
                  flag: "🇺🇸"
                },
                {
                  project: "E-commerce Platform",
                  client: "Fortune 500",
                  progress: 60,
                  status: "Development",
                  team: "12 developers",
                  tech: ["Next.js", "Python", "GCP"],
                  flag: "🇬🇧"
                },
                {
                  project: "Custom ERP System",
                  client: "Manufacturing Enterprise",
                  progress: 95,
                  status: "Deployment",
                  team: "6 developers",
                  tech: ["Next.js", "MongoDB", "Azure"],
                  flag: "🇨🇦"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.project}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl">{project.flag}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">LIVE</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.project}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{project.client}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-xs sm:text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium">{project.status}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Team:</span>
                      <span className="font-medium">{project.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 sm:py-20 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Industry Expertise</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Deep Domain Knowledge
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We understand the unique challenges and requirements of different industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                      {/* <Badge variant="secondary" className="text-xs">
                        {industry.projects}
                      </Badge> */}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Case Studies */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <Badge variant="outline" className="mb-4">Success Stories</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Transformational Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
                Real projects, real impact. See how we've helped enterprises and startups achieve breakthrough results.
              </p>
            </motion.div>

            <div className="space-y-12 sm:space-y-14 md:space-y-16">
              {caseStudyHighlights.map((project, index) => (
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
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Map */}
        {/* <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Global Reach</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Worldwide Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Serving clients across 25+ countries with 24/7 support
              </p>
            </motion.div>

            <div className="relative bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  { region: "North America", clients: "150+", flag: "🇺🇸", growth: "+45%" },
                  { region: "Europe", clients: "120+", flag: "🇬🇧", growth: "+60%" },
                  { region: "Asia Pacific", clients: "80+", flag: "🇯🇵", growth: "+85%" },
                  { region: "Others", clients: "50+", flag: "🌍", growth: "+30%" }
                ].map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {region.flag}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {region.region}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">{region.clients}</div>
                    <div className="text-sm text-muted-foreground mb-2">Active Clients</div>
                    <div className="text-sm font-bold text-green-400">{region.growth} YoY</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Time Zones</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">12</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* Enhanced Testimonials */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Trusted by Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Hear from CTOs, VPs of Engineering, and business leaders who've partnered with us
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonialsFeatured.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>

                  <div className="space-y-4 mb-6">
                    {testimonial.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                    <Image 
                      src={testimonial.logo} 
                      alt="Company logo"
                      width={32}
                      height={32}
                      className="h-8 opacity-60"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Proven Methodology
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our battle-tested process ensures successful delivery, on time and within budget
              </p>
            </motion.div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Deliverables:</h4>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex justify-center`}>
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 w-80 h-80 flex items-center justify-center">
                      <div className="text-8xl font-bold text-primary/30">{step.step}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">Security & Compliance</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Bank-level security standards with comprehensive compliance certifications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "SOC 2 Type II",
                  description: "Certified security controls",
                  status: "Certified"
                },
                {
                  icon: Lock,
                  title: "ISO 27001",
                  description: "Information security management",
                  status: "Certified"
                },
                {
                  icon: Database,
                  title: "GDPR Compliant",
                  description: "Data protection compliance",
                  status: "Compliant"
                },
                {
                  icon: Award,
                  title: "HIPAA Ready",
                  description: "Healthcare data security",
                  status: "Ready"
                }
              ].map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      ✓ {cert.status}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-12"
            >
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">256-bit</div>
                  <div className="text-sm text-muted-foreground">SSL Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                  <div className="text-sm text-muted-foreground">Security Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0</div>
                  <div className="text-sm text-muted-foreground">Security Breaches</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-6">
                  Trusted by Fortune 30 companies for their most sensitive projects
                </p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-2xl">🏦</div>
                  <div className="text-2xl">🏥</div>
                  <div className="text-2xl">🏭</div>
                  <div className="text-2xl">🏢</div>
                  <div className="text-2xl">🏬</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 sm:mb-6 bg-background/10 backdrop-blur-sm border-primary/20">
                Ready to Scale?
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                Let's Build Something
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4">
                Join 30+ successful companies who've transformed their business with our enterprise-grade solutions. 
                Schedule a free strategy session and discover how we can accelerate your growth.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-xl px-12 py-8 h-auto" asChild>
                    <Link href="/contact">
                      <Calendar className="mr-3 h-6 w-6" />
                      Book Strategy Session
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                  </Button>
                </motion.div>
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-xl px-12 py-8 backdrop-blur-sm border-primary/20 h-auto" asChild>
                    <Link href="/case-studies">
                      <Download className="mr-3 h-6 w-6" />
                      Download Portfolio
                    </Link>
                  </Button>
                </motion.div> */}
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
                {[
                  { icon: Calendar, text: "Free Strategy Session" },
                  { icon: FileText, text: "Detailed Proposal" },
                  { icon: Shield, text: "NDA Protection" },
                  { icon: Zap, text: "Rapid Prototyping" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="bg-background/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-center">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}