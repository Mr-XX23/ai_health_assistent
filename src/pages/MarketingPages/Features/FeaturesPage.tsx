import AppLayout from "../../../layout/AppLayout/AppLayout";

const FeaturesPage = () => {
  return (
    <AppLayout>
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-light">
              A Platform Built for Modern Healthcare
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-light">
              MediSecure combines cutting-edge AI with user-centric design to
              create a seamless, intelligent, and secure healthcare experience
              for everyone involved.
            </p>
          </div>
          <div className="mt-20 sm:mt-24 space-y-20">
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                  Patient-Centric Features
                </h2>
                <p className="text-gray-400 mt-2 md:mt-0 max-w-md">
                  Tools designed to empower patients and put them at the center
                  of their care journey.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className=" border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      person_search
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    AI Symptom Analyser
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Empowers patients with an intelligent, conversational AI to
                    understand symptoms and guide them to appropriate care.
                  </p>
                  <a
                    className="mt-6 font-semibold text-primary/80 hover:text-primary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      calendar_month
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Smart Appointment Booking
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    An intuitive interface for patients to book, reschedule, and
                    manage appointments with ease, reducing no-shows.
                  </p>
                  <a
                    className="mt-6 font-semibold text-primary/80 hover:text-primary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      medication
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Medication Management
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Personalized reminders and adherence tracking to help
                    patients manage their prescriptions effectively.
                  </p>
                  <a
                    className="mt-6 font-semibold text-primary/80 hover:text-primary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-secondary">
                  Provider Tools
                </h2>
                <p className="text-gray-400 mt-2 md:mt-0 max-w-md">
                  Streamlining workflows and providing data-driven insights for
                  healthcare professionals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      radiology
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    AI-Powered Diagnostics
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Leverages machine learning to analyze medical images,
                    providing clinicians with decision support for faster
                    diagnoses.
                  </p>
                  <a
                    className="mt-6 font-semibold text-secondary/80 hover:text-secondary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      duo
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Intelligent Telemedicine
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Secure video consultations enhanced with real-time
                    transcription, AI summaries, and seamless EHR integration.
                  </p>
                  <a
                    className="mt-6 font-semibold text-secondary/80 hover:text-secondary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      analytics
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Clinical Analytics Dashboard
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Access real-time data on patient outcomes and practice
                    efficiency to make data-driven decisions.
                  </p>
                  <a
                    className="mt-6 font-semibold text-secondary/80 hover:text-secondary flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-accent">
                  Security &amp; AI Core
                </h2>
                <p className="text-gray-400 mt-2 md:mt-0 max-w-md">
                  A foundation of trust and intelligence, ensuring data
                  integrity and continuous improvement.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-accent/10 text-accent p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      health_and_safety
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    HIPAA-Compliant Security
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    End-to-end encryption and robust protocols ensure all
                    patient data is protected and compliant with standards.
                  </p>
                  <a
                    className="mt-6 font-semibold text-accent/80 hover:text-accent flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-accent/10 text-accent p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      hub
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Seamless EHR Integration
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Syncs with existing Electronic Health Record systems,
                    ensuring a unified and consistent flow of patient
                    information.
                  </p>
                  <a
                    className="mt-6 font-semibold text-accent/80 hover:text-accent flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="border border-primary/30 rounded-xl p-6 flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="bg-accent/10 text-accent p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">
                      model_training
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-light">
                    Continuous Learning AI
                  </h3>
                  <p className="text-gray-400 mt-2 grow">
                    Our AI models are continuously updated with the latest
                    medical data to improve accuracy and provide cutting-edge
                    support.
                  </p>
                  <a
                    className="mt-6 font-semibold text-accent/80 hover:text-accent flex items-center gap-2 group"
                    href="#"
                  >
                    Learn More
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default FeaturesPage;
