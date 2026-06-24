import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import {SiWordpress,SiElementor, SiWoo, SiHtml5, SiJavascript, SiBootstrap, SiTailwindcss, SiPhp, SiMysql,
  SiAngular, SiNextdotjs, SiTypescript, SiGithub, SiFigma, SiCpanel,SiPostman,SiNetlify,SiGit} from "react-icons/si";
import {FaPaintBrush, FaPuzzlePiece, FaRocket, FaExchangeAlt, FaMobileAlt, FaPlug, FaSearch,FaCss3Alt, FaPenNib, FaReact, FaShopify} from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "WordPress",
      skills: [
        { name: "WordPress Development", percent: 95, icon: SiWordpress, color: "#21759b" },
        { name: "Elementor • WPBakery • Divi", percent: 92, icon: SiElementor, color: "#92003B" },
        { name: "Gutenberg", percent: 88, icon: SiWordpress, color: "#21759B" },
        { name: "WooCommerce", percent: 90, icon: SiWoo, color: "#96588a" },
        { name: "ACF (Advanced Custom Fields)", percent: 85, icon: FaPuzzlePiece, color: "#8B5CF6" },
        { name: "Theme Customization", percent: 92, icon: FaPaintBrush, color: "#FF9800" },
        { name: "Plugin Customization", percent: 85, icon: FaPuzzlePiece, color: "#4CAF50" },
        { name: "Shopify", percent: 87, icon: FaShopify, color: "#95BF47" },
        { name: "PHP", percent: 80, icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", percent: 82, icon: SiMysql, color: "#4479A1" },
        { name: "Website Speed Optimization", percent: 90, icon: FaRocket, color: "#F97316" },
        { name: "Website Migration", percent: 92, icon: FaExchangeAlt, color: "#14B8A6" },
        
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", percent: 90, icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", percent: 88, icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", percent: 91, icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", percent: 85, icon: SiBootstrap, color: "#7952B3" },
        { name: "Angular", percent: 95, icon: SiAngular, color: "#DD0031" },
        { name: "React.js", percent: 85, icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", percent: 88, icon: SiNextdotjs, color: "#000000" },
        { name: "JavaScript", percent: 75, icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", percent: 75, icon: SiTypescript, color: "#3178C6" },
        { name: "Responsive Design", percent: 90, icon: FaMobileAlt, color: "#06B6D4" },
        { name: "API Integration", percent: 80, icon: FaPlug, color: "#22C55E" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "cPanel", percent: 88, icon: SiCpanel, color: "#FF6C2C" },
        { name: "Git", percent: 80, icon: SiGit, color: "#F05032" },
        { name: "GitHub", percent: 80, icon: SiGithub, color: "#FFFFFF" },
        { name: "VS Code", percent: 90, icon: VscCode, color: "#007ACC" },
        { name: "Netlify", percent: 85, icon: SiNetlify, color: "#00C7B7" },
        { name: "Postman", percent: 80, icon: SiPostman, color: "#FF6C37" },
        { name: "Figma", percent: 78, icon: SiFigma, color: "#F24E1E" },
        { name: "Adobe Illustrator", percent: 80, icon: FaPenNib, color: "#FF9A00" },
        { name: "SEO Optimization", percent: 75, icon: FaSearch, color: "#4285F4" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-8 font-display border-b border-border pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-4 h-4" style={{ color: skill.color }} />}
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
