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
  return <RouterProvider router={router} />;
};

export default App;
