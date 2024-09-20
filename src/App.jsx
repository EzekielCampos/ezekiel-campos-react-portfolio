import { Nav } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    {/* Navbar component will redirect user to the different pages*/}
      <Nav />
      {/* The Outlet component will render the componenet that corresponds with
      the endpoing that is hit */}
      <Outlet />
      {/* Footer redirects user to Github account and Linkedin */}
      <Footer></Footer>
    </>
  );
}

export default App;
