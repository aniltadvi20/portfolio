import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaShieldAlt,
  FaTwitter,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const phases = [
  ["01", "Map the intended workflow"],
  ["02", "Trace trust boundaries"],
  ["03", "Change one assumption"],
  ["04", "Compare roles and state"],
];

const HeroSection = () => {
  const socials = [
    { label: "GitHub", href: profile.github, icon: <FaGithub /> },
    { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn /> },
    { label: "X", href: profile.x, icon: <FaTwitter /> },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-20">
      <div className="page-wrap grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a4afa9]">
            <span className="status-dot" aria-hidden="true" />
            Open to security opportunities
          </div>

          <p className="eyebrow">Offensive security · Web + API</p>
          <h1 className="display-title mt-6 text-5xl sm:text-7xl lg:text-[5.65rem]">
            I test where <span className="text-accent">trust breaks.</span>
          </h1>
          <p className="body-copy mt-7">
            I&apos;m Anil, an offensive security researcher focused on finding
            authorization flaws, authentication weaknesses, and business-logic
            vulnerabilities in modern applications.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="button button-primary" to="/projects">
              Explore selected work <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" to="/contact">
              <FaShieldAlt aria-hidden="true" /> Discuss a project
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#68726d]">
              Find me
            </span>
            {socials.map((social) => (
              <a
                key={social.label}
                className="icon-button"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative lg:pl-4"
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-[#73e2a7]/6 blur-3xl" />
          <div className="research-window">
            <div className="window-bar">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="window-dot bg-[#ff6b6b]/60" />
                <span className="window-dot bg-[#f5c76b]/60" />
                <span className="window-dot bg-[#73e2a7]/60" />
              </div>
              <span>research / methodology</span>
              <span className="text-[#73e2a7]">● secure</span>
            </div>

            <div className="p-5 sm:p-7">
              <p className="terminal-command border-b border-white/[0.07] pb-5">
                <span className="terminal-prompt">$</span> approach --target
                modern-web-app --mode manual-first
              </p>

              <div className="space-y-1 py-5">
                {phases.map(([number, label], index) => (
                  <motion.div
                    key={number}
                    className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-white/[0.035]"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.36 + index * 0.1 }}
                  >
                    <span className="font-mono text-[10px] text-[#73e2a7]">
                      {number}
                    </span>
                    <span className="text-sm font-medium text-[#c6ceca]">
                      {label}
                    </span>
                    <span className="ml-auto h-px w-5 bg-white/10 transition-all group-hover:w-9 group-hover:bg-[#73e2a7]/50" />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 border-t border-white/[0.07] pt-5">
                {[
                  ["Focus", "Web + API"],
                  ["Method", "Manual-first"],
                  ["Rule", "Authorized"],
                ].map(([label, value]) => (
                  <div key={label} className="border-r border-white/[0.07] px-3 last:border-0 first:pl-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#66706b]">
                      {label}
                    </p>
                    <p className="mt-2 text-[11px] font-bold text-[#dfe5e1] sm:text-xs">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/10 bg-[#0f1419]/95 px-4 py-3 shadow-xl sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6f7974]">
              Signal
            </p>
            <p className="mt-1 text-xs font-semibold text-[#73e2a7]">
              Assumption changed → behavior observed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
