"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobApplicationForm from "@/components/JobApplicationForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function SeniorFullStackDeveloperPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const jobDetails = {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Rajkot / Remote",
    type: "Full-time",
    experience: "4+ years",
    salary: "₹8-15 LPA",
    posted: "2 days ago"
  };

  const responsibilities = [
    "Develop and maintain scalable web applications using React, Node.js, and TypeScript",
    "Collaborate with cross-functional teams to define, design, and ship new features",
    "Write clean, maintainable, and efficient code following best practices",
    "Participate in code reviews and provide constructive feedback to team members",
    "Optimize applications for maximum speed and scalability",
    "Troubleshoot and debug applications to ensure optimal performance",
    "Stay up-to-date with emerging technologies and industry trends"
  ];

  const requirements = [
    "4+ years of experience in full-stack development",
    "Strong proficiency in React.js, Node.js, and TypeScript",
    "Experience with modern JavaScript frameworks and libraries",
    "Knowledge of database technologies (PostgreSQL, MongoDB)",
    "Familiarity with cloud platforms (AWS, Azure, or GCP)",
    "Understanding of RESTful APIs and GraphQL",
    "Experience with version control systems (Git)",
    "Strong problem-solving skills and attention to detail"
  ];

  const benefits = [
    "Competitive salary package (₹8-15 LPA)",
    "Flexible working hours and remote work options",
    "Health insurance for you and your family",
    "₹50,000 annual learning and development budget",
    "Performance-based bonuses and incentives",
    "Opportunity to work with international clients",
    "Career growth and mentorship programs"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <Link href="/careers" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{jobDetails.department}</Badge>
              <Badge variant="outline">{jobDetails.type}</Badge>
              <Badge variant="outline">{jobDetails.posted}</Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {jobDetails.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {jobDetails.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {jobDetails.experience}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {jobDetails.salary}
              </div>
            </div>
            
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Apply for this Position
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <JobApplicationForm jobTitle={jobDetails.title} department={jobDetails.department} />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Job Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are looking for a Senior Full Stack Developer to join our engineering team. 
                  You will be responsible for developing and maintaining scalable web applications 
                  for our Fortune 500 clients. This role offers the opportunity to work with 
                  cutting-edge technologies and contribute to high-impact projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-6">Benefits & Perks</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Send us your resume and portfolio. We'll get back to you within 24 hours.
                </p>
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <JobApplicationForm jobTitle={jobDetails.title} department={jobDetails.department} />
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}