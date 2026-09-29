"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signed in as ${formData.email}!`);
  };

  return (
    <main className="min-h-screen w-full bg-hero-grid text-white flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden">
      {/* Top Header Logo */}
      <div className="w-full max-w-7xl mx-auto mb-8 lg:mb-4">
        <Link href="/" className="inline-block">
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
      </div>

      {/* Main Content Area: 2 Columns */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Graphic */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h1 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-white">
              Sign in with ease
            </h1>
            <p className="font-satoshi font-normal text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mt-3">
              Experience a seamless and efficient sign-in process that grants you
              instant access to a world of knowledge.
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

          {/* Right Column: Login Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white text-zinc-900 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl flex flex-col">
              {/* Header */}
              <span className="font-satoshi font-medium text-sm sm:text-base text-[#003BE2]">
                Sign In
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-[38px] leading-[1.15] text-[#0A0D14] mt-1 mb-8">
                Welcome Back
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-satoshi text-xs sm:text-sm font-medium text-[#242528] mb-1.5"
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
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-zinc-200/90 text-sm font-normal text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="font-satoshi text-xs sm:text-sm font-medium text-[#242528] mb-1.5"
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
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-zinc-200/90 text-sm font-normal text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-[#CBFC01] hover:brightness-95 text-black font-semibold text-sm px-8 py-3 rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="w-full border-t border-zinc-200" />
                <span className="absolute bg-white px-3 text-xs font-satoshi text-zinc-400">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-black font-bold"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                </button>
              </div>

              {/* Bottom Signup Link */}
              <div className="mt-10 text-center font-satoshi text-xs sm:text-sm text-[#525866]">
                New user?{" "}
                <Link
                  href="/signup"
                  className="text-[#003BE2] font-semibold hover:underline"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
