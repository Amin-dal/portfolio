import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowUp, Download, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="mb-12 rounded-3xl border border-primary/20 bg-primary text-primary-foreground p-8 md:p-10 shadow-xl shadow-primary/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-3">
                Ready to build your website?
              </p>
              <h3 className="text-2xl md:text-4xl font-bold font-display mb-3">
                Let's create a fast, modern WordPress experience.
              </h3>
              <p className="text-primary-foreground/75 max-w-2xl">
                Available for WordPress, Elementor, WooCommerce, speed optimization, and SEO-focused website projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:amindeveloper2021@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
              <a
                href="/amin-dal.pdf"
                download="amin-dal-resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr] mb-12">
          <div>
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-3xl font-bold font-display text-foreground block mb-4"
            >
              Amin<span className="text-primary">.</span>Dal
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              WordPress Developer crafting high-performance, responsive websites
              that look polished, load fast, and help businesses grow online.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:amindeveloper2021@gmail.com"
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-display text-lg">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-display text-lg">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:amindeveloper2021@gmail.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <span className="break-all">amindeveloper2021@gmail.com</span>
              </a>
              <a
                href="tel:+917069368099"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>+91 7069368099</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>India | Available Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Amin Dal. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors border border-border"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
