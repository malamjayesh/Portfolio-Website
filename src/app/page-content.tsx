'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import heroGlobe from '@/assets/hero-globe.jpg';

export default function PageContent() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{
              opacity: 0.4,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.2,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={heroGlobe}
              alt="Global reach visualization"
              className="w-full h-full object-cover object-center animate-float"
              fill
              priority
            />
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              We build digital products that grow businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Product-led design. Scalable engineering. Clear results. From
              discovery to launch, we deliver robust web and mobile apps that
              users love and stakeholders measure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
                    asChild
                  >
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 group"
                    asChild
                  >
                    <Link href="/case-studies">
                      See Our Work
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                {
                  number: '500+',
                  label: 'Projects Completed',
                  color: 'text-primary',
                },
                {
                  number: '10+',
                  label: 'Years Experience',
                  color: 'text-accent',
                },
                {
                  number: '98%',
                  label: 'Client Satisfaction',
                  color: 'text-primary',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Professional Slider */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real websites we've built for our clients across various
                industries
              </p>
            </motion.div>

            {/* Infinite Scrolling Slider */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll space-x-8 hover:pause-animation">
                {[
                  {
                    name: 'Vegnar Surfaces',
                    logo: 'https://www.google.com/s2/favicons?domain=www.vegnarsurfaces.com&sz=64',
                    fallback: '🏭',
                    industry: 'Manufacturing',
                    project: 'E-commerce Platform',
                    url: 'https://www.vegnarsurfaces.com/',
                  },
                  {
                    name: 'Vegnar',
                    logo: 'https://www.google.com/s2/favicons?domain=vegnar.com&sz=64',
                    fallback: '🏢',
                    industry: 'Corporate',
                    project: 'Business Website',
                    url: 'https://www.vegnar.com/',
                  },
                  {
                    name: 'Vegnar GFRP',
                    logo: 'https://www.google.com/s2/favicons?domain=vegnargfrp.com&sz=64',
                    fallback: '🔧',
                    industry: 'Industrial',
                    project: 'Product Catalog',
                    url: 'https://www.vegnargfrp.com/',
                  },
                  {
                    name: 'Vegnar Architecture',
                    logo: 'https://www.google.com/s2/favicons?domain=vegnararch.com&sz=64',
                    fallback: '🏗️',
                    industry: 'Architecture',
                    project: 'Portfolio Site',
                    url: 'https://www.vegnararch.com/',
                  },
                  {
                    name: 'Aithik',
                    logo: 'https://www.google.com/s2/favicons?domain=aithik.com&sz=64',
                    fallback: '💻',
                    industry: 'Technology',
                    project: 'Tech Platform',
                    url: 'https://www.aithik.com/',
                  },
                ]
                  .concat([
                    {
                      name: 'Vegnar Surfaces',
                      logo: 'https://www.google.com/s2/favicons?domain=www.vegnarsurfaces.com&sz=64',
                      fallback: '🏭',
                      industry: 'Manufacturing',
                      project: 'E-commerce Platform',
                      url: 'https://www.vegnarsurfaces.com/',
                    },
                    {
                      name: 'Vegnar',
                      logo: 'https://www.google.com/s2/favicons?domain=vegnar.com&sz=64',
                      fallback: '🏢',
                      industry: 'Corporate',
                      project: 'Business Website',
                      url: 'https://www.vegnar.com/',
                    },
                    {
                      name: 'Vegnar GFRP',
                      logo: 'https://www.google.com/s2/favicons?domain=vegnargfrp.com&sz=64',
                      fallback: '🔧',
                      industry: 'Industrial',
                      project: 'Product Catalog',
                      url: 'https://www.vegnargfrp.com/',
                    },
                    {
                      name: 'Vegnar Architecture',
                      logo: 'https://www.google.com/s2/favicons?domain=vegnararch.com&sz=64',
                      fallback: '🏗️',
                      industry: 'Architecture',
                      project: 'Portfolio Site',
                      url: 'https://www.vegnararch.com/',
                    },
                    {
                      name: 'Aithik',
                      logo: 'https://www.google.com/s2/favicons?domain=aithik.com&sz=64',
                      fallback: '💻',
                      industry: 'Technology',
                      project: 'Tech Platform',
                      url: 'https://www.aithik.com/',
                    },
                  ])
                  .map((client, index) => (
                    <motion.div
                      key={`${client.name}-${index}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex-shrink-0 w-80 bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-12 h-12">
                          <img
                            src={client.logo}
                            alt={`${client.name} favicon`}
                            className="w-12 h-12 rounded-lg object-contain bg-white/10 p-2"
                            onError={e => {
                              e.currentTarget.style.display = 'none';
                              const nextElement = e.currentTarget
                                .nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'block';
                              }
                            }}
                          />
                          <div className="text-4xl hidden">
                            {client.fallback}
                          </div>
                        </div>
                        <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {client.industry}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {client.project}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                          asChild
                        >
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Site
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Metrics Slider */}
            <div className="mt-16 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll-reverse space-x-12 hover:pause-animation">
                {[
                  { metric: '500+', label: 'Projects Delivered', icon: '🚀' },
                  { metric: '98%', label: 'Client Satisfaction', icon: '⭐' },
                  { metric: '$50M+', label: 'Revenue Generated', icon: '💰' },
                  { metric: '24/7', label: 'Global Support', icon: '🌍' },
                  { metric: '99.9%', label: 'Uptime SLA', icon: '🛡️' },
                  { metric: '150+', label: 'Team Members', icon: '👥' },
                  { metric: '25+', label: 'Countries Served', icon: '🌐' },
                  { metric: '8+', label: 'Years Experience', icon: '📈' },
                ]
                  .concat([
                    { metric: '500+', label: 'Projects Delivered', icon: '🚀' },
                    { metric: '98%', label: 'Client Satisfaction', icon: '⭐' },
                    { metric: '$50M+', label: 'Revenue Generated', icon: '💰' },
                    { metric: '24/7', label: 'Global Support', icon: '🌍' },
                    { metric: '99.9%', label: 'Uptime SLA', icon: '🛡️' },
                    { metric: '150+', label: 'Team Members', icon: '👥' },
                    { metric: '25+', label: 'Countries Served', icon: '🌐' },
                    { metric: '8+', label: 'Years Experience', icon: '📈' },
                  ])
                  .map((stat, index) => (
                    <motion.div
                      key={`${stat.label}-${index}`}
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 text-center group cursor-pointer"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                        {stat.metric}
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
