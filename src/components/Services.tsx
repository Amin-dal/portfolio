import { motion } from "framer-motion";
import { Laptop, ShoppingCart, LayoutTemplate, Zap, ShieldCheck, Paintbrush } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "WordPress Website Development",
      description: "Custom, responsive websites built from scratch or with premium themes tailored to your brand.",
      icon: Laptop,
    },
    {
      title: "WooCommerce Store Development",
      description: "Feature-rich e-commerce stores with payment integration, inventory management, and optimized checkout.",
      icon: ShoppingCart,
    },
    {
      title: "Landing Page Design",
      description: "High-converting, visually compelling landing pages engineered for maximum lead generation.",
      icon: LayoutTemplate,
    },
    {
      title: "Website Speed Optimization",
      description: "Core Web Vitals improvement, advanced caching, CDN setup, and asset minification.",
      icon: Zap,
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, proactive backups, and 24/7 security monitoring to keep your site safe.",
      icon: ShieldCheck,
    },
    {
      title: "Theme & Plugin Customization",
      description: "Tailoring existing themes and plugins to meet your exact functionality and design requirements.",
      icon: Paintbrush,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            My Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border-transparent hover:border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
              
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 font-display group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
