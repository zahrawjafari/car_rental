
"use client";

import { useSearchParams } from "next/navigation";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function CarsPage() {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") || "";

  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(location.toLowerCase()) ||
      car.brand.toLowerCase().includes(location.toLowerCase()) ||
      car.category.toLowerCase().includes(location.toLowerCase())
    );
  });

  return (
    <section className="cars-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-tag">
              Our Collection
            </span>

            <h2>Available Cars</h2>

            <p>
              {filteredCars.length} cars found
            </p>
          </div>
        </div>

        {filteredCars.length > 0 ? (
          <div className="cars-grid">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </section>
  );
}
