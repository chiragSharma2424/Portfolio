import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="w-full pt-32 flex flex-col items-center">
      <h2 className="text-5xl font-semibold text-white mb-12">
        Professional Skill-Set
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-[90%] max-w-[1400px]">
        {/* C */}
        <div className="flex flex-col items-center">
          <SiC size={70} color="#555555" />
          <span className="mt-2 text-white">C</span>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center">
          <SiCplusplus size={70} color="#00599C" />
          <span className="mt-2 text-white">C++</span>
        </div>

        {/* Java */}
        <div className="flex flex-col items-center">
          <FaJava size={70} color="#ED8B00" />
          <span className="mt-2 text-white">Java</span>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center">
          <SiHtml5 size={70} color="#E34F26" />
          <span className="mt-2 text-white">HTML 5</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center">
          <SiCss3 size={70} color="#1572B6" />
          <span className="mt-2 text-white">CSS 3</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <SiJavascript size={70} color="#F7DF1E" />
          <span className="mt-2 text-white">JavaScript</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center">
          <SiTypescript size={70} color="#3178C6" />
          <span className="mt-2 text-white">TypeScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <SiReact size={70} color="#61DAFB" />
          <span className="mt-2 text-white">React.js</span>
        </div>

        {/* Node */}
        <div className="flex flex-col items-center">
          <SiNodedotjs size={70} color="#339933" />
          <span className="mt-2 text-white">Node.js</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center">
          <SiMongodb size={70} color="#47A248" />
          <span className="mt-2 text-white">MongoDB</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center">
          <SiPython size={70} color="#3776AB" />
          <span className="mt-2 text-white">Python</span>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center">
          <SiTailwindcss size={70} color="#38BDF8" />
          <span className="mt-2 text-white">Tailwind CSS</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center">
          <SiGit size={70} color="#F1502F" />
          <span className="mt-2 text-white">Git</span>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <SiGithub size={70} color="#181717" />
          <span className="mt-2 text-white">GitHub</span>
        </div>

        {/* Linux */}
        <div className="flex flex-col items-center">
          <SiLinux size={70} color="#FCC624" />
          <span className="mt-2 text-white">Linux / Ubuntu</span>
        </div>

        {/* Postman */}
        <div className="flex flex-col items-center">
          <SiPostman size={70} color="#FF6C37" />
          <span className="mt-2 text-white">Postman</span>
        </div>
      </div>
    </section>
  );
}
