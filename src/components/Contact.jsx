const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Get In Touch
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          I’m open to internship and junior developer opportunities.
          Feel free to reach out if you’d like to work together.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          Prefer backend-heavy roles, API development, and real-world problem solving.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:satharkp292@gmail.com"
            className="px-8 py-3 bg-black text-white rounded-lg
                       hover:bg-gray-800 transition
                       dark:bg-white dark:text-black dark:hover:bg-gray-200
                       tracking-wide"
          >
            Email Me
          </a>

          <a
            href="/Abdul_Sathar_KP.pdf"
            target="_blank"
            className="px-8 py-3 bg-gray-100 text-gray-800 rounded-lg
                       hover:bg-gray-200 transition
                       dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                       tracking-wide"
          >
            Download Resume
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-500 dark:text-gray-500">
          You can also find me here
        </p>
        <div className="mt-6 flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact