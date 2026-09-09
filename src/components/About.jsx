import { Code2, Globe, Server, Sparkles, Box, Check } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "React.js, Modern JavaScript, Tailwind CSS, Responsive UI",
    color: "text-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/20 border-blue-500/20",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Node.js, Express.js, MongoDB Atlas, RESTful APIs",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Box,
    title: "3D & Interactive Web",
    description: "Three.js, React Three Fiber, Scroll & Micro Animations",
    color: "text-amber-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/20",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Cloud & Deployment",
    description: "Vercel, Render, JWT Auth, Postman, Git Workflows",
    color: "text-purple-500",
    bg: "bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/20",
    gradient: "from-purple-500 to-pink-500",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gray-50 dark:bg-gray-900/60">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Background & Journey
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-2">
            Combining technical engineering and product-driven design to build impactful digital solutions.
          </p>
        </div>

        {/* Story & Capabilities Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300">
            <div className="relative p-5 sm:p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />
              <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1.5 sm:mb-2">MERN Stack Specialist</h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                Self-taught and highly driven developer with end-to-end experience building and deploying robust full-stack web applications, RESTful APIs, and real-time platforms.
              </p>
            </div>

            <div className="relative p-5 sm:p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600" />
              <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1.5 sm:mb-2">Product & User-Driven</h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                My background in <span className="font-semibold text-purple-600 dark:text-purple-400">Digital Marketing</span> empowers me with a sharp instinct for conversion optimization, user experience, and real-world business requirements.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/40 text-[11px] sm:text-xs text-blue-800 dark:text-blue-300 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
              <span>Available for freelance contracts, client work, and full-time engineering roles.</span>
            </div>
          </div>

          {/* Right: 2x2 Capabilities Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group relative p-5 sm:p-6 bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cap.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3.5 sm:mb-4 border ${cap.bg}`}>
                    <IconComp className={`w-5 h-5 ${cap.color}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-1.5 text-gray-900 dark:text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;