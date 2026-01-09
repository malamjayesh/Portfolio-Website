"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Brain, Palette, Users, Lightbulb, Target, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UIUXPsychology() {
  const tableOfContents = [
    { id: "cognitive-load", title: "Cognitive Load Theory" },
    { id: "visual-hierarchy", title: "Visual Hierarchy & Attention" },
    { id: "color-psychology", title: "Psychology of Color" },
    { id: "gestalt-principles", title: "Gestalt Principles" },
    { id: "social-proof", title: "Social Proof & Trust" },
    { id: "micro-interactions", title: "Micro-interactions" },
    { id: "emotional-design", title: "Emotional Design" },
    { id: "user-testing", title: "Psychology in Testing" }
  ];

  const relatedPosts = [
    { title: "Mobile First Design", href: "/blog/mobile-first-design", category: "Design", readTime: "9 min read" },
    { title: "React Patterns 2024", href: "/blog/react-patterns-2024", category: "React", readTime: "8 min read" },
    { title: "SEO 2024 Guide", href: "/blog/seo-2024-guide", category: "SEO", readTime: "12 min read" }
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
                <Brain className="h-3 w-3 mr-1" />
                Design Psychology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                UI/UX <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Psychology</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding user behavior and psychology in digital design. Create interfaces that users love, understand, and can't resist using.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 5, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital Design Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>3.2k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>289 likes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=UI/UX Psychology&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}` },
                    { icon: Facebook, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}` },
                    { icon: Linkedin, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}` }
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
                      <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop" alt="UI/UX Psychology" className="w-full h-full object-cover" width={800} height={400} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="mb-2 bg-primary/90">Psychology Guide</Badge>
                        <h3 className="text-xl font-bold">Design That Connects</h3>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Psychology Principles You'll Master
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p>• Cognitive load optimization</p>
                          <p>• Visual hierarchy mastery</p>
                          <p>• Color psychology application</p>
                          <p>• Gestalt design principles</p>
                        </div>
                        <div className="space-y-2">
                          <p>• Social proof integration</p>
                          <p>• Micro-interaction design</p>
                          <p>• Emotional design strategies</p>
                          <p>• User behavior analysis</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="cognitive-load">1. Cognitive Load Theory in Design</h2>
                    <p>Users have limited mental processing capacity. Every element on your interface competes for attention and cognitive resources. Understanding cognitive load helps create intuitive, effortless experiences.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary" />
                        Types of Cognitive Load
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">Intrinsic</div>
                          <div className="font-medium">Task Complexity</div>
                          <div className="text-muted-foreground mt-1">Inherent difficulty of the task</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-accent mb-2">Extraneous</div>
                          <div className="font-medium">Poor Design</div>
                          <div className="text-muted-foreground mt-1">Unnecessary mental effort</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">Germane</div>
                          <div className="font-medium">Learning</div>
                          <div className="text-muted-foreground mt-1">Building mental models</div>
                        </div>
                      </div>
                    </div>

                    <h3>Reducing Cognitive Load:</h3>
                    <ul>
                      <li><strong>Progressive Disclosure:</strong> Show only what users need at each step</li>
                      <li><strong>Chunking Information:</strong> Group related elements together</li>
                      <li><strong>Familiar Patterns:</strong> Use established UI conventions</li>
                      <li><strong>Clear Hierarchy:</strong> Make important elements stand out</li>
                    </ul>

                    <h2 id="visual-hierarchy">2. Visual Hierarchy & Attention Patterns</h2>
                    <p>Users don't read interfaces—they scan them. Understanding how the eye moves across a screen helps you guide attention to what matters most.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          F-Pattern Reading
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">Users scan in an F-shaped pattern:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Horizontal scan at top</li>
                          <li>• Second horizontal scan</li>
                          <li>• Vertical scan on left</li>
                          <li>• Place key info in these areas</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Z-Pattern Layout
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">For simpler layouts:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Top-left to top-right</li>
                          <li>• Diagonal to bottom-left</li>
                          <li>• Bottom-left to bottom-right</li>
                          <li>• Perfect for landing pages</li>
                        </ul>
                      </div>
                    </div>

                    <h2 id="color-psychology">3. The Psychology of Color</h2>
                    <p>Colors evoke emotional responses and influence behavior. Strategic color choices can guide user actions and create the right emotional context for your brand.</p>

                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        Color Psychology Guide
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                          <div className="font-medium">Red</div>
                          <div className="text-muted-foreground">Urgency, passion, energy</div>
                        </div>
                        <div className="text-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                          <div className="font-medium">Blue</div>
                          <div className="text-muted-foreground">Trust, calm, professional</div>
                        </div>
                        <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                          <div className="font-medium">Green</div>
                          <div className="text-muted-foreground">Success, growth, nature</div>
                        </div>
                        <div className="text-center p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                          <div className="font-medium">Purple</div>
                          <div className="text-muted-foreground">Luxury, creativity, wisdom</div>
                        </div>
                      </div>
                    </div>

                    <h2 id="gestalt-principles">4. Gestalt Principles in UI Design</h2>
                    <p>Users perceive visual elements as organized wholes rather than individual parts. These principles help create cohesive, intuitive interfaces.</p>

                    <h3>Key Gestalt Principles:</h3>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Proximity</h4>
                          <p className="text-sm text-muted-foreground">Elements close together are perceived as related</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Similarity</h4>
                          <p className="text-sm text-muted-foreground">Similar elements are grouped together mentally</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Closure</h4>
                          <p className="text-sm text-muted-foreground">Mind fills in gaps to complete shapes</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Continuity</h4>
                          <p className="text-sm text-muted-foreground">Eye follows lines and curves naturally</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Figure/Ground</h4>
                          <p className="text-sm text-muted-foreground">Distinguish between foreground and background</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Common Fate</h4>
                          <p className="text-sm text-muted-foreground">Elements moving together are related</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="social-proof">5. Social Proof & Trust Signals</h2>
                    <p>Users look to others for validation before making decisions. Strategic use of social proof can significantly increase conversions and user confidence.</p>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Types of Social Proof
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium mb-2">User Social Proof</h5>
                          <p className="text-muted-foreground">Reviews, testimonials, user-generated content</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Expert Social Proof</h5>
                          <p className="text-muted-foreground">Industry endorsements, certifications, awards</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Wisdom of Crowds</h5>
                          <p className="text-muted-foreground">User counts, popularity indicators, trending items</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Wisdom of Friends</h5>
                          <p className="text-muted-foreground">Social media integration, friend recommendations</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="micro-interactions">6. The Power of Micro-interactions</h2>
                    <p>Small animations and feedback provide psychological satisfaction and guide user behavior. They make interfaces feel responsive and alive.</p>

                    <h3>Effective Micro-interaction Design:</h3>
                    <ul>
                      <li><strong>Trigger:</strong> What initiates the interaction</li>
                      <li><strong>Rules:</strong> What happens during the interaction</li>
                      <li><strong>Feedback:</strong> What the user sees and feels</li>
                      <li><strong>Loops & Modes:</strong> What happens next</li>
                    </ul>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Micro-interaction Examples</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-lg mb-2">💖</div>
                          <div className="font-medium">Like Animation</div>
                          <div className="text-muted-foreground">Heart grows and bounces</div>
                        </div>
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-lg mb-2">📧</div>
                          <div className="font-medium">Email Sent</div>
                          <div className="text-muted-foreground">Paper plane flies away</div>
                        </div>
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-lg mb-2">🔄</div>
                          <div className="font-medium">Pull to Refresh</div>
                          <div className="text-muted-foreground">Spinner indicates loading</div>
                        </div>
                      </div>
                    </div>

                    <h2 id="emotional-design">7. Emotional Design Strategies</h2>
                    <p>Emotions drive decisions more than logic. Design interfaces that create positive emotional connections with users.</p>

                    <h3>Three Levels of Emotional Design:</h3>
                    <div className="space-y-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-primary">Visceral Level</h4>
                        <p className="text-sm text-muted-foreground">First impressions, visual appeal, immediate emotional response</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-accent">Behavioral Level</h4>
                        <p className="text-sm text-muted-foreground">Usability, functionality, performance, and user experience</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-primary">Reflective Level</h4>
                        <p className="text-sm text-muted-foreground">Self-image, personal satisfaction, memories, and meaning</p>
                      </div>
                    </div>

                    <h2 id="user-testing">8. Psychology in User Testing</h2>
                    <p>Apply psychological principles to user testing for more accurate insights and better design decisions.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Psychological Testing Methods</h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-primary mb-3">Behavioral Testing</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Eye-tracking studies</li>
                            <li>• Heat map analysis</li>
                            <li>• Click-through patterns</li>
                            <li>• Task completion rates</li>
                            <li>• Navigation flow analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-accent mb-3">Emotional Testing</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Facial expression analysis</li>
                            <li>• Voice tone assessment</li>
                            <li>• Stress level monitoring</li>
                            <li>• Satisfaction surveys</li>
                            <li>• Emotional journey mapping</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Advanced Psychology Applications:</h3>
                    <div className="space-y-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Neuromarketing Insights</h4>
                        <p className="text-sm text-muted-foreground">Use brain science to understand subconscious user responses and optimize design elements accordingly.</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Behavioral Economics</h4>
                        <p className="text-sm text-muted-foreground">Apply principles like loss aversion, anchoring, and choice architecture to influence user decisions.</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Persuasive Design</h4>
                        <p className="text-sm text-muted-foreground">Implement Fogg's Behavior Model (B=MAT) to create compelling user experiences that drive action.</p>
                      </div>
                    </div>

                    <h2>Advanced Design Psychology Techniques</h2>
                    <p>Master these advanced psychological concepts to create truly exceptional user experiences.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Psychology-Driven Design Framework</h4>
                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🧠</div>
                          <div className="font-medium">Research</div>
                          <div className="text-muted-foreground mt-1">User psychology analysis</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🎨</div>
                          <div className="font-medium">Design</div>
                          <div className="text-muted-foreground mt-1">Apply psychological principles</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🧪</div>
                          <div className="font-medium">Test</div>
                          <div className="text-muted-foreground mt-1">Validate with users</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🔄</div>
                          <div className="font-medium">Iterate</div>
                          <div className="text-muted-foreground mt-1">Refine based on insights</div>
                        </div>
                      </div>
                    </div>

                    <h2>Conclusion</h2>
                    <p>By understanding the psychological principles behind user behavior, designers can create more effective, engaging, and user-friendly digital experiences. Remember: great design isn't just about aesthetics—it's about understanding and serving human psychology to create meaningful connections between users and products.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3">Ready to Apply Psychology to Your Design?</h4>
                      <p className="text-muted-foreground mb-4">Our design experts can help you create interfaces that truly connect with your users.</p>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link href="/contact">Get Design Consultation</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/services/ui-ux-design">Design Services</Link>
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
                      <h4 className="font-semibold mb-4">Design Psychology Team</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital Design Team</p>
                          <p className="text-sm text-muted-foreground">UX Psychologists</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our design team combines psychology principles with creative expertise to build interfaces that users love.
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
                  { icon: Heart, label: "Like (289)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'UI/UX Psychology', url: window.location.href}) : console.log('Share') }
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