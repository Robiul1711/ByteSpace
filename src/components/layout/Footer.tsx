"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

// 3 Navigation Columns
const footerLinkColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "#featured-courses" },
    { label: "Featured Categories", href: "#featured-categories" },
    { label: "Business", href: "#business" },
    { label: "IT", href: "#it" },
    { label: "Design", href: "#design" },
  ],
  [
    { label: "Development", href: "#development" },
    { label: "Marketing", href: "#marketing" },
    { label: "Photography", href: "#photography" },
    { label: "Finance", href: "#finance" },
    { label: "Sport", href: "#sport" },
  ],
  [
    { label: "Become a Creator", href: "#become-creator" },
    { label: "Affiliate Program", href: "#affiliate" },
    { label: "Contact", href: "#contact" },
    { label: "Help", href: "#help" },
    { label: "About", href: "#about" },
  ],
];

// Bottom bar legal links
const footerBottomLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookies Settings", href: "#cookies" },
];

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
    <footer className="w-full bg-white dark:bg-[#05070B] pt-16 md:pt-20 pb-10 border-t border-zinc-100 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-container section-padding-x">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Left Column: Brand & Newsletter (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between max-w-md">
            <div>
              {/* ByteSpace Logo: Light Mode vs Dark Mode */}
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-8 w-36 sm:w-40">
                  {/* Light Mode Logo */}
                  <Image
                    src="/logos/footerlogo.png"
                    alt="ByteSpace"
                    fill
                    className="object-contain object-left dark:hidden"
                  />
                  {/* Dark Mode Logo (Navbar logo) */}
                  <Image
                    src="/logos/Header_Logo.png"
                    alt="ByteSpace"
                    fill
                    className="object-contain object-left hidden dark:block"
                  />
                </div>
              </Link>

              {/* Newsletter Title */}
              <p className="font-satoshi text-[14px] leading-[160%] text-text-dark dark:text-zinc-300 mb-6">
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
                  className="flex-1 bg-white dark:bg-dark-surface border border-zinc-200 dark:border-zinc-700/60 rounded-full px-5 py-2.5 font-satoshi text-[14px] text-text-dark dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition"
                />
                <button
                  type="submit"
                  className="bg-brand-lime hover:brightness-95 text-black font-semibold font-satoshi text-[14px] px-7 py-2.5 rounded-full transition cursor-pointer shadow-sm active:scale-95 shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Disclaimer */}
              <p className="font-satoshi text-[12px] leading-[160%] text-text-muted dark:text-zinc-400">
                By subscribing, you agree to our{" "}
                <Link href="#privacy" className="underline hover:text-black dark:hover:text-white transition">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Navigation Link Columns (Span 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:pl-12">
            {footerLinkColumns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col space-y-3.5">
                {col.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="font-satoshi text-[14px] leading-[160%] text-text-dark dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-[12px] leading-[160%] text-text-muted dark:text-zinc-500">
            &reg; 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            {footerBottomLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="font-satoshi text-[12px] leading-[160%] text-text-muted dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
