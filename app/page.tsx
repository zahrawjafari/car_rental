import Link from "next/link";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tag">Premium Car Rental</span>
            <h1>
              Find Your
              <span> Perfect Ride</span>
            </h1>
            <p>
              Discover the perfect car for your next journey. Enjoy comfortable
              rides, affordable prices, and a simple booking experience.
            </p>
            <div className="hero-actions">
              <Link href="#cars" className="primary-button">
                Explore Cars →
              </Link>
              <Link href="#about" className="secondary-button">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <span>Cars Available</span>
              </div>
              <div>
                <strong>10k+</strong>
                <span>Happy Customers</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-card">
              <div className="hero-image-label">
                <span>Premium Collection</span>
                <strong>Find your next ride</strong>
              </div>
              <div className="hero-car">🚘</div>
              <div className="hero-image-bottom">
                <span>Luxury Experience</span>
                <span>Best Price</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SearchBar />
      <section className="cars-section" id="cars">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-tag">Our Collection</span>
              <h2>Featured Cars</h2>
              <p>Choose from our collection of premium vehicles.</p>
            </div>
            <Link href="#cars" className="view-all">
              View All Cars →
            </Link>
          </div>
          <div className="cars-grid">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container about-content">
          <span className="section-tag">Why Choose Us</span>
          <h2>Make Your Journey Comfortable</h2>
          <p>
            We make renting a car easy, convenient, and affordable. Choose your
            favorite car and enjoy your journey.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <span>🚘</span>
              <h3>Premium Cars</h3>
              <p>Choose from a wide collection of vehicles.</p>
            </div>
            <div className="feature-card">
              <span>💰</span>
              <h3>Affordable Prices</h3>
              <p>Enjoy competitive prices for your journey.</p>
            </div>
            <div className="feature-card">
              <span>⚡</span>
              <h3>Easy Booking</h3>
              <p>Find your car with a simple experience.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section" id="contact">
        <div className="container cta-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Find your perfect car and start your journey today.</p>
          <Link href="#cars" className="primary-button">
            Browse Cars →
          </Link>
        </div>
      </section>
    </>
  );
}
