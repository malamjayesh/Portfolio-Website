"use client";

import Link from "next/link";

const Markets = () => {
  const markets = [
    { name: "Azerbaijan", flag: "🇦🇿" },
    { name: "India", flag: "🇮🇳" },
    { name: "Uzbekistan", flag: "🇺🇿" },
    { name: "Kazakhstan", flag: "🇰🇿" },
    { name: "Armenia", flag: "🇦🇲" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Israel", flag: "🇮🇱" },
    { name: "Lithuania", flag: "🇱🇹" },
    { name: "Latvia", flag: "🇱🇻" },
    { name: "Estonia", flag: "🇪🇪" },
    { name: "Georgia", flag: "🇬🇪" },
  ];

  return (
    <section id="markets" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Markets We Influence
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {markets.map((market, index) => (
            <Link
              href="/markets"
              key={market.name}
              className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-5xl mb-4">{market.flag}</div>
              <h3 className="text-lg font-semibold mb-2">{market.name}</h3>
              <p className="text-sm text-muted-foreground">Coming soon</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;