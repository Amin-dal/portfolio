import { motion } from "framer-motion";
import { 
  SiWordpress, SiElementor, SiHtml5, SiCss, 
  SiJavascript, SiBootstrap, SiGit, SiCpanel, 
  SiFigma, SiWoo, SiTailwindcss
} from "react-icons/si";
import { FaPhotoVideo, FaPaintBrush, FaPuzzlePiece } from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "WordPress",
      skills: [
        { name: "WordPress Development", percent: 95, icon: SiWordpress, color: "#21759b" },
        { name: "Elementor", percent: 92, icon: SiElementor, color: "#92003B" },
        { name: "WooCommerce", percent: 90, icon: SiWoo, color: "#96588a" },
        { name: "Theme Customization", percent: 92, icon: FaPaintBrush, color: "#FF9800" },
        { name: "Gutenberg", percent: 88, icon: SiWordpress, color: "#21759B" },
        { name: "Plugin Customization", percent: 85, icon: FaPuzzlePiece, color: "#4CAF50" },

      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", percent: 90, icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", percent: 88, icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", percent: 75, icon: SiJavascript, color: "#F7DF1E" },
        { name: "Bootstrap", percent: 85, icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", percent: 91, icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "cPanel", percent: 88, icon: SiCpanel, color: "#FF6C2C" },
        { name: "Git", percent: 80, icon: SiGit, color: "#F05032" },
        { name: "Figma", percent: 78, icon: SiFigma, color: "#F24E1E" },
        { name: "Photoshop", percent: 75, icon: FaPhotoVideo, color: "#31A8FF" },
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
