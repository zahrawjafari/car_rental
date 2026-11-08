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
    if (location) params.set("location", location);
    if (pickupDate) params.set("pickup", pickupDate);
    if (returnDate) params.set("return", returnDate);
    router.push(`/cars?${params.toString()}`);
  }
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <div className="search-field">
            <label>Pickup Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}/>
          </div>
          <div className="search-field">
            <label>Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}/>
          </div>
          <div className="search-field">
            <label>Return Date</label>
            <input
              type="date"
              value={returnDate}
              min={pickupDate || undefined}
              onChange={(e) => setReturnDate(e.target.value)}/>
          </div>
          <button
            type="button"
            className="search-button"
            onClick={handleSearch}>
            Search Cars →
          </button>
        </div>
      </div>
    </section>
  );
}
