"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Server, GitBranch, Shield, Zap, Monitor, Settings, Cloud, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DevOpsBestPractices() {
  const tableOfContents = [
    { id: "cicd-pipeline", title: "CI/CD Pipeline Setup" },
    { id: "infrastructure-code", title: "Infrastructure as Code" },
    { id: "monitoring-observability", title: "Monitoring & Observability" },
    { id: "automated-testing", title: "Automated Testing Strategy" },
    { id: "container-orchestration", title: "Container Orchestration" },
    { id: "security-integration", title: "DevSecOps Integration" },
    { id: "configuration-management", title: "Configuration Management" },
    { id: "incident-response", title: "Incident Response" }
  ];

  const relatedPosts = [
    { title: "Server Components", href: "/blog/server-components", category: "React", readTime: "11 min read" },
    { title: "SEO 2024 Guide", href: "/blog/seo-2024-guide", category: "SEO", readTime: "12 min read" },
    { title: "Mobile First Design", href: "/blog/mobile-first-design", category: "Design", readTime: "9 min read" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-4 bg-card/50 backdrop-blur-sm">
                <Server className="h-3 w-3 mr-1" />
                DevOps Guide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DevOps <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Best Practices</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Essential DevOps practices for modern development teams. Master CI/CD, infrastructure as code, monitoring, and security to deliver software faster and more reliably.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 28, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital DevOps Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>1.5k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>98 likes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=DevOps Best Practices&url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Facebook, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Linkedin, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button key={social.label} size="sm" variant="outline" className="bg-card/50 backdrop-blur-sm" onClick={() => typeof window !== 'undefined' && window.open(social.url, '_blank')}>
                        <Icon className="h-4 w-4" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12 h-screen">
                <div className="lg:col-span-3 overflow-y-auto pr-4 scrollbar-hide hover:scrollbar-show">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
                    
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                      <Image src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop" alt="DevOps Best Practices" className="w-full h-full object-cover" width={800} height={400} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="mb-2 bg-primary/90">DevOps Mastery</Badge>
                        <h3 className="text-xl font-bold">Modern Development Pipeline</h3>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        DevOps Transformation Journey
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p>• Automated CI/CD pipelines</p>
                          <p>• Infrastructure as Code (IaC)</p>
                          <p>• Comprehensive monitoring</p>
                          <p>• Security integration (DevSecOps)</p>
                        </div>
                        <div className="space-y-2">
                          <p>• Container orchestration</p>
                          <p>• Configuration management</p>
                          <p>• Incident response procedures</p>
                          <p>• Performance optimization</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="cicd-pipeline">1. Continuous Integration/Continuous Deployment (CI/CD)</h2>
                    <p>CI/CD is the backbone of modern DevOps. Automated pipelines ensure code changes are tested, built, and deployed consistently and reliably.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-primary" />
                        CI/CD Pipeline Stages
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">📝</div>
                          <div className="font-medium">Code Commit</div>
                          <div className="text-muted-foreground mt-1">Developer pushes code</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">🔍</div>
                          <div className="font-medium">Build & Test</div>
                          <div className="text-muted-foreground mt-1">Automated testing</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">📦</div>
                          <div className="font-medium">Package</div>
                          <div className="text-muted-foreground mt-1">Create artifacts</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="font-medium">Deploy</div>
                          <div className="text-muted-foreground mt-1">Release to production</div>
                        </div>
                      </div>
                    </div>

                    <h3>Popular CI/CD Tools:</h3>
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">GitHub Actions</h4>
                        <p className="text-sm text-muted-foreground">Native GitHub integration, YAML workflows</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">GitLab CI/CD</h4>
                        <p className="text-sm text-muted-foreground">Built-in GitLab, Docker support</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Jenkins</h4>
                        <p className="text-sm text-muted-foreground">Open source, extensive plugins</p>
                      </div>
                    </div>

                    <h2 id="infrastructure-code">2. Infrastructure as Code (IaC)</h2>
                    <p>Manage infrastructure through code for reproducible, version-controlled, and scalable deployments. IaC eliminates configuration drift and enables rapid scaling.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Cloud className="h-4 w-4" />
                        IaC Tools Comparison
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium text-primary mb-2">Terraform</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Multi-cloud support</li>
                            <li>• HCL syntax</li>
                            <li>• State management</li>
                            <li>• Large ecosystem</li>
                          </ul>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium text-accent mb-2">CloudFormation</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• AWS native</li>
                            <li>• JSON/YAML templates</li>
                            <li>• Stack management</li>
                            <li>• Free to use</li>
                          </ul>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium text-primary mb-2">Pulumi</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Programming languages</li>
                            <li>• Type safety</li>
                            <li>• Multi-cloud</li>
                            <li>• Modern approach</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="monitoring-observability">3. Monitoring and Observability</h2>
                    <p>Comprehensive monitoring provides visibility into system performance, user experience, and potential issues before they impact users.</p>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          Three Pillars of Observability
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h5 className="font-medium">Metrics</h5>
                            <p className="text-muted-foreground">Numerical data over time (CPU, memory, response times)</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Logs</h5>
                            <p className="text-muted-foreground">Detailed event records for debugging and analysis</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Traces</h5>
                            <p className="text-muted-foreground">Request flow through distributed systems</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Monitoring Stack</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span>Prometheus</span>
                            <Badge variant="outline">Metrics</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Grafana</span>
                            <Badge variant="outline">Visualization</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>ELK Stack</span>
                            <Badge variant="outline">Logs</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Jaeger</span>
                            <Badge variant="outline">Tracing</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 id="automated-testing">4. Automated Testing Strategy</h2>
                    <p>Build a comprehensive testing pyramid with unit tests, integration tests, and end-to-end tests. Automate security scanning and performance testing.</p>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Testing Pyramid</h4>
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">E2E Tests</h5>
                            <Badge variant="outline" className="text-xs">Few</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Full user journey testing, slow but comprehensive</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">Integration Tests</h5>
                            <Badge variant="outline" className="text-xs">Some</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Component interaction testing, moderate speed</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">Unit Tests</h5>
                            <Badge variant="outline" className="text-xs">Many</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Individual function testing, fast and isolated</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="container-orchestration">5. Container Orchestration</h2>
                    <p>Use Docker and Kubernetes to containerize applications and manage deployments. Containers provide consistency across environments and enable efficient resource utilization.</p>

                    <h3>Container Benefits:</h3>
                    <ul>
                      <li><strong>Consistency:</strong> Same environment from development to production</li>
                      <li><strong>Scalability:</strong> Easy horizontal scaling of services</li>
                      <li><strong>Resource Efficiency:</strong> Better resource utilization than VMs</li>
                      <li><strong>Portability:</strong> Run anywhere containers are supported</li>
                    </ul>

                    <h2 id="security-integration">6. Security Integration (DevSecOps)</h2>
                    <p>Integrate security practices throughout the development lifecycle. Shift security left to catch vulnerabilities early and reduce risk.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Security Checkpoints
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium mb-2">Code Security</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Static code analysis (SAST)</li>
                            <li>• Dependency scanning</li>
                            <li>• Secret detection</li>
                            <li>• Code quality gates</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Runtime Security</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Dynamic testing (DAST)</li>
                            <li>• Container scanning</li>
                            <li>• Runtime protection</li>
                            <li>• Compliance monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="configuration-management">7. Configuration Management</h2>
                    <p>Use tools like Ansible, Chef, or Puppet to manage system configurations consistently across environments. Store configurations in version control.</p>

                    <h2 id="incident-response">8. Incident Response and Post-Mortems</h2>
                    <p>Establish clear incident response procedures and conduct blameless post-mortems. Learn from failures to improve system reliability and team processes.</p>

                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Incident Response Process
                      </h4>
                      <div className="grid md:grid-cols-4 gap-3 text-sm">
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="font-medium text-red-500">Detect</div>
                          <div className="text-muted-foreground mt-1">Identify the issue</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="font-medium text-orange-500">Respond</div>
                          <div className="text-muted-foreground mt-1">Immediate action</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="font-medium text-blue-500">Resolve</div>
                          <div className="text-muted-foreground mt-1">Fix the problem</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="font-medium text-green-500">Learn</div>
                          <div className="text-muted-foreground mt-1">Post-mortem analysis</div>
                        </div>
                      </div>
                    </div>

                    <h2>Advanced DevOps Practices</h2>
                    <p>Take your DevOps implementation to the next level with these advanced practices and emerging technologies.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">GitOps Implementation</h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-primary mb-2">GitOps Principles</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Git as single source of truth</li>
                            <li>• Declarative configuration</li>
                            <li>• Automated deployment agents</li>
                            <li>• Continuous reconciliation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-accent mb-2">GitOps Tools</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• ArgoCD for Kubernetes</li>
                            <li>• Flux for automated deployments</li>
                            <li>• Tekton for CI/CD pipelines</li>
                            <li>• Helm for package management</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Cloud-Native DevOps Strategies:</h3>
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Serverless DevOps</h4>
                        <p className="text-sm text-muted-foreground mb-3">Function-as-a-Service deployment strategies</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• AWS Lambda deployments</li>
                          <li>• Azure Functions CI/CD</li>
                          <li>• Serverless monitoring</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Edge Computing</h4>
                        <p className="text-sm text-muted-foreground mb-3">Distributed deployment strategies</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• CDN integration</li>
                          <li>• Edge function deployment</li>
                          <li>• Global load balancing</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Multi-Cloud</h4>
                        <p className="text-sm text-muted-foreground mb-3">Cross-platform deployment management</p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Cloud abstraction layers</li>
                          <li>• Vendor lock-in prevention</li>
                          <li>• Disaster recovery</li>
                        </ul>
                      </div>
                    </div>

                    <h2>DevOps Culture & Team Dynamics</h2>
                    <p>Building a successful DevOps culture requires more than just tools and processes—it requires a fundamental shift in how teams collaborate and think about software delivery.</p>

                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Cultural Transformation Framework</h4>
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium mb-2">Collaboration Over Silos</h5>
                          <p className="text-sm text-muted-foreground">Break down barriers between development, operations, and security teams through shared goals and cross-functional training.</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium mb-2">Automation Over Manual Processes</h5>
                          <p className="text-sm text-muted-foreground">Eliminate toil through intelligent automation while maintaining human oversight for critical decisions.</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h5 className="font-medium mb-2">Learning Over Blame</h5>
                          <p className="text-sm text-muted-foreground">Foster a blameless culture where failures are treated as learning opportunities rather than reasons for punishment.</p>
                        </div>
                      </div>
                    </div>

                    <h2>Conclusion</h2>
                    <p>Successful DevOps implementation requires cultural change, the right tools, and continuous improvement. Start with these fundamental practices and gradually expand your DevOps maturity. Remember: DevOps is a journey of continuous learning, adaptation, and improvement that transforms not just your technology stack, but your entire organizational culture.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3">Ready to Transform Your DevOps?</h4>
                      <p className="text-muted-foreground mb-4">Our DevOps experts can help you implement these practices and accelerate your development pipeline.</p>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link href="/contact">Get DevOps Consultation</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/services/cloud-devops">DevOps Services</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-1 h-screen overflow-y-auto scrollbar-hide hover:scrollbar-show">
                  <div className="sticky top-0 space-y-8 py-8">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-card border border-border rounded-xl p-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Table of Contents
                      </h4>
                      <nav className="space-y-2 text-sm">
                        {tableOfContents.map((item) => (
                          <a key={item.id} href={`#${item.id}`} className="block text-muted-foreground hover:text-primary transition-colors">
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-card border border-border rounded-xl p-6">
                      <h4 className="font-semibold mb-4">DevOps Expert Team</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital DevOps Team</p>
                          <p className="text-sm text-muted-foreground">Cloud & DevOps Engineers</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our certified DevOps engineers have implemented CI/CD pipelines for 100+ applications across various industries.
                      </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                      <h4 className="font-semibold mb-4">Related Articles</h4>
                      <div className="space-y-4">
                        {relatedPosts.map((post) => (
                          <Link key={post.href} href={post.href} className="block group">
                            <div className="space-y-1">
                              <h5 className="font-medium text-sm group-hover:text-primary transition-colors">
                                {post.title}
                              </h5>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs">
                                  {post.category}
                                </Badge>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: Heart, label: "Like (98)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'DevOps Best Practices', url: window.location.href}) : console.log('Share') }
                ].map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <Button key={btn.label} variant="outline" size="sm" onClick={btn.action}>
                      <Icon className="h-4 w-4 mr-2" />
                      {btn.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}