import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function CarDetails({ params }: Props) {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);
  if (!car) {
    notFound();
  }
  return (
    <section className="min-h-screen py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <Link
          href="/cars"
          className="mb-8 inline-flex text-sm font-bold text-blue-600 transition hover:text-blue-700">
          ← Back to Cars
        </Link>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <Image
              src={car.image}
              alt={car.name}
              width={900}
              height={600}
              className="h-auto w-full object-contain"/>
          </div>
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600">
              {car.category}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold text-gray-900">
              {car.name}
            </h1>
            <p className="mt-5 text-sm leading-8 text-gray-500">
              Enjoy a comfortable journey with our {car.brand} vehicle. Choose
              your favorite car and make your next journey comfortable and
              enjoyable.
            </p>
            <div className="mt-7">
              <strong className="text-4xl font-extrabold text-blue-600">
                ${car.price}
              </strong>
              <span className="ml-2 text-sm text-gray-500">/ day</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-4">
                <span className="text-xs text-gray-500">Seats</span>

                <strong className="mt-2 block text-sm font-bold text-gray-900">
                  {car.seats} People
                </strong>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <span className="text-xs text-gray-500">Fuel</span>
                <strong className="mt-2 block text-sm font-bold text-gray-900">
                  {car.fuel}
                </strong>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <span className="text-xs text-gray-500">Transmission</span>
                <strong className="mt-2 block text-sm font-bold text-gray-900">
                  {car.transmission}
                </strong>
              </div>
            </div>
            <Link
              href={`/?car=${car.id}#contact`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">
              Book This Car →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
