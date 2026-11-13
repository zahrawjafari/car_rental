import Link from "next/link";
import {
  CarFront,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-[1180px] px-5">
        {/* Newsletter */}
        <div className="relative -top-8 rounded-2xl bg-blue-600 px-6 py-8 shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready for your next journey?
              </h2>
              <p className="mt-2 text-sm text-blue-100">
                Subscribe to get special offers and the latest updates.
              </p>
            </div>

            <form className="flex w-full max-w-md items-center rounded-xl bg-white p-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-3 py-2 text-sm text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                <CarFront size={25} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Car<span className="text-blue-500">Rental</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Find your perfect ride and enjoy a smooth, comfortable and
              affordable journey with us.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-base font-bold">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["All Cars", "/cars"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex w-fit items-center gap-2 transition hover:text-blue-400"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-base font-bold">Support</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                ["FAQs", "/faq"],
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex w-fit items-center gap-2 transition hover:text-blue-400">
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-base font-bold">Get in Touch</h3>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-blue-500" />
                <span>123 Main Street, New York</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={19} className="shrink-0 text-blue-500" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={19} className="shrink-0 text-blue-500" />
                <span>info@carrental.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-slate-500">
              © 2026 CarRental. All rights reserved.
            </p>

            <p className="text-xs text-slate-500">
              Designed with care for your journey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
