import { FaArrowUp, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, featured = false }) => (
  <article
    className={`project-card ${featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    style={{ "--project-accent": project.accent }}
  >
    <div className="flex items-start justify-between gap-5">
      <div>
        <span className="project-number">{project.number}</span>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#77817c]">
          {project.type}
        </p>
      </div>
      <a
        className="icon-button shrink-0"
        href={project.repository}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} on GitHub`}
      >
        <FaGithub aria-hidden="true" />
      </a>
    </div>

    <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-[#f2f4ef] sm:text-3xl">
      {project.title}
    </h2>
    <p className="mt-4 text-sm leading-7 text-[#929d97]">
      {project.description}
    </p>

    <div className="mt-6 border-l border-white/10 pl-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#68726d]">
        Why it matters
      </p>
      <p className="mt-2 text-sm leading-6 text-[#bcc4c0]">{project.outcome}</p>
    </div>

    <div className="mt-auto pt-8">
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-5 border-t border-white/[0.07] pt-5">
        <a
          className="inline-flex items-center gap-2 text-sm font-bold text-[#dce2de] transition hover:text-[#73e2a7]"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          Source code <FaArrowUp className="rotate-45 text-[10px]" aria-hidden="true" />
        </a>
        {project.live && (
          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-[#dce2de] transition hover:text-[#73e2a7]"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live project <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
