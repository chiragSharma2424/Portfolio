import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-center mb-10"
    >
      <h2 className="text-5xl font-semibold text-white mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-[1400px]">
        {/* Project 1 - Todo App (MERN) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0f192c] rounded-xl overflow-hidden border border-white/20"
        >
          <img
            src="https://images.unsplash.com/photo-1557598803-1fdb130cf54a"
            className="w-full h-48 object-cover"
            alt="Todo App"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Todo Application (MERN)
            </h3>
            <p className="text-sm">
              A full-stack Todo application built using the MERN stack. It
              allows users to add, edit and delete their daily tasks with a
              clean UI and secure REST API backend.
              <br />
              <span className="font-semibold">
                Live:&nbsp;
                <a
                  href="https://todo-deploy-blue.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  https://todo-deploy-blue.vercel.app/
                </a>
              </span>
            </p>
            <div className="mt-4 text-xs flex gap-2">
              <span>#MongoDB</span>
              <span>#Express</span>
              <span>#React</span>
              <span>#Node</span>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Weather App */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0f192c] rounded-xl overflow-hidden border border-white/20"
        >
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dacd0"
            className="w-full h-48 object-cover"
            alt="Weather App"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="text-sm">
              Lightweight weather application that uses the OpenWeather API to
              fetch real-time forecasts for any location.
            </p>
            <div className="mt-4 text-xs flex gap-2">
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0f192c] rounded-xl overflow-hidden border border-white/20"
        >
          <img
            src="https://images.unsplash.com/photo-1518972559570-1ecb28137d35"
            className="w-full h-48 object-cover"
            alt="Registration Form"
          />
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Registration Form</h3>
            <p className="text-sm">
              A responsive registration page designed using HTML, CSS and
              JavaScript with input validations and clean UX.
            </p>
            <div className="mt-4 text-xs flex gap-2">
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
