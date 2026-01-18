const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-900 dark:text-white">
            Abdul Sathar KP
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Built with React.js & Tailwind CSS
          </p>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;