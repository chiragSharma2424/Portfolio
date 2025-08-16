import { motion } from "framer-motion";
import { Home, FolderKanban, Mail, Linkedin, Github } from "lucide-react";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[999] backdrop-blur-md bg-[#0f0f0f]/80 py-4 mt-5"
    >
      <div className="flex justify-center items-center gap-14">

        {/* Home */}
        <div className="relative group flex flex-col items-center">
          <a href="#home">
            <Home className="size-8 text-white group-hover:scale-110 transition" />
          </a>
          <span className="absolute top-10 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Home
          </span>
        </div>

        {/* Projects */}
        <div className="relative group flex flex-col items-center">
          <a href="#projects">
            <FolderKanban className="size-8 text-white group-hover:scale-110 transition" />
          </a>
          <span className="absolute top-10 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Projects
          </span>
        </div>

        {/* Contact */}
        <div className="relative group flex flex-col items-center">
          <a href="#contact">
            <Mail className="size-8 text-white group-hover:scale-110 transition" />
          </a>
          <span className="absolute top-10 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Contact
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/chirag-sharma-608303309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-8 text-white group-hover:scale-110 transition" />
          </a>
          <span className="absolute top-10 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="relative group flex flex-col items-center">
          <a
            href="https://github.com/chiragSharma2424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-8 text-white group-hover:scale-110 transition" />
          </a>
          <span className="absolute top-10 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            GitHub
          </span>
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;
