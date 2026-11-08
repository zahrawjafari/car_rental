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
            About
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-[18px]">
          <Link
            href="/#cars"
            className="hidden text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:block">
            Explore Cars
          </Link>
          <Link
            href="/#cars"
            className="inline-flex items-center justify-center rounded-[9px] bg-blue-600 px-[19px] py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 max-md:px-3 max-md:py-[10px] max-md:text-xs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
