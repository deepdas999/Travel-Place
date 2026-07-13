import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Footer from "./footer";
import Contact from "./Contact";
import States from "./States";
import Login from "./Login";
import StateDetails from "./StateDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/states" element={<States />} />
        <Route path="/login" element={<Login />} />

        {/* STATE DETAILS */}
        <Route
          path="/state/:stateName"
          element={<StateDetails />}
        />

        {/* DIRECT URL SEARCH */}
        <Route
          path="/:stateName"
          element={<StateDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;