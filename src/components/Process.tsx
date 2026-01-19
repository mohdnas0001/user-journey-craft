import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Understanding users, business goals, and market context through interviews, surveys, and competitive analysis.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Synthesizing research insights to define user needs, pain points, and design opportunities.",
  },
  {
    number: "03",
    title: "Ideate",
    description:
      "Exploring solutions through sketches, wireframes, and collaborative brainstorming sessions.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Creating high-fidelity interfaces with attention to visual hierarchy, consistency, and accessibility.",
  },
  {
    number: "05",
    title: "Prototype",
    description:
      "Building interactive prototypes to simulate the user experience and gather feedback.",
  },
  {
    number: "06",
    title: "Test & Iterate",
    description:
      "Validating designs through usability testing and refining based on user feedback.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-label mb-4">How I Work</p>
          <h2 className="text-heading mb-4">
            Design <span className="italic">process</span>
          </h2>
          <p className="text-body-large">
            I follow a user-centered design process that ensures the final 
            product delivers value, clarity, and a delightful experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <span className="text-6xl md:text-7xl font-serif text-primary/20 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="pt-12 md:pt-14">
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
