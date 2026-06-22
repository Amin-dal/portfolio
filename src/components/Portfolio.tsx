import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "JMSC POS",
      url: "https://jmscpos.us/",
      description: "Modern POS and inventory management solution for retail businesses, featuring inventory tracking, payment processing, automated purchase orders, and business reporting.",
      tags: ["WordPress", "Elementor", "Custom CSS","POS Software"],
      image: "/jmscpos.jpg",
      accent: "Point of sale",
    },
    {
      title: "culture chaos",
      url: "https://www.culturechaos.in/",
      description: "Fashion and lifestyle eCommerce website showcasing trendy clothing collections, seamless product browsing, and a user-friendly shopping experience across all devices.",
      tags: ["WordPress","WooCommerce", "Elementor", "Custom CSS","E-commerce"],
      image: "/calture.jpg",
      accent: "Fashion E-commerce",
    },
    {
      title: "Vosgi",
      url: "https://vosgi.in",
      description: "legant jewelry showcase website featuring premium collections, modern design, and a seamless browsing experience across all devices.",
      tags: ["WordPress","WooCommerce", "Custom Theme", "Elementor", "Custom CSS","E-commerce","Speed Optimization"],
      image: "/vosgi.jpg",
      accent: "Jewelry Brand",
    },
    {
      title: "Hawa Engineering Ltd",
      url: "https://hawaengltd.com",
      description: "Corporate website for a leading engineering company featuring comprehensive service listings and project portfolios.",
      tags: ["WordPress", "Elementor", "Custom CSS"],
      image: "/hawa.jpg",
      accent: "Engineering Website",
    },
    {
      title: "Aira India",
      url: "https://airaindia.com",
      description: "Modern business website and product catalog built with scalable e-commerce capabilities.",
      tags: ["WordPress", "WooCommerce", "Elementor"],
      image: "/aira.jpg",
      accent: "Product Catalog",
    }
    
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            My Portfolio
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary rounded-full mb-6"
          />
          <p className="text-muted-foreground max-w-2xl text-lg">
            A selection of recent projects showcasing my expertise in building high-quality, scalable WordPress solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden glass border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="h-56 md:h-64 w-full relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    Live Preview <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                  {project.accent}
                </span>
              </div>
              
              <div className="p-6 relative z-20 bg-background">
                <h3 className="text-xl font-bold mb-2 font-display">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
