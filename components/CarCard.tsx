import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
type Props = {
  car: Car;
};
export default function CarCard({ car }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[210px] bg-gray-50 p-4">
        <Image
          src={car.image}
          alt={car.name}
          width={600}
          height={350}
          className="h-full w-full object-contain"/>
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
          {car.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs text-gray-500">{car.brand}</span>
            <h3 className="mt-1 text-lg font-bold text-gray-900">{car.name}</h3>
          </div>
          <div className="flex flex-col items-end">
            <strong className="text-xl font-bold text-blue-600">
              ${car.price}
            </strong>
            <span className="text-xs text-gray-500">/ day</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 border-y border-gray-200 py-4 text-xs text-gray-500">
          <span>👥 {car.seats} Seats</span>
          <span>⚙️ {car.transmission}</span>
          <span>⛽ {car.fuel}</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/cars/${car.id}`}
            className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-3 text-xs font-bold text-gray-900 transition hover:bg-gray-50">
            View Details
          </Link>
          <Link
            href={`/cars/${car.id}`}
            className="flex items-center justify-center rounded-lg bg-blue-600 px-3 py-3 text-xs font-bold text-white transition hover:bg-blue-700">
            Rent Now →
          </Link>
        </div>
      </div>
    </article>
  );
}
