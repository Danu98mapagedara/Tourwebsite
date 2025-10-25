
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
     <div className="fixed top-0 left-0 w-full bg-blue-950 shadow-md flex items-center justify-between  z-50 overflow-hidden">
      {/* Logo */}
      <div className="w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
        {/* <img src="/logo.png" alt="Logo" /> */}
      </div>

      {/* Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden md:flex"
        } flex-col md:flex-row md:gap-12 gap-4 px-6 py-4 md:px-10 md: shadow-lg absolute md:static top-16 left-0 w-full md:w-auto`}
      >
       
        <NavLink
          to="/accommodation"
          className="relative text-white font-medium hover:text-blue-500 transition-colors duration-300
          after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
        Hotels
        </NavLink>
        <NavLink
          to="/rides"
          className="relative text-white font-medium hover:text-blue-500 transition-colors duration-300
          after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
      Vehicles
        </NavLink>
        <NavLink
          to="/yourland"
          className="relative text-white font-medium hover:text-blue-500 transition-colors duration-300
          after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          
        </NavLink>
        <NavLink
          to="/getyourroute"
          className="relative text-white font-medium hover:text-blue-500 transition-colors duration-300
          after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300  text-1xl"
        >
          Get  your  Route
        </NavLink>
        <NavLink
          to="/aboutus"
          className="relative text-white font-medium hover:text-blue-500 transition-colors duration-300
          after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-[-3px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          About Us
        </NavLink>
       
      </div>

      {/* Hamburger */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>
    </div>
  )
}

export default Navbar