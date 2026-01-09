import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  TrendingUp, 
  Cloud,
  type LucideIcon 
} from "lucide-react";

export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

export interface ServiceLink extends NavLink {
  icon?: LucideIcon;
}

export interface NavConfig {
  mainNav: NavLink[];
  services: ServiceLink[];
  footerNav: {
    services: NavLink[];
    company: NavLink[];
    contact: NavLink[];
  };
}

export const navigationConfig: NavConfig = {
  // Main navigation menu
  mainNav: [
    {
      title: "Home",
      href: "/",
      description: "Back to homepage"
    },

    {
      title: "Portfolio",
      href: "/case-studies",
      description: "Our work and case studies"
    },
    {
      title: "About",
      href: "/about",
      description: "Learn about our team and mission"
    },
    {
      title: "Tech Stack",
      href: "/tech-stack",
      description: "Technologies we use"
    },
    {
      title: "Tech Talks",
      href: "/blog",
      description: "Insights and articles"
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team"
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with us"
    }
  ],

  // Services menu (for dropdown)
  services: [
    {
      title: "Web & Product Engineering",
      href: "/services/web-development",
      description: "Modern, maintainable websites and SaaS platforms",
      icon: Code
    },
    {
      title: "Mobile Apps",
      href: "/services/mobile-apps",
      description: "Native and cross-platform applications",
      icon: Smartphone
    },
    {
      title: "UI/UX Design",
      href: "/services/ui-ux-design",
      description: "Human-centered design that converts",
      icon: Palette
    },
    {
      title: "Growth & SEO",
      href: "/services/seo-growth",
      description: "Data-driven acquisition strategies",
      icon: Search
    },
    {
      title: "Cloud & DevOps",
      href: "/services/cloud-devops",
      description: "Secure CI/CD and autoscaling",
      icon: Cloud
    },

  ],

  // Footer navigation
  footerNav: {
    services: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile Apps", href: "/services/mobile-apps" },
      { title: "UI/UX Design", href: "/services/ui-ux-design" },
      { title: "SEO & Marketing", href: "/services/seo-growth" },
      { title: "Cloud Solutions", href: "/services/cloud-devops" },
      { title: "Custom Software", href: "/services/custom-software" }
    ],
    company: [
      { title: "About", href: "/about" },
      { title: "Portfolio", href: "/case-studies" },
      { title: "Tech Stack", href: "/tech-stack" },
      { title: "Tech Talks", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" }
    ],
    contact: [
      { title: "Get a Free Quote", href: "/contact" },
      { title: "Schedule Consultation", href: "/contact" }
    ]
  },

};

// Helper function to get active nav item
export const isActiveRoute = (pathname: string, href: string): boolean => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};