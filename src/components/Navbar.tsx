import React from "react";

const Navbar = () => {
  return (
    <>
      <body className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <div className="size-6 text-primary">
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
                  <h2 className="text-xl font-bold tracking-[-0.015em]">
                    MediSecure
                  </h2>
                </div>
                <div className="hidden md:flex flex-1 justify-center items-center gap-9">
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Home
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Solutions
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    AI Symptoms Analyser
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Features
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Security
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Pricing
                  </a>
                  <a
                    className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                    href="#"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="hidden md:flex gap-2">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                    <span className="truncate">Request a Demo</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-700 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                    <span className="truncate">Login</span>
                  </button>
                </div>
                <div className="md:hidden">
                  <button className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined">menu</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                  The Future of Healthcare, Delivered Today.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-subtext-light dark:text-subtext-dark">
                  MediSecure’s AI-powered solutions empower providers and
                  improve patient outcomes. Discover how our innovative
                  technology can transform your practice and deliver a new
                  standard of care.
                </p>
                <div className="mt-10 flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                    <span className="truncate">Request a Demo</span>
                  </button>
                </div>
              </div>
            </section>
            <div className="space-y-24 md:space-y-32 py-24 md:py-32">
              <section
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
                id="diagnostics"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    data-alt="Abstract image representing AI neural networks in a medical context."
                    // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-VBo40A-gG5sNvmxiD_Jk6RjN4lndJ7gfIwCgeX5CmJIGHEYM7InM8o3p-cI_EydjZJnRtyfnTVdbUQBzdO0lWHP5EYuPL2gCRgvsGXMKYm-U8FmK3Db2-PVjxmC60EnE5AcanB2IBN7rGS8SWuMcgtI3YmYtbcvhG38J-SQKsZPHXhCv_J34CGDdk3lYzPWDMzVdVEV1oROI5z6HxR71ftqPUCJSWcIeh_HOvdWR1CvFjWAebzaq3RPSHrL5EBcyS9s-GnXdTVT6");'
                  ></div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
                      Precision Diagnostics, Powered by AI
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg">
                      Our AI analyzes medical images and data with superhuman
                      accuracy, enabling faster and more reliable diagnoses for
                      better patient outcomes. This technology assists in
                      radiology, pathology, and more, helping clinicians detect
                      conditions earlier and with greater confidence.
                    </p>
                    <div className="flex min-w-[84px] max-w-[480px] w-fit">
                      <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Explore AI Diagnostics</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                  <div className="flex flex-col gap-3">
                    <span className="material-symbols-outlined text-4xl text-accent">
                      verified
                    </span>
                    <h3 className="text-xl font-bold">Increased Accuracy</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">
                      Reduce diagnostic errors with algorithms trained on vast
                      datasets of medical imagery, minimizing false negatives
                      and positives.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="material-symbols-outlined text-4xl text-accent">
                      rocket_launch
                    </span>
                    <h3 className="text-xl font-bold">Accelerated Workflow</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">
                      Significantly cut down the time required for image
                      analysis and reporting, freeing up clinicians to focus on
                      patient care.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="material-symbols-outlined text-4xl text-accent">
                      visibility
                    </span>
                    <h3 className="text-xl font-bold">Early Detection</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">
                      Identify subtle anomalies that may be missed by the human
                      eye, enabling earlier intervention and improving
                      prognosis.
                    </p>
                  </div>
                </div>
                <div className="mt-16 grid lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-3 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold tracking-tight">
                      How It Works: Diagnostic Workflow
                    </h3>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold">Image &amp; Data Upload</h4>
                          <p className="text-subtext-light dark:text-subtext-dark mt-1">
                            Securely upload medical images (X-rays, CT scans,
                            etc.) and patient data directly or via EHR
                            integration.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold">
                            AI Analysis &amp; Scoring
                          </h4>
                          <p className="text-subtext-light dark:text-subtext-dark mt-1">
                            Our proprietary algorithms analyze the data in
                            seconds, highlighting areas of interest and
                            providing a confidence score for potential findings.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold">Clinician Review</h4>
                          <p className="text-subtext-light dark:text-subtext-dark mt-1">
                            Results are presented in an intuitive dashboard for
                            the clinician to review, confirm, and incorporate
                            into their final diagnosis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Confidence Scores Explained
                    </h3>
                    <p className="text-subtext-light dark:text-subtext-dark mt-2">
                      Our AI provides a score from 0% to 100% indicating its
                      confidence in a finding, empowering clinicians with
                      transparent, data-driven insights.
                    </p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2/5 text-sm font-medium">
                          Potential Finding A
                        </div>
                        <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                          <div
                            className="bg-secondary h-4 rounded-full text-white text-xs flex items-center justify-center"
                            //   style="width: 92%"
                          >
                            92%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2/5 text-sm font-medium">
                          Potential Finding B
                        </div>
                        <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                          <div
                            className="bg-secondary h-4 rounded-full text-white text-xs flex items-center justify-center"
                            //   style="width: 78%"
                          >
                            78%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2/5 text-sm font-medium">
                          Potential Finding C
                        </div>
                        <div className="w-3/5 bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                          <div
                            className="bg-secondary/60 h-4 rounded-full text-white text-xs flex items-center justify-center"
                            //   style="width: 45%"
                          >
                            45%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div
                      className="w-full md:w-1/3 bg-center bg-no-repeat aspect-square md:aspect-[3/4] bg-cover rounded-lg"
                      data-alt="Professional headshot of Dr. Evelyn Reed."
                      //   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSUuou9htaM9r4D9iOOxbuqLKzfrFn_aviGutGQKMdQYDKGudfjJszTb0XZFMogZnHzNLBGfyKhPrj6sAN07Q-vMTZd0lhhTVDufeGsKDdrTt62fZp9XvwMLmeiLA8ddy78D62cIYP0qMOvgCDt9XAwJLzW1031t1wWigFUh01jjzLMLlxYnfG2QojklxdYwifahtAG6po79G6FSnTXIY3FIPBazB72EKLLQOdQ5sHYZrsnpQHmoa5gnNgP0OC6NK4hSxHGsRxdxqs");'
                    ></div>
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-secondary text-sm font-bold uppercase tracking-wider">
                        Success Story
                      </p>
                      <blockquote className="text-xl font-medium italic">
                        "MediSecure's AI has revolutionized our radiology
                        department. We're catching critical issues faster and
                        with greater confidence than ever before. It's an
                        indispensable tool."
                      </blockquote>
                      <p className="mt-2 text-subtext-light dark:text-subtext-dark font-medium">
                        Dr. Evelyn Reed, Head of Radiology, St. Jude's Medical
                        Center
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
                id="telemedicine"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6 md:order-2">
                    <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
                      Connect with Care, Intelligently
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg">
                      Our platform offers more than just video calls. Experience
                      secure, AI-enhanced telemedicine with intelligent symptom
                      checkers, real-time transcription, and seamless
                      integration with patient records for a more efficient and
                      effective virtual consultation.
                    </p>
                    <div className="flex min-w-[84px] max-w-[480px] w-fit">
                      <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">
                          Learn About Telemedicine
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1"
                    data-alt="A doctor consulting with a patient via a tablet, showcasing telemedicine."
                    // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx39kcpBpeiRWCFK2_cCXHCvp9VzSpCowAtZqUPh28oRsr5LkbYrpBiBYuRa4iQGZAvHVtWWtfTDZW9RwbvDHSuxApPyjcHBSCgN2PsU02UMmdjjCqDXBKHTfLKr1bO4gnDN13raKc8Bt7ey91Zy3_69YJLop_nxxY_-ikmLeQfHqKM12TElXDWLpBCJxEEssT9Q_vw-bvMuVaorTGyvY-3zvFRDDoIBgzrOx5duV_FVk6aaNWnipLOF7a_kyGJKCHAa8pu0h76eul");'
                  ></div>
                </div>
                <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        The Patient Journey: Appointment Booking
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark mt-2">
                        A streamlined, user-friendly booking process from start
                        to finish.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-secondary">
                            check_circle
                          </span>
                          <span>Patient logs in to the secure portal.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-secondary">
                            check_circle
                          </span>
                          <span>Selects specialty and preferred provider.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-secondary">
                            check_circle
                          </span>
                          <span>Chooses an available date and time slot.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-secondary">
                            check_circle
                          </span>
                          <span>
                            Confirms appointment and receives email/SMS
                            reminder.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        Secure Video Features
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark mt-2">
                        Features designed for a productive and secure
                        consultation.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">
                            encrypted
                          </span>
                          <span>End-to-End Encrypted Video &amp; Audio</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">
                            screen_share
                          </span>
                          <span>Secure Screen Sharing for Results</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">
                            chat
                          </span>
                          <span>In-call Private Text Chat</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">
                            transcribe
                          </span>
                          <span>AI-Powered Live Transcription</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div
                      className="w-full md:w-1/3 bg-center bg-no-repeat aspect-square md:aspect-[3/4] bg-cover rounded-lg"
                      data-alt="A patient smiling while using a laptop for a video call."
                      //   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCrTZ32VsZpo3ewSjs5v8mwZzVa6vZAGkYJ4mkDdGlnHRJJhR7prW3Bp09bfXunaModjZ78R3JhirG9G-310gamP6hiyOsIfHOQPzwROb_G94-ZeAPB3LqD1S6-v_EDsE77HqyLfLyf45hCy8wPzwdg0Mkq-gow60ONo6PvY3yLKa61fuBu-wopq-5f6ptAx_4xxNlZ3jON-aplfr_Oxz8Xa4Pz6IN87fTruTT_kamYVEOQPwfbWkNwqOu9SqoVNiyrBI0EkFXKU0A");'
                    ></div>
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-secondary text-sm font-bold uppercase tracking-wider">
                        Patient Testimonial
                      </p>
                      <blockquote className="text-xl font-medium italic">
                        "As someone with mobility issues, MediSecure's
                        telemedicine service has been a lifeline. The platform
                        is easy to use, and I feel just as cared for as an
                        in-person visit. The booking process was a breeze!"
                      </blockquote>
                      <p className="mt-2 text-subtext-light dark:text-subtext-dark font-medium">
                        James P., Patient
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
                id="medication"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    data-alt="A close-up of different types of medication pills organized neatly."
                    // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJhzOX_6RoVm2yDjLuaTzSZNJB6muppU5KuCsTAVyP7K7q86-sxwNmJSU1CEvYj9QNK2E_fBntDAreygYwwTj3AF1N33ww4AWH9HyrI55C_nY7a4fLpTOAZMfzFfOzOUKbqUBzFLtOubcZ7ycbHzwuZYKoHtPnxkqxyD-sx_N4VSdSS1X86Y_9ifhtqFVe3qdDfxtN4YYTgRAThTo57DZHKq9uzMku5B5VbqvpJ5GiLR4VgtBl4cgidqOetkRRMJ3sjgzoeWH3T7-6");'
                  ></div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
                      Simplify and Secure Medication Adherence
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg">
                      Improve patient safety and treatment outcomes with our
                      intelligent medication management system. From AI-powered
                      reminders to automatic drug interaction alerts, we provide
                      tools that support both patients and clinicians in
                      managing complex medication schedules.
                    </p>
                    <div className="flex min-w-[84px] max-w-[480px] w-fit">
                      <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">
                          Discover Management Tools
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Key Features for Patients
                    </h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          notifications_active
                        </span>
                        <div>
                          <h4 className="font-bold">Smart Reminders</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            Customizable alerts for medication times, refills,
                            and appointments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          history
                        </span>
                        <div>
                          <h4 className="font-bold">Adherence Tracking</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            Log doses taken and share adherence reports with
                            your provider.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          school
                        </span>
                        <div>
                          <h4 className="font-bold">Educational Resources</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            Access easy-to-understand information about your
                            medications.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Tools for Providers
                    </h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          warning
                        </span>
                        <div>
                          <h4 className="font-bold">Interaction Alerts</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            AI-powered checks for potential drug-drug or
                            drug-allergy interactions.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          summarize
                        </span>
                        <div>
                          <h4 className="font-bold">Adherence Dashboards</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            View patient adherence data to inform treatment
                            adjustments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent mt-1">
                          edit_document
                        </span>
                        <div>
                          <h4 className="font-bold">E-Prescribing</h4>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm">
                            Streamlined electronic prescription and renewal
                            process.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
                id="ehr"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6 md:order-2">
                    <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
                      Seamless Data, Unified Care
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg">
                      Break down data silos. MediSecure securely syncs with
                      existing Electronic Health Record (EHR) systems, ensuring
                      a single source of truth for patient data. Our platform
                      promotes interoperability, streamlines clinical workflows,
                      and provides a holistic view of the patient journey.
                    </p>
                    <div className="flex min-w-[84px] max-w-[480px] w-fit">
                      <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">
                          Learn About Integration
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1"
                    data-alt="Abstract visualization of interconnected data points and networks."
                    // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYtTFPwIaZFJHyQQZZJzHD9GiwXd6hwj32QqH6yRs6Z5fd9V88Yq1zGFXXb7FpABPntuQl3rrFX9HEiZbHe8XQdYgoguf-H17WLv266FemhzbgP_hi-OsZfwnOBbONTeptWHCaXnaNgKPOeufwWrj25JBoN04AZlG0Uwffp8HmegAWZNX0MwTkZlwK-FWi0HOeB196HSfVArjHA_4ev3pt0lmfiHh5-1AgPnKgu6K5MRPC2zegBuhvjYoKdIOdsxUFHbw_wT-K6pjl");'
                  ></div>
                </div>
                <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold tracking-tight text-center">
                    A True Single Source of Truth
                  </h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 text-center max-w-2xl mx-auto">
                    Our integration architecture ensures that data from all
                    MediSecure solutions flows back into your core EHR, creating
                    a comprehensive patient record.
                  </p>
                  <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <div className="text-center p-4">
                      <p className="text-lg font-bold">AI Diagnostics</p>
                      <span className="material-symbols-outlined text-4xl text-primary my-2">
                        arrow_downward
                      </span>
                    </div>
                    <div className="text-center p-4">
                      <p className="text-lg font-bold">Telemedicine Notes</p>
                      <span className="material-symbols-outlined text-4xl text-primary my-2">
                        arrow_downward
                      </span>
                    </div>
                    <div className="flex items-center justify-center p-6 bg-primary/10 dark:bg-primary/20 rounded-full my-4 md:my-0">
                      <span className="material-symbols-outlined text-5xl text-primary">
                        database
                      </span>
                    </div>
                    <div className="text-center p-4">
                      <p className="text-lg font-bold">Medication Logs</p>
                      <span className="material-symbols-outlined text-4xl text-primary my-2">
                        arrow_upward
                      </span>
                    </div>
                    <div className="text-center p-4">
                      <p className="text-lg font-bold">Patient Data</p>
                      <span className="material-symbols-outlined text-4xl text-primary my-2">
                        arrow_upward
                      </span>
                    </div>
                  </div>
                  <p className="text-center mt-4 font-bold text-xl">
                    Your Existing EHR System
                  </p>
                </div>
              </section>
            </div>
            <section className="bg-slate-100 dark:bg-slate-800 py-20 md:py-28">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">
                    Answers to common questions about our platform and
                    solutions.
                  </p>
                </div>
                <div className="mt-12 space-y-4">
                  <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h3 className="font-bold">
                        How does MediSecure ensure data security and HIPAA
                        compliance?
                      </h3>
                      <span className="relative size-5 shrink-0">
                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                          add
                        </span>
                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                          remove
                        </span>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                      We employ end-to-end encryption for all data in transit
                      and at rest, adhere to strict access controls, and undergo
                      regular third-party audits to ensure we meet and exceed
                      all HIPAA requirements.
                    </p>
                  </details>
                  <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h3 className="font-bold">
                        Can MediSecure integrate with our existing EHR system?
                      </h3>
                      <span className="relative size-5 shrink-0">
                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                          add
                        </span>
                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                          remove
                        </span>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                      Yes, our platform is built for interoperability. We use
                      standard protocols like HL7 and FHIR to integrate
                      seamlessly with most major EHR systems, ensuring a smooth
                      data flow.
                    </p>
                  </details>
                  <details className="group rounded-lg bg-background-light dark:bg-background-dark p-6 [&amp;_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h3 className="font-bold">
                        What kind of support and training do you offer?
                      </h3>
                      <span className="relative size-5 shrink-0">
                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity">
                          add
                        </span>
                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity">
                          remove
                        </span>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-subtext-light dark:text-subtext-dark">
                      We provide comprehensive onboarding, training for all
                      staff, and 24/7 technical support to ensure your team
                      feels confident and gets the most value from our platform.
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </main>
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
                    Innovating the future of healthcare with intelligent
                    solutions.
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
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
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
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-gray-400 hover:text-white"
                        href="#"
                      >
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
        </div>
      </body>
    </>
  );
};

export default Navbar;
