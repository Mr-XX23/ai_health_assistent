import { BrowserRouter, Route, Routes } from "react-router";

// local imports
import SoluitonsPage from "./pages/Solutions/SoluitonsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import System_Analysis from "./pages/System_Analysis/System_Analysis";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<SoluitonsPage />} />
          <Route path="/analysis" element={<System_Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
