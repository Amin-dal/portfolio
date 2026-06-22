import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function Testimonials() {
  // const testimonials = [
  //   {
  //     text: "Amin transformed our outdated website into a modern, fast-loading platform. Our bounce rate dropped noticeably after his speed optimization work.",
  //     author: "Rajesh Kumar",
  //     role: "CEO at TechVentures India",
  //     initials: "RK",
  //   },
  //   {
  //     text: "Exceptional WooCommerce store built by Amin. He understood our requirements perfectly and delivered the complete setup ahead of schedule.",
  //     author: "Priya Sharma",
  //     role: "Founder at StyleHouse",
  //     initials: "PS",
  //   },
  //   {
  //     text: "Amin's attention to SEO detail is outstanding. The site structure, speed, and content layout were handled very professionally.",
  //     author: "Anil Mehta",
  //     role: "Marketing Director at GrowthFirst",
  //     initials: "AM",
  //   },
  //   {
  //     text: "He converted our Figma design into a pixel-perfect Elementor website. The mobile responsiveness and animations came out beautifully.",
  //     author: "Nisha Patel",
  //     role: "Creative Lead at BrandNest",
  //     initials: "NP",
  //   },
  //   {
  //     text: "Very reliable developer. Amin fixed our WordPress issues, improved loading time, and explained every change in simple language.",
  //     author: "Harsh Shah",
  //     role: "Operations Head at MarketPro",
  //     initials: "HS",
  //   },
  //   {
  //     text: "Our landing page now looks premium and converts better. The delivery was clean, quick, and easy to manage from WordPress.",
  //     author: "Meera Desai",
  //     role: "Founder at LearnPlus",
  //     initials: "MD",
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setActiveIndex((index) => (index + 1) % testimonials.length);
  //   }, 4500);

  //   return () => window.clearInterval(timer);
  // }, [testimonials.length]);

  // const goToPrevious = () => {
  //   setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  // };

  // const goToNext = () => {
  //   setActiveIndex((index) => (index + 1) % testimonials.length);
  // };

  // const visibleTestimonials = [0, 1, 2].map(
  //   (offset) => testimonials[(activeIndex + offset) % testimonials.length],
  // );

  // return (
  //   <section className="py-24 relative overflow-hidden">
  //     <div className="container mx-auto px-4 md:px-6">
  //       <div className="flex flex-col items-center justify-center text-center mb-16">
  //         <motion.h2
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           className="text-3xl md:text-5xl font-bold font-display mb-4"
  //         >
  //           What Clients Say
  //         </motion.h2>
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.8 }}
  //           whileInView={{ opacity: 1, scale: 1 }}
  //           viewport={{ once: true }}
  //           className="w-24 h-1.5 bg-primary rounded-full"
  //         />
  //       </div>

  //       <div className="relative max-w-6xl mx-auto">
  //         <div className="grid lg:grid-cols-3 gap-6">
  //           {visibleTestimonials.map((testimonial, index) => (
  //             <motion.div
  //               key={`${testimonial.author}-${activeIndex}`}
  //               initial={{ opacity: 0, x: 30 }}
  //               animate={{ opacity: 1, x: 0 }}
  //               transition={{ duration: 0.35, delay: index * 0.06 }}
  //               className="glass p-7 md:p-8 rounded-3xl relative min-h-[330px] flex flex-col"
  //             >
  //               <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />

  //               <div className="flex gap-1 mb-6">
  //                 {[...Array(5)].map((_, i) => (
  //                   <Star key={i} className="w-4 h-4 fill-primary text-primary" />
  //                 ))}
  //               </div>

  //               <p className="text-muted-foreground text-base md:text-lg italic mb-8 leading-relaxed relative z-10 flex-1">
  //                 "{testimonial.text}"
  //               </p>

  //               <div className="flex items-center gap-4">
  //                 <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
  //                   {testimonial.initials}
  //                 </div>
  //                 <div>
  //                   <h4 className="font-bold text-foreground">{testimonial.author}</h4>
  //                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>

  //         <div className="mt-8 flex items-center justify-center gap-4">
  //           <button
  //             type="button"
  //             onClick={goToPrevious}
  //             className="w-11 h-11 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
  //             aria-label="Previous testimonial"
  //           >
  //             <ChevronLeft className="w-5 h-5" />
  //           </button>

  //           <div className="flex items-center gap-2">
  //             {testimonials.map((testimonial, index) => (
  //               <button
  //                 key={testimonial.author}
  //                 type="button"
  //                 onClick={() => setActiveIndex(index)}
  //                 className={`h-2.5 rounded-full transition-all ${
  //                   index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"
  //                 }`}
  //                 aria-label={`Show testimonial ${index + 1}`}
  //               />
  //             ))}
  //           </div>

  //           <button
  //             type="button"
  //             onClick={goToNext}
  //             className="w-11 h-11 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
  //             aria-label="Next testimonial"
  //           >
  //             <ChevronRight className="w-5 h-5" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
