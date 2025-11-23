import React from "react";
import { NavLink } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

export default function Footer() {
  return (
    <footer
     className="
        mt-12
        bg-gradient-to-r from-blue-900/70 via-indigo-900/80 to-purple-900/70 
        dark:from-black/80 dark:via-gray-900/90 dark:to-gray-800/90
        text-white
        backdrop-blur-xl 
        shadow-inner 
        border-t border-white/10
        pt-12 pb-6
      "
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold drop-shadow-xl text-cyan-300">UniqueStore</h2>
          <p className="text-gray-300 mt-3">
            Best products & professional cameraman services.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-200">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><NavLink to="/" className="hover:text-cyan-300">Home</NavLink></li>
            <li><NavLink to="/shop" className="hover:text-cyan-300">Shop</NavLink></li>
            <li><NavLink to="/details" className="hover:text-cyan-300">Details</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-cyan-300">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-200">Get in Touch</h3>
          <p className="text-gray-300"><IoLocationOutline />Ahmedabad, Gujarat, India</p>
          <p className="text-gray-300"><IoCallOutline />
 +91 98765 43210</p>
          <p className="text-gray-300"><CgMail />
 support@uniqueshop.com</p>
        </div>
      </div>
      <div className="text-center text-gray-700 dark:text-gray-400 mt-10 border-t border-gray-400 dark:border-gray-600 pt-4">
        © 2025 UniqueShop — All Rights Reserved.
      </div>
    </footer>
  );
}