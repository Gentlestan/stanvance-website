
import Link from "next/link";

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
  external?: boolean;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
      {/* Screenshot area — add the real image later */}
     
<div className="aspect-[16/10] overflow-hidden bg-[#111A2B]">
  <img
    src={project.image}
    alt={project.imageAlt}
    className="h-full w-full object-cover"
  />
</div>


      <div className="p-6 sm:p-8">
        <p className="text-sm font-medium text-blue-400">
          {project.category}
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href={project.href}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-blue-400"
          >
            {project.linkLabel}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
