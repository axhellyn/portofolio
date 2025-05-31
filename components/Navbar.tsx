"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      className={` ${
        isScrolled
          ? "backdrop-blur-xs bg-white/20 border-[1px] border-black"
          : ""
      }  bg-white py-2 lg:py-4 fixed top-3 lg:top-5 left-3 lg:left-6 right-3 lg:right-6 z-50 rounded-4xl shadow-sm transition-all ease-in-out duration-300`}
    >
      <div className="w-full px-5 lg:px-10 mx-auto flex justify-between items-center">
        <Link href="/" className="text-md lg:text-xl font-bold">
          Widya
        </Link>

        <ul className={`hidden md:flex gap-6 items-center`}>
          <li>
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger>
            <FiMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="transition-colors ">
                  Home
                </Link>
              </SheetTitle>
              <SheetTitle>
                <Link href="/about" className=" transition-colors">
                  About
                </Link>
              </SheetTitle>
              <SheetTitle>
                <Link href="/projects" className=" transition-colors">
                  Projects
                </Link>
              </SheetTitle>
              <SheetTitle>
                {" "}
                <Link href="/contact" className=" transition-colors">
                  Contact
                </Link>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
