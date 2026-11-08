import Link from "next/link";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          <span className="logo-icon">🚘</span>
          <span>CarRental</span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/#cars">Cars</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/#cars" className="login-link">
            Explore Cars
          </Link>
          <Link href="/#cars" className="nav-button">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
