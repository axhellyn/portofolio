"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function changeNavbar() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <nav
      className={`bg-white ${
        isScrolled ? "shadow-md" : "shadow-none"
      }  px-6 py-4 sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Widya
        </Link>

        <ul
          className={`md:flex gap-6 items-center ${
            isOpen ? "block mt-4" : "hidden"
          } md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-purple-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-purple-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-purple-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-purple-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
