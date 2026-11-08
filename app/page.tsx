import Link from "next/link";
import Image from "next/image";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";

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
                  className="w-full outline-none text-sm text-gray-600"
                />
              </div>

              <div className="hidden md:block h-10 w-px bg-gray-200"></div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full outline-none text-sm text-gray-600"
                />
              </div>

              <div className="hidden md:block h-10 w-px bg-gray-200"></div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full outline-none text-sm text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
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
              priority
            />
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
              className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
            >
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
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
