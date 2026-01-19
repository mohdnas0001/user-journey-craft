import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  PenTool, 
  Layout, 
  Layers, 
  Smartphone, 
  Figma 
} from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "User Research",
    description: "User interviews, personas, and journey mapping to understand real needs",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description: "Low and high fidelity wireframes that structure user flows",
  },
  {
    icon: Layout,
    title: "UI Design",
    description: "Beautiful interfaces with consistent design systems",
  },
  {
    icon: Layers,
    title: "Prototyping",
    description: "Interactive prototypes for testing and validation",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experiences across mobile and web platforms",
  },
  {
    icon: Figma,
    title: "Design Tools",
    description: "Expert in Figma, Adobe XD, and modern design tools",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-label mb-4">Expertise</p>
          <h2 className="text-heading mb-4">
            Skills & <span className="italic">capabilities</span>
          </h2>
          <p className="text-body-large">
            I specialize in user research, wireframing, prototyping, and 
            interface design. I enjoy collaborating with developers and 
            stakeholders to ensure designs are practical and user-friendly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border/50 card-hover"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
