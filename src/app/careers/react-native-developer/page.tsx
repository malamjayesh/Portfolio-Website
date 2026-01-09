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

export default function ReactNativeDeveloperPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const jobDetails = {
    title: "React Native Developer",
    department: "Mobile",
    location: "Rajkot / Remote",
    type: "Full-time",
    experience: "2+ years",
    salary: "₹5-10 LPA",
    posted: "5 days ago"
  };

  const responsibilities = [
    "Develop cross-platform mobile applications using React Native",
    "Collaborate with UI/UX designers to implement pixel-perfect designs",
    "Integrate mobile apps with RESTful APIs and third-party services",
    "Optimize app performance for both iOS and Android platforms",
    "Write unit tests and ensure code quality through code reviews",
    "Debug and troubleshoot issues across different devices and OS versions",
    "Stay updated with React Native ecosystem and mobile development trends"
  ];

  const requirements = [
    "2+ years of experience in React Native development",
    "Strong knowledge of JavaScript, TypeScript, and React concepts",
    "Experience with mobile app deployment (App Store, Google Play)",
    "Familiarity with native iOS and Android development concepts",
    "Knowledge of state management libraries (Redux, Context API)",
    "Experience with mobile-specific libraries and APIs",
    "Understanding of mobile UI/UX principles and guidelines",
    "Experience with version control systems (Git)"
  ];

  const benefits = [
    "Competitive salary package (₹5-10 LPA)",
    "Flexible work arrangements (hybrid/remote)",
    "Latest mobile devices for testing and development",
    "Mobile development conference attendance",
    "Opportunity to publish apps on major app stores",
    "Mentorship from senior mobile developers",
    "Work on diverse mobile projects across industries"
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
                  Join our mobile development team as a React Native Developer and help build amazing 
                  cross-platform mobile applications. You'll work on exciting projects for various 
                  clients, creating apps that reach millions of users across iOS and Android platforms.
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
                  Show us your mobile apps and React Native projects. We'd love to see your work!
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