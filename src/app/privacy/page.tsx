"use client"

import { useEffect } from 'react'
import { Shield, Lock, Eye, Users, FileText, Clock, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Flexa Digital'
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-scale-in">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your privacy is our priority. Learn how we protect and handle your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Clock className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { title: 'Data Collection', href: '#collection' },
                { title: 'Usage', href: '#usage' },
                { title: 'Security', href: '#security' },
                { title: 'Your Rights', href: '#rights' }
              ].map((item, index) => (
                <a key={index} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5 flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Information Collection */}
            <section id="collection" className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We collect information you provide directly to us, such as when you:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Create an account or use our services',
                      'Contact us for support or inquiries',
                      'Subscribe to our newsletter',
                      'Participate in surveys or feedback'
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

            {/* Usage */}
            <section id="usage" className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Provide and improve our services',
                      'Process transactions securely',
                      'Send technical notices and support',
                      'Communicate about products and services',
                      'Monitor and analyze usage trends',
                      'Ensure platform security'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Lock className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground mb-4">We implement industry-standard security measures:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'SSL encryption for data transmission',
                      'Regular security audits and updates',
                      'Multi-factor authentication',
                      'Secure data storage and backups',
                      'Access controls and monitoring',
                      'GDPR and CCPA compliance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="bg-gradient-card rounded-xl border border-primary/20 p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Your Privacy Rights</h2>
                  <p className="text-muted-foreground mb-6">You have complete control over your personal data:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Access', desc: 'View all data we have about you' },
                      { title: 'Update', desc: 'Modify your personal information' },
                      { title: 'Delete', desc: 'Request complete data removal' },
                      { title: 'Portability', desc: 'Export your data in standard formats' },
                      { title: 'Opt-out', desc: 'Unsubscribe from communications' },
                      { title: 'Complaint', desc: 'Lodge complaints with authorities' }
                    ].map((item, index) => (
                      <div key={index} className="bg-card/30 rounded-lg p-4 border border-border/30">
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-primary/10 rounded-xl border border-primary/20 p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our privacy team is here to help. Contact us for any questions about how we handle your data.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:privacy@flexadigital.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail className="w-4 h-4" />
                  privacy@flexadigital.com
                </a>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg border border-border hover:bg-card/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </a>
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