import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation hook
import menuItems from '../utils/Menu';
import TopBanner from './TopBanner';
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const [timeoutId, setTimeoutId] = useState(null); // To store the timeout ID
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle mouse enter event (show dropdown immediately)
  const handleMouseEnter = (index) => {
    // Clear any existing timeout when mouse enters
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveDropdown(index);
  };

  // Handle mouse leave event (start a timeout to hide dropdown after 3 seconds)
  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after 3 seconds
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
    setTimeoutId(id); // Store the timeout ID
  };

  return (
    <div className="w-full relative">
      {/* Top banner */}
      <TopBanner />
      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="w-60 h-auto" src={logo} alt="logo" />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave} // Start the timeout when the mouse leaves
                >
                  <span
                    onClick={() => { navigate(`../${item.path}`); }}
                    className={`text-blue-900 font-bold px-2 flex items-center rounded-md p-2 transition-all duration-300 ease-in-out cursor-pointer ${
                      location.pathname === item.path
                        ? 'text-white bg-[#002B4E]' // Active tab styles based on path
                        : 'hover:bg-[#002B4E] hover:!text-white'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                  </span>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-[#002B4E] group shadow-lg rounded w-40 text-sm z-10">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 cursor-pointer group hover:bg-white/30"
                        >
                          {/* Default text is white, hover changes to blue */}
                          <span className="text-white group font-bold">{subItem.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-blue-900 font-bold hover:!underline px-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <span
                      onClick={() => {}}
                      className={`text-blue-900 font-bold hover:!text-white px-2 flex items-center transition-all duration-300 ease-in-out cursor-pointer ${
                        location.pathname === item.path
                          ? 'bg-[#002B4E] text-white' // Active tab styles based on path
                          : 'hover:bg-[#002B4E] hover:!text-white'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                    </span>
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem, subIndex) => (
                          <span
                            key={subIndex}
                            className="block text-blue-700 hover:underline px-2"
                          >
                            {subItem.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
