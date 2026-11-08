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
        </div>
      </section>
    </>
  );
}
