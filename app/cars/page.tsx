import Link from "next/link";
import Image from "next/image";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600">
              Premium Car Rental
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Find Your
              <span className="mt-2 block text-blue-600">Perfect Ride</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
              Discover the perfect car for your next journey. Enjoy comfortable
              rides, affordable prices, and a simple booking experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#cars"
                className="rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">
                Explore Cars →
              </Link>
              <Link
                href="#about"
                className="rounded-lg border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-900 transition hover:bg-gray-50">
                Learn More
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex flex-col gap-2">
                <strong className="text-2xl font-bold text-gray-900">
                  500+
                </strong>
                <span className="text-xs text-gray-500">Cars Available</span>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="text-2xl font-bold text-gray-900">
                  10k+
                </strong>
                <span className="text-xs text-gray-500">Happy Customers</span>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="text-2xl font-bold text-gray-900">
                  4.9
                </strong>
                <span className="text-xs text-gray-500">Customer Rating</span>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-200 p-8 md:min-h-[420px]">
            <div className="absolute left-6 top-6 flex flex-col gap-2">
              <span className="text-xs text-gray-500">Premium Collection</span>
              <strong className="text-xl font-bold text-gray-900">
                Find your next ride
              </strong>
            </div>
            <Image
              src="/images/bmw.png"
              alt="Premium rental car"
              width={700}
              height={450}
              className="mt-10 h-auto w-full object-contain drop-shadow-xl"/>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs font-semibold text-gray-700">
              <span>Luxury Experience</span>
              <span>Best Price</span>
            </div>
          </div>
        </div>
      </section>
      <SearchBar />
      <section id="cars" className="scroll-mt-24 py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600">
                Our Collection
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Featured Cars
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Choose from our collection of premium vehicles.
              </p>
            </div>
            <Link
              href="/cars"
              className="text-sm font-bold text-blue-600 transition hover:text-blue-700">
              View All Cars →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600">
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
            Make Your Journey Comfortable
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            We make renting a car easy, convenient, and affordable. Choose your
            favorite car and enjoy your journey.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl">🚘</span>
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Premium Cars
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Choose from a wide collection of vehicles.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl">💰</span>
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Affordable Prices
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Enjoy competitive prices for your journey.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-4xl">⚡</span>
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Easy Booking
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Find your car with a simple experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="scroll-mt-24 bg-blue-50 py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready for Your Next Adventure?
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500">
            Find your perfect car and start your journey today.
          </p>
          <Link
            href="#cars"
            className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">
            Browse Cars →
          </Link>
        </div>
      </section>
    </>
  );
}
