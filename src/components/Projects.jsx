import projects from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 p-7 rounded-xl shadow-sm border
                         border-gray-200 dark:border-gray-800
                         hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800
                               text-sm rounded text-gray-700 dark:text-gray-300 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm font-medium underline
                             text-gray-700 dark:text-gray-300
                             hover:text-black dark:hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm font-medium underline
                             text-gray-700 dark:text-gray-300
                             hover:text-black dark:hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects