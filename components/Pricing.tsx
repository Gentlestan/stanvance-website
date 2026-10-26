
import Link from "next/link";

const pricingPlans = [
  {
    name: "Landing Page",
    price: "₦50,000",
    description:
      "A focused page for promoting your business, service, or offer.",
  },
  {
    name: "Business Website",
    price: "₦100,000",
    description: "A professional online presence for your business.",
  },
  {
    name: "E-commerce Website",
    price: "₦250,000",
    description:
      "An online store for showcasing and selling your products.",
  },
  {
    name: "Custom Business Software",
    price: "From ₦300,000",
    description:
      "Software tailored to your workflows and business needs.",
  },
  {
    name: "Website Maintenance",
    price: "From ₦10,000/month",
    description:
      "Ongoing website updates and maintenance support.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#080D1A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Transparent Pricing
          </p>

          <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
            Simple starting prices. Solutions built around you.
          </h2>

          <p className="text-base leading-7 text-gray-400 md:text-lg">
            Every business is different. Our prices give you a starting
            point, while your final quote depends on your project&apos;s
            features and requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/50"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {plan.name}
              </h3>

              <p className="mb-4 text-3xl font-bold text-blue-400">
                {plan.price}
              </p>

              <p className="mb-7 min-h-14 leading-6 text-gray-400">
                {plan.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-white transition hover:text-blue-400"
              >
                Discuss Your Project →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm leading-6 text-gray-500">
          Prices are starting estimates. Final quotes depend on project
          scope, features, integrations, and other requirements.
        </p>
      </div>
    </section>
  );
}
