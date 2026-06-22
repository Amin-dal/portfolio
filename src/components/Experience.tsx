import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Code2, Gauge, Search } from "lucide-react";

const experiences = [
  {
    period: "Nov 2024 - Present",
    title: "WordPress Developer",
    company: "JMSC POS, Ahmedabad",
    side: "left",
    tools: ["WordPress", "Elementor", "WooCommerce", "cPanel"],
    responsibilities: [
      "Developed and maintained responsive and SEO-friendly WordPress websites for clients across multiple industries",
      "Converted Figma and PSD designs into pixel-perfect WordPress websites using Elementor and custom styling",
      "Built WooCommerce eCommerce websites with payment gateway integration and product management functionality",
      "Improved website performance, loading speed, and mobile responsiveness",
      "Customized WordPress themes and plugins based on client requirements",
      "Managed website hosting, cPanel, backups, and domain configurations",
    ],
  },
  {
    period: "Feb 2022 - Nov 2024",
    title: "Junior WordPress Developer",
    company: "Techteer Solution, Ahmedabad",
    side: "right",
    tools: ["WordPress", "Elementor", "HTML", "CSS", "Bootstrap"],
    responsibilities: [
      "Developed responsive WordPress websites using Elementor, HTML, CSS, and Bootstrap",
      "Assisted in creating and customizing WordPress themes and landing pages",
      "Converted design layouts into fully functional WordPress websites",
      "Worked on website responsiveness, bug fixing, and performance optimization",
      "Maintained client websites and updated website content regularly",
      "Supported senior developers in WooCommerce and custom website projects",
    ],
  },
];

const highlights = [
  { icon: Code2, label: "WordPress Builds", value: "40+ Projects" },
  { icon: Gauge, label: "Optimization", value: "Speed + Core Web Vitals" },
  { icon: Search, label: "SEO Focus", value: "On-page + Technical" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary rounded-full mb-6"
          />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Resume-focused experience in WordPress development, Elementor builds,
            WooCommerce, speed optimization, and SEO-friendly website delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-2xl p-5 border border-primary/10"
            >
              <item.icon className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-bold text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex md:items-center ${
                  exp.side === "left"
                    ? "md:flex-row pl-8 md:pl-0"
                    : "md:flex-row-reverse pl-8 md:pl-0"
                }`}
              >
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />
                <div className="md:hidden absolute top-6 left-[-9px] w-5 h-5 rounded-full bg-primary ring-4 ring-background z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary ring-4 ring-background z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    exp.side === "left" ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="glass p-7 md:p-8 rounded-3xl hover:border-primary/30 transition-colors shadow-sm relative group overflow-hidden">
                    <div className="flex flex-col mb-5">
                      <span className="flex items-center gap-2 text-primary font-medium text-sm mb-2 uppercase tracking-wider">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold font-display mb-1">{exp.title}</h3>
                      <span className="flex items-center gap-2 text-muted-foreground font-medium">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
