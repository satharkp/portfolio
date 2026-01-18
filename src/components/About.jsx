import { Code2, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700 shadow-sm">
              <p>
                I am a self-taught <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack Developer</span> with
                hands-on experience in building and deploying full-stack web applications.
              </p>
            </div>

            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700 shadow-sm">
              <p>
                My background in <span className="font-semibold text-purple-600 dark:text-purple-400">Digital Marketing</span> gives me
                a unique perspective on building user-focused and business-driven applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Code2 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">React, Tailwind, Modern JS</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 mt-0 sm:mt-12">
              <Server className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Node.js, Express, MongoDB</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Globe className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">API & Cloud</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">REST API, JWT, Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;