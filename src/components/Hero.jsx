import profile from "../assets/profile.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-16 
    bg-gradient-to-br from-gray-50 via-white to-gray-100
    dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-gray-700 bg-gray-200 dark:text-gray-300 dark:bg-gray-800 rounded-full">
            MERN Stack Developer
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Hi, 👋 <br />
             I’m Abdul Sathar 
          </h1>

          <p className="mt-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Entry-Level MERN Stack Developer
          </p>

          <p className="mt-5 text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            Self-taught MERN Stack Developer with hands-on experience building full-stack
            applications using React, Node.js, Express, and MongoDB. Strong in REST APIs
            and JWT authentication, with a focus on practical, real-world projects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg transition tracking-wide"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 border border-black hover:bg-black hover:text-white dark:border-gray-500 dark:text-gray-200 dark:hover:bg-white dark:hover:text-black rounded-lg transition tracking-wide"
            >
              Contact Me
            </a>

            <a
              href="/Abdul_Sathar_KP.pdf"
              target="_blank"
              className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200
                         dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                         rounded-lg transition tracking-wide"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-200 dark:ring-gray-700 ring-offset-4">
            <img
              src={profile}
              alt="Abdul Sathar profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/70" />
          </div>
        </div>

      </div>
    </section>
  )
}


export default Hero