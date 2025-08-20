import { Code, Server, Database, Settings, Terminal, Users } from "lucide-react";

export default function TechnicalSection() {
  return (
    <section id="skills" className="w-full py-16 flex flex-col items-center">
      <p className="text-purple-500 mb-2">My Skills</p>
      <h2 className="text-4xl font-bold text-white mb-10">Technical Expertise</h2>

      <div className="max-w-[1300px] w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">
              Frontend Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">DaisyUI</span>
            <span className="tag">MaterialUI</span>
            <span className="tag">ReactJS</span>
          </div>
        </div>

        {/* Backend */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">
              Backend Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">Zod</span>
            <span className="tag">Socket.IO</span>
            <span className="tag">JWT</span>
          </div>
        </div>

        {/* DB */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">
              Database Management
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">MongoDB</span>
            <span className="tag">MySQL</span>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">
              DevOps & Cloud
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">Git</span>
            <span className="tag">AWS</span>
            <span className="tag">Ec2 Instance</span>
            <span className="tag">Linux</span>
            <span className="tag">CI/CD basics</span>
          </div>
        </div>

        {/* Programming */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">
              Programming Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">C++</span>
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="border border-white/10 p-6 rounded-xl bg-[#0c1523]">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-purple-500" />
            <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="tag">Interactive</span>
            <span className="tag">Adaptability</span>
            <span className="tag">Teamwork</span>
            <span className="tag">Time Management</span>
          </div>
        </div>
      </div>
    </section>
  );
}
