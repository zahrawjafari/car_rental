import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <Link href="/" className="logo">
          <span className="logo-icon">🚘</span>
          <span>CarRental</span>
        </Link>
        <p>Your journey starts with the perfect car.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#cars">Cars</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <span className="copyright">
          © 2026 CarRental. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
