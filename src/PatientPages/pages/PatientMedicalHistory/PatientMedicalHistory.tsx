import PatientLayout from "../../../layout/PatientLayout/PatientLayout";
import AllergiesandImmunizatiions from "./SubComponents/AllergiesandImmunizatiions";
import PastMedicalConditions from "./SubComponents/PastMedicalConditions";
import SurgicalHistory from "./SubComponents/SurgicalHistory";

const PatientMedicalHistory = () => {
  return (
    <div>
      <PatientLayout>
        <main className="flex-1 flex flex-col h-screen dark:text-secondary ">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark shrink-0 ">
            <div className="flex flex-col">
              <p className="text-2xl font-bold tracking-tight">Medical History</p>
              <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">A comprehensive and filterable view of your health record.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-base">add_circle</span>
                <span>Add New Entry</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/10 dark-text-secondary dark:bg-primary/20 text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-base">print</span>
                <span>Print / Export</span>
              </button>
            </div>
          </header>
          <div className="flex-1 flex overflow-hidden">
            {/* <nav className="w-64 border-r border-border-light dark:border-border-dark p-6 bg-card-light dark:bg-card-dark overflow-y-auto">
              <h3 className="text-sm font-semibold uppercase text-text-light-secondary dark:text-text-dark-secondary tracking-wider mb-4">Sections</h3>
              <ul className="space-y-2">
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary transition-colors" href="#conditions">
                  <span className="material-symbols-outlined text-lg">healing</span>
                  <span>Conditions</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#surgeries">
                  <span className="material-symbols-outlined text-lg">stethoscope_arrow</span>
                  <span>Surgeries</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#allergies">
                  <span className="material-symbols-outlined text-lg">allergy</span>
                  <span>Allergies</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#immunizations">
                  <span className="material-symbols-outlined text-lg">vaccines</span>
                  <span>Immunizations</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#family-history">
                  <span className="material-symbols-outlined text-lg">family_history</span>
                  <span>Family History</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#social-history">
                  <span className="material-symbols-outlined text-lg">person_raised_hand</span>
                  <span>Social History</span></a>
                </li>
                <li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-text-light-primary dark:text-text-dark-primary" href="#provider-notes">
                  <span className="material-symbols-outlined text-lg">note_stack</span>
                  <span>Provider Notes</span></a>
                </li>
              </ul>
            </nav> */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <PastMedicalConditions />
                <SurgicalHistory />
                <AllergiesandImmunizatiions />

              </div>
            </div>
          </div>
        </main></PatientLayout>
    </div>
  );
};

export default PatientMedicalHistory;
