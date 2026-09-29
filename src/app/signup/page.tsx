"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${formData.fullName}!`);
  };

  return (
    <main className="min-h-screen w-full bg-hero-grid text-white flex flex-col justify-between relative overflow-hidden pb-12 transition-colors duration-300">
      {/* Top Header Logo & Theme Toggle */}
      <header className="w-full relative z-50">
        <div className="max-container section-padding-x py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-36 sm:w-40 transition-transform active:scale-95">
              <Image
                src="/logos/Header_Logo.png"
                alt="ByteSpace"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content Area: 2 Columns */}
      <div className="w-full max-container section-padding-x flex-1 flex items-center justify-center py-6 sm:py-8 lg:py-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Graphic */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h1 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-white">
              Sign up and come in
            </h1>
            <p className="font-satoshi font-normal text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mt-3">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>

            {/* Showcase Visual Graphic */}
            <div className="relative w-full max-w-[460px] aspect-[1.05/1] mt-8 lg:mt-10">
              <Image
                src="/images/authLeft.png"
                alt="ByteSpace Learning Platform Visual"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Signup Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white dark:bg-[#0C101C]/95 dark:backdrop-blur-xl text-zinc-900 dark:text-zinc-100 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-transparent dark:border-zinc-800/80 flex flex-col transition-all">
              {/* Header */}
              <span className="font-satoshi font-medium text-sm sm:text-base text-[#003BE2] dark:text-[#CBFC01]">
                Create an Account
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-[38px] leading-[1.15] text-[#0A0D14] dark:text-white mt-1 mb-8">
                Welcome to <br />
                ByteSpace
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="fullName"
                    className="font-satoshi text-xs sm:text-sm font-medium text-[#242528] dark:text-zinc-300 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Jamie Davis"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-zinc-200/90 dark:border-zinc-700/60 bg-white dark:bg-[#141A29] text-sm font-normal text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-[#003BE2] dark:focus:border-[#CBFC01] focus:ring-2 focus:ring-[#003BE2]/10 dark:focus:ring-[#CBFC01]/15 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-satoshi text-xs sm:text-sm font-medium text-[#242528] dark:text-zinc-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="designer@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-zinc-200/90 dark:border-zinc-700/60 bg-white dark:bg-[#141A29] text-sm font-normal text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-[#003BE2] dark:focus:border-[#CBFC01] focus:ring-2 focus:ring-[#003BE2]/10 dark:focus:ring-[#CBFC01]/15 transition-all"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="font-satoshi text-xs sm:text-sm font-medium text-[#242528] dark:text-zinc-300 mb-1.5"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-zinc-200/90 dark:border-zinc-700/60 bg-white dark:bg-[#141A29] text-sm font-normal text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-[#003BE2] dark:focus:border-[#CBFC01] focus:ring-2 focus:ring-[#003BE2]/10 dark:focus:ring-[#CBFC01]/15 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-[#CBFC01] hover:brightness-95 text-black font-semibold text-sm px-8 py-3 rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Continue
                  </button>
                </div>
              </form>

              {/* Bottom Login Link */}
              <div className="mt-10 text-center font-satoshi text-xs sm:text-sm text-[#525866] dark:text-zinc-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#003BE2] dark:text-[#CBFC01] font-semibold hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
