import PatientLayout from "../../../layout/PatientLayout/PatientLayout";
import HealthOverview from "./SubComponents/HealthOverview";
import HealthTip from "./SubComponents/HealthTip";
import Hero from "./SubComponents/Hero";
import NextAppointment from "./SubComponents/NextAppointment";
import RecentDiagnosis from "./SubComponents/RecentDiagnosis";
import Topbar from "./SubComponents/Topbar";

const PatientDashboard = () => {
  return (
    <PatientLayout>
      <div>
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Topbar />
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-12 gap-6 p-8">
              <Hero />
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                <HealthOverview />
                <NextAppointment />
                <RecentDiagnosis />
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <HealthTip />
              </div>
            </div>
          </div>
        </div>
        <button className="fixed bottom-8 right-8 flex items-center justify-center gap-2 h-14 w-14 md:w-auto md:px-6 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 group">
          <span className="material-symbols-outlined text-3xl">sos</span>
          <span className="hidden md:inline font-bold text-sm">
            Emergency Help
          </span>
        </button>
      </div>
    </PatientLayout>
  );
};

export default PatientDashboard;
