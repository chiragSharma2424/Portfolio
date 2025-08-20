import { Package, FileText } from "lucide-react";

function ProjectSection() {
  return (
    <section id="projects" className="w-full py-20 flex flex-col items-center">
      <p className="text-purple-500 mb-2">My Work</p>
      <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] max-w-[1300px]">

    

        <div className="bg-[#0c1523] p-8 rounded-xl border border-white/10
                        transform hover:scale-105 hover:shadow-lg
                        transition-all duration-300 ease-out">

          <Package size={40} className="text-purple-500 mb-4" />

          <h3 className="text-xl font-semibold text-white mb-3">
            Todo Application (MERN)
          </h3>
          
          <p className="text-gray-300 mb-5">
            A full-stack Todo application built with the MERN stack. Allows users
            to create, update and delete tasks with real-time UI updates and clean UX.
          </p>

          <div className="flex flex-wrap gap-2 text-xs mb-6">
            <span className="tag">MongoDB</span>
            <span className="tag">Express.js</span>
            <span className="tag">React.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">Tailwind CSS</span>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/chiragSharma2424" target="_blank"
              rel="noopener noreferrer" className="px-5 py-2 border rounded-md text-white hover:bg-white/10 transition">
              GitHub
            </a>

            <a href="https://todo-deploy-blue.vercel.app/" target="_blank"
              rel="noopener noreferrer" className="px-5 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
              Live Demo
            </a>

          </div>
        </div>

      

        <div className="bg-[#0c1523] p-8 rounded-xl border border-white/10
                        transform hover:scale-105 hover:shadow-lg
                        transition-all duration-300 ease-out">

          <FileText size={40} className="text-purple-500/40 mb-4 blur-[1px]" />
          <h3 className="text-xl font-semibold text-white mb-3">
            More Projects Coming Soon
          </h3>

          <p className="text-gray-400 mb-6">
            I'm constantly working on new projects. Check back soon or visit my
            GitHub profile for updates.
          </p>

          <a href="https://github.com/chiragSharma2424" target="_blank"
            rel="noopener noreferrer"className="px-5 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;