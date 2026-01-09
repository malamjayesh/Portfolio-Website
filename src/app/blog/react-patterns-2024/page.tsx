"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ReactPatterns2024() {
  const relatedPosts = [
    {
      title: "Server Components",
      href: "/blog/server-components",
      category: "React",
      readTime: "11 min read"
    },
    {
      title: "UI/UX Psychology",
      href: "/blog/ui-ux-psychology", 
      category: "Design",
      readTime: "10 min read"
    },
    {
      title: "DevOps Best Practices",
      href: "/blog/devops-best-practices",
      category: "DevOps", 
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 bg-card/50 backdrop-blur-sm">
                React
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                React Patterns 2024
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Modern React patterns and best practices for scalable applications. Learn about server components, concurrent features, and advanced hooks.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>2.1k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>156 likes</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=React Patterns 2024&url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Facebook, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Linkedin, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'React Patterns 2024', url: window.location.href}) : console.log('Share') }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button key={social.label} size="sm" variant="outline" className="bg-card/50 backdrop-blur-sm" onClick={() => social.url ? (typeof window !== 'undefined' && window.open(social.url, '_blank')) : social.action?.()}>
                        <Icon className="h-4 w-4" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12 h-screen">
                {/* Main Content */}
                <div className="lg:col-span-3 overflow-y-auto pr-4 scrollbar-hide hover:scrollbar-show">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary"
                  >
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                      <Image
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
                        alt="React Patterns 2024"
                        className="w-full h-full object-cover"
                        width={800}
                        height={400}
                      />
                    </div>

                    <h2>Modern React Patterns for 2024</h2>
                    <p>React continues to evolve, and with it, the patterns and best practices that help us build better applications. In this comprehensive guide, we'll explore the most important React patterns for 2024 that every developer should know.</p>
                    
                    <h3>1. Server Components Revolution</h3>
                    <p>React Server Components represent a paradigm shift in how we think about React applications. They allow us to render components on the server, reducing bundle size and improving performance significantly.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Key Benefits:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Zero JavaScript bundle impact</li>
                        <li>• Direct database access</li>
                        <li>• Better SEO and initial load times</li>
                        <li>• Simplified data fetching</li>
                      </ul>
                    </div>
                    
                    <h3>2. Concurrent Features</h3>
                    <p>React 18 introduced concurrent features like Suspense, useTransition, and useDeferredValue. These features help us build more responsive user interfaces by allowing React to interrupt rendering work.</p>
                    
                    <h3>3. Advanced Custom Hooks Patterns</h3>
                    <p>Custom hooks remain one of the most powerful patterns in React. We'll explore advanced patterns for data fetching, state management, and side effects that make your code more reusable and maintainable.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Pro Tip:</h4>
                      <p className="text-muted-foreground mb-0">Always start with the simplest solution and gradually add complexity as needed. Premature optimization is the root of all evil in React applications.</p>
                    </div>
                    
                    <h3>4. Component Composition Strategies</h3>
                    <p>Building flexible, reusable components through composition patterns. Learn how to create components that are both powerful and easy to use, following the principle of "composition over inheritance".</p>
                    
                    <h3>5. State Management Evolution</h3>
                    <p>From Redux to Zustand, from Context API to Jotai - explore modern state management solutions and when to use each approach for optimal performance and developer experience.</p>
                    
                    <h3>Conclusion</h3>
                    <p>These patterns will help you build more maintainable, performant, and scalable React applications in 2024 and beyond. Remember that patterns are tools - use them when they solve real problems, not just because they're trendy.</p>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3 text-foreground">What's Next?</h4>
                      <p className="text-muted-foreground mb-4">Ready to implement these patterns in your projects? Check out our related articles for deeper dives into specific topics.</p>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link href="/blog/server-components">Server Components Guide</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/contact">Get Expert Help</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 h-screen overflow-y-auto scrollbar-hide hover:scrollbar-show">
                  <div className="sticky top-0 space-y-8 py-8">
                    {/* Table of Contents */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Table of Contents
                      </h4>
                      <nav className="space-y-2 text-sm">
                        <a href="#server-components" className="block text-muted-foreground hover:text-primary transition-colors">1. Server Components</a>
                        <a href="#concurrent-features" className="block text-muted-foreground hover:text-primary transition-colors">2. Concurrent Features</a>
                        <a href="#custom-hooks" className="block text-muted-foreground hover:text-primary transition-colors">3. Custom Hooks</a>
                        <a href="#composition" className="block text-muted-foreground hover:text-primary transition-colors">4. Component Composition</a>
                        <a href="#state-management" className="block text-muted-foreground hover:text-primary transition-colors">5. State Management</a>
                      </nav>
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <h4 className="font-semibold mb-4">About the Author</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital Team</p>
                          <p className="text-sm text-muted-foreground">Expert Developers</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our team of expert developers shares insights from building scalable applications for startups and enterprises.
                      </p>
                    </motion.div>

                    {/* Related Posts */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
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

        {/* Navigation */}
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
                  { icon: Heart, label: "Like (156)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'React Patterns 2024', url: window.location.href}) : console.log('Share') }
                ].map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <Button key={btn.label} variant="outline" size="sm" onClick={() => btn.action?.()}>
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