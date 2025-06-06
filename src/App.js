import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      {/* Page Sections */}
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;
