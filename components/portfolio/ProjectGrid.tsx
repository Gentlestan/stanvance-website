
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Lodge Management System",
    category: "Full-Stack SaaS",
    description:
      "A multi-tenant lodge management platform for managing rooms, guests, reservations, payments, expenses, and financial workflows.",
    technologies: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
    ],
    image: "/images/portfolio/lodge-management.jpg",
    imageAlt: "Lodge Management System dashboard",
    href: "/#contact",
    linkLabel: "Request a Demo",
  },
  {
    title: "StarnTech Gadgets",
    category: "E-commerce",
    description:
      "An online gadget store where customers can explore products and place orders using a payment-on-delivery business model.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/portfolio/starntech.jpg",
    imageAlt: "StarnTech Gadgets online store",
    href: "https://www.starntech.com.ng/gadgets/",
    linkLabel: "Live Preview",
    external: true,
  },
  {
  title: "Church Website",
  category: "Church & Ministry Website",
  description:
    "A welcoming church website designed to share service times, introduce the ministry, publish sermons and announcements, and help visitors connect with the church community.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  image: "/images/portfolio/church-website.jpg",
  imageAlt: "Church website homepage",
  href: "/#contact",
  linkLabel: "Project Details",
},
  {
    title: "Skill Sales Hub",
    category: "Personal Brand Website",
    description:
      "A professional website for a sales strategist and copywriter, showcasing expertise, services, and ways for potential clients to connect.",
    technologies: [
      "Web Design",
      "Responsive Development",
    ],
    image: "/images/portfolio/skill-sales-hub.jpg",
    imageAlt: "Skill Sales Hub personal brand website",
    href: "https://skill-sales-hub.vercel.app/",
    linkLabel: "Live Preview",
    external: true,
  },
];

export default function ProjectGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
