import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCodeBranch, FaShieldAlt } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

const Projects = () => (
  <>
    <section className="page-wrap pb-16 pt-20 sm:pb-24 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Selected work · 2026</p>
        <h1 className="page-title mt-6">
          Systems built for <span className="text-accent">security thinking.</span>
        </h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-end">
          <p className="body-copy">
            Practical projects that turn my testing methodology into usable
            interfaces, repeatable workflows, and clearer security decisions.
          </p>
          <div className="flex items-center gap-3 lg:justify-end">
            <FaCodeBranch className="text-[#73e2a7]" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7d8782]">
              Source available on GitHub
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    <section className="page-wrap pb-24 sm:pb-32">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: (index % 2) * 0.07 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>

    <section className="border-y border-white/[0.07] bg-white/[0.015] py-16 sm:py-20">
      <div className="page-wrap grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex gap-5">
          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#73e2a7]/20 bg-[#73e2a7]/8 text-[#73e2a7]">
            <FaShieldAlt aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white">
              Ethics are part of the implementation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#929c97]">
              These tools are designed for educational use, controlled labs, and
              systems where the tester has explicit authorization.
            </p>
          </div>
        </div>
        <Link className="button button-secondary w-fit" to="/contact">
          Talk security <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  </>
);

export default Projects;
