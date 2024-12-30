import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-10">
      {/* Footer Content */}
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Brand Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-300">
              MyBlog<span className="text-white">.</span>
            </h2>
            <p className="text-gray-300 mt-2 max-w-xs">
              Sharing insights, stories, and ideas with the world. Stay inspired with our articles and content.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-indigo-300">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-300 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-300 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-300">Contact Us</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  Email:{" "}
                  <Link
                    href="mailto:info@myblog.com"
                    className="hover:text-blue-300 transition"
                  >
                    info@myblog.com
                  </Link>
                </li>
                <li>
                  Phone:{" "}
                  <Link
                    href="tel:+123456789"
                    className="hover:text-blue-300 transition"
                  >
                    +123 456 789
                  </Link>
                </li>
                <li className="text-gray-300">Address: 123 Blog Street, BlogCity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <IoLogoVercel size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
