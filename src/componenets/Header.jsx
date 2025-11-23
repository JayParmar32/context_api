import { NavLink } from "react-router";

export default function Header() {
  return (
    <header
      className="
        bg-gradient-to-r 
        from-cyan-500/60 via-blue-600/60 to-purple-600/60
        dark:from-gray-900/80 dark:via-gray-800/80 dark:to-black/80
        backdrop-blur-xl 
        shadow-xl 
        border-b border-white/10
        text-white
        sticky top-0 z-50
      "
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <h1 className="
          text-3xl font-extrabold tracking-wide 
          bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 
          text-transparent bg-clip-text
          drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
        ">
          UniqueStore
        </h1>

        <nav className="flex gap-6 items-center text-lg font-medium">

          <NavLink 
            to="/" 
            className="hover:text-cyan-300 transition duration-300 hover:scale-110"
          >
            Home
          </NavLink>

          <NavLink 
            to="/shop" 
            className="hover:text-cyan-300 transition duration-300 hover:scale-110"
          >
            Shop
          </NavLink>

          <NavLink 
            to="/details" 
            className="hover:text-cyan-300 transition duration-300 hover:scale-110"
          >
            Details
          </NavLink>

          <NavLink 
            to="/contact" 
            className="hover:text-cyan-300 transition duration-300 hover:scale-110"
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className="
              px-4 py-2 
              rounded-xl 
              bg-white/20 
              hover:bg-white/30 
              dark:bg-white/10 dark:hover:bg-white/20
              transition duration-300
              shadow-lg backdrop-blur-xl
            "
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="
              px-4 py-2 
              rounded-xl 
              bg-white/20 
              hover:bg-white/30 
              dark:bg-white/10 dark:hover:bg-white/20
              transition duration-300
              shadow-lg backdrop-blur-xl
            "
          >
            Register
          </NavLink>

        </nav>
      </div>
    </header>
  );
} 