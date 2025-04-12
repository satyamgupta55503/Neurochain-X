"use client";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  "Home",
  "Dashboard",
  "AI Smart Contracts",
  "Quantum Wallet",
  "Metaverse & NFT",
  "Governance",
  "Yield Farming",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="text-cyan-500 px-6 py-4  fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold hover:text-[#00F5D4]">
          NeuroChain X
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-[#00F5D4] hover:font-bold"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="transition-opacity duration-200"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col mt-4 space-y-3 bg-gray-800 p-4 rounded-lg transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block text-white py-2 px-4 hover:bg-cyan-600 rounded"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
