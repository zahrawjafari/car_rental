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
    <section className="min-h-screen py-20">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mb-10">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600">
            Our Collection
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Available Cars
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            {filteredCars.length} cars found
          </p>
        </div>
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white py-20 text-center">
            <h2 className="text-xl font-bold text-gray-900">No cars found</h2>

            <p className="mt-3 text-sm text-gray-500">
              Try searching for another car.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
