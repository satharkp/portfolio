const skills = {
  frontend: ["JavaScript", "HTML", "CSS", "React.js"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB"],
  apiAuth: ["REST API", "JWT"],
  tools: ["Git", "GitHub", "Postman", "VS Code"],
}

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-5 capitalize">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800
                               text-gray-700 dark:text-gray-300
                               rounded-lg text-sm tracking-wide"
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
  )
}

export default Skills