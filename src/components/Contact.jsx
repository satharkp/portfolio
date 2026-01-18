import { Mail, FileText, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 dark:bg-gray-900 rounded-3xl p-8 md:p-16 text-center border border-blue-100 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start a Project?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I’m currently looking for new opportunities as a MERN Stack Developer.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:satharkp292@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
            >
              <Mail className="mr-2 w-5 h-5" />
              Say Hello
            </a>

            <a
              href="/Abdul_Sathar_KP.pdf"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
            >
              <FileText className="mr-2 w-5 h-5" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/satharkp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-sathar-k-p-132424228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;