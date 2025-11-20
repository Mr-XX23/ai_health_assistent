
const System_Analysis = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-8 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold tracking-tighter text-gray-900">MediSecure</h1>
                        </div>
                        <nav className="hidden items-center justify-center gap-6 md:flex">
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Home</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Solutions</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">AI Symptoms Analyser</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Features</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Security</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Pricing</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-primary" href="#">Contact Us</a>
                        </nav>
                        <div className="hidden items-center gap-2 md:flex">
                            <a className="inline-flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-sky-100 px-4 text-sm font-bold text-primary transition-colors hover:bg-sky-200" href="#">Request a Demo</a>
                            <a className="inline-flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-200 px-4 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-300" href="#">Login</a>
                        </div>
                        <div className="md:hidden">
                            <button className="rounded-md p-2 hover:bg-gray-200">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-primary">AI System Analysis</h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-subtext-light">Explore the sophisticated technology, robust security measures, and innovative models that power the MediSecure platform, ensuring trust and transparency in every interaction.</p>
                    </div>
                </section>
                <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Underlying AI Models &amp; Data Security</h2>
                                <p className="mt-4 text-lg text-subtext-light">Our platform is built on a foundation of cutting-edge AI and uncompromising security. We utilize a suite of proprietary and industry-leading models, each rigorously trained and validated on extensive, anonymized datasets. Security is not an afterthought—it's integral to our architecture, with end-to-end encryption, multi-layered access controls, and continuous monitoring to protect sensitive health information.</p>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-2xl text-primary mt-1">model_training</span>
                                        <div>
                                            <h3 className="font-bold">Advanced Neural Networks</h3>
                                            <p className="text-subtext-light text-sm mt-1">For complex pattern recognition in diagnostics and symptom analysis.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-2xl text-primary mt-1">data_object</span>
                                        <div>
                                            <h3 className="font-bold">Natural Language Processing (NLP)</h3>
                                            <p className="text-subtext-light text-sm mt-1">To understand and process patient inquiries and clinical notes accurately.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-2xl text-primary mt-1">verified_user</span>
                                        <div>
                                            <h3 className="font-bold">HIPAA-Compliant Infrastructure</h3>
                                            <p className="text-subtext-light text-sm mt-1">Ensuring all data handling meets the highest regulatory standards.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-2xl text-primary mt-1">encrypted</span>
                                        <div>
                                            <h3 className="font-bold">End-to-End Encryption</h3>
                                            <p className="text-subtext-light text-sm mt-1">Securing data both in transit and at rest to prevent unauthorized access.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" data-alt="Abstract visualization of a secure data network with glowing nodes and connections." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMyhMi0L41yzFAUdmEHDkl-CgWnesdT9gL8jCw3-yuqu1ul1lth9Gah5-_CA2RStas0o8K-DdI6MgZpaqYg5fSc8jVWhrDgqa0EOtBr4FUsT0sSR1VrnESqjTWZrejievvws8i_nYjpBskHaK1upOURaVqH_WFONWDTRATEZYa6PtunfQqKhlSg2wMQBGiDpOLyImmLe5JwjnsNgXYPpWa5huYM6hMyP8PvQTNnnyT4ysunj3XrTeIhO_Cc8pgORCznmya3WOzi7i0");'></div>
                        </div>
                    </div>
                </section>
                <section className="bg-slate-50 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The AI Analysis Process</h2>
                            <p className="mt-4 text-lg text-subtext-light">Our AI follows a systematic, multi-stage process to ensure every analysis is thorough, accurate, and contextually aware, transforming raw data into actionable clinical insights.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                            <div className="absolute top-10 left-0 right-0 h-1 hidden md:block">
                                <svg className="w-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                                    <line className="stroke-current text-slate-300" stroke-dasharray="4 4" stroke-width="2" x1="0" x2="100" y1="0.5" y2="0.5"></line>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center relative z-10">
                                <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                                    <span className="material-symbols-outlined text-3xl">input</span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold">1. Secure Data Ingestion</h3>
                                <p className="mt-2 text-subtext-light">Encrypted patient data, symptoms, and medical history are securely uploaded into the system via our patient portal or EHR integration.</p>
                            </div>
                            <div className="flex flex-col items-center relative z-10">
                                <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold">2. Multi-Model Analysis</h3>
                                <p className="mt-2 text-subtext-light">Data is processed through a cascade of specialized AI models, including NLP for context and predictive algorithms for risk assessment.</p>
                            </div>
                            <div className="flex flex-col items-center relative z-10">
                                <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white border-8 border-slate-50">
                                    <span className="material-symbols-outlined text-3xl">rule</span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold">3. Clinical Validation</h3>
                                <p className="mt-2 text-subtext-light">The AI's findings are cross-referenced with established clinical guidelines and evidence-based medicine to ensure reliability and relevance.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Quantifiable Impact of AI Integration</h2>
                            <p className="mt-4 text-lg text-subtext-light">The implementation of MediSecure's AI delivers measurable improvements across key areas of clinical practice, enhancing efficiency, accuracy, and patient care.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-100 p-8 rounded-xl text-center flex flex-col items-center">
                                <span className="material-symbols-outlined text-5xl text-secondary">speed</span>
                                <p className="mt-4 text-5xl font-extrabold text-primary">40%</p>
                                <h3 className="mt-2 text-lg font-semibold">Reduction in Diagnostic Time</h3>
                                <p className="mt-2 text-subtext-light">AI-powered analysis accelerates the review process, allowing clinicians to reach diagnoses faster.</p>
                            </div>
                            <div className="bg-slate-100 p-8 rounded-xl text-center flex flex-col items-center">
                                <span className="material-symbols-outlined text-5xl text-secondary">check_circle</span>
                                <p className="mt-4 text-5xl font-extrabold text-primary">25%</p>
                                <h3 className="mt-2 text-lg font-semibold">Increase in Early Detection Rates</h3>
                                <p className="mt-2 text-subtext-light">Our models identify subtle indicators often missed in early stages, improving patient prognosis.</p>
                            </div>
                            <div className="bg-slate-100 p-8 rounded-xl text-center flex flex-col items-center">
                                <span className="material-symbols-outlined text-5xl text-secondary">person_alert</span>
                                <p className="mt-4 text-5xl font-extrabold text-primary">30%</p>
                                <h3 className="mt-2 text-lg font-semibold">Decrease in Administrative Burden</h3>
                                <p className="mt-2 text-subtext-light">Automation of routine tasks frees up valuable clinician time to focus on patient-centric care.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-slate-50 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" data-alt="A futuristic roadmap interface with glowing points indicating future milestones." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwgKcOV8YbA51GXJxksHJwGvixzf5QYSmxqEO2lNFSfPa92En1pESGj1kgL6_XrOEvpVxc2h1YUK1PGCKJLIM88HM4REAqV1oUu8puK43sMTvIVZ2-r4jLywBOsZbSVKsESU3pD9HOeuwyFGHk_P-JRceVnnHac06Bn6WJmqsP8euXKLkdahwBs9Q6Rq13bUxu_B7hoJcMdK5T9wPrH2LuWXf40QRIc8GpbnnhFUG7l_ROtnQUUuB8Yr3xFzL-WE2upZkKwEBtF9pq");'></div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Future Roadmap</h2>
                                <p className="mt-4 text-lg text-subtext-light">We are committed to continuous innovation. Our development roadmap is focused on expanding our AI capabilities to address the evolving needs of modern healthcare.</p>
                                <div className="mt-8 space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <p className="text-sm font-bold text-accent">Q4 2024</p>
                                        <h3 className="mt-1 font-semibold">Personalized Treatment Plans</h3>
                                        <p className="mt-1 text-subtext-light text-sm">AI generation of treatment plan recommendations based on patient genetics, lifestyle, and medical history.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <p className="text-sm font-bold text-accent">Q2 2025</p>
                                        <h3 className="mt-1 font-semibold">Real-Time Patient Monitoring</h3>
                                        <p className="mt-1 text-subtext-light text-sm">Integration with wearable devices for proactive health monitoring and anomaly detection.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <p className="text-sm font-bold text-accent">Q4 2025</p>
                                        <h3 className="mt-1 font-semibold">Voice-Enabled Clinical Notes</h3>
                                        <p className="mt-1 text-subtext-light text-sm">Advanced voice recognition and NLP for hands-free, real-time documentation during patient consultations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-gray-400">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2">
                                <div className="size-8 text-white">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg font-bold text-white">MediSecure</h2>
                            </div>
                            <p className="mt-4 text-sm">Secure, AI-powered healthcare solutions to enhance patient outcomes.</p>
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Subscribe to our newsletter</h3>
                                <form className="mt-4 flex w-full max-w-sm">
                                    <input className="w-full rounded-l-md border-gray-600 bg-gray-800 px-4 py-2 text-sm placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-primary" placeholder="Enter your email" type="email" />
                                    <button className="rounded-r-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm hover:text-white" href="#">AI Diagnostics</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Telemedicine Platform</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Symptom Checker</a></li>
                                <li><a className="text-sm hover:text-white" href="#">EHR Integration</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm hover:text-white" href="#">About Us</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Careers</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Press</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Contact Us</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm hover:text-white" href="#">Case Studies</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Whitepapers</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Webinars</a></li>
                                <li><a className="text-sm hover:text-white" href="#">API Documentation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a className="text-sm hover:text-white" href="#">Privacy Policy</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Terms of Service</a></li>
                                <li><a className="text-sm hover:text-white" href="#">Security</a></li>
                                <li><a className="text-sm hover:text-white" href="#">HIPAA Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-800 pt-8 sm:flex sm:items-center sm:justify-between">
                        <div className="flex space-x-6 sm:order-2">
                            <a className="hover:text-white" href="#">
                                <span className="sr-only">Facebook</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
                            </a>
                            <a className="hover:text-white" href="#">
                                <span className="sr-only">Twitter</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a className="hover:text-white" href="#">
                                <span className="sr-only">LinkedIn</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        <p className="mt-4 text-sm sm:order-1 sm:mt-0">© 2024 MediSecure. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default System_Analysis