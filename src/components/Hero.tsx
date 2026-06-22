import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  SiWordpress,
  SiElementor,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "WordPress Developer with 4+ Years of Experience";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  const floatingIcons = [
    {
      Icon: SiWordpress,
      color: "text-[#21759b]",
      delay: 0,
      top: "20%",
      left: "10%",
    },
    {
      Icon: SiElementor,
      color: "text-[#92003B]",
      delay: 1,
      top: "15%",
      left: "80%",
    },
    {
      Icon: SiJavascript,
      color: "text-[#F7DF1E]",
      delay: 2,
      top: "60%",
      left: "85%",
    },
    {
      Icon: SiReact,
      color: "text-[#61DAFB]",
      delay: 0.5,
      top: "70%",
      left: "15%",
    },
    {
      Icon: SiHtml5,
      color: "text-[#E34F26]",
      delay: 1.5,
      top: "40%",
      left: "5%",
    },
    {
      Icon: SiCss,
      color: "text-[#1572B6]",
      delay: 2.5,
      top: "35%",
      left: "90%",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute z-0 opacity-20 dark:opacity-30 ${item.color}`}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}>
          <item.Icon size={48} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            Amin Dal
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-muted-foreground mb-6 h-10">
            <span className="text-primary">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I build fast, responsive, and SEO-friendly WordPress websites that
            deliver exceptional user experiences and measurable business
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "#portfolio")}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary/25">
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/amin-dal.pdf"
              download="amin-dal-resume.pdf"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-muted/50 text-foreground font-semibold rounded-full transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href="/amindal.vcf"
              download="amindal.vcf"
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary/20 hover:border-primary text-foreground font-semibold rounded-full transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
