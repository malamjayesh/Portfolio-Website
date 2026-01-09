"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, Search, Filter, Tag, TrendingUp, Eye, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "React Patterns 2024",
      excerpt: "Modern React patterns and best practices for scalable applications. Learn about server components, concurrent features, and advanced hooks.",
      date: "2020-03-15T10:30:00Z",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      href: "/blog/react-patterns-2024",

      featured: true
    },
    {
      title: "SEO 2024 Guide",
      excerpt: "Complete guide to technical SEO and content optimization strategies for modern websites and applications.",
      date: "2020-05-22T14:15:00Z",
      readTime: "12 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      href: "/blog/seo-2024-guide",

      featured: false
    },
    {
      title: "UI/UX Psychology",
      excerpt: "Understanding user behavior and psychology in digital design. Create interfaces that users love and understand.",
      date: "2020-07-08T09:45:00Z",
      readTime: "10 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      href: "/blog/ui-ux-psychology",

      featured: true
    },
    {
      title: "DevOps Best Practices",
      excerpt: "Essential DevOps practices for modern development teams. CI/CD, infrastructure as code, and monitoring strategies.",
      date: "2020-09-12T16:20:00Z",
      readTime: "15 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      href: "/blog/devops-best-practices",

      featured: false
    },
    {
      title: "Server Components",
      excerpt: "Deep dive into React Server Components and their benefits. Performance optimization and better user experiences.",
      date: "2020-11-25T11:10:00Z",
      readTime: "11 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      href: "/blog/server-components",

      featured: true
    },
    {
      title: "Mobile First Design",
      excerpt: "Why mobile-first approach is crucial for modern web development. Responsive design principles and best practices.",
      date: "2020-12-30T13:55:00Z",
      readTime: "9 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      href: "/blog/mobile-first-design",

      featured: false
    }
  ];

  const categories = ["All", "React", "Design", "SEO", "DevOps"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 bg-card/50 backdrop-blur-sm">
                <TrendingUp className="h-3 w-3 mr-1" />
                Latest Insights
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Insights, tutorials, and industry trends from our engineering team. 
                Stay updated with the latest in web development, design, and technology.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-card/50 backdrop-blur-sm border-border"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-primary" : "bg-card/50 backdrop-blur-sm"}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Badge variant="outline" className="mb-4">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our most popular and impactful articles, handpicked for you
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300 relative"
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary/90 backdrop-blur-sm">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={600}
                        height={400}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link href={post.href}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="ghost" className="group p-0 h-auto" asChild>
                        <Link href={post.href}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link href={post.href}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="group p-0 h-auto" asChild>
                      <Link href={post.href}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or category filter
                </p>
                <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}