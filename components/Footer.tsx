import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-col items-center gap-6">
        <Link href="/" className="flex items-center">
          <img
            src="/logo-CF3gF4eH.svg"
            alt="Car Rental"
            className="h-auto w-[160px] object-contain"
          />
        </Link>
        <p className="text-center text-sm text-gray-400">
          Your journey starts with the perfect car.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="transition hover:text-blue-400">
            Home
          </Link>
          <Link href="/#cars" className="transition hover:text-blue-400">
            Cars
          </Link>
          <Link href="/#about" className="transition hover:text-blue-400">
            About
          </Link>
          <Link href="/#contact" className="transition hover:text-blue-400">
            Contact
          </Link>
        </div>
        <span className="text-xs text-gray-400">
          © 2026 CarRental. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
