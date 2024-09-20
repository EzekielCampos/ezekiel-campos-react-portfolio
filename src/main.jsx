import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// This will route our components to the corresponding endpoints
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// These are all the components that will be used for the different pages for routing
import { Bio } from "./components/pages/Bio.jsx";
import { Contact } from "./components/pages/ContactMe.jsx";
import { Projects } from "./components/pages/Projects.jsx";
import { Resume } from "./components/pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Default homepage will render the Bio component
      {
        index: true,
        element: <Bio />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path:"/contact-info",
        element:<Contact/>
      },
      {
        path:"/resume",
        element:<Resume/>
      }
    ],
  },
]);

// This injects the routes into the html file using the RouterProvider component
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
