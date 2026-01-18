import React from "react";
import profile from "../assets/profile.png";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:pt-20 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="text-center md:text-left space-y-8 animate-fade-in-up">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-blue-600 blur opacity-20 rounded-full"></div>
            <span className="relative px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full uppercase">
              MERN Stack Developer
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Digital Experiences
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Hi, I’m <span className="font-semibold text-gray-900 dark:text-white">Abdul Sathar</span>.
            A passionate developer crafting robust, scalable, and user-centric web applications with the MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 dark:text-white dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/20 backdrop-blur-sm transition-all shadow-sm hover:shadow-md"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </a>

            <a
              href="/Abdul_Sathar_KP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-3xl blur-2xl opacity-40 dark:opacity-30 transform scale-110"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/50 dark:border-white/10 shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 mix-blend-overlay"></div>
              <img
                src={profile}
                alt="Abdul Sathar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl shadow-black/5 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Open to work</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;