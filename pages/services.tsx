
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Business Website Development",
    description:
      "Establish a professional online presence with a website that communicates your value, builds trust, and helps turn visitors into customers.",
    features: [
      "Business and corporate websites",
      "Landing pages and lead generation",
      "Responsive mobile-friendly design",
      "Website redesign and improvements",
    ],
    icon: "◈",
    color: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "E-commerce Development",
    description:
      "Sell products online with a convenient shopping experience designed around your customers and your business operations.",
    features: [
      "Online store development",
      "Product catalogues and product pages",
      "Order management workflows",
      "Payment and delivery integrations",
    ],
    icon: "◉",
    color: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
  {
    number: "03",
    category: "CUSTOM SOFTWARE",
    title: "Custom Web Applications",
    description:
      "Replace repetitive manual processes with tailored software that helps your team manage information and work more efficiently.",
    features: [
      "Business management systems",
      "Admin dashboards and reporting",
      "Customer and staff management tools",
      "Custom workflows and integrations",
    ],
    icon: "⌘",
    color: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Stanvance Digital Solutions</title>
        <meta
          name="description"
          content="Explore Stanvance services, including business website development, e-commerce solutions, and custom web applications."
        />
      </Head>

      <main className="min-h-screen bg-[#080D1A] text-white">
        <Navbar />

        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-10">
          <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              <span className="h-px w-8 bg-blue-500" />
              Our Services
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The right technology to move your business{" "}
              <span className="text-blue-500">forward.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              From your first business website to a custom software platform,
              we build practical digital solutions that help businesses grow,
              serve customers, and work smarter.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Tell Us About Your Project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What we can build
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Solutions for real business needs.
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Every project starts with understanding your goals. We then
                shape the right solution around your requirements.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/30 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${service.iconBg} ${service.color}`}
                      >
                        {service.icon}
                      </div>

                      <p
                        className={`text-xs font-semibold tracking-[0.18em] ${service.color}`}
                      >
                        {service.category}
                      </p>
                    </div>

                    <p className="mt-8 text-sm text-gray-500">
                      SERVICE {service.number}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 max-w-xl leading-8 text-gray-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0B1220] p-6 sm:p-7">
                    <h3 className="font-semibold">What&apos;s included</h3>

                    <ul className="mt-5 space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                        >
                          <span className="mt-0.5 text-blue-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                      Discuss this service <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s work together
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              Have an idea? Let&apos;s turn it into something valuable.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              Tell us what you want to build, what problem you need to solve,
              or where your business needs support.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Start a Conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

       <Footer />
      </main>
    </>
  );
}
