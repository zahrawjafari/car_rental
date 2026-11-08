"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  function handleSearch() {
    const params = new URLSearchParams();
    if (location) {
      params.set("location", location);
    }
    if (pickupDate) {
      params.set("pickup", pickupDate);
    }
    if (returnDate) {
      params.set("return", returnDate);
    }
    router.push(`/cars?${params.toString()}`);
  }
  return (
    <section className="relative z-10 -mt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_auto]">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-900">
              Pickup Location
            </label>

            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-900">
              Pickup Date
            </label>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) => {
                setPickupDate(e.target.value);

                if (returnDate && e.target.value > returnDate) {
                  setReturnDate("");
                }
              }}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-900">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              min={pickupDate || undefined}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-blue-600"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="flex min-h-[45px] items-center justify-center self-end rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Search Cars →
          </button>
        </div>
      </div>
    </section>
  );
}
