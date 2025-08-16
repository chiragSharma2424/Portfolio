import { motion } from "framer-motion";
import { Home, FolderKanban, Mail, Linkedin, Github } from "lucide-react";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-15 px-8 py-3 rounded-full backdrop-blur-md">
    
      <div className="relative group flex flex-col items-center">
        <a href="#home">
          <Home className="text-white size-8 group-hover:scale-110 transition" />
        </a>
        <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Home
        </span>
      </div>

     
      <div className="relative group flex flex-col items-center">
        <a href="#projects">
          <FolderKanban className="text-white size-8 group-hover:scale-110 transition" />
        </a>
        <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Projects
        </span>
      </div>


      <div className="relative group flex flex-col items-center">
        <a href="#contact">
          <Mail className="text-white size-8 group-hover:scale-110 transition" />
        </a>
        <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Contact
        </span>
      </div>

    
      <div className="relative group flex flex-col items-center">
        <a href="https://www.linkedin.com/in/yourname" target="_blank">
          <Linkedin className="text-white size-8 group-hover:scale-110 transition" />
        </a>
        <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          LinkedIn
        </span>
      </div>

      <div className="relative group flex flex-col items-center">
        <a href="https://github.com/yourname" target="_blank">
          <Github className="text-white size-9 group-hover:scale-110 transition" />
        </a>
        <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          GitHub
        </span>
      </div>
    </motion.nav>
  );
}

export default Navbar;