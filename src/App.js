import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App">
          {/* Page Sections */}
          <Header />
          <main>
            <Hero />
            <Features />
            <Workflow />
            <Testimonials />
            <Pricing />
            <CTA />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
