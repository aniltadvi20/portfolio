import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaShieldAlt,
  FaTwitter,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socials = [
    { label: "GitHub", value: "@aniltadvi20", href: profile.github, icon: <FaGithub /> },
    { label: "LinkedIn", value: "Anil Tadvi", href: profile.linkedin, icon: <FaLinkedinIn /> },
    { label: "X", value: "@AnilTadviSec", href: profile.x, icon: <FaTwitter /> },
  ];

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nReply-to: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <section className="page-wrap pb-16 pt-20 sm:pb-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contact · Professional collaboration</p>
          <h1 className="page-title mt-6">
            Let&apos;s investigate what <span className="text-accent">matters.</span>
          </h1>
          <p className="body-copy mt-8">
            For authorized security assessments, offensive-security roles,
            responsible disclosure, or a thoughtful technical conversation.
          </p>
        </motion.div>
      </section>

      <section className="page-wrap pb-24 sm:pb-32">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.aside
            className="panel flex flex-col p-6 sm:p-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: 0.08 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#73e2a7]/20 bg-[#73e2a7]/8 text-[#73e2a7]">
              <FaEnvelope aria-hidden="true" />
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#69736e]">
              Direct email
            </p>
            <a
              className="mt-2 break-all text-lg font-semibold tracking-[-0.025em] text-white transition hover:text-[#73e2a7]"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <button
              type="button"
              className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-[#aeb7b2] transition hover:text-[#73e2a7]"
              onClick={copyEmail}
            >
              {copied ? <FaCheck className="text-[#73e2a7]" /> : <FaCopy />}
              <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
            </button>

            <div className="my-8 border-t border-white/[0.07]" />

            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.07] px-4 py-3.5 transition hover:border-white/[0.14] hover:bg-white/[0.025]"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-[#84908a] transition group-hover:text-[#73e2a7]">
                    {social.icon}
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#626c67]">
                      {social.label}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-[#c4cbc7]">
                      {social.value}
                    </span>
                  </span>
                  <FaArrowRight className="ml-auto text-[10px] text-[#626c67] transition group-hover:translate-x-1 group-hover:text-[#73e2a7]" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="flex gap-3 border-t border-white/[0.07] pt-6">
                <FaShieldAlt className="mt-0.5 shrink-0 text-[#73e2a7]" aria-hidden="true" />
                <p className="text-xs leading-5 text-[#7f8984]">
                  Security testing requests must include clear authorization and
                  an agreed scope.
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="panel p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: 0.13 }}
          >
            <div className="flex flex-col gap-3 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#73e2a7]">
                  Compose message
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                  Tell me what you&apos;re working on.
                </h2>
              </div>
              <p className="text-xs text-[#6f7974]">Opens your email app</p>
            </div>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-[#aeb7b2]">Name</span>
                  <input
                    className="form-field"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-[#aeb7b2]">Email</span>
                  <input
                    className="form-field"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-[#aeb7b2]">Subject</span>
                <input
                  className="form-field"
                  type="text"
                  name="subject"
                  placeholder="Security assessment, role, or collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-[#aeb7b2]">Message</span>
                <textarea
                  className="form-field min-h-36 resize-y"
                  name="message"
                  placeholder="Share the context, scope, and what a useful outcome looks like."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button className="button button-primary w-full sm:w-auto" type="submit">
                Compose email <FaArrowRight aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
