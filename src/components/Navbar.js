import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#597DAF] to-[#123953] p-4 flex items-center justify-between relative shadow-lg">
   <div className="px-4 md:px-6 py-2 md:py-3 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.location.href = "/"}>
  <span className="text-2xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-blue-400 to-gray-300 text-transparent bg-clip-text drop-shadow-md">
    JashCorporation
  </span>
</div>
  
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 md:space-x-12">
        <a href="#" className="text-white font-semibold text-base md:text-lg hover:text-gray-300" onClick={(e) => { e.preventDefault(); scrollToSection("hero-section"); }}>Home</a>
        <a href="#" className="text-white font-semibold text-base md:text-lg hover:text-gray-300" onClick={(e) => { e.preventDefault(); scrollToSection("about-section"); }}>About Us</a>
        <a href="#" className="text-white font-semibold text-base md:text-lg hover:text-gray-300" onClick={(e) => { e.preventDefault(); scrollToSection("products-section"); }}>Products</a>
        
        {/* Contact Us - Aligned in the same line */}
        <a href="#" 
           className="text-white font-semibold text-base md:text-lg bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition-all" 
           onClick={(e) => { e.preventDefault(); scrollToSection("contact-section"); }}>
          Contact Us
        </a>
      </div>
  
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
  
      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-gradient-to-r from-[#597DAF] to-[#123953] flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-50 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}>
        <a href="#" className="text-white font-semibold text-lg" onClick={() => scrollToSection("hero-section")}>Home</a>
        <a href="#" className="text-white font-semibold text-lg" onClick={() => scrollToSection("about-section")}>About Us</a>
        <a href="#" className="text-white font-semibold text-lg" onClick={() => scrollToSection("products-section")}>Products</a>
        <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-lg hover:bg-blue-800" onClick={() => scrollToSection("contact-section")}>Contact Us</a>
      </div>
    </nav>
  );
}
