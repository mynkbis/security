import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import menuItems from '../utils/menu';
import TopBanner from './TopBanner';
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
    setTimeoutId(id);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="w-full relative">
      <TopBanner />
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
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    onClick={() => {item.path && navigate(`../${item.path}`); }}
                    className={`text-blue-900 font-bold px-2 flex items-center rounded-md p-2 transition-all duration-300 ease-in-out cursor-pointer ${
                      location.pathname === item.path
                        ? 'text-white bg-[#002B4E]'
                        : 'hover:bg-[#002B4E] hover:!text-white'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                  </span>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-[#002B4E] group shadow-lg rounded w-40 text-sm z-10">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          onClick={() => { navigate(`../${subItem.path}`); }}
                          className="px-4 py-2 cursor-pointer group hover:bg-white/30"
                        >
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
                    <div className="flex items-center justify-between">
                      <span
                        onClick={() => { 
                          if (!item.dropdown) {
                            navigate(`../${item.path}`);
                          }
                        }}
                        className={`text-blue-900 font-bold hover:!text-white px-2 flex-grow flex items-center transition-all duration-300 ease-in-out cursor-pointer ${
                          location.pathname === item.path
                            ? 'bg-[#002B4E] text-white'
                            : 'hover:bg-[#002B4E] hover:!text-white'
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.dropdown && (
                        <button 
                          onClick={() => toggleMobileDropdown(index)}
                          className="p-2"
                        >
                          {activeDropdown === index ? 
                            <ChevronUp size={16} className="text-blue-900" /> : 
                            <ChevronDown size={16} className="text-blue-900" />
                          }
                        </button>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === index && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <span
                            key={subIndex}
                            onClick={() => { navigate(`../${subItem.path}`)}}
                            className="block text-blue-700 hover:underline px-2 py-1"
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