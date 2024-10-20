import React, { useState } from "react";
import logo from "../assets/CoinMaster.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon

const AfterLoginNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropIcon, setDropIcon] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropIcon(!dropIcon);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="CoinMaster Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CoinMaster
          </span>
        </Link>
        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="block w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <FaSearch className="absolute left-2 top-2 text-gray-400" />
          </div>
          
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Features
                {dropIcon ? (
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 top-9"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 5 4-4 4 4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 top-9"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                )}
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute top-full left-50 z-10 ${
                  dropdownOpen ? "block" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="/studylearn" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Study and Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/games" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/calculators" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Calculators
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/askhere" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Ask Here
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/budgetplanner" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Plan Your Budget
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/podcasts" // Change to the appropriate route
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Podcasts
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/contact" // Change to the appropriate route for Contact Us
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faqs" // Change to the appropriate route for FAQs
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AfterLoginNav;
