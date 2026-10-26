
const technologies = [
  {
    name: "Next.js",
    category: "Frontend Development",
    description: "Fast, modern websites and web applications.",
  },
  {
    name: "React",
    category: "User Interfaces",
    description: "Interactive and responsive digital experiences.",
  },
  {
    name: "TypeScript",
    category: "Frontend Development",
    description: "Maintainable code for reliable applications.",
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    description: "Clean, responsive, and consistent designs.",
  },
  {
    name: "Python",
    category: "Backend Development",
    description: "Backend logic and business automation.",
  },
  {
    name: "Django REST Framework",
    category: "Backend APIs",
    description: "APIs that power websites and business software.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Structured data storage for business applications.",
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#0B1220] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Technology Stack
          </p>

          <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
            Built with modern technology
          </h2>

          <p className="text-base leading-7 text-gray-400 md:text-lg">
            We use modern tools and technologies to create responsive
            websites, scalable applications, and practical business software.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/50"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-400">
                {technology.category}
              </p>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {technology.name}
              </h3>

              <p className="leading-6 text-gray-400">
                {technology.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
