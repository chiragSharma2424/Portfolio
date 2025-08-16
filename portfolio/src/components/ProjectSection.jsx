import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center mt-32">
      <h2 className="text-white text-5xl font-semibold">My Projects</h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-[90%] max-w-[1400px] bg-[#0f192c] border border-white/70 text-white rounded-xl p-8 mt-16 cursor-pointer"
      >
        <h3 className="text-4xl font-semibold mb-4">Todo Application</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo voluptates voluptatibus minus atque
          odio earum fuga perferendis voluptas blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores dignissimos quasi accusantium corrupti velit totam laborum rem placeat possimus! Optio!
        </p>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-[90%] max-w-[1400px] bg-[#0f192c] border border-white/70 text-white rounded-xl p-8 mt-12 cursor-pointer"
      >
        <h3 className="text-4xl font-semibold mb-4">Project No 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum accusantium amet aliquam quod beatae
          voluptas nemo voluptates tempore recusandae quo officiis voluptatibus, animi vitae itaque error dolorum saepe
          fuga expedita explicabo tenetur totam ratione soluta! Saepe eius qui quibusdam?
        </p>
      </motion.div>
    </div>
  );
}
