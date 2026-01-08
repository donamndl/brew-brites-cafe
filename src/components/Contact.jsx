import React from 'react';
import { MapPin, Clock, Phone } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="contact" className="py-20 bg-[#FFF9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">
            We’d love to welcome you for a fresh brew and warm moments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Location */}
          <div className="bg-white rounded-2xl p-8 text-center
          shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full
            bg-amber-100 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Location
            </h3>
            <p className="text-gray-600 leading-relaxed">
              123 Coffee Street<br />
              Downtown, City 12345
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-8 text-center
          shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full
            bg-amber-100 flex items-center justify-center">
              <Clock className="w-7 h-7 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Hours
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mon–Fri: 7am – 7pm<br />
              Sat–Sun: 8am – 8pm
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-8 text-center
          shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full
            bg-amber-100 flex items-center justify-center">
              <Phone className="w-7 h-7 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Contact
            </h3>
            <p className="text-gray-600 leading-relaxed">
              (555) 123-4567<br />
              hello@brew&bites.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
