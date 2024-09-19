// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Bio } from "./components/pages/Bio.jsx";
import { Contact } from "./components/pages/ContactMe.jsx";
import { Projects } from "./components/pages/Projects.jsx";
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
