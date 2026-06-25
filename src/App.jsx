import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppButton from "./components/layout/WhatsAppButton.jsx";
import ScrollToTopButton from "./components/layout/ScrollToTopButton.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Fleet from "./pages/Fleet.jsx";
import AreasWeServe from "./pages/AreasWeServe.jsx";
import Gallery from "./pages/Gallery.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Certifications from "./pages/Certifications.jsx";
import News from "./pages/News.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}