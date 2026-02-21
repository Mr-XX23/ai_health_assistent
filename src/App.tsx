import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./context/AuthContext";
import { RoleBasedRoute } from "./components/routing/RoleBasedRoute";
import ScrollToTop from "./functions/ScrollToTop/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary";

// Eagerly loaded (critical for initial render)
import LandingPage from "./pages/MarketingPages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginAndRegistration/Login/LoginPage";

// Lazy-loaded Marketing Pages
const SolutionsPage = lazy(() => import("./pages/MarketingPages/Solutions/SoluitonsPage"));
const System_Analysis = lazy(() => import("./pages/MarketingPages/System_Analysis/System_Analysis"));
const FeaturesPage = lazy(() => import("./pages/MarketingPages/Features/FeaturesPage"));
const SecurityPage = lazy(() => import("./pages/MarketingPages/Security/SecurityPage"));
const Pricingpage = lazy(() => import("./pages/MarketingPages/Pricing/Pricingpage"));
const ContactUs = lazy(() => import("./pages/MarketingPages/Contact/ConctactUs"));

// Lazy-loaded Auth Pages
const ForgetPassword = lazy(() => import("./pages/LoginAndRegistration/ForgetPassword/ForgetPassword"));
const SignUp = lazy(() => import("./pages/LoginAndRegistration/SignUpPages/SignUp"));
const Verification = lazy(() => import("./pages/LoginAndRegistration/SignUpPages/Verification"));
const SetNewPassword = lazy(() => import("./pages/LoginAndRegistration/ForgetPassword/SetNewPassword"));
const PasswordUpdated = lazy(() => import("./pages/LoginAndRegistration/ForgetPassword/PasswordUpdated"));
const Unauthorized = lazy(() => import("./pages/Unauthorized/Unauthorized"));

// Lazy-loaded Admin Pages
const AdminDashboard = lazy(() => import("./components/AdminComponents/pages/AdminDashboard/AdminDashboard"));
const PatientPage = lazy(() => import("./components/AdminComponents/pages/PatientPage/PatientPage"));
const AdminPatientProfile = lazy(() => import("./components/AdminComponents/pages/AdminPatientProfile/SystemPatientProfile"));

// Lazy-loaded Doctor Pages
const DocterDashboard = lazy(() => import("./components/DocterComponents/pages/DocterDashboard/DocterDashboard"));
const DocterSidePatient = lazy(() => import("./components/DocterComponents/pages/DocterSidePatient/DocterSidePatient"));
const DocterSideAppointment = lazy(() => import("./components/DocterComponents/pages/DocterSideAppointment/DocterSideAppointment"));
const DocterMessage = lazy(() => import("./components/DocterComponents/pages/DocterSideMessage/DocterMessage"));
const DocterConsultation = lazy(() => import("./components/DocterComponents/pages/DocterConsultation/DocterConsultation"));
const DocterReport = lazy(() => import("./components/DocterComponents/pages/DocterReport/DocterReport"));


// Lazy-loaded Patient Pages
const AIPhysician = lazy(() => import("./PatientPages/pages/AIPhysician/AIPhysician"));
const WorkflowsPage = lazy(() => import("./PatientPages/pages/AIPhysician/WorkflowsPage"));

/**
 * Loading fallback component
 * Shows while lazy components are being loaded
 */
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
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
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterDashboard />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-patient"
              element={
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterSidePatient />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-appointment"
              element={
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterSideAppointment />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-message"
              element={
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterMessage />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-consultation"
              element={
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterConsultation />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/docter-report"
              element={
                <RoleBasedRoute allowedRoles={['HEALTHCARE_PROVIDER']}>
                  <DocterReport />
                </RoleBasedRoute>
              }
            />

            {/* Protected Patient Routes */}
            <Route
              path="/ai-physician"
              element={
                <RoleBasedRoute allowedRoles={['USER']}>
                  <AIPhysician />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/ai-physician/workflows"
              element={
                <RoleBasedRoute allowedRoles={['USER']}>
                  <WorkflowsPage />
                </RoleBasedRoute>
              }
            />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
