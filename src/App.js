import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <AboutMe />
      
      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
