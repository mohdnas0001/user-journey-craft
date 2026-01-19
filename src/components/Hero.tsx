import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="min-h-screen flex flex-col justify-center section-container pt-20">
      <div className="max-w-4xl">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-label mb-6 mx-0 px-0">
          UI/UX Designer
        </motion.p>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-display mb-8">
          Crafting intuitive
          <br />
          <span className="italic text-primary">digital experiences</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-body-large max-w-xl mb-12">
          I'm a UI/UX Designer who enjoys designing products that are easy to use, 
          visually engaging, and meaningful to users. I believe good design is not 
          just how it looks, but how it works and how it makes people feel.
        </motion.p>

        <motion.button initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.7
      }} onClick={scrollToAbout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>;
};
export default Hero;