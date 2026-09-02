import { Link } from "react-router-dom";
import { FaArrowUp, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { profile } from "../data/portfolio";

const Footer = () => {
  const socials = [
    { label: "GitHub", href: profile.github, icon: <FaGithub /> },
    { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn /> },
    { label: "X", href: profile.x, icon: <FaTwitter /> },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#080a0d]">
      <div className="page-wrap py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link className="inline-flex items-center gap-3" to="/" aria-label="Anil Tadvi — home">
              <span className="brand-mark">AT</span>
              <span>
                <span className="block text-sm font-bold text-white">Anil Tadvi</span>
                <span className="mt-0.5 block text-xs text-[#76817b]">
                  Offensive Security Researcher
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#737d78]">
              Building practical security tools and investigating the assumptions
              modern web applications depend on.
            </p>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
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
            <button
              type="button"
              className="icon-button ml-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <FaArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-[11px] text-[#5e6863] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Anil Tadvi. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.1em]">
            Built with intent · Tested with curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
