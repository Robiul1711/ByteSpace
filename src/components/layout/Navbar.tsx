"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, ChevronRight, Home, BookOpen, Users } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-0"
        }`}
      >
        <div className="max-container section-padding-x">
          <nav
            className={`w-full flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-[#002FB5]/90 dark:bg-[#060B1E]/90 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.25)] rounded-full px-5 sm:px-7 py-3 border-0"
                : "py-6 bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-7 sm:h-8 w-32 sm:w-40 transition-transform active:scale-95">
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
            <div className="hidden md:flex items-center gap-8 lg:gap-9">
              <Link
                href="/"
                className="text-white text-sm font-medium hover:text-[#CBFC01] transition-colors"
              >
                Home
              </Link>
              <Link
                href="#courses"
                className="text-white/85 text-sm font-medium hover:text-[#CBFC01] transition-colors"
              >
                Courses
              </Link>
              <Link
                href="#creators"
                className="text-white/85 text-sm font-medium hover:text-[#CBFC01] transition-colors"
              >
                Creators
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <Link
                href="/login"
                className="text-white text-sm font-medium hover:text-[#CBFC01] transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="btn-primary text-xs sm:text-sm px-5 py-2 shadow-sm"
              >
                Join Us
              </Link>
              <button
                type="button"
                aria-label="Cart"
                className="text-white hover:text-[#CBFC01] transition-colors p-1 cursor-pointer active:scale-95"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Cart"
                className="text-white hover:text-[#CBFC01] p-1"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white p-1 cursor-pointer active:scale-90 transition-transform"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MODERN MOBILE SLIDE-OUT DRAWER ================= */}
      {/* 1. Backdrop Blur Overlay (Click outside to close) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Slide-out Sidebar Drawer from Right */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-[#0027a0]/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block"
          >
            <div className="relative h-7 w-28">
              <Image
                src="/logos/Header_Logo.png"
                alt="ByteSpace"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-2xl text-white font-medium text-base hover:bg-white/10 active:bg-white/15 transition-all group"
          >
            <span className="flex items-center gap-3">
              <Home className="w-4 h-4 text-[#CBFC01]" />
              Home
            </span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-2xl text-white/90 font-medium text-base hover:bg-white/10 active:bg-white/15 transition-all group"
          >
            <span className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-[#CBFC01]" />
              Courses
            </span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="#creators"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-2xl text-white/90 font-medium text-base hover:bg-white/10 active:bg-white/15 transition-all group"
          >
            <span className="flex items-center gap-3">
              <Users className="w-4 h-4 text-[#CBFC01]" />
              Creators
            </span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bottom Auth Buttons */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 active:scale-98 transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 btn-primary text-sm shadow-lg active:scale-98"
          >
            Join Us
          </Link>
        </div>
      </aside>
    </>
  );
}
