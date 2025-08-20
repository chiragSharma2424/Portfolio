import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <footer className="w-full py-10" id="contact">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 px-6">
      
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            <span className="text-purple-500">C</span>hirag Sharma
          </h1>
          <p className="text-sm text-gray-400">
            Full-Stack Developer specializing in MERN stack development.
          </p>
        </div>

      


        <div className="flex items-center gap-4">
          <a href="https://github.com/chiragSharma2424" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#162033] text-gray-200 hover:scale-110 transition">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/chirag-sharma-608303309/" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#162033] text-gray-200 hover:scale-110 transition">
            <Linkedin />
          </a>
          <a href="mailto:sharmachirag242004@gmail.com"
            className="p-3 rounded-full bg-[#162033] text-gray-200 hover:scale-110 transition">
            <Mail />
          </a>
        </div>
      </div>

    

      <div className="mt-6 text-center text-gray-500 text-sm">
        © 2025 Chirag Sharma. All rights reserved.
      </div>
    </footer>
  );
}


export default Contact;