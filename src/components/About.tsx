import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label mb-4">About Me</p>
            <h2 className="text-heading mb-6">
              Transforming complex problems into{" "}
              <span className="italic">simple solutions</span>
            </h2>
            <div className="space-y-4 text-body-large">
              <p>
                I am a UI/UX Designer passionate about creating intuitive, 
                user-centered digital experiences. I focus on transforming 
                complex problems into simple, functional, and visually 
                appealing solutions.
              </p>
              <p>
                My goal is to design digital products that solve real problems, 
                improve user experience, and support business goals through 
                research-driven and user-focused design decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Your Photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
