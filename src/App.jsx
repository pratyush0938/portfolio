import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TrainingCertificates from "./components/TrainingCertificates";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import FloatingParticles from "./components/FloatingParticles";

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Loader />
      <CursorGlow />
      <FloatingParticles />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <TrainingCertificates />
        <ResumeSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;