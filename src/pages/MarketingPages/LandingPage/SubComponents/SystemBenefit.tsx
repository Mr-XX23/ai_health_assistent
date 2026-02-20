import { NavLink } from "react-router-dom";

const SystemBenefits = () => {
  return (
    <>
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
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary dark:text-secondary">
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
              <NavLink
                to={"/solutions"}
                className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors"
              >
                <span className="truncate">Discover Management Tools</span>
              </NavLink>
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
    </>
  );
};
export default SystemBenefits;
