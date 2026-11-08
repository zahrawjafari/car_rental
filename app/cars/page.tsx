import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
type Props = {
  params: Promise<{ id: string }>;
};
export default async function CarDetails({ params }: Props) {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);
  if (!car) {
    notFound();
  }
  return (
    <section className="details-section">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <div className="details-grid">
          <div className="details-image">
            <Image src={car.image} alt={car.name} width={900} height={600} />
          </div>
          <div className="details-content">
            <span className="section-tag">{car.category}</span>
            <h1>{car.name}</h1>
            <p>Enjoy a comfortable journey with our {car.brand} vehicle.</p>
            <div className="details-price">
              <strong>${car.price}</strong>
              <span> / day</span>
            </div>
            <div className="details-features">
              <div>
                <span>Seats</span>
                <strong>{car.seats} People</strong>
              </div>
              <div>
                <span>Fuel</span>
                <strong>{car.fuel}</strong>
              </div>
              <div>
                <span>Transmission</span>
                <strong>{car.transmission}</strong>
              </div>
            </div>
            <Link href={`/?car=${car.id}#contact`} className="primary-button">
              Book This Car →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
