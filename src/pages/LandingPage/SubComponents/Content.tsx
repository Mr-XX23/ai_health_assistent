import FAQ from "../../FAQ/FAQ";

const Content = () => {
  return (
    <div>
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
              Our platform offers more than just video calls. Experience secure,
              AI-enhanced telemedicine with intelligent symptom checkers,
              real-time transcription, and seamless integration with patient
              records for a more efficient and effective virtual consultation.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Learn About Telemedicine</span>
              </button>
            </div>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1  bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAx39kcpBpeiRWCFK2_cCXHCvp9VzSpCowAtZqUPh28oRsr5LkbYrpBiBYuRa4iQGZAvHVtWWtfTDZW9RwbvDHSuxApPyjcHBSCgN2PsU02UMmdjjCqDXBKHTfLKr1bO4gnDN13raKc8Bt7ey91Zy3_69YJLop_nxxY_-ikmLeQfHqKM12TElXDWLpBCJxEEssT9Q_vw-bvMuVaorTGyvY-3zvFRDDoIBgzrOx5duV_FVk6aaNWnipLOF7a_kyGJKCHAa8pu0h76eul)]"
            data-alt="A doctor consulting with a patient via a tablet, showcasing telemedicine."
          ></div>
        </div>
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                The Patient Journey: Appointment Booking
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2">
                A streamlined, user-friendly booking process from start to
                finish.
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
                    Confirms appointment and receives email/SMS reminder.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Secure Video Features
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2">
                Features designed for a productive and secure consultation.
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
              className="w-full md:w-1/3 bg-center bg-no-repeat aspect-square md:aspect-[3/4] bg-cover rounded-lg bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDCrTZ32VsZpo3ewSjs5v8mwZzVa6vZAGkYJ4mkDdGlnHRJJhR7prW3Bp09bfXunaModjZ78R3JhirG9G-310gamP6hiyOsIfHOQPzwROb_G94-ZeAPB3LqD1S6-v_EDsE77HqyLfLyf45hCy8wPzwdg0Mkq-gow60ONo6PvY3yLKa61fuBu-wopq-5f6ptAx_4xxNlZ3jON-aplfr_Oxz8Xa4Pz6IN87fTruTT_kamYVEOQPwfbWkNwqOu9SqoVNiyrBI0EkFXKU0A)]"
              data-alt="A patient smiling while using a laptop for a video call."
            ></div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-secondary text-sm font-bold uppercase tracking-wider">
                Patient Testimonial
              </p>
              <blockquote className="text-xl font-medium italic">
                "As someone with mobility issues, MediSecure's telemedicine
                service has been a lifeline. The platform is easy to use, and I
                feel just as cared for as an in-person visit. The booking
                process was a breeze!"
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
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAJhzOX_6RoVm2yDjLuaTzSZNJB6muppU5KuCsTAVyP7K7q86-sxwNmJSU1CEvYj9QNK2E_fBntDAreygYwwTj3AF1N33ww4AWH9HyrI55C_nY7a4fLpTOAZMfzFfOzOUKbqUBzFLtOubcZ7ycbHzwuZYKoHtPnxkqxyD-sx_N4VSdSS1X86Y_9ifhtqFVe3qdDfxtN4YYTgRAThTo57DZHKq9uzMku5B5VbqvpJ5GiLR4VgtBl4cgidqOetkRRMJ3sjgzoeWH3T7-6)]"
            data-alt="A close-up of different types of medication pills organized neatly."
          ></div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary">
              Simplify and Secure Medication Adherence
            </h2>
            <p className="text-subtext-light dark:text-subtext-dark text-lg">
              Improve patient safety and treatment outcomes with our intelligent
              medication management system. From AI-powered reminders to
              automatic drug interaction alerts, we provide tools that support
              both patients and clinicians in managing complex medication
              schedules.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Discover Management Tools</span>
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
                    Customizable alerts for medication times, refills, and
                    appointments.
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
                    Log doses taken and share adherence reports with your
                    provider.
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
                    AI-powered checks for potential drug-drug or drug-allergy
                    interactions.
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
                    View patient adherence data to inform treatment adjustments.
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
                    Streamlined electronic prescription and renewal process.
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
              Break down data silos. MediSecure securely syncs with existing
              Electronic Health Record (EHR) systems, ensuring a single source
              of truth for patient data. Our platform promotes interoperability,
              streamlines clinical workflows, and provides a holistic view of
              the patient journey.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Learn About Integration</span>
              </button>
            </div>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAYtTFPwIaZFJHyQQZZJzHD9GiwXd6hwj32QqH6yRs6Z5fd9V88Yq1zGFXXb7FpABPntuQl3rrFX9HEiZbHe8XQdYgoguf-H17WLv266FemhzbgP_hi-OsZfwnOBbONTeptWHCaXnaNgKPOeufwWrj25JBoN04AZlG0Uwffp8HmegAWZNX0MwTkZlwK-FWi0HOeB196HSfVArjHA_4ev3pt0lmfiHh5-1AgPnKgu6K5MRPC2zegBuhvjYoKdIOdsxUFHbw_wT-K6pjl)]"
            data-alt="Abstract visualization of interconnected data points and networks."
          ></div>
        </div>
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold tracking-tight text-center">
            A True Single Source of Truth
          </h3>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-center max-w-2xl mx-auto">
            Our integration architecture ensures that data from all MediSecure
            solutions flows back into your core EHR, creating a comprehensive
            patient record.
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
  );
};

export default Content;
