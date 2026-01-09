"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Smartphone, Monitor, Tablet, Zap, Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileFirstDesign() {
  const tableOfContents = [
    { id: "mobile-first-philosophy", title: "Mobile-First Philosophy" },
    { id: "performance-benefits", title: "Performance Benefits" },
    { id: "content-prioritization", title: "Content Prioritization" },
    { id: "touch-interactions", title: "Touch-First Interactions" },
    { id: "progressive-enhancement", title: "Progressive Enhancement" },
    { id: "technical-implementation", title: "Technical Implementation" },
    { id: "testing-optimization", title: "Testing & Optimization" },
    { id: "common-pitfalls", title: "Common Pitfalls to Avoid" }
  ];

  const relatedPosts = [
    { title: "UI/UX Psychology", href: "/blog/ui-ux-psychology", category: "Design", readTime: "10 min read" },
    { title: "SEO 2024 Guide", href: "/blog/seo-2024-guide", category: "SEO", readTime: "12 min read" },
    { title: "React Patterns 2024", href: "/blog/react-patterns-2024", category: "React", readTime: "8 min read" }
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
                <Smartphone className="h-3 w-3 mr-1" />
                Mobile-First Design
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mobile <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">First Design</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Why mobile-first approach is crucial for modern web development. Learn responsive design principles, performance optimization, and user experience best practices for the mobile era.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>9 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital Design Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>1.9k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>167 likes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=Mobile First Design&url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
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
                      <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop" alt="Mobile First Design" className="w-full h-full object-cover" width={800} height={400} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="mb-2 bg-primary/90">Design Strategy</Badge>
                        <h3 className="text-xl font-bold">Mobile-First Revolution</h3>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Mobile Usage Statistics
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-card/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary mb-1">60%+</div>
                          <div className="text-sm text-muted-foreground">Global web traffic from mobile</div>
                        </div>
                        <div className="bg-card/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-accent mb-1">3.8s</div>
                          <div className="text-sm text-muted-foreground">Average mobile attention span</div>
                        </div>
                        <div className="bg-card/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary mb-1">53%</div>
                          <div className="text-sm text-muted-foreground">Users abandon slow mobile sites</div>
                        </div>
                      </div>
                    </div>

                    <h2 id="mobile-first-philosophy">1. The Mobile-First Philosophy</h2>
                    <p>Mobile-first design means starting with the smallest screen and progressively enhancing for larger devices. This constraint-driven approach forces you to prioritize content and functionality, resulting in cleaner, more focused designs that work beautifully across all devices.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        Design Approach Comparison
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                          <h5 className="font-medium text-red-500">❌ Desktop-First Problems</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Complex layouts hard to simplify</li>
                            <li>• Performance issues on mobile</li>
                            <li>• Poor touch interactions</li>
                            <li>• Cluttered mobile interfaces</li>
                            <li>• Slower development process</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-green-500">✅ Mobile-First Benefits</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Clean, focused designs</li>
                            <li>• Better performance by default</li>
                            <li>• Touch-optimized interactions</li>
                            <li>• Content prioritization</li>
                            <li>• Progressive enhancement</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="performance-benefits">2. Performance Benefits</h2>
                    <p>Mobile-first designs are inherently more performant. By designing for limited bandwidth and processing power first, you create faster experiences for all users.</p>

                    <div className="grid md:grid-cols-3 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Faster Loading</h4>
                        <p className="text-sm text-muted-foreground">Optimized images, minimal JavaScript, efficient CSS</p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                        <h4 className="font-semibold mb-2">Better UX</h4>
                        <p className="text-sm text-muted-foreground">Reduced bounce rates, higher engagement</p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Higher Conversions</h4>
                        <p className="text-sm text-muted-foreground">Improved Core Web Vitals, better SEO</p>
                      </div>
                    </div>

                    <h2 id="content-prioritization">3. Content Prioritization</h2>
                    <p>Limited screen space forces you to identify what's truly important. This results in better information architecture, clearer user flows, and more focused content that serves user needs effectively.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Content Hierarchy Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-medium">Critical Content</h5>
                            <p className="text-sm text-muted-foreground">Essential information users need immediately</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-medium">Important Content</h5>
                            <p className="text-sm text-muted-foreground">Supporting information and key features</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-medium">Nice-to-Have Content</h5>
                            <p className="text-sm text-muted-foreground">Additional details and supplementary information</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 id="touch-interactions">4. Touch-First Interactions</h2>
                    <p>Design for touch interactions from the start. This means larger tap targets, appropriate spacing between interactive elements, and gesture-friendly navigation patterns.</p>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Touch Target Guidelines</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span>Minimum tap target size</span>
                            <Badge variant="outline">44px × 44px</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Recommended size</span>
                            <Badge variant="outline">48px × 48px</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Spacing between targets</span>
                            <Badge variant="outline">8px minimum</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Thumb-friendly zone</span>
                            <Badge variant="outline">Bottom 1/3</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Gesture Patterns</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h5 className="font-medium">Swipe Navigation</h5>
                            <p className="text-muted-foreground">Horizontal scrolling for content carousels</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Pull to Refresh</h5>
                            <p className="text-muted-foreground">Intuitive content updating mechanism</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Pinch to Zoom</h5>
                            <p className="text-muted-foreground">Image and content magnification</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 id="progressive-enhancement">5. Progressive Enhancement</h2>
                    <p>Start with a solid mobile foundation and enhance for larger screens. Use CSS media queries to add complexity gradually, ensuring your site works well on any device.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Responsive Breakpoints Strategy</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-secondary/30 p-3 rounded">
                          <code className="text-primary">/* Mobile First (320px+) */</code>
                          <p className="text-muted-foreground mt-1">Base styles for mobile devices</p>
                        </div>
                        <div className="bg-secondary/30 p-3 rounded">
                          <code className="text-primary">@media (min-width: 768px) { /* Tablet */ }</code>
                          <p className="text-muted-foreground mt-1">Enhanced layout for tablets</p>
                        </div>
                        <div className="bg-secondary/30 p-3 rounded">
                          <code className="text-primary">@media (min-width: 1024px) { /* Desktop */ }</code>
                          <p className="text-muted-foreground mt-1">Full desktop experience</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="technical-implementation">6. Technical Implementation</h2>
                    <p>Use responsive design techniques like flexible grids, fluid images, and CSS media queries. Consider mobile-specific optimizations like lazy loading, image compression, and efficient caching strategies.</p>

                    <h3>Key Technical Strategies:</h3>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Flexible Grid Systems
                          </h4>
                          <p className="text-sm text-muted-foreground">CSS Grid and Flexbox for responsive layouts</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Fluid Images
                          </h4>
                          <p className="text-sm text-muted-foreground">Responsive images with srcset and sizes</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Performance Optimization
                          </h4>
                          <p className="text-sm text-muted-foreground">Lazy loading, compression, caching</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Touch Optimization
                          </h4>
                          <p className="text-sm text-muted-foreground">Proper touch targets and gestures</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Network Awareness
                          </h4>
                          <p className="text-sm text-muted-foreground">Adaptive loading based on connection</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Accessibility
                          </h4>
                          <p className="text-sm text-muted-foreground">Screen reader and keyboard navigation</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="testing-optimization">7. Testing and Optimization</h2>
                    <p>Test on real devices, not just browser dev tools. Consider various network conditions, screen sizes, and user contexts. Use tools like Google's Mobile-Friendly Test and PageSpeed Insights.</p>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Testing Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Test on real devices</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Various screen sizes</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Different network speeds</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Touch interactions</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Performance metrics</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Accessibility compliance</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Cross-browser compatibility</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>User experience flow</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <h2 id="common-pitfalls">8. Common Pitfalls to Avoid</h2>
                    <p>Learn from common mobile design mistakes to create better user experiences.</p>

                    <div className="space-y-4 my-6">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="font-medium text-red-500 mb-2">❌ Don't Hide Important Content</h4>
                        <p className="text-sm text-muted-foreground">Avoid hiding critical information behind hamburger menus or accordions</p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="font-medium text-red-500 mb-2">❌ Don't Use Tiny Text and Buttons</h4>
                        <p className="text-sm text-muted-foreground">Ensure text is readable and buttons are easily tappable</p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="font-medium text-red-500 mb-2">❌ Don't Rely on Hover States</h4>
                        <p className="text-sm text-muted-foreground">Mobile devices don't have hover, design for touch interactions</p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="font-medium text-red-500 mb-2">❌ Don't Ignore Form Optimization</h4>
                        <p className="text-sm text-muted-foreground">Use appropriate input types and optimize form layouts for mobile</p>
                      </div>
                    </div>

                    <h2>Advanced Mobile Design Techniques</h2>
                    <p>Master these cutting-edge mobile design techniques to create truly exceptional user experiences.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Progressive Web App (PWA) Integration</h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-primary mb-2">Core PWA Features</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Service worker implementation</li>
                            <li>• Offline functionality</li>
                            <li>• Push notifications</li>
                            <li>• App-like navigation</li>
                            <li>• Home screen installation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-accent mb-2">Performance Benefits</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Instant loading with caching</li>
                            <li>• Reduced data usage</li>
                            <li>• Background sync capabilities</li>
                            <li>• Native app-like performance</li>
                            <li>• Cross-platform compatibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Mobile-Specific Design Patterns:</h3>
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Bottom Navigation</h4>
                        <p className="text-sm text-muted-foreground mb-3">Thumb-friendly navigation placement</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>position: fixed; bottom: 0;</code>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Card-Based Layouts</h4>
                        <p className="text-sm text-muted-foreground mb-3">Scannable content organization</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>display: grid; gap: 1rem;</code>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Floating Action Button</h4>
                        <p className="text-sm text-muted-foreground mb-3">Primary action accessibility</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>position: fixed; right: 1rem;</code>
                        </div>
                      </div>
                    </div>

                    <h2>Mobile Performance Optimization</h2>
                    <p>Advanced techniques to ensure your mobile-first designs load fast and perform smoothly across all devices.</p>

                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Performance Optimization Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Image optimization (WebP, AVIF)</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Critical CSS inlining</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>JavaScript code splitting</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Resource preloading</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Service worker caching</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Font optimization</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Third-party script optimization</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Network-aware loading</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <h3>Accessibility in Mobile Design:</h3>
                    <div className="space-y-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Screen Reader Optimization
                        </h4>
                        <p className="text-sm text-muted-foreground">Proper ARIA labels, semantic HTML, and logical reading order for assistive technologies.</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Motor Impairment Considerations
                        </h4>
                        <p className="text-sm text-muted-foreground">Larger touch targets, reduced motion options, and alternative input methods support.</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Visual Accessibility
                        </h4>
                        <p className="text-sm text-muted-foreground">High contrast ratios, scalable text, and color-blind friendly design choices.</p>
                      </div>
                    </div>

                    <h2>Conclusion</h2>
                    <p>Mobile-first design isn't just about responsive layouts—it's a comprehensive approach that encompasses performance, accessibility, and user experience optimization. By embracing mobile-first principles and advanced techniques like PWAs, you create exceptional experiences that work beautifully across all devices while future-proofing your designs for the increasingly mobile-dominated digital landscape.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3">Ready to Go Mobile-First?</h4>
                      <p className="text-muted-foreground mb-4">Our design experts can help you create mobile-first experiences that delight users and drive results.</p>
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
                      <h4 className="font-semibold mb-4">Mobile Design Experts</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital Design Team</p>
                          <p className="text-sm text-muted-foreground">Mobile UX Specialists</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our design team has created mobile-first experiences for 150+ applications across various industries.
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
                  { icon: Heart, label: "Like (167)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'Mobile First Design', url: window.location.href}) : console.log('Share') }
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