"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rightNavigation = [
    { name: "Tours", href: "/tours" },
    { name: "Meet Your Pilot", href: "/meet-your-pilot" },
    { name: "FAQ", href: "/faq" },
  ];

  const bookNowLink = { name: "Inquire Now", href: "/inquiry" };

  return (
    <header>

      <nav>
        <Link href="/" className="logo">
          <Image
            src="/aviation-expeditions-images/Logo_Yellow.png"
            alt="Aviation Expeditions Logo"
            width={110}
            height={110}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end ml-8">
          {/* Right Navigation Links */}
          <ul className="flex gap-8">
            {rightNavigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <a
            href={bookNowLink.href}
            className="book-now-btn"
          >
            {bookNowLink.name}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pb-6 space-y-4 px-4">
          {rightNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={bookNowLink.href}
            className="book-now-btn block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {bookNowLink.name}
          </a>
        </div>
      )}
    </header>
  );
}
