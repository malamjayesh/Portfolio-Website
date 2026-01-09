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

export default function UIUXDesignerPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const jobDetails = {
    title: "UI/UX Designer",
    department: "Design",
    location: "Rajkot / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    salary: "₹6-12 LPA",
    posted: "1 week ago"
  };

  const responsibilities = [
    "Create user-centered designs for web and mobile applications",
    "Conduct user research and usability testing to inform design decisions",
    "Develop wireframes, prototypes, and high-fidelity mockups",
    "Collaborate with developers to ensure design implementation accuracy",
    "Maintain and evolve design systems and style guides",
    "Present design concepts and rationale to stakeholders",
    "Stay updated with latest design trends and best practices"
  ];

  const requirements = [
    "3+ years of experience in UI/UX design",
    "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
    "Strong portfolio showcasing web and mobile design projects",
    "Understanding of user-centered design principles",
    "Experience with design systems and component libraries",
    "Knowledge of HTML/CSS and responsive design principles",
    "Excellent communication and presentation skills",
    "Bachelor's degree in Design, HCI, or related field"
  ];

  const benefits = [
    "Competitive salary package (₹6-12 LPA)",
    "Hybrid work model with flexible hours",
    "Creative freedom and design ownership",
    "Access to premium design tools and software",
    "Design conference and workshop attendance",
    "Mentorship from senior design leaders",
    "Opportunity to work on diverse client projects"
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
                  Join our design team as a UI/UX Designer and help create exceptional digital experiences 
                  for our global clients. You'll work on diverse projects ranging from mobile apps to 
                  enterprise software, collaborating with cross-functional teams to deliver user-centered solutions.
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
                  Send us your portfolio and resume. We'd love to see your design work!
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