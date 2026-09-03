import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaBookOpen,
  FaCertificate,
  FaCheckCircle,
  FaCrosshairs,
} from "react-icons/fa";
import { credentials } from "../data/portfolio";

const Certifications = () => (
  <>
    <section className="page-wrap pb-16 pt-20 sm:pb-24 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Credentials · Continuous learning</p>
        <h1 className="page-title mt-6">
          Checkpoints, not a substitute for <span className="text-accent">proof.</span>
        </h1>
        <p className="body-copy mt-8">
          Structured learning gives me new models to test. Building, practicing,
          and documenting the work is how I turn those models into judgment.
        </p>
      </motion.div>
    </section>

    <section className="page-wrap pb-24 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div>
          <div className="flex items-center justify-between pb-5">
            <div className="flex items-center gap-3">
              <FaCertificate className="text-[#73e2a7]" aria-hidden="true" />
              <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a2aca7]">
                Completed learning
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#626c67]">
              {String(credentials.length).padStart(2, "0")} records
            </span>
          </div>

          {credentials.map((credential, index) => (
            <motion.article
              className="credential-card grid gap-4 sm:grid-cols-[2.6rem_1fr_auto] sm:items-start"
              key={credential.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.055 }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] font-mono text-[10px] text-[#73e2a7]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-white">
                    {credential.title}
                  </h3>
                  <FaCheckCircle className="text-xs text-[#73e2a7]" aria-label="Completed" />
                </div>
                <p className="mt-2 text-sm text-[#98a29d]">{credential.issuer}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="tag">{credential.type}</span>
                  <span className="tag">{credential.date}</span>
                </div>
              </div>
              {credential.verification ? (
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#cbd2ce] transition hover:text-[#73e2a7]"
                  href={credential.verification}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify <FaArrowUp className="rotate-45 text-[9px]" aria-hidden="true" />
                </a>
              ) : (
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#606964]">
                  Record available
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="panel h-fit overflow-hidden"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b border-white/[0.07] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaCrosshairs className="text-[#73e2a7]" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a0aaa5]">
                  Current focus
                </p>
              </div>
              <span className="status-dot" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white">
              OSCP preparation
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#8f9994]">
              Building depth in enumeration, exploitation methodology, Linux and
              Windows privilege escalation, and Active Directory.
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 text-[#73e2a7]">
              <FaBookOpen aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[0.13em]">
                Preparation principle
              </p>
            </div>
            <blockquote className="mt-5 text-lg leading-8 tracking-[-0.02em] text-[#d5dcd8]">
              “Enumerate deeply. Keep notes. Make every failed attempt teach the
              next one.”
            </blockquote>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#68726d]">
              Target · Early 2027
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  </>
);

export default Certifications;
