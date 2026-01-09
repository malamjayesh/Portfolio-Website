"use client"

import { useEffect } from 'react'
import { Scale, FileText, CreditCard, Shield, Users, AlertTriangle, Clock, Mail, Phone, CheckCircle, ArrowRight, Gavel } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | Flexa Digital'
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="absolute top-32 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 animate-scale-in">
              <Scale className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Clear terms that protect both you and us. Read our service agreement and understand your rights.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Clock className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Service Overview */}
          <div className="bg-gradient-card rounded-xl border border-primary/20 p-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Our Services
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Web Development', desc: 'Custom websites & applications' },
                { title: 'Mobile Apps', desc: 'iOS & Android development' },
                { title: 'Digital Marketing', desc: 'SEO, PPC & social media' },
                { title: 'Cloud Solutions', desc: 'AWS & DevOps services' },
                { title: 'UI/UX Design', desc: 'User experience & interface' },
                { title: 'Consulting', desc: 'Technical strategy & guidance' }
              ].map((service, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-4 border border-border/30">
                  <h4 className="font-semibold text-primary mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Acceptance */}
            <section className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    By accessing and using Flexa Digital's services, you accept and agree to be bound by these terms. 
                    If you do not agree, please discontinue use of our services.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <p className="text-sm text-accent font-medium">
                      ✓ These terms are legally binding and govern your use of our services
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Your Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">As a user of our services, you agree to:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Provide accurate and complete information',
                      'Maintain account security and credentials',
                      'Use services in compliance with laws',
                      'Respect intellectual property rights',
                      'Pay all fees in a timely manner',
                      'Not engage in harmful activities'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <CreditCard className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Payment Schedule</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Invoices due upon receipt
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Net 30 payment terms available
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Late fees may apply after 30 days
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Accepted Methods</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Bank transfers & ACH
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Credit cards (Visa, MC, Amex)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Digital wallets & crypto
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Level Agreement */}
            <section className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Service Guarantees</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { metric: '99.9%', label: 'Uptime Guarantee', desc: 'For hosted services' },
                      { metric: '24/7', label: 'Support Available', desc: 'Critical issues only' },
                      { metric: '<2hrs', label: 'Response Time', desc: 'Business hours' }
                    ].map((item, index) => (
                      <div key={index} className="text-center bg-card/30 rounded-lg p-4 border border-border/30">
                        <div className="text-2xl font-bold text-blue-500 mb-1">{item.metric}</div>
                        <div className="font-semibold text-foreground text-sm mb-1">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                  <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20 mb-4">
                    <p className="text-sm text-orange-500 font-medium mb-2">Important Legal Notice</p>
                    <p className="text-sm text-muted-foreground">
                      Our total liability shall not exceed the amount paid for services. We are not liable for indirect, 
                      consequential, or punitive damages.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Force majeure events excluded',
                      'Third-party service interruptions',
                      'Data backup is shared responsibility',
                      'Maximum liability capped at service fees'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-gradient-card rounded-xl border border-primary/20 p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution Process</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { step: '1', title: 'Direct Negotiation', desc: 'Good faith discussion to resolve issues' },
                      { step: '2', title: 'Mediation', desc: 'Neutral third-party mediation' },
                      { step: '3', title: 'Arbitration', desc: 'Binding arbitration if needed' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                          {item.step}
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-primary/10 rounded-xl border border-primary/20 p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our legal team is available to clarify any terms or answer questions about our service agreement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:legal@flexadigital.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail className="w-4 h-4" />
                  legal@flexadigital.com
                </a>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg border border-border hover:bg-card/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <a href="/privacy" className="hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    Privacy Policy
                  </a>
                  <a href="/contact" className="hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    Contact Support
                  </a>
                  <a href="/refund-policy" className="hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    Refund Policy
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}