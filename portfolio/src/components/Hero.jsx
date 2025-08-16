import { CiMail } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="home" className="flex justify-center mt-55">
      <div className="flex flex-col justify-center max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-white font-medium text-7xl">
            I'm Chirag.
          </h1>

          <p className="text-white mt-6 text-md">
            A passionate Full-Stack Developer (with a strong interest in backend development)
            who enjoys building scalable and production-ready web applications. Dedicated to
            mastering modern technologies and continuously improving through real-world projects.
          </p>

          <div className="flex justify-center gap-8 text-white text-3xl mt-12">
            <div className="relative group flex flex-col items-center">
              <a href="mailto:sharmachirag242004@gmail.com">
                <CiMail className="size-8 group-hover:scale-110 transition" />
              </a>
              <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Mail
              </span>
            </div>

            <div className="relative group flex flex-col items-center">
              <a href="/Resume.pdf" download>
                <MdOutlineFileDownload className="size-8 group-hover:scale-110 transition" />
              </a>
              <span className="absolute -top-7 text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Resume
              </span>
            </div>
          </div> 

          <div className="flex justify-center mt-14 text-white text-4xl animate-bounce">
            <IoIosArrowDown />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
