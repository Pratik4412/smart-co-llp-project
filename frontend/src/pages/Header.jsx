import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuBar } from "../data/text";
import logo from "../assets/main-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-primary-900 backdrop-blur-md shadow-lg"
            : "bg-[rgba(0,0,0,0.7)]"
        }`}
      >
        <div className="container mx-auto py-4 px-5 md:px-10 lg:px-20">
          <div
            className={`flex items-center justify-between rounded-xl transition-all duration-300 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt="Smart & Co. LLP Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10 md:h-16" : "h-12 md:h-14"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {MenuBar.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className={`relative text-base font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-primary-500"
                      : isScrolled
                      ? "text-gray-200 hover:text-primary-500"
                      : "text-gray-300 hover:text-primary-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 rounded-full ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="relative py-3 px-7 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-full overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                  : "text-gray-800 hover:bg-white/20 hover:text-primary-500"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 transform rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg z-50 lg:hidden transform transition-all duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
            <img
              src={logo}
              alt="Logo"
              className="h-10 transform hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-all duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {MenuBar.map((item, i) => (
                <li
                  key={i}
                  className="transform transition-all duration-300"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                  }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3.5 px-5 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-1 ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200/50 space-y-4 bg-gradient-to-t from-gray-50/50 to-transparent">
            <Link
              to="/contact"
              className="block w-full py-3.5 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+919890214990"
              className="flex items-center justify-center gap-3 text-primary-600 font-medium hover:text-primary-700 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 98902 14990
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
