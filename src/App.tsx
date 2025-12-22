import { BrowserRouter, Route, Router, Routes } from "react-router";

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

const App = () => {
  return (
    <div>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};
``;

export default App;
