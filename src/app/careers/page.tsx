"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Coffee,
  Heart,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  TrendingUp
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [sortBy, setSortBy] = useState("latest");
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  const allPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Rajkot / Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹8-15 LPA",
      urgency: "Urgent",
      applicants: "50+ applied",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Build scalable web applications for Fortune 500 clients",
      posted: "2 days ago",
      deadline: "15 days left"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Rajkot / Hybrid",
      type: "Full-time", 
      experience: "3+ years",
      salary: "₹6-12 LPA",
      urgency: "Hot",
      applicants: "30+ applied",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Create exceptional user experiences for digital products",
      posted: "1 week ago",
      deadline: "20 days left"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹7-14 LPA",
      urgency: "New",
      applicants: "25+ applied",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      description: "Manage cloud infrastructure and deployment pipelines",
      posted: "3 days ago",
      deadline: "25 days left"
    },
    {
      title: "React Native Developer",
      department: "Mobile",
      location: "Rajkot / Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹5-10 LPA",
      urgency: "Featured",
      applicants: "40+ applied",
      skills: ["React Native", "JavaScript", "iOS", "Android"],
      description: "Develop cross-platform mobile applications",
      posted: "5 days ago",
      deadline: "18 days left"
    }
  ];

  const departments = ["All Departments", "Engineering", "Design", "Infrastructure", "Mobile"];

  const filteredPositions = allPositions.filter(position => {
    const departmentMatch = selectedDepartment === "All Departments" || position.department === selectedDepartment;
    const remoteMatch = !showRemoteOnly || position.location.includes("Remote");
    return departmentMatch && remoteMatch;
  });

  const sortedPositions = [...filteredPositions].sort((a, b) => {
    if (sortBy === "latest") {
      const getDateValue = (posted: string) => {
        if (posted.includes("day")) return parseInt(posted);
        if (posted.includes("week")) return parseInt(posted) * 7;
        return 0;
      };
      return getDateValue(a.posted) - getDateValue(b.posted);
    }
    if (sortBy === "salary") {
      const salaryA = parseInt(a.salary.replace(/[^0-9]/g, ""));
      const salaryB = parseInt(b.salary.replace(/[^0-9]/g, ""));
      return salaryB - salaryA;
    }
    return 0;
  });

  const openPositions = sortedPositions;

  const benefits = [
    { icon: Coffee, title: "Flexible Work", description: "Remote-first culture with flexible hours" },
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
    { icon: GraduationCap, title: "Learning Budget", description: "₹50,000 annual budget for courses and conferences" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear promotion paths and mentorship programs" },
    { icon: Globe, title: "Global Exposure", description: "Work with international clients and teams" },
    { icon: Award, title: "Performance Bonus", description: "Quarterly bonuses based on individual and team performance" }
  ];

  const companyStats = [
    { number: "20+", label: "Team Members", icon: Users },
    { number: "10+", label: "Countries Served", icon: Globe },
    { number: "30+", label: "Projects Delivered", icon: Briefcase },
    { number: "98%", label: "Employee Satisfaction", icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6">We're Hiring</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Mission to Build
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">
              Be part of a team that creates exceptional digital experiences for clients worldwide. 
              We're looking for passionate individuals who want to make an impact.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
              <Link href="#positions">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join FlexaDigital?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300"
                >
                  <Icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="positions" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Find your next career opportunity with us
            </p>
            
            {/* Job Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <Button 
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="text-sm text-muted-foreground">
                Showing {openPositions.length} open positions
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Sort by: Latest</SelectItem>
                    <SelectItem value="salary">Sort by: Salary</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant={showRemoteOnly ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setShowRemoteOnly(!showRemoteOnly)}
                >
                  Remote Only
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <Badge variant="secondary">{position.department}</Badge>
                      <Badge variant="outline">{position.type}</Badge>
                      <Badge 
                        variant={position.urgency === 'Urgent' ? 'destructive' : position.urgency === 'Hot' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {position.urgency}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {position.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {position.salary}
                      </div>
                      <div className="text-xs text-green-600">
                        {position.applicants}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Posted {position.posted} • {position.deadline}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/careers/${position.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        Learn More
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-gradient-primary" asChild>
                      <Link href={`/careers/${position.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact HR Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}