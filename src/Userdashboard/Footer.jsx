import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 shadow-2xl dark:bg-dark-default dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Alvinjr101</h2>
          <p className="text-orange-400 mt-2">Check out our recipes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-center md:text-left">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold">Home</li>
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-400">Services</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </nav>
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold">Clients</li>
              <li><a href="#" className="hover:text-orange-400">Team</a></li>
              <li><a href="#" className="hover:text-orange-400">Career</a></li>
              <li><a href="#" className="hover:text-orange-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-orange-400">Journal</a></li>
            </ul>
          </nav>
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold">Privacy Policy</li>
              <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500">Partners</a></li>
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start space-x-6">
          <a href="https://facebook.com" aria-label="Facebook" className="text-orange-400 hover:text-blue-500 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://x.com" aria-label="Twitter" className="text-orange-400 hover:text-blue-400 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-orange-400 hover:text-blue-600 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-orange-500 hover:text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com" aria-label="TikTok" className="text-orange-400 hover:text-black text-2xl">
            <FaTiktok />
          </a>
        </div>

        {/* Contact Button */}
        <div className="mt-6 text-center md:text-left">
          <a href="contact2.html" className="inline-block bg-orange-400 hover:bg-orange-800 text-white font-semibold py-2 px-6 rounded-lg transition">
            Contact Us
          </a>
        </div>

    
        <div className="mt-10 text-center text-gray-600 text-sm dark:text-gray-100">
          <p>&copy; 2025 master101. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
