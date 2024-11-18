import React, { useState } from 'react';
import { Search, Plane, Calendar, Users, MapPin, Menu, User } from 'lucide-react';

const FlightBookingLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFromSearchOpen, setIsFromSearchOpen] = useState(false);
  const [isToSearchOpen, setIsToSearchOpen] = useState(false);

  return (
    // Outer container with background
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      {/* Inner container with content */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg min-h-[calc(100vh-2rem)]">
        {/* Top Bar */}
        <div className="border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Plane className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">SkyBooker</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Flights</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Hotels</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Car Rental</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Deals</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#" className="block py-2 text-gray-600">Flights</a>
              <a href="#" className="block py-2 text-gray-600">Hotels</a>
              <a href="#" className="block py-2 text-gray-600">Car Rental</a>
              <a href="#" className="block py-2 text-gray-600">Deals</a>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="px-6 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Find Your Next Adventure
            </h1>
            <p className="text-lg text-blue-700">
              Search flights to destinations worldwide
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="flex items-center border rounded-lg p-3 bg-white">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <input
                    type="text"
                    placeholder="From where?"
                    className="w-full focus:outline-none"
                    onFocus={() => setIsFromSearchOpen(true)}
                    onBlur={() => setIsFromSearchOpen(false)}
                  />
                </div>
                <div className={`${isFromSearchOpen ? 'relative' : 'hidden'} mt-2 bg-white text-blue-600 rounded-lg shadow-lg p-2`}>
                  <ul>
                    <li >Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center border rounded-lg p-3 bg-white">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <input
                    type="text"
                    placeholder="To where?"
                    className="w-full focus:outline-none"
                    onFocus={() => setIsToSearchOpen(true)}
                    onBlur={() => setIsToSearchOpen(false)}
                  />
                </div>
                <div className={`${isToSearchOpen ? 'relative' : 'hidden'} mt-2 text-blue-600 bg-white rounded-lg shadow-lg p-2`}>
                  <ul>
                    <li >Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center border rounded-lg p-3 bg-white">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <input
                    type="date"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center border rounded-lg p-3 bg-white">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <select className="w-full focus:outline-none">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4+ Passengers</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4">
            {['Best Deals', 'Last Minute', 'Popular Routes', 'Travel Guide'].map((item) => (
              <div 
                key={item}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 cursor-pointer"
              >
                <h3 className="font-medium text-gray-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2024 SkyBooker. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600">Terms</a>
              <a href="#" className="hover:text-blue-600">Privacy</a>
              <a href="#" className="hover:text-blue-600">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingLayout;