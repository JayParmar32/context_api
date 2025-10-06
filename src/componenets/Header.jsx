// import { NavLink } from "react-router";

// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <h1 className="text-xl font-bold">My Shop</h1>
//         <nav className="flex justify-center-safe gap-6 ">
//           <NavLink
//             to="/"
//             className="border-b-2 border-white font-semibold hover:text-gray-200"
//           >
//             Home
//           </NavLink>
//           <NavLink to="/about" className="border-b-2 border-white font-semibold hover:text-gray-200">
//             About
//           </NavLink>
//           <NavLink to="/contect" className="border-b-2 border-white font-semibold hover:text-gray-200">
//             Contact
//           </NavLink>
//           <NavLink to="/shop" className="border-b-2 border-white font-semibold hover:text-gray-200">
//             Shop
//           </NavLink>
//         </nav>
//         <div className="flex gap-4">
//             <NavLink
//               to="/login"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition"
//             >
//               Login
//             </NavLink>

//             <NavLink
//               to="/register"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition"
//             >
//               Register
//             </NavLink>
//           </div>
//       </div>
//     </header>
//   );
// }

import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Shop</h1>
        <nav className="flex gap-6 items-center">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-200">
            About
          </NavLink>
          <NavLink to="/contect" className="hover:text-gray-200">
            Contact
          </NavLink>
          <NavLink to="/shop" className="hover:text-gray-200">
            Shop
          </NavLink>

          <NavLink
            to="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition"
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
