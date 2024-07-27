"use client";

import Image from "next/image";

import logo from "../../public/assets/images/logo.svg";
import iconFacebook from "../../public/assets/images/icon-facebook.svg";
import iconYoutube from "../../public/assets/images/icon-youtube.svg";
import iconTwitter from "../../public/assets/images/icon-twitter.svg";
import iconPinterest from "../../public/assets/images/icon-pinterest.svg";
import iconInstagram from "../../public/assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-very-dark-blue text-white py-12">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div className="mb-8 md:mb-0">
          <Image src={logo} alt="Manage" width={146} height={24} />
          <div className="flex space-x-4 mt-8">
            <a href="#">
              <Image src={iconFacebook} alt="Facebook" width={20} height={20} />
            </a>
            <a href="#">
              <Image src={iconYoutube} alt="YouTube" width={20} height={20} />
            </a>
            <a href="#">
              <Image src={iconTwitter} alt="Twitter" width={20} height={20} />
            </a>
            <a href="#">
              <Image
                src={iconPinterest}
                alt="Pinterest"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src={iconInstagram}
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        <nav className="mb-8 md:mb-0">
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a href="/" className="hover:text-bright-red">
                Home
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-bright-red">
                Pricing
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-bright-red">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-bright-red">
                About Us
              </a>
            </li>
            <li>
              <a href="careers" className="hover:text-bright-red">
                Careers
              </a>
            </li>
            <li>
              <a href="community" className="hover:text-bright-red">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bright-red">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Updates in your inbox…"
              className="px-4 py-2 rounded-l-full focus:outline-none text-very-dark-blue"
            />
            <button
              type="submit"
              className="bg-bright-red px-6 py-2 rounded-r-full hover:bg-bright-red/90"
            >
              Go
            </button>
          </form>
          <p className="text-dark-grayish-blue text-sm">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
