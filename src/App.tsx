import { BrowserRouter, Route, Routes } from "react-router";

// local import
import SoluitonsPage from "./pages/Solutions/SoluitonsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import System_Analysis from "./pages/System_Analysis/System_Analysis";
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
// import PatientPage from "./AdminCogit mponents/pages/PatientPage/PatientPage";
import DocterDashboard from "./DocterComponents/pages/DocterDashboard/DocterDashboard";
import DocterSidePatient from "./DocterComponents/pages/DocterSidePatient/DocterSidePatient";
import DocterSideAppointment from "./DocterComponents/pages/DocterSideAppointment/DocterSideAppointment";
import DocterMessage from "./DocterComponents/pages/DocterSideMessage/DocterMessage";
import ScrollToTop from "./functions/ScrollToTop/ScrollToTop";
<<<<<<< HEAD
import DocterConsultation from "./DocterComponents/pages/DocterConsultation/DocterConsultation";
import DocterReport from "./DocterComponents/pages/DocterReport/DocterReport";

=======
import SystemPatientProfile from "./AdminComponents/pages/AdminPatientProfile/SystemPatientProfile";
import FeaturesPage from "./pages/Features/FeaturesPage";
>>>>>>> 2314bf943c23f8f89aaf9b92c14cf14eefc3a26e
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

          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/set-password" element={<SetNewPassword />} />
          <Route path="/update-password" element={<PasswordUpdated />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin-patient-profile"
            element={<SystemPatientProfile />}
          />
          {/* <Route path="/admin-patient-page" element={<PatientPage />} /> */}

          <Route path="/docter-dashboard" element={<DocterDashboard />} />
          <Route path="/docter-patient" element={<DocterSidePatient />} />
          <Route
            path="/docter-appointment"
            element={<DocterSideAppointment />}
          />
          <Route path="/docter-message" element={<DocterMessage />} />

          <Route path="/docter-consultation" element={<DocterConsultation />} />

          <Route path="/docter-report" element={<DocterReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
``;

export default App;
