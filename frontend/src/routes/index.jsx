import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
