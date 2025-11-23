import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4 py-12">
      
      <div className="bg-white shadow-2xl p-10 rounded-xl max-w-xl w-full">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Contact Us
        </h1>

        {/* CONTACT FORM */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
