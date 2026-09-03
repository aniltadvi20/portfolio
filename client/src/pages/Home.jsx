import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCodeBranch,
  FaFingerprint,
  FaRoute,
  FaShieldAlt,
} from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const focusAreas = [
  {
    icon: <FaFingerprint />,
    title: "Identity & access",
    description:
      "Authentication, authorization, account recovery, session handling, and cross-role behavior.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Business logic",
    description:
      "State transitions, workflow abuse, race conditions, and assumptions scanners rarely understand.",
  },
  {
    icon: <FaRoute />,
    title: "Attack surface",
    description:
      "Structured recon across domains, APIs, JavaScript, parameters, and exposed application behavior.",
  },
];

const method = [
  ["01", "Understand", "Learn the intended user journey and its rules."],
  ["02", "Map", "Trace data, roles, state, and every trust boundary."],
  ["03", "Challenge", "Change one server-side assumption at a time."],
  ["04", "Prove", "Reproduce the impact safely and document it clearly."],
];

const Home = () => (
  <>
    <HeroSection />

    <section className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="page-wrap grid grid-cols-2 gap-px sm:grid-cols-4">
        {[
          ["Practice", "Security research since 2019"],
          ["Approach", "Manual-first testing"],
          ["Output", "Open-source security tools"],
          ["Standard", "Responsible disclosure"],
        ].map(([label, value]) => (
          <div key={label} className="border-r border-white/[0.07] px-4 py-7 last:border-r-0 sm:px-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#68726d]">
              {label}
            </p>
            <p className="mt-2 max-w-[12rem] text-xs font-semibold leading-5 text-[#c4ccc8] sm:text-sm">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-pad">
      <div className="page-wrap">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="eyebrow">Where I focus</p>
            <h2 className="section-title mt-5">Go beyond the obvious.</h2>
          </div>
          <p className="body-copy lg:ml-auto">
            Good application security starts with understanding how a product is
            supposed to work. I combine careful manual testing with targeted
            automation to look for the gaps between design intent and server-side
            enforcement.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="panel group p-6 sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#73e2a7]/20 bg-[#73e2a7]/8 text-[#73e2a7] transition group-hover:border-[#73e2a7]/40 group-hover:bg-[#73e2a7]/12">
                {area.icon}
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-white">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#8f9994]">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad border-y border-white/[0.07] bg-[#0b0e12]/70">
      <div className="page-wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mt-5">Built to understand.</h2>
          </div>
          <Link className="button button-secondary w-fit" to="/projects">
            View all projects <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="page-wrap grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Testing loop</p>
          <h2 className="section-title mt-5">Method over payloads.</h2>
          <p className="body-copy mt-6">
            Tools accelerate a hypothesis. They do not replace one. My process
            keeps the application&apos;s logic at the center of every test.
          </p>
          <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#73e2a7]" to="/about">
            Read my approach <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="border-t border-white/[0.09]">
          {method.map(([number, title, description], index) => (
            <motion.div
              key={number}
              className="grid gap-3 border-b border-white/[0.09] py-6 sm:grid-cols-[3rem_0.65fr_1.35fr] sm:items-start"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="font-mono text-[10px] text-[#73e2a7]">{number}</span>
              <h3 className="text-base font-semibold text-[#e5e9e6]">{title}</h3>
              <p className="text-sm leading-6 text-[#88928d]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 sm:pb-28">
      <div className="page-wrap">
        <div className="panel relative overflow-hidden px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#73e2a7]/8 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 text-[#73e2a7]">
              <FaShieldAlt aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                Authorized testing only
              </span>
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Have a security problem worth exploring?
            </h2>
          </div>
          <Link className="button button-primary relative mt-8 lg:mt-0" to="/contact">
            Start a conversation <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
