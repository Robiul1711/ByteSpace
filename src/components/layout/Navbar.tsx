"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      <nav className="max-container section-padding-x py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-36 sm:w-40">
            <Image
              src="/logos/Header_Logo.png"
              alt="ByteSpace"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-9">
          <Link
            href="/"
            className="text-white text-sm font-medium hover:text-[#CBFC01] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            Creators
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/login"
            className="text-white text-sm font-medium hover:text-[#CBFC01] transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-white text-sm font-medium hover:text-[#CBFC01] transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="text-white hover:text-[#CBFC01] transition-colors p-1 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Cart"
            className="text-white hover:text-[#CBFC01] p-1"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#002FB5] px-6 py-6 space-y-4 border-t border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/80 text-base font-medium"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/80 text-base font-medium"
          >
            Creators
          </Link>
          <div className="pt-3 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-white/40 text-white font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#CBFC01] text-black font-semibold"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
