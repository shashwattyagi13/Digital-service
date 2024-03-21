"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
// import digitallogo from "../../assets/logo/digitalservice"
import {
  SpeakerWaveIcon,
  // CurrencyDollarIcon,
  // ChartBarIcon,
  // ComputerDesktopIcon,
  // RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from 'framer-motion'

const products = [
  {
    name: "Digital Marketing",
    description: "Maximizing online presence through strategic promotion.",
    href: "/services/digital-marketing",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Website Optimization",
    description: "Maximizing website performance for optimal results.",
    href: "/services/website-optimization",
    icon: CommandLineIcon,
  },
  {
    name: "Web Development",
    description: "Creating dynamic websites with coding expertise.",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
];
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleHover = () => {
    setToggle(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 ${
        segment === null ? "bg-[#15160e]" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={image.logo} alt='company logo' width={150}
              height={70}/>
          </Link>
        </div>

        <div
          className={`hidden md:flex justify-center items-center gap-0 lg:gap-7 ${
            segment === null ? "text-[#eeeeee]" : "text-gray-900 "
          }`}
        >
        <motion.div whileHover={{scale: 1.1}}>
          <Link
            href="/"
            className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"} ${
              segment === null ? "active-white" : ""
            }`}
            onClick={() => setToggle(false)}
          >
            Home
          </Link>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}}>
          <Link
            href="/about"
            className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"} ${
              segment === "about" ? "active" : ""
            }`}
            onClick={() => setToggle(false)}
          >
            About Us
          </Link>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}}>
          <button
            className={`px-3 py-2 text-sm flex items-center ${segment === null ? "navlink-white" : "navlink"}`}
            onClick={() => setToggle(!toggle)}
            onMouseEnter={handleHover}
          >
            Our Services
            <ChevronDownIcon
              className={`h-5 w-5 flex-none ${toggle ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}}>
          <Link
            href="/portfolio"
            className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"} ${
              segment === "portfolio" ? "active" : ""
            }`}
            onClick={() => setToggle(false)}
          >
            Portfolio
          </Link>
          </motion.div>

          <motion.div whileHover={{scale: 1.1}}>
          <Link
            href="/contact"
            className={`px-3 py-2 text-sm ${segment === null ? "navlink-white" : "navlink"} ${
              segment === "contact" ? "active" : ""
            }`}
            onClick={() => setToggle(false)}
          >
            Contact Us
          </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 justify-end">
          <a href="tel:+919917680000" className="navbar-btn shadow-lg">
            Call Us
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-99 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
        }`}
      >
        {products.map((item) => {
          return (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <Link
                  href={item.href}
                  className="block font-semibold text-gray-900"
                  onClick={() => setToggle(false)}
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
