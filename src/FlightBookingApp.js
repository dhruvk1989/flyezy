import React, { useState } from 'react';
import { Search, Plane, Calendar, Users, CreditCard } from 'lucide-react';
import { flightData } from './dummyData';

// Main App Component
function FlightBookingApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const HomePage = () => (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <Plane className="mr-4" /> SkyBooker Airlines
        </h1>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Flight</h2>
          
          <div className="space-y-4">
            <div className="flex items-center border rounded-lg p-2">
              <Search className="mr-2 text-gray-500" />
              <input 
                type="text" 
                placeholder="From" 
                className="w-full outline-none"
                value={searchParams.from}
                onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
              />
            </div>
            
            <div className="flex items-center border rounded-lg p-2">
              <Search className="mr-2 text-gray-500" />
              <input 
                type="text" 
                placeholder="To" 
                className="w-full outline-none"
                value={searchParams.to}
                onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
              />
            </div>
            
            <div className="flex items-center border rounded-lg p-2">
              <Calendar className="mr-2 text-gray-500" />
              <input 
                type="date" 
                className="w-full outline-none"
                value={searchParams.date}
                onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
              />
            </div>
            
            <div className="flex items-center border rounded-lg p-2">
              <Users className="mr-2 text-gray-500" />
              <input 
                type="number" 
                placeholder="Passengers" 
                min="1" 
                className="w-full outline-none"
                value={searchParams.passengers}
                onChange={(e) => setSearchParams({...searchParams, passengers: parseInt(e.target.value)})}
              />
            </div>
            
            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigateTo('search')}
            >
              Search Flights
            </button>
          </div>
        </div>
      </main>
    </div>
  );

  const SearchResultsPage = () => {
    const filteredFlights = flightData.flights.filter(flight => 
      (!searchParams.from || flight.from.toLowerCase().includes(searchParams.from.toLowerCase())) &&
      (!searchParams.to || flight.to.toLowerCase().includes(searchParams.to.toLowerCase()))
    );

    return (
      <div className="min-h-screen bg-blue-50 p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Flights from {searchParams.from} to {searchParams.to}
          </h2>
          
          {filteredFlights.map(flight => (
            <div 
              key={flight.id} 
              className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-xl font-semibold">{flight.airline}</h3>
                <p>{flight.from} → {flight.to}</p>
                <p>{new Date(flight.departure).toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                <button 
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    setSelectedFlight(flight);
                    navigateTo('booking');
                  }}
                >
                  Select Flight
                </button>
              </div>
            </div>
          ))}
          
          <button 
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={() => navigateTo('home')}
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  };

  const BookingPage = () => {
    const [passengerDetails, setPassengerDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });

    const handleBooking = () => {
      alert(`Booking confirmed for ${passengerDetails.firstName} ${passengerDetails.lastName}`);
      navigateTo('confirmation');
    };

    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Booking Details</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{selectedFlight.airline}</h3>
            <p>{selectedFlight.from} → {selectedFlight.to}</p>
            <p>Price: ${selectedFlight.price}</p>
          </div>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full border p-2 rounded-lg"
              value={passengerDetails.firstName}
              onChange={(e) => setPassengerDetails({...passengerDetails, firstName: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full border p-2 rounded-lg"
              value={passengerDetails.lastName}
              onChange={(e) => setPassengerDetails({...passengerDetails, lastName: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border p-2 rounded-lg"
              value={passengerDetails.email}
              onChange={(e) => setPassengerDetails({...passengerDetails, email: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full border p-2 rounded-lg"
              value={passengerDetails.phone}
              onChange={(e) => setPassengerDetails({...passengerDetails, phone: e.target.value})}
            />
            
            <button 
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
              onClick={handleBooking}
            >
              <CreditCard className="mr-2" /> Confirm Booking
            </button>
            
            <button 
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg"
              onClick={() => navigateTo('search')}
            >
              Back to Flights
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ConfirmationPage = () => (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
        <p className="text-xl mb-6">Thank you for choosing SkyBooker Airlines</p>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-semibold">Flight Details</h3>
          <p>{selectedFlight.airline}</p>
          <p>{selectedFlight.from} → {selectedFlight.to}</p>
          <p>Date: {new Date(selectedFlight.departure).toLocaleString()}</p>
        </div>
        <button 
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg"
          onClick={() => navigateTo('home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchResultsPage />}
      {currentPage === 'booking' && <BookingPage />}
      {currentPage === 'confirmation' && <ConfirmationPage />}
    </div>
  );
}

export default FlightBookingApp;