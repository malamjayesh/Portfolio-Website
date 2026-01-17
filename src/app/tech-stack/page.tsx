'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Shield,
  Zap,
  Star,
  Play,
  ChevronRight,
  Globe,
  Layers,
  Cpu,
  Lock,
  Rocket,
  BarChart3,
  Users,
  Award,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TechStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof techData>('frontend');
  const [hoveredTech, setHoveredTech] = useState<any>(null);

  const techData = {
    frontend: {
      title: 'Frontend Mastery',
      subtitle: 'Crafting Digital Experiences',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      technologies: [
        {
          name: 'React Ecosystem',
          version: 'v18+',
          description: 'Next-gen component architecture',
          stats: {
            projects: '300+',
            performance: '40% faster',
            satisfaction: '98%',
          },
          features: [
            'Hooks',
            'Suspense',
            'Concurrent Mode',
            'Server Components',
          ],
          logo: '⚛️',
        },
        {
          name: 'Next.js Framework',
          version: 'v14+',
          description: 'Full-stack React production framework',
          stats: {
            projects: '200+',
            performance: '60% better SEO',
            satisfaction: '97%',
          },
          features: [
            'App Router',
            'Server Actions',
            'Edge Runtime',
            'Turbopack',
          ],
          logo: '▲',
        },
        {
          name: 'TypeScript',
          version: 'v5+',
          description: 'Type-safe JavaScript at scale',
          stats: {
            projects: '250+',
            performance: '50% fewer bugs',
            satisfaction: '99%',
          },
          features: [
            'Strict Mode',
            'Generics',
            'Decorators',
            'Module Resolution',
          ],
          logo: '🔷',
        },
      ],
    },
    backend: {
      title: 'Backend Excellence',
      subtitle: 'Powering Digital Infrastructure',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      technologies: [
        {
          name: 'Node.js Runtime',
          version: 'v20+',
          description: 'High-performance JavaScript backend',
          stats: {
            projects: '280+',
            performance: '3x faster APIs',
            satisfaction: '96%',
          },
          features: [
            'ES Modules',
            'Worker Threads',
            'Async Hooks',
            'Performance API',
          ],
          logo: '🟢',
        },
        {
          name: 'Python Ecosystem',
          version: 'v3.12+',
          description: 'AI-powered backend solutions',
          stats: {
            projects: '150+',
            performance: 'Advanced ML',
            satisfaction: '98%',
          },
          features: ['FastAPI', 'Django', 'Machine Learning', 'Data Science'],
          logo: '🐍',
        },
        {
          name: 'GraphQL APIs',
          version: 'Latest',
          description: 'Efficient data fetching layer',
          stats: {
            projects: '120+',
            performance: '50% less data',
            satisfaction: '95%',
          },
          features: ['Type Safety', 'Real-time', 'Federation', 'Caching'],
          logo: '🔗',
        },
      ],
    },

    mobile: {
      title: 'Mobile Innovation',
      subtitle: 'Cross-Platform Excellence',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50',
      technologies: [
        {
          name: 'React Native',
          version: 'v0.73+',
          description: 'Native mobile performance',
          stats: {
            projects: '150+',
            performance: '70% code reuse',
            satisfaction: '96%',
          },
          features: ['New Architecture', 'Fabric', 'TurboModules', 'Codegen'],
          logo: '📱',
        },
        {
          name: 'Flutter',
          version: 'v3.16+',
          description: "Google's UI toolkit",
          stats: {
            projects: '80+',
            performance: 'Native speed',
            satisfaction: '95%',
          },
          features: ['Impeller', 'Material 3', 'Adaptive UI', 'Web Support'],
          logo: '🦋',
        },
        {
          name: 'Progressive Web Apps',
          version: 'Latest',
          description: 'Web apps that feel native',
          stats: {
            projects: '120+',
            performance: 'App-like UX',
            satisfaction: '94%',
          },
          features: [
            'Offline Support',
            'Push Notifications',
            'App Install',
            'Background Sync',
          ],
          logo: '🌐',
        },
      ],
    },
  };

  const achievements = [
    { number: '30+', label: 'Projects Delivered', icon: Rocket },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'Global Support', icon: Globe },
  ];

  const currentCategory = techData[activeCategory as keyof typeof techData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
                <Star className="w-4 h-4 mr-2" />
                Technology Excellence
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Tech
                </span>
                <br />
                <span className="text-foreground">Arsenal</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Cutting-edge technologies powering next-generation digital
                experiences
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary text-lg px-8 py-6 rounded-full hover:shadow-glow transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Technologies
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Tech Categories */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">
                Interactive Tech Explorer
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive technology stack through an immersive
                experience
              </p>
            </motion.div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(techData).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={key}
                    onClick={() =>
                      setActiveCategory(key as keyof typeof techData)
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all ${
                      activeCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{category.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Category Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center`}
                      >
                        <currentCategory.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">
                          {currentCategory.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {currentCategory.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {currentCategory.technologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onHoverStart={() => setHoveredTech(tech)}
                          onHoverEnd={() => setHoveredTech(null)}
                          className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{tech.logo}</span>
                              <div>
                                <h4 className="text-xl font-bold">
                                  {tech.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {tech.version}
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {tech.description}
                          </p>

                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">
                                {tech.stats.projects}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Projects
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-accent">
                                {tech.stats.performance}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Performance
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">
                                {tech.stats.satisfaction}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Satisfaction
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {tech.features.map(feature => (
                              <Badge
                                key={feature}
                                variant="secondary"
                                className="text-xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Visualization */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-80 h-80 mx-auto relative"
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentCategory.color} opacity-20`}
                      />
                      <div className="absolute inset-4 rounded-full bg-card border-2 border-border flex items-center justify-center">
                        <currentCategory.icon className="w-32 h-32 text-primary" />
                      </div>

                      {/* Floating Tech Icons */}
                      {currentCategory.technologies.map((tech, index) => {
                        const techLinks = {
                          'React Ecosystem': '/tech/react',
                          'Next.js Framework': '/tech/nextjs',
                          TypeScript: '/tech/typescript',
                          'Node.js Runtime': '/tech/nodejs',
                          'Python Ecosystem': '/tech/python',
                          'GraphQL APIs': '/tech/graphql',
                          'React Native': '/tech/react-native',
                          Flutter: '/tech/flutter',
                          'Progressive Web Apps': '/tech/pwa',
                        };
                        return (
                          <Link
                            key={tech.name}
                            href={
                              techLinks[tech.name as keyof typeof techLinks] ||
                              '/tech-stack'
                            }
                            className="absolute w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
                            style={{
                              top: `${50 + 35 * Math.sin((index * 120 * Math.PI) / 180)}%`,
                              left: `${50 + 35 * Math.cos((index * 120 * Math.PI) / 180)}%`,
                              transform: 'translate(-50%, -50%)',
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex items-center justify-center w-full h-full"
                            >
                              <span className="text-3xl">{tech.logo}</span>
                            </motion.div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Why Choose Our Stack */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">
                Why Our Tech Stack Wins
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic technology choices that deliver measurable business
                results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Lightning Fast',
                  description: 'Optimized for speed and performance',
                  icon: Zap,
                  metric: '3x Faster',
                  color: 'text-yellow-500',
                },
                {
                  title: 'Enterprise Ready',
                  description: 'Scalable and secure architecture',
                  icon: Shield,
                  metric: '99.9% Uptime',
                  color: 'text-blue-500',
                },
                {
                  title: 'Future Proof',
                  description: 'Latest technologies and standards',
                  icon: Rocket,
                  metric: 'Always Updated',
                  color: 'text-purple-500',
                },
                {
                  title: 'Cost Effective',
                  description: 'Optimized development and maintenance',
                  icon: BarChart3,
                  metric: '40% Savings',
                  color: 'text-green-500',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl transition-all"
                  >
                    <Icon
                      className={`w-12 h-12 ${benefit.color} mx-auto mb-4`}
                    />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className={`text-2xl font-bold ${benefit.color}`}>
                      {benefit.metric}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Ready to Build the
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Future?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Let's leverage our cutting-edge tech stack to create something
                extraordinary for your business
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-lg px-8 py-6 rounded-full hover:shadow-glow"
                  asChild
                >
                  <Link href="/contact">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full"
                  asChild
                >
                  <Link href="/case-studies">
                    <Award className="w-5 h-5 mr-2" />
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechStack;
