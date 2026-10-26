
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Stanvance | Start a Project</title>
        <meta
          name="description"
          content="Contact Stanvance to discuss your business website, e-commerce platform, or custom software project."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="min-h-screen bg-[#080D1A] text-white">
        <Navbar />

        <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
          <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s talk business
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Have a project in mind?{" "}
              <span className="text-blue-500">
                Let&apos;s build it.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Tell us what your business needs. Whether you need a
              website, an online store, or custom management software,
              Stanvance is ready to explore the right solution with you.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-2xl text-green-400">
                  <span aria-hidden="true">↗</span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Chat with us
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Have a question or want to discuss your project?
                  Send us a message on WhatsApp.
                </p>

                <a
                  href="https://wa.me/2348138035856?text=Hello%20Stanvance%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                  <span aria-hidden="true">@</span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Email us
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Prefer email? Send us your requirements and we can
                  discuss the details of your project.
                </p>

                <a
                  href="mailto:sohazulike1@gmail.com?subject=Stanvance%20Project%20Enquiry"
                  className="mt-7 inline-flex rounded-lg border border-white/15 px-6 py-3 font-semibold transition hover:border-blue-400"
                >
                  Send an Email →
                </a>
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <h2 className="text-2xl font-bold">
                What can we help you build?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                We work on business websites, e-commerce platforms,
                and custom software for industries such as hospitality,
                retail, education, and property management.
              </p>

              <Link
                href="/work"
                className="mt-6 inline-flex font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
