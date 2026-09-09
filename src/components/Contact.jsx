import { Mail, FileText, Github, Linkedin, Sparkles, Send, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Card */}
        <div className="relative bg-gradient-to-b from-blue-50/70 to-purple-50/40 dark:from-gray-900/90 dark:to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center border border-blue-100 dark:border-gray-800 shadow-xl overflow-hidden">
          {/* Top subtle gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Let’s Build Something Great
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Ready to Start a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            I’m available for freelance client projects, full-time engineering roles, and innovative collaborations.
            Feel free to reach out directly!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:satharkp292@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <Send className="mr-2 w-4 h-4" />
              Say Hello
            </a>

            <a
              href="/Abdul_Sathar_KP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all shadow-xs hover:shadow-sm"
            >
              <FileText className="mr-2 w-4 h-4 text-blue-600 dark:text-blue-400" />
              Download Resume
            </a>
          </div>

          {/* Location & Direct Email Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-10 pb-8 border-b border-gray-200/60 dark:border-gray-800">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              satharkp292@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              Kerala, India
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/satharkp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-gray-400 transition-all shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-sathar-k-p-132424228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;