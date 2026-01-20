import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import transportImage from "@/assets/transport-app.png";
import ecommerceImage from "@/assets/ecommerce-app.png";
import ajanahImage from "@/assets/ajanah-app.png";

const projects = [
  {
    title: "Transport App",
    category: "Mobile Design",
    description:
      "Redesigned the mobile banking experience to simplify navigation and improve task completion.",
    image: transportImage,
  },
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    description:
      "Created an intuitive shopping experience with streamlined checkout and product discovery.",
    image: ecommerceImage,
  },
  {
    title: "Ajanah App",
    category: "Dashboard Design",
    description:
      "Designed a comprehensive dashboard for healthcare professionals to manage patient data.",
    image: ajanahImage,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="work" className="section-padding" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <p className="text-label mb-4">Selected Work</p>
              <h2 className="text-heading">
                Featured <span className="italic">projects</span>
              </h2>
            </div>
            <p className="text-body-large max-w-md">
              Each project focuses on designing user-friendly solutions that 
              address key challenges and improve overall satisfaction.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group grid md:grid-cols-2 gap-6 md:gap-12 items-center p-6 md:p-8 bg-card rounded-2xl border border-border/50 card-hover cursor-pointer"
              >
                <div 
                  className={`aspect-[16/10] rounded-xl overflow-hidden order-2 md:order-1 cursor-zoom-in flex items-center justify-center ${
                    project.title === "Transport App" 
                      ? "bg-gradient-to-br from-slate-100 to-slate-200" 
                      : "bg-muted"
                  }`}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`group-hover:scale-105 transition-transform duration-700 ${
                      project.title === "Transport App"
                        ? "h-full w-auto object-contain"
                        : "w-full h-full object-cover object-top"
                    }`}
                  />
                </div>

                <div className="order-1 md:order-2">
                  <p className="text-label mb-3">{project.category}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Project preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Projects;
