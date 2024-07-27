"use client";
import { useState } from "react";
import Image from "next/image";

import logo from "../../public/assets/images/logo.svg";
import iconHamburger from "../../public/assets/images/icon-hamburger.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <div className="w-40">
          <Image src={logo} alt="Manage" width={146} height={24} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Community
              </a>
            </li>
          </ul>
        </nav>
        <button className="hidden md:block bg-bright-red text-white px-8 py-3 rounded-full hover:bg-bright-red/90">
          Get Started
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={iconHamburger} alt="Menu" width={25} height={18} />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-8">
          <ul className="flex flex-col items-center space-y-6 bg-white py-8 rounded-lg shadow-lg">
            <li>
              <a
                href="/pricing"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="text-dark-blue hover:text-dark-grayish-blue"
              >
                Community
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
