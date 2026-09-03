import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const NotFound = () => (
  <section className="page-wrap flex min-h-[70vh] items-center justify-center py-32">
    <div className="max-w-xl text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="display-title mt-5 text-5xl sm:text-7xl">Lost endpoint.</h1>
      <p className="body-copy mx-auto mt-6">
        This route does not exist, but the main portfolio is one request away.
      </p>
      <a className="button button-primary mt-8" href="/">
        <FaArrowLeft aria-hidden="true" /> Back home
      </a>
    </div>
  </section>
);

const App = () => {
  const location = useLocation();

  return (
    <div className="site-shell min-h-screen">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Navbar />
      <ScrollToTop />

      <main id="main-content" className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
