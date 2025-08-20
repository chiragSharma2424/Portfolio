import { ShieldCheck, Cloud, BookOpen } from "lucide-react";

export default function Intro() {
  return (
    <section id="about" className="w-full py-20 flex flex-col items-center -mt-21">
      <p className="text-purple-500 mb-2">About Me</p>
      <h2 className="text-4xl font-bold text-white mb-8">Who I Am</h2>

      <p className="max-w-[900px] text-center text-gray-300 mb-12 px-6 text-xl">
        I'm a Full-Stack Developer with a strong foundation in the MERN stack and a
        background in web application development. Proficient in AWS and currently expanding
        my knowledge in DevOps, with an emphasis on deployment and automation pipelines.
        <br /><br />
        I'm passionate about building scalable and user-friendly applications and
        looking forward to applying my technical skills in a professional environment.
      </p>

      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* MERN Card */}
        <div className="bg-[#0c1523] border border-white/10 p-8 rounded-xl text-center">
          <ShieldCheck className="text-purple-500 mx-auto mb-4" size={30}/>
          <h3 className="text-lg font-semibold text-white mb-2">MERN Stack</h3>
          <p className="text-gray-300 text-sm">
            Specialized in MongoDB, Express.js, React.js and Node.js for full-stack development.
          </p>
        </div>

        {/* DevOps Card */}
        <div className="bg-[#0c1523] border border-white/10 p-8 rounded-xl text-center">
          <Cloud className="text-purple-500 mx-auto mb-4" size={30}/>
          <h3 className="text-lg font-semibold text-white mb-2">Cloud &amp; DevOps</h3>
          <p className="text-gray-300 text-sm">
            Experience with AWS and cloud infrastructure, along with DevOps practices and tools.
          </p>
        </div>

        {/* Continuous Learning Card */}
        <div className="bg-[#0c1523] border border-white/10 p-8 rounded-xl text-center">
          <BookOpen className="text-purple-500 mx-auto mb-4" size={30}/>
          <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning</h3>
          <p className="text-gray-300 text-sm">
            Constantly expanding knowledge in new technologies and best practices in software development.
          </p>
        </div>

      </div>
    </section>
  );
}
