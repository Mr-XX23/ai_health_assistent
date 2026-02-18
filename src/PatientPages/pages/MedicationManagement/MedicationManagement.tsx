import PatientLayout from "../../../layout/PatientLayout/PatientLayout";
import DrugInteraction from "./SubComponents/DrugInteraction";
import MedicationReminder from "./SubComponents/MedicationReminder";
import YourMedication from "./SubComponents/YourMedication";

const MedicationManagement = () => {
  const medications = [
    {
      name: "Lisinopril",
      dose: "10mg",
      frequency: "Once daily",
      status: "Active",
    },
    {
      name: "Atorvastatin",
      dose: "20mg",
      frequency: "Once daily",
      status: "Active",
    },
    {
      name: "Metformin",
      dose: "500mg",
      frequency: "Twice daily",
      status: "Active",
    },
    {
      name: "Levothyroxine",
      dose: "75mcg",
      frequency: "Once daily",
      status: "Inactive",
    },
  ];

  return (
    <div>
      <PatientLayout>
        <div className="flex-1 flex flex-col h-screen">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark ">
            <div className="flex flex-col">
              <p className="dark:text-secondary text-2xl font-bold tracking-tight">
                Medication Management
              </p>
              <p className="text-base font-normal text-text-light-secondary dark:text-white">
                Manage your prescriptions and reminders.
              </p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold w-full md:w-auto hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-base">add</span>
                <span>Add New Medication</span>
              </button>
              <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-yellow-300">
                  notifications
                </span>
                <span className="absolute top-1 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB)]"
                data-alt="User profile picture of Maria Garcia"
              ></div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
            <div className="grid grid-cols-12 gap-6 p-8">
              <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">
                <YourMedication />
                <MedicationReminder />
              </div>
              <DrugInteraction />
            </div>
          </div>
        </div>
      </PatientLayout>
    </div>
  );
};

export default MedicationManagement;
