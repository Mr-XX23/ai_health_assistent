import { BrowserRouter, Route, Routes } from "react-router";

// local imports
import AppLayout from "./layout/userlayout/AppLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
