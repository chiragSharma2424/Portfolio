import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full bg-transparent pt-32"
    >
      <h2 className="text-5xl font-semibold text-white">My Projects</h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-[90%] max-w-[1400px] bg-[#0f192c] border border-white/70 text-white rounded-xl p-8 mt-16 shadow-md cursor-pointer"
      >
        <h3 className="text-4xl font-semibold mb-4">Todo Application</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo voluptates voluptatibus minus atque
          odio earum fuga perferendis voluptas blanditiis.
        </p>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-[90%] max-w-[1400px] bg-[#0f192c] border border-white/70 text-white rounded-xl p-8 mt-12 shadow-md cursor-pointer"
      >
        <h3 className="text-4xl font-semibold mb-4">Project No 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum accusantium amet aliquam quod beatae
          voluptas nemo voluptates tempore recusandae quo officiis voluptatibus, animi vitae itaque error dolorum saepe
          fuga expedita explicabo tenetur totam ratione soluta! Saepe eius qui quibusdam?
        </p>
      </motion.div>
    </section>
  );
}
