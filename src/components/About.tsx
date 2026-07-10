import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "40+", label: "Projects Completed" },
    { value: "35+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ];

  const expertise = [
    "Elementor", "WooCommerce", "Custom Themes", "Custom Plugins",
    "Speed Optimization", "Technical SEO", "Responsive Design", "Figma to WordPress", "API Integration"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              As a dedicated WordPress Developer with over 4 years of professional experience, 
              I specialize in creating high-performance, visually stunning, and conversion-optimized websites. 
              My approach combines technical excellence with deep understanding of user experience principles.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I don't just build websites; I build digital solutions that help businesses grow. 
              Whether it's a complex WooCommerce store, a custom Elementor implementation, or 
              advanced speed optimization, I deliver scalable results that exceed expectations.
              amin
            </p>

            <div className="flex flex-wrap gap-3">
              {expertise.map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors"
              >
                <span className="text-4xl font-black text-primary mb-2 font-display">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
