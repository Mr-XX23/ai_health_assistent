import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { RoleBasedRoute } from "./components/routing/RoleBasedRoute";

// local imports
import SolutionsPage from "./pages/MarketingPages/Solutions/SoluitonsPage";
import LandingPage from "./pages/MarketingPages/LandingPage/LandingPage";
import System_Analysis from "./pages/MarketingPages/System_Analysis/System_Analysis";
import FeaturesPage from "./pages/MarketingPages/Features/FeaturesPage";
import SecurityPage from "./pages/MarketingPages/Security/SecurityPage";
import Pricingpage from "./pages/MarketingPages/Pricing/Pricingpage";
import ContactUs from "./pages/MarketingPages/Contact/ConctactUs";
import LoginPage from "./pages/LoginAndRegistration/Login/LoginPage";
import ForgetPassword from "./pages/LoginAndRegistration/ForgetPassword/ForgetPassword";
import SignUp from "./pages/LoginAndRegistration/SignUpPages/SignUp";
import Verification from "./pages/LoginAndRegistration/SignUpPages/Verification";
import SetNewPassword from "./pages/LoginAndRegistration/ForgetPassword/SetNewPassword";
import PasswordUpdated from "./pages/LoginAndRegistration/ForgetPassword/PasswordUpdated";
import AdminDashboard from "./components/AdminComponents/pages/AdminDashboard/AdminDashboard";
import PatientPage from "./components/AdminComponents/pages/PatientPage/PatientPage";
import DocterDashboard from "./components/DocterComponents/pages/DocterDashboard/DocterDashboard";
import DocterSidePatient from "./components/DocterComponents/pages/DocterSidePatient/DocterSidePatient";
import DocterSideAppointment from "./components/DocterComponents/pages/DocterSideAppointment/DocterSideAppointment";
import DocterMessage from "./components/DocterComponents/pages/DocterSideMessage/DocterMessage";
import ScrollToTop from "./functions/ScrollToTop/ScrollToTop";
import DocterConsultation from "./components/DocterComponents/pages/DocterConsultation/DocterConsultation";
import DocterReport from "./components/DocterComponents/pages/DocterReport/DocterReport";
import AdminPatientProfile from "./components/AdminComponents/pages/AdminPatientProfile/SystemPatientProfile";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>

            {/* Marketing Pages Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/analysis" element={<System_Analysis />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/pricing" element={<Pricingpage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/set-password" element={<SetNewPassword />} />
            <Route path="/update-password" element={<PasswordUpdated />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin"
              element={
                <RoleBasedRoute allowedRoles={['ADMIN']}>
                  <AdminDashboard />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/admin-patient-profile"
              element={
                <RoleBasedRoute allowedRoles={['ADMIN']}>
                  <AdminPatientProfile />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/admin-patient-page"
              element={
                <RoleBasedRoute allowedRoles={['ADMIN']}>
                  <PatientPage />
                </RoleBasedRoute>
              }
            />

            {/* Protected Health Provider Routes */}
            <Route
              path="/docter-dashboard"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterDashboard />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-patient"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterSidePatient />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-appointment"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterSideAppointment />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-message"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterMessage />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-consultation"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterConsultation />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-report"
              element={
                <RoleBasedRoute allowedRoles={['HEALTH_PROVIDER']}>
                  <DocterReport />
                </RoleBasedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
