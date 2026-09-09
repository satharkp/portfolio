import { Code2, Server, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    dotColor: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400",
    skills: ["JavaScript (ES6+)", "React.js", "Three.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-emerald-500 via-teal-500 to-green-400",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    dotColor: "bg-emerald-500",
    hoverBorder: "hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    gradient: "from-purple-500 via-violet-500 to-pink-400",
    iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    dotColor: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400",
    skills: ["MongoDB", "Git", "GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Creative Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Capabilities & Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-2">
            A comprehensive toolkit of languages, frameworks, and developer tools I leverage to engineer performant web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-5 sm:p-7 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Sleek Top Accent Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-gray-200/60 dark:border-gray-800">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shadow-xs ${category.iconBg}`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200/80 dark:border-gray-700/80 shadow-2xs">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`group/item inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg
                                 bg-white dark:bg-gray-800/90 
                                 text-gray-700 dark:text-gray-300
                                 border border-gray-200 dark:border-gray-700/80
                                 shadow-2xs
                                 hover:-translate-y-0.5 hover:shadow-xs
                                 ${category.hoverBorder}
                                 transition-all duration-200 cursor-default`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-70 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;