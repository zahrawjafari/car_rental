import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] text-[#172033]">
      <section className="mx-auto max-w-[1180px] px-5 pt-20 pb-40">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Never Miss a Deal!
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Subscribe to get the latest offers, new arrivals, and exclusive
            discounts
          </p>
          <form className="mt-10 flex w-full items-center rounded-lg border border-gray-200 bg-white p-1.5">
            <input
              type="email"
              placeholder="Enter your email id"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:px-9"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="mx-auto max-w-[1180px] px-5 pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-14">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo-CF3gF4eH.svg"
                alt="CarRental"
                width={180}
                height={45}
                className="h-10 w-auto object-contain"/>
            </Link>
            <p className="mt-4 max-w-[320px] text-sm leading-6 text-gray-500">
              Premium car rental service with a wide selection of luxury and
              everyday vehicles for all your driving needs.
            </p>
            <div className="mt-5 flex items-center gap-4 text-gray-500">
              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1"
                    fill="currentColor"
                    stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition hover:text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor">
                  <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.6 1 4 4 0 0 0-6.9 3.7 11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.7.2-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3a11.3 11.3 0 0 0 17.4-9.6v-.5a8 8 0 0 0 2.6-2.3Z" />
                </svg>
              </a>
              <a
                href="mailto:info@example.com"
                aria-label="Email"
                className="transition hover:text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/" className="transition hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="transition hover:text-blue-600">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/list-your-car"
                  className="transition hover:text-blue-600">
                  List Your Car
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-blue-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/help" className="transition hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="transition hover:text-blue-600">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="transition hover:text-blue-600">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="transition hover:text-blue-600">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-400">
            © 2026 Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <Link href="/privacy" className="transition hover:text-blue-600">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-blue-600">
              Terms
            </Link>
            <Link href="/cookies" className="transition hover:text-blue-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
