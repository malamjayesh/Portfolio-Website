"use client";

import Image from "next/image";
import iconMarket from "@/assets/icon-market.png";
import iconSolutions from "@/assets/icon-solutions.png";
import iconRocket from "@/assets/icon-rocket.png";

const Advantages = () => {
  const advantages = [
    { 
      icon: iconMarket,
      title: "Extensive Market Presence",
      description: "Operating in over 11 key markets with a combined population of over 1.5B billion, Filuet helps you reach countless potential clients and drives your business growth.",
    },
    {
      icon: iconSolutions,
      title: "Comprehensive Solutions",
      description: "Enjoy a one-stop shop for all your multinational expansion needs, from fulfillment to marketing, we make it easy to scale your operations without any hassle.",
    },
    {
      icon: iconRocket,
      title: "Fast Solutions",
      description: "Count on our quick turnaround for global expansion projects, often completed in six months or less, ensuring your brand can seize opportunities without delay.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">
          Filuet Advantages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-card backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Image 
                  src={advantage.icon} 
                  alt={advantage.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{advantage.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;