import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Credentials", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = isOpen ? "hidden" : "";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const navClassName = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <header className="nav-surface fixed inset-x-0 top-0 z-50">
      <div className="page-wrap flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Anil Tadvi — home"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-mark">AT</span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-[-0.02em] text-white">
              Anil Tadvi
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-[#77827c]">
              Security research
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navClassName}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a className="button button-secondary min-h-0! px-4! py-2.5!" href={`mailto:${profile.email}`}>
            Start a conversation
            <FaArrowUp className="rotate-45 text-xs" aria-hidden="true" />
          </a>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="icon-button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 top-20 z-40 cursor-default bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            />

            <motion.nav
              id="mobile-navigation"
              className="fixed inset-x-4 top-24 z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#10151b] p-3 shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#73e2a7]/10 text-[#73e2a7]"
                          : "text-[#a5afaa] hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-[#5e6863]">
                      0{index + 1}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
