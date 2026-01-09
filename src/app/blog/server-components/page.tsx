"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin, Server, Zap, Code, Database, Globe, Layers, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServerComponents() {
  const tableOfContents = [
    { id: "what-are-server-components", title: "What Are Server Components?" },
    { id: "key-benefits", title: "Key Benefits & Advantages" },
    { id: "server-vs-client", title: "Server vs Client Components" },
    { id: "data-fetching", title: "Data Fetching Patterns" },
    { id: "streaming-suspense", title: "Streaming & Suspense" },
    { id: "best-practices", title: "Implementation Best Practices" },
    { id: "migration-strategies", title: "Migration Strategies" },
    { id: "performance-optimization", title: "Performance Optimization" }
  ];

  const relatedPosts = [
    { title: "React Patterns 2024", href: "/blog/react-patterns-2024", category: "React", readTime: "8 min read" },
    { title: "DevOps Best Practices", href: "/blog/devops-best-practices", category: "DevOps", readTime: "15 min read" },
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
                React Server Components
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                React <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Server Components</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Deep dive into React Server Components and their revolutionary benefits. Learn how to build faster, more efficient applications with server-side rendering and zero JavaScript bundle impact.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 20, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>11 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>FlexaDigital React Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>2.7k views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>203 likes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=React Server Components&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}` },
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
                      <Image src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop" alt="React Server Components" className="w-full h-full object-cover" width={800} height={400} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="mb-2 bg-primary/90">React Innovation</Badge>
                        <h3 className="text-xl font-bold">Server-Side Revolution</h3>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Server Components Advantages
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Zero JavaScript bundle impact</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Direct database access</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Better SEO and performance</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Simplified data fetching</p>
                        </div>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Automatic code splitting</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Streaming capabilities</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Enhanced security</p>
                          <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Reduced complexity</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="what-are-server-components">1. What Are Server Components?</h2>
                    <p>React Server Components are a new type of component that renders on the server before being sent to the client. Unlike traditional Server-Side Rendering (SSR), Server Components don't hydrate on the client—they remain server-side, providing significant performance benefits.</p>
                    
                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" />
                        Traditional SSR vs Server Components
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                          <h5 className="font-medium text-orange-500">Traditional SSR</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Renders HTML on server</li>
                            <li>• Ships JavaScript to client</li>
                            <li>• Requires hydration</li>
                            <li>• Larger bundle sizes</li>
                            <li>• Waterfall data fetching</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-green-500">Server Components</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Renders on server only</li>
                            <li>• Zero JavaScript to client</li>
                            <li>• No hydration needed</li>
                            <li>• Smaller bundle sizes</li>
                            <li>• Parallel data fetching</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="key-benefits">2. Key Benefits & Advantages</h2>
                    <p>Server Components bring revolutionary improvements to React applications, addressing long-standing performance and complexity challenges.</p>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          Performance Benefits
                        </h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Reduced bundle size (up to 50% smaller)</li>
                          <li>• Faster initial page loads</li>
                          <li>• Better Core Web Vitals scores</li>
                          <li>• Improved Time to Interactive (TTI)</li>
                          <li>• Automatic code splitting</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Database className="h-4 w-4 text-accent" />
                          Developer Experience
                        </h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Direct database queries</li>
                          <li>• Simplified data fetching</li>
                          <li>• No API layer needed</li>
                          <li>• Better error boundaries</li>
                          <li>• Cleaner component architecture</li>
                        </ul>
                      </div>
                    </div>

                    <h2 id="server-vs-client">3. Server vs Client Components</h2>
                    <p>Understanding when to use Server Components versus Client Components is crucial for optimal application architecture.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Component Decision Matrix</h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-primary mb-3">Use Server Components For:</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Data fetching and display</li>
                            <li>• Static content rendering</li>
                            <li>• Layout components</li>
                            <li>• SEO-critical content</li>
                            <li>• Database operations</li>
                            <li>• File system access</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-accent mb-3">Use Client Components For:</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Interactive elements</li>
                            <li>• State management (useState, useReducer)</li>
                            <li>• Event handlers</li>
                            <li>• Browser APIs</li>
                            <li>• Real-time features</li>
                            <li>• Custom hooks with state</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 id="data-fetching">4. Data Fetching Patterns</h2>
                    <p>Server Components enable new, more efficient data fetching patterns that eliminate waterfalls and improve performance.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Data Fetching Evolution</h4>
                      <div className="space-y-4 text-sm">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <h5 className="font-medium text-red-500 mb-2">❌ Old Pattern (Client-side)</h5>
                          <pre className="text-muted-foreground overflow-x-auto"><code>{`useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(setPosts)
}, [])`}</code></pre>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h5 className="font-medium text-green-500 mb-2">✅ New Pattern (Server Component)</h5>
                          <pre className="text-muted-foreground overflow-x-auto"><code>{`async function Posts() {
  const posts = await db.posts.findMany()
  return <PostList posts={posts} />
}`}</code></pre>
                        </div>
                      </div>
                    </div>

                    <h3>Advanced Data Fetching Techniques:</h3>
                    <ul>
                      <li><strong>Parallel Fetching:</strong> Multiple async operations run simultaneously</li>
                      <li><strong>Waterfall Prevention:</strong> Avoid sequential data dependencies</li>
                      <li><strong>Caching Strategies:</strong> Built-in request deduplication</li>
                      <li><strong>Error Boundaries:</strong> Better error handling at component level</li>
                    </ul>

                    <h2 id="streaming-suspense">5. Streaming & Suspense</h2>
                    <p>Server Components work seamlessly with React's Suspense boundaries, enabling progressive rendering and improved perceived performance.</p>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Streaming Benefits
                        </h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Faster Time to First Byte (TTFB)</li>
                          <li>• Progressive content loading</li>
                          <li>• Better user experience</li>
                          <li>• Reduced perceived load time</li>
                          <li>• Improved Core Web Vitals</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Suspense Integration</h4>
                        <div className="text-sm">
                          <pre className="bg-secondary/30 p-3 rounded text-muted-foreground overflow-x-auto"><code>{`<Suspense fallback={<Loading />}>
  <ServerComponent />
