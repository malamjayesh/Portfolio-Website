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

export default function DevOpsEngineerPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const jobDetails = {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹7-14 LPA",
    posted: "3 days ago"
  };

  const responsibilities = [
    "Design and implement CI/CD pipelines for multiple projects",
    "Manage cloud infrastructure on AWS, Azure, and Google Cloud Platform",
    "Automate deployment processes and infrastructure provisioning",
    "Monitor system performance and implement scaling solutions",
    "Ensure security best practices across all environments",
    "Collaborate with development teams to optimize application performance",
    "Maintain documentation for infrastructure and deployment processes"
  ];

  const requirements = [
    "3+ years of experience in DevOps or Site Reliability Engineering",
    "Strong knowledge of Docker, Kubernetes, and containerization",
    "Experience with cloud platforms (AWS, Azure, GCP)",
    "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
    "Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
    "Experience with monitoring tools (Prometheus, Grafana, ELK Stack)",
    "Strong scripting skills (Bash, Python, or Go)",
    "Understanding of networking and security principles"
  ];

  const benefits = [
    "Competitive salary package (₹7-14 LPA)",
    "100% remote work with flexible hours",
    "Cloud certification reimbursement",
    "Access to latest DevOps tools and platforms",
    "Conference and training opportunities",
    "Stock options and performance bonuses",
    "Work with cutting-edge infrastructure technologies"
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
                  We're seeking a skilled DevOps Engineer to join our infrastructure team. You'll be 
                  responsible for building and maintaining scalable, secure, and reliable systems that 
                  support our global client projects. This is a fully remote position with opportunities 
                  to work with cutting-edge cloud technologies.
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
                  Share your experience with cloud infrastructure and automation tools.
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