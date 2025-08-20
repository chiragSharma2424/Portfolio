import { Activity, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="journey" className="w-full py-20 flex flex-col items-center">
      <p className="text-purple-500 mb-2">My Journey</p>
      <h2 className="text-4xl font-bold text-white mb-12">
        Experience &amp; Education
      </h2>

      <div className="w-[90%] max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
            <Activity className="text-purple-500" /> Work Experience
          </h3>

          {/* single card */}
          <div className="bg-[#0c1523] border border-white/10 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white">
              MERN Stack Training
            </h4>
            <p className="text-gray-300 text-sm mb-1">Grass</p>
            <p className="text-gray-400 text-sm mb-4">Aug 2024 – Oct 2024</p>
            <p className="text-gray-300 text-sm">
              Hands-on training in MERN stack development, covering Node.js,
              Express.js, React and MongoDB.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
            <GraduationCap className="text-purple-500" /> Education
          </h3>

          {/* B.Tech */}
          <div className="bg-[#0c1523] border border-white/10 p-6 rounded-xl mb-6">
            <h4 className="text-lg font-semibold text-white">
              B.Tech in Computer Science
            </h4>
            <p className="text-gray-300 text-sm">Techno India NJR Institute of Technology</p>
            <p className="text-gray-400 text-sm mb-4">Sep 2022 – Jun 2026 • Udaipur, Rajasthan</p>
            <p className="text-gray-300 text-sm">
              Currently pursuing a Bachelor's degree in Computer Science.
            </p>
          </div>

          {/* Senior Secondary */}
          <div className="bg-[#0c1523] border border-white/10 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white">
              Senior Secondary Education
            </h4>
            <p className="text-gray-300 text-sm">Alok Senior Secondary School</p>
            <p className="text-gray-400 text-sm mb-4">2014 – 2022 • Udaipur, Rajasthan</p>
            <p className="text-gray-300 text-sm">
              Completed senior secondary education with a focus on Science and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
