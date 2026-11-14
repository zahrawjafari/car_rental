import Link from "next/link";
import Image from "next/image";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
const testimonials = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I've rented cars from various companies, but the experience with CarRental was exceptional.",
  },
  {
    name: "John Smith",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
  },
  {
    name: "Ava Johnson",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
  },
];
export default function Home() {
  return (
    <>
      <section className="bg-[#f1f5f9] py-16 md:py-24">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Luxury cars on Rent
            </h1>
          </div>
          <div className="mx-auto mt-10 w-full max-w-[800px] rounded-3xl bg-white p-4 md:p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
            <form className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full outline-none text-sm text-gray-600"/>
              </div>
              <div className="hidden md:block h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full outline-none text-sm text-gray-600"/>
              </div>
              <div className="hidden md:block h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full outline-none text-sm text-gray-600"/>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition">
                Search
              </button>
            </form>
          </div>
          <div className="relative mt-10 w-full">
            <Image
              src="/main_car-hpkzbezO.png"
              alt="cars"
              width={1180}
              height={500}
              className="h-auto w-full object-contain"
              priority/>
          </div>
          <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
            <h1 className="font-semibold text-4xl md:text-[40px]">
              Featured Vehicles
            </h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156 text-center">
              Explore our selection of premium vehicles available for your next
              adventure.
            </p>
            <Link
              href="/cars"
              className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer">
              Explore all cars
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
            <div className="flex flex-col items-start gap-4 max-w-xl">
              <h1 className="text-2xl md:text-3xl font-semibold text-white">
                Do You Own a Luxury Car?
              </h1>
              <p className="text-white text-sm md:text-base">
                Monetize your vehicle effortlessly by listing it on CarRental.
                We take care of insurance, driver verification and secure
                payments — so you can earn passive income, stress-free.
              </p>
              <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer text-blue-600">
                List your car
              </button>
            </div>
            <div className="relative mt-8 md:mt-0 w-full max-w-md">
              <Image
                src="/banner_car_image-B9uXTQkB.png"
                alt="benz"
                width={500}
                height={300}
                className="h-auto w-full object-contain"/>
            </div>
          </div>
          <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-16 max-w-[680px]">
                <h2 className="font-semibold text-4xl md:text-[40px] text-gray-900">
                  What Our Customers Say
                </h2>
                <p className="text-sm md:text-base text-gray-500/90 mt-3 leading-7">
                  Discover why discerning travelers choose CarRental for their
                  luxury car rental experience around the world.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-full object-cover"/>
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-5 flex gap-1 text-blue-600"
                      aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="currentColor">
                          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-gray-500">
                      "{item.review}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
