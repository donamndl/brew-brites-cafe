import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/hero-coffee.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-4xl px-6 py-6 rounded-xl bg-black/25">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-100 mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Welcome to Brew & Bites
        </h1>

        <p className="text-2xl font-semibold text-amber-200 mb-2 leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Handcrafted coffee and fresh pastries made with love
        </p>

        <p className="text-xl text-amber-100 italic mb-8 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          A cozy corner where every sip tells a story and every bite feels like home.
        </p>


        <button className="bg-amber-800 hover:bg-amber-900 shadow-xl shadow-black/50 text-white px-8 py-4 rounded-full text-lg transition">
          View Our Menu
        </button>
      </div>
    </section>
  );
}
