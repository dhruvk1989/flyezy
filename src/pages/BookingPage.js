import React, { useState } from "react";
import { locations, flights } from "../dummyData";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";

const BookingPage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleSearch = () => {
    const results = flights.filter(
      (flight) => flight.from === from && flight.to === to
    );
    setFilteredFlights(results);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Header Section */}
      <div
        className="absolute top-0 w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x400/?airplane,sky')",
        }}
      ></div>

      {/* Form Section */}
      <div className="z-10 mt-32 bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Search for Flights
        </h1>

        {/* Form Inputs */}
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              <FaPlaneDeparture className="inline text-blue-500 mr-2" />
              From:
            </label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-4 py-2 border rounded shadow-sm"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              <FaPlaneArrival className="inline text-blue-500 mr-2" />
              To:
            </label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-2 border rounded shadow-sm"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Pickers */}
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              <FaCalendarAlt className="inline text-blue-500 mr-2" />
              Departure Date:
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full px-4 py-2 border rounded shadow-sm"
              placeholderText="Select departure date"
            />
          </div>
          {isRoundTrip && (
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2">
                <FaCalendarAlt className="inline text-blue-500 mr-2" />
                Return Date:
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full px-4 py-2 border rounded shadow-sm"
                placeholderText="Select return date"
              />
            </div>
          )}
        </div>

        {/* Round Trip Checkbox and Passenger Count */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-700 font-medium">
            <input
              type="checkbox"
              checked={isRoundTrip}
              onChange={(e) => setIsRoundTrip(e.target.checked)}
              className="mr-2"
            />
            Round Trip
          </label>
          <div className="flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <select
              value={passengerCount}
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
              className="px-4 py-2 border rounded shadow-sm"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-8 py-3 rounded shadow-lg w-full hover:bg-blue-600 transition"
        >
          Search Flights
        </button>
      </div>

      {/* Airplane Icon Background */}
      <div className="absolute inset-0 bg-airplane-pattern opacity-10"></div>
    </div>
  );
};

export default BookingPage;
