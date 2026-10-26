
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Stanvance | Digital Solutions</title>
        <meta
          name="description"
          content="Learn about Stanvance, a digital solutions agency building professional websites, e-commerce platforms, and custom business software."
        />
      </Head>

      <div className="min-h-screen bg-[#070B14] text-white">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Stanvance
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology that moves
              <span className="block text-blue-400">
                your business forward.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
              We build digital solutions that help businesses establish
              their online presence, serve customers better, and manage
              their operations more effectively.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Start a Project →
              </Link>

              <Link
                href="/work"
                className="rounded-lg border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                We turn business needs into practical digital solutions.
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Stanvance is a digital solutions brand focused on helping
                businesses make better use of technology. We work on
                websites, e-commerce platforms, and custom software
                designed around real business needs.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Our approach is straightforward: understand the problem,
                plan the right solution, and build a product that is
                practical to use and ready to evolve with the business.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our Mission
              </p>

              <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
                Make technology useful, accessible, and valuable to
                businesses.
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                We believe good software should do more than look
                impressive. It should help people accomplish tasks,
                improve customer experiences, and solve everyday
                challenges.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-t border-white/10 bg-[#0B1120] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Digital services built around your goals.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Whether you need to reach more customers online or
                streamline your business operations, we can help you
                identify and build the right digital solution.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  01
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Website Development
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Professional, responsive websites that present your
                  business clearly and help turn visitors into customers.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  02
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  E-commerce Solutions
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Online stores that showcase products and make it easier
                  for customers to browse and place orders.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  03
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Custom Business Software
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Tailored management systems for handling operations,
                  inventory, bookings, sales, and business information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                From idea to digital solution.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                A clear process helps us focus on what matters: your
                goals, your users, and the solution you actually need.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-4xl font-bold text-blue-400">01</p>
                <h3 className="mt-5 text-xl font-semibold">
                  Understand
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  We learn about your business, your challenges, and what
                  you want your digital product to achieve.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-blue-400">02</p>
                <h3 className="mt-5 text-xl font-semibold">
                  Design & Build
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  We develop a solution with attention to usability,
                  functionality, and the needs of your business.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-blue-400">03</p>
                <h3 className="mt-5 text-xl font-semibold">
                  Refine & Improve
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  We work toward a solution that meets the agreed
                  requirements and can be improved as your needs change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-[#0B1120] to-[#0B1120] px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Work Together
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Have an idea for your business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Tell us what you are building, what challenge you want to
              solve, or how you want to improve your business. Let's
              explore the right solution together.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Let's Discuss Your Project →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
