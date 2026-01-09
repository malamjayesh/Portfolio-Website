"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Search, TrendingUp, Target, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SEO2024Guide() {
  const tableOfContents = [
    { id: "core-web-vitals", title: "Core Web Vitals & Performance" },
    { id: "ai-content", title: "AI-Powered Content Strategy" },
    { id: "technical-seo", title: "Technical SEO Fundamentals" },
    { id: "local-seo", title: "Local SEO Mastery" },
    { id: "voice-search", title: "Voice Search Optimization" },
    { id: "mobile-first", title: "Mobile-First Indexing" },
    { id: "schema-markup", title: "Advanced Schema Markup" },
    { id: "analytics", title: "SEO Analytics & Tracking" },
    { id: "advanced-strategies", title: "Advanced SEO Strategies" },
    { id: "international-seo", title: "International SEO" }
  ];

  const relatedPosts = [
    { title: "Mobile First Design", href: "/blog/mobile-first-design", category: "Design", readTime: "9 min read" },
    { title: "React Patterns 2024", href: "/blog/react-patterns-2024", category: "React", readTime: "8 min read" },
    { title: "UI/UX Psychology", href: "/blog/ui-ux-psychology", category: "Design", readTime: "10 min read" }
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
                <Search className="h-3 w-3 mr-1" />
                SEO Guide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Complete SEO Guide for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2024</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Master technical SEO and content optimization strategies that drive real results. From Core Web Vitals to AI-powered content, everything you need to dominate search rankings.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital SEO Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>1.8k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>134 likes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=SEO 2024 Guide&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}` },
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
                      <Image src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop" alt="SEO 2024 Guide" className="w-full h-full object-cover" width={800} height={400} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="mb-2 bg-primary/90">Featured Guide</Badge>
                        <h3 className="text-xl font-bold">Complete SEO Mastery</h3>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        What You'll Learn
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p>• Core Web Vitals optimization</p>
                          <p>• AI-powered content strategies</p>
                          <p>• Technical SEO fundamentals</p>
                          <p>• Local SEO mastery</p>
                        </div>
                        <div className="space-y-2">
                          <p>• Voice search optimization</p>
                          <p>• Mobile-first indexing</p>
                          <p>• Advanced schema markup</p>
                          <p>• SEO analytics & tracking</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="core-web-vitals">1. Core Web Vitals & Page Experience</h2>
                    <p>Google's Core Web Vitals have become critical ranking factors. These metrics measure real-world user experience and directly impact your search rankings.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Core Web Vitals Breakdown
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">LCP</div>
                          <div className="font-medium">Largest Contentful Paint</div>
                          <div className="text-muted-foreground mt-1">Target: &lt;2.5s</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-accent mb-2">FID</div>
                          <div className="font-medium">First Input Delay</div>
                          <div className="text-muted-foreground mt-1">Target: &lt;100ms</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">CLS</div>
                          <div className="font-medium">Cumulative Layout Shift</div>
                          <div className="text-muted-foreground mt-1">Target: &lt;0.1</div>
                        </div>
                      </div>
                    </div>

                    <h3>Optimization Strategies:</h3>
                    <ul>
                      <li><strong>Image Optimization:</strong> Use WebP format, implement lazy loading, and optimize image sizes</li>
                      <li><strong>Code Splitting:</strong> Load only necessary JavaScript and CSS for each page</li>
                      <li><strong>CDN Implementation:</strong> Use content delivery networks to reduce server response times</li>
                      <li><strong>Caching Strategies:</strong> Implement browser and server-side caching effectively</li>
                    </ul>

                    <h2 id="ai-content">2. AI-Powered Content Optimization</h2>
                    <p>With AI becoming mainstream, content quality is more important than ever. Google's algorithms can now better understand context, intent, and content quality.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Content Quality Checklist:</h4>
                      <div className="space-y-2 text-sm">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>Comprehensive coverage of the topic</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>Original research and data</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>Expert author credentials</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>Regular content updates</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>User engagement metrics</span>
                        </label>
                      </div>
                    </div>

                    <h2 id="technical-seo">3. Technical SEO Fundamentals</h2>
                    <p>Technical SEO forms the foundation of your search visibility. Ensure your website is crawlable, indexable, and optimized for search engines.</p>

                    <h3>Essential Technical Elements:</h3>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Site Architecture</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Clean URL structure</li>
                          <li>• Logical site hierarchy</li>
                          <li>• Internal linking strategy</li>
                          <li>• XML sitemaps</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Technical Health</h4>
                        <ul className="text-sm space-y-1">
                          <li>• HTTPS implementation</li>
                          <li>• Mobile responsiveness</li>
                          <li>• Page speed optimization</li>
                          <li>• Crawl error fixes</li>
                        </ul>
                      </div>
                    </div>

                    <h2 id="local-seo">4. Local SEO Strategies</h2>
                    <p>For businesses with physical locations, local SEO is crucial for visibility in location-based searches.</p>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Local SEO Action Plan
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium mb-2">Google Business Profile</h5>
                          <p>Complete profile optimization with photos, hours, and regular updates</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Local Citations</h5>
                          <p>Consistent NAP (Name, Address, Phone) across all directories</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Review Management</h5>
                          <p>Active review collection and professional response strategy</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Local Content</h5>
                          <p>Location-specific pages and community-focused content</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="voice-search">5. Voice Search Optimization</h2>
                    <p>Voice search is growing rapidly. Optimize for conversational queries and featured snippets to capture voice search traffic.</p>

                    <h3>Voice Search Best Practices:</h3>
                    <ul>
                      <li><strong>Natural Language:</strong> Target long-tail, conversational keywords</li>
                      <li><strong>Question Format:</strong> Structure content to answer common questions</li>
                      <li><strong>Featured Snippets:</strong> Optimize for position zero results</li>
                      <li><strong>Local Intent:</strong> Include location-based voice queries</li>
                    </ul>

                    <h2 id="analytics">6. SEO Analytics & Performance Tracking</h2>
                    <p>Measure what matters. Track the right metrics to understand your SEO performance and make data-driven decisions.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Key SEO Metrics to Track
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-primary mb-2">Traffic Metrics</h5>
                          <ul className="space-y-1">
                            <li>• Organic traffic growth</li>
                            <li>• Click-through rates</li>
                            <li>• Bounce rate</li>
                            <li>• Session duration</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-accent mb-2">Ranking Metrics</h5>
                          <ul className="space-y-1">
                            <li>• Keyword rankings</li>
                            <li>• SERP visibility</li>
                            <li>• Featured snippets</li>
                            <li>• Local pack rankings</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-primary mb-2">Technical Metrics</h5>
                          <ul className="space-y-1">
                            <li>• Core Web Vitals</li>
                            <li>• Crawl errors</li>
                            <li>• Index coverage</li>
                            <li>• Mobile usability</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="mobile-first">6. Mobile-First Indexing Mastery</h2>
                    <p>Google predominantly uses mobile versions of content for indexing and ranking. Ensure your mobile site is fully optimized and feature-complete.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Mobile SEO Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Responsive design implementation</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Mobile page speed optimization</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Touch-friendly navigation</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Readable font sizes (16px+)</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Proper viewport meta tag</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Mobile-friendly forms</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Optimized images for mobile</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Fast mobile loading times</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <h2 id="schema-markup">7. Advanced Schema Markup Implementation</h2>
                    <p>Structured data helps search engines understand your content better and can lead to rich snippets in search results.</p>

                    <div className="grid md:grid-cols-3 gap-4 my-6">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Article Schema</h4>
                        <p className="text-sm text-muted-foreground mb-3">For blog posts and news articles</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>@type: "Article"</code>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Product Schema</h4>
                        <p className="text-sm text-muted-foreground mb-3">For e-commerce products</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>@type: "Product"</code>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2">FAQ Schema</h4>
                        <p className="text-sm text-muted-foreground mb-3">For frequently asked questions</p>
                        <div className="text-xs bg-secondary/30 p-2 rounded">
                          <code>@type: "FAQPage"</code>
                        </div>
                      </div>
                    </div>

                    <h2>Conclusion</h2>
                    <p>SEO in 2024 requires a holistic approach combining technical excellence, high-quality content, and user experience optimization. Focus on providing genuine value to your audience while following these best practices.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3">Ready to Dominate Search Rankings?</h4>
                      <p className="text-muted-foreground mb-4">Our SEO experts can help you implement these strategies and achieve measurable results.</p>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link href="/contact">Get SEO Audit</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/services/seo-growth">SEO Services</Link>
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
                      <h4 className="font-semibold mb-4">SEO Expert Team</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital SEO Team</p>
                          <p className="text-sm text-muted-foreground">SEO Specialists</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our certified SEO experts have helped 200+ businesses achieve top rankings and drive organic growth.
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
                  { icon: Heart, label: "Like (134)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'SEO 2024 Guide', url: window.location.href}) : console.log('Share') }
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