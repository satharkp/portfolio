import projects from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Optional: Add image here if available in data */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600 opacity-20 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full
                               bg-blue-50 dark:bg-blue-900/30
                               text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors text-sm font-semibold"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;