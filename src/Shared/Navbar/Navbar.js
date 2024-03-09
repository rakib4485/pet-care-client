import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = <React.Fragment>
    <Link to="/" className="text-white">
      Home
    </Link>
    <Link to="/about" className="text-white">
      About
    </Link>
    <Link to="/services" className="text-white">
      Services
    </Link>
    <Link to="/contact" className="text-white">
      Contact
    </Link>
  </React.Fragment>
  return (
    <div>

      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="" className="text-white font-bold text-xl">
              MyWebsite
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems}
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 fixed inset-0 z-50">
            <div className="flex justify-end h-full items-center">
              <div className="bg-gray-800 w-3/4 h-full">
                <div className="flex flex-col justify-center items-start h-full space-y-4">
                  {menuItems}
                </div>
              </div>
              <div
                className="bg-black opacity-50 w-full h-full cursor-pointer"
                onClick={toggleMenu}
              ></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComponent;