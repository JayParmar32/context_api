import React from "react";
import { useNavigate } from "react-router";

export default function Home() {

  const navigate = useNavigate();

  const handleClickPage = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Professional Cameraman Services
          </h1>
          <p className="text-lg sm:text-2xl mt-4 max-w-2xl">
            Wedding • Events • Short Films • Music Videos • Birthday Shoot
          </p>
          <button
            onClick={handleClickPage}
            className="mt-6 bg-red-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition"
          >
            Book Now
          </button>
        </div>
      </section>
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              className="w-full h-48 object-cover rounded-lg mb-4"
              src="https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg"
              alt="Wedding Shoot"
            />
            <h3 className="text-xl font-semibold">Wedding Shoot</h3>
            <p className="text-gray-600 mt-2">
              Capture your special moments with cinematic perfection.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              className="w-full h-48 object-cover rounded-lg mb-4"
              src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg"
              alt="Event Coverage"
            />
            <h3 className="text-xl font-semibold">Event Coverage</h3>
            <p className="text-gray-600 mt-2">
              Full HD coverage for parties, events, and corporate programs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              className="w-full h-48 object-cover rounded-lg mb-4"
              src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg"
              alt="Video Shooting"
            />
            <h3 className="text-xl font-semibold">Video Shooting</h3>
            <p className="text-gray-600 mt-2">
              Professional shoots for ads, short films, and music videos.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
