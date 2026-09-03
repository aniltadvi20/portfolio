import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaTerminal } from "react-icons/fa";
import { skillGroups } from "../data/portfolio";

const timeline = [
  {
    period: "Ongoing",
    title: "Independent security research",
    organization: "Bug bounty practice · Open-source building",
    description:
      "Developing a manual-first web and API testing methodology while building practical research tooling in public.",
  },
  {
    period: "Nov 2024 — Feb 2025",
    title: "Web Application Pentesting Intern",
    organization: "YHills · Remote",
    description:
      "Four-month internship focused on web application testing concepts, vulnerability analysis, and reporting workflow.",
  },
  {
    period: "2022 — 2025",
    title: "BCA in Cyber Security",
    organization: "Parul University · Vadodara",
    description:
      "Built a foundation across application security, networking, operating systems, programming, and security fundamentals.",
  },
];

const principles = [
  "Understand the feature before touching a payload.",
  "Treat every role, object, and state change as a trust boundary.",
  "Use automation to expand coverage, not replace reasoning.",
  "Prove impact safely and write reports people can reproduce.",
];

const About = () => (
  <>
    <section className="page-wrap pb-16 pt-20 sm:pb-24 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">About · The researcher behind the tools</p>
        <h1 className="page-title mt-6">
          Curiosity, turned into a <span className="text-accent">repeatable method.</span>
        </h1>
      </motion.div>
    </section>

    <section className="page-wrap pb-24 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="body-copy">
            I&apos;m Anil Tadvi, an offensive security researcher interested in
            the places where applications trust users, objects, roles, and
            workflow state more than they should.
          </p>
          <p className="body-copy mt-6">
            My strongest interest is web application behavior: authentication,
            access control, account recovery, APIs, and business logic. I learn
            by testing, documenting, and building tools that make the process
            more structured.
          </p>
          <p className="body-copy mt-6">
            I care about evidence over labels. A useful finding should be safe
            to reproduce, clear to explain, and connected to real impact.
          </p>

          <Link className="button button-primary mt-9" to="/projects">
            See the work <FaArrowRight aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          className="panel p-6 sm:p-8"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="flex items-center gap-3 border-b border-white/[0.07] pb-5">
            <FaTerminal className="text-[#73e2a7]" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8d9792]">
              Operating principles
            </p>
          </div>
          <div className="mt-2">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-4 border-b border-white/[0.07] py-5 last:border-0">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#73e2a7]/10 text-[9px] text-[#73e2a7]">
                  <FaCheck aria-hidden="true" />
                </span>
                <p className="text-sm leading-6 text-[#b2bbb6]">{principle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-pad border-y border-white/[0.07] bg-[#0b0e12]/70">
      <div className="page-wrap grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow">Path</p>
          <h2 className="section-title mt-5">Learning in public.</h2>
          <p className="body-copy mt-6">
            Formal study, hands-on training, and independent research all feed
            the same goal: stronger technical judgment.
          </p>
        </div>

        <div className="space-y-2">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              className="timeline-line pb-10"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.42, delay: index * 0.07 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#73e2a7]">
                {item.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#abb4af]">
                {item.organization}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#7f8984]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="page-wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title mt-5">A practical toolkit.</h2>
          <p className="body-copy mt-6">
            Tools change. The underlying skill is knowing what question to ask
            and what evidence would answer it.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.label}
              className="panel p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.06 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#73e2a7]">
                {group.label}
              </p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-[#a9b2ad]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
