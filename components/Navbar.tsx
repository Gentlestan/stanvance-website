
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          STAN<span className="text-blue-500">VANCE</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link
            href="/services"
            className="transition hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/work"
            className="transition hover:text-blue-400"
          >
            Our Work
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-400"
          >
            About
          </Link>

          <Link 
          className="transition hover:text-blue-400"
          href="/contact"
          >
            Contact
            </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop contact button */}
          <Link
            href="/contact"
            className="hidden rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 md:inline-flex"
          >
            Let's Talk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-50 mx-4 mt-1 rounded-xl border border-white/10 bg-[#0B1120] p-4 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
            >
              Services
            </Link>

            <Link
              href="/work"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
            >
              Our Work
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
