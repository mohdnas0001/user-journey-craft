import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="contact" className="section-padding bg-foreground text-background" ref={ref}>
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="max-w-3xl mx-auto text-center">
          <p className="text-label mb-4 text-background/60">Get In Touch</p>
          <h2 className="text-heading mb-6">
            Let's create something{" "}
            <span className="italic">amazing together</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 mb-12 leading-relaxed">
            I am open to freelance, contract, and full-time opportunities. 
            I'm always excited to work on meaningful products and collaborate 
            with passionate teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:hello@example.com" className="group flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Send an Email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border border-background/30 rounded-full hover:bg-background/10 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2026 — Designed with purpose</p>
          <p>UI/UX Designer focused on user-centered experiences</p>
        </motion.div>
      </div>
    </section>;
};
export default Contact;