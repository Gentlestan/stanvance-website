import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Stanvance | Digital Solutions</title>
        <meta
          name="description"
          content="Stanvance builds modern websites, e-commerce platforms, and custom software to move businesses forward."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#080D1A] text-white">
        <Navbar />

        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                <span className="h-px w-8 bg-blue-500" />
                Digital solutions for ambitious businesses
              </p>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                We build digital experiences that{" "}
                <span className="text-blue-500">move you forward.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              We design and develop professional business websites, e-commerce
              platforms, and custom management software that help businesses
              operate efficiently and grow online.
            </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="contact"
                  className="rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
                >
                  Start a Project <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#work"
                  className="rounded-lg border border-white/15 px-7 py-4 font-semibold transition hover:border-blue-400"
                >
                  Explore Our Work
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Thoughtful design. Reliable development. Real business value.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-blue-950/40 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-gray-400">THE DIGITAL ADVANTAGE</p>
                    <h2 className="mt-2 text-xl font-semibold">
                      Built for what&apos;s next.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-2xl text-blue-400">
                    ↗
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#10182A] p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/15 text-xl text-blue-400">
                        ◈
                      </div>
                      <div>
                        <h3 className="font-semibold">Web Development</h3>
                        <p className="mt-1 text-sm text-gray-400">
                          Fast, modern business websites
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#10182A] p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/15 text-xl text-purple-400">
                        ◉
                      </div>
                      <div>
                        <h3 className="font-semibold">E-commerce Solutions</h3>
                        <p className="mt-1 text-sm text-gray-400">
                          Online stores designed to sell
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#10182A] p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/15 text-xl text-cyan-400">
                        ⌘
                      </div>
                      <div>
                        <h3 className="font-semibold">Custom Software</h3>
                        <p className="mt-1 text-sm text-gray-400">
                          Digital tools built around your business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 -z-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What we do
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Digital solutions designed around your goals.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              We help businesses establish their online presence, sell online,
              and streamline operations with software that solves real problems.
            </p>
          </div>
        </section>

        
      {/* Solutions We Offer */}
      <section id="solutions" className="border-t border-white/10 bg-[#0B1120] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Solutions for your business
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solutions We Offer
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              From managing daily operations to growing your business,
              we build digital solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Supermarket & POS Systems",
                description:
                  "Manage product sales, checkout, receipts, stock levels and daily sales reports.",
              },
              {
                title: "Inventory Management",
                description:
                  "Track stock, suppliers, purchases, stock movements and low-stock alerts.",
              },
              {
                title: "Business Management Apps",
                description:
                  "Manage business operations, staff, customers, expenses and reports in one place.",
              },
              {
                title: "Hotel & Lodge Management",
                description:
                  "Organize rooms, reservations, guest records, payments and financial summaries.",
              },
              {
                title: "Order & Sales Management",
                description:
                  "Track customer orders, payment status, deliveries and sales performance.",
              },
              {
                title: "CRM & Client Management",
                description:
                  "Organize leads, customer records, follow-ups and your sales pipeline.",
              },

              {
                title: "School Management Systems",
                description:
                  "Manage student records, school fees, attendance, results, class schedules and staff in one platform.",
              },
              {
                title: "Real Estate & Property Management",
                description:
                  "Manage properties, units, tenants, rent tracking and maintenance requests.",
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400">
                  ↗
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {solution.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
                >
                  Discuss Your Project ↗
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/#contact"
              className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Tell Us What You Need
            </Link>
          </div>
        </div>
      </section>


        
        <section
          id="work"
          className="border-t border-white/10 px-6 py-20 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Selected projects
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Work that puts ideas into action.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Explore selected projects that demonstrate how we turn business
              ideas into practical digital products, from e-commerce platforms
              to custom management software.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Lodge Management */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-blue-400/40">
                <div className="aspect-[16/10] overflow-hidden bg-[#10182A]">
                  <img
                    src="/images/portfolio/lodge-management.jpg"
                    alt="Lodge Management System preview"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Custom Software
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Lodge Management System
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    A management platform designed to organize reservations,
                    rooms, guests and financial operations.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Discuss a similar project →
                  </Link>
                </div>
              </div>

              {/* StarnTech */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-blue-400/40">
                <div className="aspect-[16/10] overflow-hidden bg-[#10182A]">
                  <img
                    src="/images/portfolio/starntech.jpg"
                    alt="StarnTech Gadgets e-commerce website preview"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    E-commerce
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    StarnTech Gadgets
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    An online gadget store built to showcase products and
                    support online shopping.
                  </p>
                  <a
                    href="https://www.starntech.com.ng/gadgets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Visit Website ↗
                  </a>
                </div>
              </div>

              {/* Skill Sales Hub */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-blue-400/40">
                <div className="aspect-[16/10] overflow-hidden bg-[#10182A]">
                  <img
                    src="/images/portfolio/skill-sales-hub.jpg"
                    alt="Skill Sales Hub website preview"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Digital Platform
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Skill Sales Hub
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    A digital platform project focused on presenting skills
                    and connecting users with online opportunities.
                  </p>
                  <a
                    href="https://skill-sales-hub.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View Live Project ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/work"
                className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>


        <section id="about" className="border-t border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">A practical approach to digital.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              We combine thoughtful design with reliable engineering to create
              digital products that serve real business needs.
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
              Let&apos;s build something valuable.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Tell us what your business needs. Let&apos;s explore how the right
              digital solution can help you move forward.
            </p>
            <a
              href="mailto:hello@stanvance.com"
              className="mt-8 inline-flex rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Discuss Your Project ↗
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
