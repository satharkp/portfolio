import projects from "../data/projects";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Selected Works
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            A showcase of full-stack web platforms, 3D interactive experiences, and responsive client applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200/90 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Image / Preview Container */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
                    {project.badge ? (
                      <span className="px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-[11px] font-semibold text-white shadow-sm tracking-wide">
                        {project.badge}
                      </span>
                    ) : (
                      <div />
                    )}

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </span>
                  </div>

                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600 opacity-20 transform -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500">
                        {project.title}
                      </h3>
                    </div>
                  )}

                  {/* Dark subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md
                                 bg-blue-50/80 dark:bg-blue-950/40
                                 text-blue-700 dark:text-blue-300
                                 border border-blue-200/50 dark:border-blue-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-7 pb-7 pt-0 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700 transition-all text-xs font-semibold shadow-xs"
                >
                  <Github size={15} className="mr-1.5" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all text-xs font-semibold shadow-sm hover:shadow-md hover:shadow-blue-500/20"
                >
                  <ExternalLink size={15} className="mr-1.5" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;