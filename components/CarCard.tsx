import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
type Props = {
  car: Car;
};
export default function CarCard({ car }: Props) {
  return (
    <article className="car-card">
      <div className="car-image">
        <Image
          src={car.image}
          alt={car.name}
          width={600}
          height={350}
          className="car-photo"
        />
        <span className="car-category">{car.category}</span>
      </div>
      <div className="car-details">
        <div className="car-title">
          <div>
            <span className="car-brand">{car.brand}</span>
            <h3>{car.name}</h3>
          </div>
          <div className="car-price">
            <strong>${car.price}</strong>
            <span>/ day</span>
          </div>
        </div>
        <div className="car-features">
          <span>👥 {car.seats} Seats</span>
          <span>⚙️ {car.transmission}</span>
          <span>⛽ {car.fuel}</span>
        </div>
        <div className="car-footer">
          <Link href={`/cars/${car.id}`} className="details-button">
            View Details
          </Link>
          <Link href={`/cars/${car.id}`} className="rent-button">
            Rent Now →
          </Link>
        </div>
      </div>
    </article>
  );
}
