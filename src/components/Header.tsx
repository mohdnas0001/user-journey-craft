import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-xl md:text-2xl font-normal"
        >
          Portfolio
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Process", "Work", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Let's Talk
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
