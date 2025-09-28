import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import menuItems from '../utils/menu';
import TopBanner from './TopBanner';
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDesktopDropdown = (index, e) => {
    e.stopPropagation(); // Prevent the parent click event
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setActiveDropdown(null); // Close any open dropdowns
    }
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem.path);
    setActiveDropdown(null); // Close dropdown
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Check if current route matches item (for highlighting)
  const isActiveRoute = (item) => {
    if (!item.path) return false;
    
    // Exact match for non-dropdown items
    if (!item.dropdown) {
      return location.pathname === item.path;
    }
    
    // For dropdown items, check if current path starts with item path
    return location.pathname === item.path || location.pathname.startsWith(item.path + '/');
  };

  // Close dropdown when clicking outside
  const handleDocumentClick = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="w-full relative">
      <TopBanner />
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 overflow-hidden" onClick={() => { navigate("/") }}>
              <img className="sm:w-60 h-auto cursor-pointer w-40" src={logo} alt="logo" />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative dropdown-container"
                >
             <div className={`flex items-center`}>
                    <span
                      onClick={() => handleItemClick(item)}
                      className={`text-blue-900 font-bold px-2 flex items-center rounded-md p-2 transition-all duration-300 ease-in-out cursor-pointer ${
                        isActiveRoute(item)
                          ? 'text-white bg-[#02278a]'
                          : 'hover:bg-[#02278a] hover:text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <button
                        onClick={(e) => toggleDesktopDropdown(index, e)}
                        className={`ml-1 p-1 rounded transition-all duration-300 ease-in-out `}
                      >
                        <ChevronDown size={16} className={`text-black transition-transform duration-200 cursor-pointer ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-[#02278a] shadow-lg rounded w-48 text-sm z-10 animate-fadeIn">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          onClick={() => handleSubItemClick(subItem)}
                          className={`px-4 py-2 cursor-pointer border-b border-white/10 last:border-b-0 transition-colors duration-200 ${
                            location.pathname === subItem.path
                              ? 'bg-white/20'
                              : 'hover:bg-white/10'
                          }`}
                        >
                          <span className="text-white font-medium">{subItem.name}</span>
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
                className="text-blue-900 font-bold hover:underline px-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white border-t">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-2">
                    <div className="flex items-center justify-between">
                      <span
                        onClick={() => {
                          if (item.path) {
                            navigate(item.path);
                            if (!item.dropdown) {
                              setIsMenuOpen(false);
                            }
                          }
                        }}
                        className={`text-blue-900 font-bold px-3 py-3 flex-grow flex items-center rounded transition-all duration-300 ease-in-out cursor-pointer ${
                          isActiveRoute(item)
                            ? 'bg-[#02278a] text-white'
                            : 'hover:bg-[#02278a] hover:text-white'
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.dropdown && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMobileDropdown(index);
                          }}
                          className={`p-3 rounded transition-colors duration-200 ${
                            activeDropdown === index 
                              ? 'bg-gray-200' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {activeDropdown === index ?
                            <ChevronUp size={18} className="text-blue-900" /> :
                            <ChevronDown size={18} className="text-blue-900" />
                          }
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown Items */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="mt-2 space-y-1 bg-gray-200 rounded-lg animate-slideDown">
                        {item.dropdown.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => {
                              navigate(subItem.path);
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                            className={`block px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                              location.pathname === subItem.path
                                ? 'bg-[#02278a] text-white shadow-sm'
                                : 'text-blue-700 hover:bg-[#02278a] hover:text-white'
                            }`}
                          >
                            <span className="font-medium">{subItem.name}</span>
                          </div>
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