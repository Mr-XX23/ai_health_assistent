import { BrowserRouter, Route, Routes } from "react-router";

// local imports
import SoluitonsPage from "./pages/Solutions/SoluitonsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Ai_Analysis from "./pages/Ai_AnalysisPage/Ai_Analysis";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<SoluitonsPage />} />
          <Route path="/ai_analysis" element={<Ai_Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
