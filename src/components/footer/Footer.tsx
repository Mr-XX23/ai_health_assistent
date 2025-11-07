const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="size-6 text-white">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold">MediSecure</h2>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Innovating the future of healthcare with intelligent solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href="#diagnostics"
                >
                  AI Diagnostics
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href="#telemedicine"
                >
                  Telemedicine
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href="#medication"
                >
                  Medication Management
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href="#ehr"
                >
                  EHR Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2024 MediSecure. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a className="text-gray-400 hover:text-white" href="#">
              <span className="sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <span className="sr-only">LinkedIn</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
