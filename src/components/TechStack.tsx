"use client";

import { motion } from "framer-motion";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "GraphQL", "Docker", "REST APIs"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      category: "Cloud & Tools",
      technologies: ["AWS", "Firebase", "Redux", "Git"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Our Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            We use cutting-edge technologies to build scalable, modern solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-card transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="text-sm sm:text-base text-muted-foreground flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            And many more modern tools and frameworks to deliver the best solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;