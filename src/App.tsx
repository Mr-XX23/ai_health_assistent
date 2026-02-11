import { BrowserRouter, Route, Routes } from "react-router";

// local imports
import SoluitonsPage from "./pages/Solutions/SoluitonsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import System_Analysis from "./pages/System_Analysis/System_Analysis";
import FeaturesPage from "./pages/Features/FeaturesPage";
import SecurityPage from "./pages/Security/SecurityPage";
import Pricingpage from "./pages/Pricing/Pricingpage";
import ConctactUs from "./pages/Contact/ConctactUs";
import LoginPage from "./pages/LoginAndRegistration/Login/LoginPage";
import ForgetPassword from "./pages/LoginAndRegistration/ForgetPassword/ForgetPassword";
import SignUp from "./pages/LoginAndRegistration/SignUpPages/SignUp";
import Verification from "./pages/LoginAndRegistration/SignUpPages/Verification";
import SetNewPassword from "./pages/LoginAndRegistration/ForgetPassword/SetNewPassword";
import PasswordUpdated from "./pages/LoginAndRegistration/ForgetPassword/PasswordUpdated";
import AdminDashboard from "./AdminComponents/pages/AdminDashboard/AdminDashboard";
import PatientPage from "./AdminComponents/pages/PatientPage/PatientPage";
import DocterDashboard from "./DocterComponents/pages/DocterDashboard/DocterDashboard";
import DocterSidePatient from "./DocterComponents/pages/DocterSidePatient/DocterSidePatient";
import DocterSideAppointment from "./DocterComponents/pages/DocterSideAppointment/DocterSideAppointment";
import DocterMessage from "./DocterComponents/pages/DocterSideMessage/DocterMessage";
import ScrollToTop from "./functions/ScrollToTop/ScrollToTop";
import DocterConsultation from "./DocterComponents/pages/DocterConsultation/DocterConsultation";
import DocterReport from "./DocterComponents/pages/DocterReport/DocterReport";
import AdminPatientProfile from "./AdminComponents/pages/AdminPatientProfile/SystemPatientProfile";
import DocterSettiing from "./DocterComponents/pages/DocterSetting/DocterSettiing";
import DocterPatientProfile from "./DocterComponents/pages/DocterPatientProfile/DocterPatientProfile";
import PatientMedicalHistory from "./PatientPages/pages/PatientMedicalHistory/PatientMedicalHistory";
import MedicationManagement from "./PatientPages/pages/MedicationManagement/MedicationManagement";
import MedicationInteraction from "./PatientPages/pages/MedicationInteraction/MedicationInteraction";
import ScheduleAppointment from "./PatientPages/pages/ScheduleAppointment/ScheduleAppointment";
import Messages from "./PatientPages/pages/Messages/Messages";
import Message from "./pages/MessageSection/Message";
import PatientDashboard from "./PatientPages/pages/PatientDashBoard/PatientDashBoard";
import Appointments from "./PatientPages/pages/Appointments/Appointments";
import FindSpecialist from "./PatientPages/pages/Findspecialist/FindSpecialist";
import DoctorPatientMedication from "./DocterComponents/components/Medicattion/DoctorPatientMedication";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<SoluitonsPage />} />
          <Route path="/analysis" element={<System_Analysis />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/pricing" element={<Pricingpage />} />
          <Route path="/contact" element={<ConctactUs />} />
          <Route path="/message" element={<Message />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/set-password" element={<SetNewPassword />} />
          <Route path="/update-password" element={<PasswordUpdated />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          {/* Admine side routing */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin-patient-profile"
            element={<AdminPatientProfile />}
          />
          <Route path="/admin-patient-page" element={<PatientPage />} />

          {/* Doctor side routing */}
          <Route path="/docter-dashboard" element={<DocterDashboard />} />
          <Route path="/docter-patient" element={<DocterSidePatient />} />
          <Route
            path="/docter-patient-profile"
            element={<DocterPatientProfile />}
          />
          <Route
            path="/docter-appointment"
            element={<DocterSideAppointment />}
          />
          <Route path="/docter-message" element={<DocterMessage />} />
          <Route path="/docter-consultation" element={<DocterConsultation />} />
          <Route path="/docter-report" element={<DocterReport />} />
          <Route path="/docter-settings" element={<DocterSettiing />} />
          <Route
            path="/docter-medication"
            element={<DoctorPatientMedication />}
          />

          {/* Patient Side Routing */}

          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route
            path="/patient-medical-history"
            element={<PatientMedicalHistory />}
          />
          <Route
            path="/patient-medications"
            element={<MedicationManagement />}
          />
          <Route
            path="/patient-medication-interaction"
            element={<MedicationInteraction />}
          />
          <Route path="/patient-symptom-checker" element={<FindSpecialist />} />
          <Route path="/patient-appointments" element={<Appointments />} />
          <Route
            path="patient-appointments"
            element={<ScheduleAppointment />}
          />
          <Route path="patient-messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
``;

export default App;
