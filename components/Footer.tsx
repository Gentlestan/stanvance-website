
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            STAN<span className="text-blue-500">VANCE</span>
          </Link>

          <p className="mt-2 text-sm text-gray-500">
            Digital Solutions
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <Link href="/services" className="transition hover:text-blue-400">
            Services
          </Link>

          <Link href="/#work" className="transition hover:text-blue-400">
            Our Work
          </Link>

          <Link href="/#contact" className="transition hover:text-blue-400">
            Contact
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Stanvance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
