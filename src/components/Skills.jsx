const skills = {
  "Frontend Development": ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  "Database & Tools": ["MongoDB", "Git", "GitHub", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg
                             bg-white dark:bg-gray-800 
                             text-gray-700 dark:text-gray-300
                             border border-gray-200 dark:border-gray-700
                             hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
                             transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;