</Suspense>`}</code></pre>
                        </div>
                      </div>
                    </div>

                    <h2 id="best-practices">6. Implementation Best Practices</h2>
                    <p>Follow these best practices to maximize the benefits of Server Components in your applications.</p>

                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Best Practices Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Use Server Components for data fetching</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Keep Client Components minimal</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Implement proper error boundaries</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Use Suspense for loading states</span>
                          </label>
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Optimize database queries</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Implement request caching</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Monitor performance metrics</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span>Test across different devices</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <h2 id="migration-strategies">7. Migration Strategies</h2>
                    <p>Gradually adopt Server Components by starting with leaf components and working your way up the component tree.</p>

                    <h3>Migration Roadmap:</h3>
                    <div className="space-y-4 my-6">
                      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-medium">Start with Static Components</h4>
                          <p className="text-sm text-muted-foreground">Convert components that don't use state or browser APIs</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-medium">Move Data Fetching Logic</h4>
                          <p className="text-sm text-muted-foreground">Replace useEffect data fetching with async Server Components</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-medium">Optimize Component Boundaries</h4>
                          <p className="text-sm text-muted-foreground">Fine-tune the split between Server and Client Components</p>
                        </div>
                      </div>
                    </div>

                    <h2 id="performance-optimization">8. Performance Optimization</h2>
                    <p>Maximize Server Component performance with these optimization techniques.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">Performance Optimization Techniques</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="font-medium">Request Caching</div>
                          <div className="text-muted-foreground mt-1">Deduplicate identical requests</div>
                        </div>
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">📊</div>
                          <div className="font-medium">Database Optimization</div>
                          <div className="text-muted-foreground mt-1">Efficient queries and indexing</div>
                        </div>
                        <div className="text-center p-3 bg-secondary/30 rounded-lg">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="font-medium">Streaming</div>
                          <div className="text-muted-foreground mt-1">Progressive content delivery</div>
                        </div>
                      </div>
                    </div>

                    <h2>Real-World Implementation Examples</h2>
                    <p>Learn from practical examples of Server Components implementation in production applications.</p>

                    <div className="bg-card border border-border rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-4">E-commerce Product Page Example</h4>
                      <div className="space-y-4 text-sm">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <h5 className="font-medium text-green-500 mb-2">✓ Server Component: Product Details</h5>
                          <pre className="text-muted-foreground overflow-x-auto"><code>{`async function ProductPage({ id }) {
  const product = await db.product.findUnique({ where: { id } })
  const reviews = await db.review.findMany({ where: { productId: id } })
  
  return (
    <div>
      <ProductInfo product={product} />
      <ReviewsList reviews={reviews} />
      <AddToCartButton productId={id} /> {/* Client Component */}
    </div>
  )
}`}</code></pre>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="font-medium text-blue-500 mb-2">✓ Client Component: Interactive Cart</h5>
                          <pre className="text-muted-foreground overflow-x-auto"><code>{`'use client'

