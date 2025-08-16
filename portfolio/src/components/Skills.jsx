export default function Skills() {
  return (
    <div id="skills" className="mt-20 mb-14">
      <h2 className="text-white text-center text-5xl sm:text-6xl font-semibold mb-12">
        Professional Skill-Set
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white px-8">
        {/* Languages */}
        <div className="bg-[#111827] min-h-[350px] rounded-2xl p-8 shadow-lg border border-white/20
        transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Languages
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Javascript</li>
            <li>C++</li>
            <li>C</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="bg-[#111827] min-h-[350px] rounded-2xl p-8 shadow-lg border border-white/20
        transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Frameworks
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-[#111827] min-h-[350px] rounded-2xl p-8 shadow-lg border border-white/20
        transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            DevOps &amp; Tools
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>
            <li>Ubuntu</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>AWS</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-[#111827] min-h-[350px] rounded-2xl p-8 shadow-lg border border-white/20
        transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Databases
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Utilities & Tools */}
        <div className="bg-[#111827] min-h-[350px] rounded-2xl p-8 shadow-lg border border-white/20
        transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Utilities &amp; Tools
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Postman</li>
            <li>Canva</li>
            <li>REST API</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
