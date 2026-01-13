import React from "react";
import { Coffee } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Coffee className="w-10 h-10 text-amber-700 opacity-80" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-amber-900 mb-6">
          About Us
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-amber-700 mx-auto mb-8 rounded-full"></div>

        {/* Text */}
        <p className="text-gray-700 mb-5 text-lg leading-relaxed">
          Since 2010, Brew & Bites has been serving the finest artisan coffee and
          fresh-baked pastries to our community. We source our beans from
          sustainable farms and bake everything fresh daily.
          Our cozy café is the perfect place to relax, work, or catch up with
          friends over a perfectly crafted cup of coffee.
        </p>
      </div>
    </section>
  );
}