function AddToCartButton({ productId }) {
  const [isAdding, setIsAdding] = useState(false)
  
  const handleAddToCart = async () => {
    setIsAdding(true)
    await addToCart(productId)
    setIsAdding(false)
  }
  
  return (
    <button onClick={handleAddToCart} disabled={isAdding}>
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}`}</code></pre>
                        </div>
                      </div>
                    </div>

                    <h3>Advanced Patterns & Techniques:</h3>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Nested Server Components</h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Compose multiple async components</li>
                          <li>• Parallel data fetching strategies</li>
                          <li>• Error boundary implementation</li>
                          <li>• Loading state management</li>
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-semibold mb-3">Server Actions Integration</h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li>• Form handling without JavaScript</li>
                          <li>• Progressive enhancement patterns</li>
                          <li>• Optimistic UI updates</li>
                          <li>• Server-side validation</li>
                        </ul>
                      </div>
                    </div>

                    <h2>Future of Server Components</h2>
                    <p>Explore upcoming features and the roadmap for React Server Components ecosystem.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-6">
                      <h4 className="font-semibold mb-3">Upcoming Features & Improvements</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="font-medium">React 19</div>
                          <div className="text-muted-foreground mt-1">Enhanced Server Components</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="font-medium">Partial Hydration</div>
                          <div className="text-muted-foreground mt-1">Selective client-side rendering</div>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-lg">
                          <div className="text-2xl mb-2">🌐</div>
                          <div className="font-medium">Edge Runtime</div>
                          <div className="text-muted-foreground mt-1">Global server components</div>
                        </div>
                      </div>
                    </div>

                    <h2>Conclusion</h2>
                    <p>React Server Components represent a paradigm shift in React development, offering significant performance improvements and a better developer experience. As the ecosystem matures, we can expect even more powerful features and optimizations. Start experimenting with them in your Next.js 13+ applications to build faster, more efficient web applications that provide exceptional user experiences.</p>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold mb-3">Ready to Implement Server Components?</h4>
                      <p className="text-muted-foreground mb-4">Our React experts can help you migrate to Server Components and optimize your application performance.</p>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link href="/contact">Get React Consultation</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/services/web-development">Development Services</Link>
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
                      <h4 className="font-semibent mb-4">React Expert Team</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          FD
                        </div>
                        <div>
                          <p className="font-medium">FlexaDigital React Team</p>
                          <p className="text-sm text-muted-foreground">React Specialists</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our React experts have built 50+ applications using Server Components and modern React patterns.
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
                  { icon: Heart, label: "Like (203)", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'React Server Components', url: window.location.href}) : console.log('Share') }
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