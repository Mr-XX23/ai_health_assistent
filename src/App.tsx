import { createBrowserRouter, RouterProvider } from "react-router";

// local imports
import Landing from "./pages/marketing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

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
