"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white pt-16 md:pt-20 pb-10 border-t border-zinc-100">
      <div className="section-padding-x">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Left Column: Brand & Newsletter (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between max-w-md">
            <div>
              {/* ByteSpace Dark Logo */}
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-8 w-36 sm:w-40">
                  <Image
                    src="/logos/footerlogo.png"
                    alt="ByteSpace"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              {/* Newsletter Title */}
              <p className="font-satoshi text-[14px] leading-[160%] text-[#242528] mb-6">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="flex items-center gap-3 mb-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-zinc-200 rounded-full px-5 py-2.5 font-satoshi text-[14px] text-[#242528] placeholder:text-zinc-400 outline-none focus:border-zinc-400 transition"
                />
                <button
                  type="submit"
                  className="bg-[#CBFC01] hover:brightness-95 text-black font-semibold font-satoshi text-[14px] px-7 py-2.5 rounded-full transition cursor-pointer shadow-sm active:scale-95"
                >
                  Search
                </button>
              </form>

              {/* Disclaimer */}
              <p className="font-satoshi text-[12px] leading-[160%] text-[#242528]">
                By subscribing, you agree to our{" "}
                <Link href="#privacy" className="underline hover:text-black">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Navigation Link Columns (Span 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:pl-12">
            
            {/* Column 1 */}
            <div className="flex flex-col space-y-3.5">
              <Link
                href="#featured-courses"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Featured Courses
              </Link>
              <Link
                href="#featured-categories"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Featured Categories
              </Link>
              <Link
                href="#business"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Business
              </Link>
              <Link
                href="#it"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                IT
              </Link>
              <Link
                href="#design"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3.5">
              <Link
                href="#development"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Development
              </Link>
              <Link
                href="#marketing"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Marketing
              </Link>
              <Link
                href="#photography"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Photography
              </Link>
              <Link
                href="#finance"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Finance
              </Link>
              <Link
                href="#sport"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3.5">
              <Link
                href="#become-creator"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Become a Creator
              </Link>
              <Link
                href="#affiliate"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Affiliate Program
              </Link>
              <Link
                href="#contact"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Contact
              </Link>
              <Link
                href="#help"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                Help
              </Link>
              <Link
                href="#about"
                className="font-satoshi text-[14px] leading-[160%] text-[#242528] hover:text-black transition"
              >
                About
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-[12px] leading-[160%] text-[#242528]">
            &reg; 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="#privacy"
              className="font-satoshi text-[12px] leading-[160%] text-[#242528] hover:text-black transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="font-satoshi text-[12px] leading-[160%] text-[#242528] hover:text-black transition"
            >
              Terms of Service
            </Link>
            <Link
              href="#cookies"
              className="font-satoshi text-[12px] leading-[160%] text-[#242528] hover:text-black transition"
            >
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
