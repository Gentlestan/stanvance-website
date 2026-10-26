
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectGrid from "../components/portfolio/ProjectGrid";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Our Work | Stanvance Digital Solutions</title>
        <meta
          name="description"
          content="Explore websites, e-commerce stores, and full-stack software projects built by Stanvance Digital Solutions."
        />
      </Head>

      <div className="min-h-screen bg-[#080D18] text-white">
        <Navbar />

        <main>
          {/* Page introduction */}
          <section className="px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
            <div className="mx-auto max-w-7xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Work
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Digital products built to{" "}
                <span className="text-blue-400">make an impact.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                From business websites and online stores to full-stack
                applications, we build digital solutions around real business
                needs.
              </p>
            </div>
          </section>

          {/* Portfolio projects */}
          <section className="px-6 pb-24">
            <ProjectGrid />
          </section>

          {/* Contact call to action */}
          <section className="border-t border-white/10 px-6 py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                Let&apos;s discuss how the right website or software solution
                can help your business move forward.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex rounded-full bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
