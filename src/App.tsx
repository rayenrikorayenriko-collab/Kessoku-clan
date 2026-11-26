import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Organization from "./components/Organization";
import Portfolio from "./components/Portfolio";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Organization />
        <Portfolio />
        <Certification />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
