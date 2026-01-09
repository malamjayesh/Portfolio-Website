"use client";

import { Check, X } from "lucide-react";

const Differentiators = () => {
  const filuetAdvantages = [
    "Over 30 years of expertise in logistics and e-commerce solutions with transparency and reliability.",
    "Extensive reach across 11 regions, with a physical presence in all markets, accessing over 1.5 billion customers.",
    "Offers a wide range of services, streamlining global expansion and simplifying market entry with minimal risk.",
    "Delivers personalized solutions for each client, making international expansion effortless.",
    "Achieves rapid market entry in as little as 6 months, allowing clients to seize opportunities quickly.",
  ];

  const industryBasics = [
    "Basic logistics and e-commerce support",
    "One area specialization",
    "Typically operate in fewer markets, limiting global reach and opportunities.",
    "Services tend to be narrower, lacking comprehensive support across the supply chain.",
    "Frequently offer generic solutions that don't cater to individual business needs.",
    "Slower expansion timelines can lead to missed opportunities in fast-moving markets.",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block text-6xl font-bold text-primary mb-4">T</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Sets Filuet Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Filuet Advantages */}
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">Filuet Advantages</h3>
            <div className="space-y-4">
              {filuetAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/20 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Industry Offering */}
          <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Basic Industry Offering</h3>
            <div className="space-y-4">
              {industryBasics.map((basic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-muted/20 rounded-full">
                    <X className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{basic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;