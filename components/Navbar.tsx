import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-[78px] w-[min(1180px,calc(100%-40px))] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/logo-CF3gF4eH.svg"
            alt="Car Rental"
            className="h-auto w-[160px] object-contain"/>
        </Link>
        <nav className="hidden items-center gap-[30px] text-sm text-gray-600 md:flex">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/#cars" className="transition-colors hover:text-blue-600">
            Cars
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-blue-600">
            My Bookings
          </Link>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search cars"
            className="h-[32px] w-[174px] rounded-2xl border border-gray-300 py-1 pl-3 pr-8 text-sm outline-none focus:border-blue-500"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </div>
        <div className="flex items-center gap-[18px]">
          <Link
            href="/#cars"
            className="hidden text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:block">
            Explore Cars
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-[9px] bg-blue-600 px-[19px] py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 max-md:px-3 max-md:py-[10px] max-md:text-xs">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
