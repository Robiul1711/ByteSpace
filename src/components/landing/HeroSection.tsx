"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Prevent browser from restoring scrolled down position on reload
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      return () => {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "auto";
        }
      };
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden pt-28 xs:pt-32 pb-0 w-full">
      <div className="w-full relative">
        {/* ================= FULL-WIDTH 3D SHAPES (EDGE POSITIONED WITH FLOATING ANIMATION) ================= */}
        {/* 1. Lime Spring (Top-Left Edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: -30 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.1 },
            scale: { duration: 0.8, delay: 1.1 },
            x: { duration: 0.8, delay: 1.1 },
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            },
            rotate: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            },
          }}
          className="hidden sm:block absolute top-[18%] sm:top-[16%] md:top-[14%] lg:top-[12%] left-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Frame.png"
            alt="Decorative 3D Lime Spring"
            width={280}
            height={280}
            priority
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* 2. White Squiggle (Mid-Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: -20 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, 14, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.25 },
            scale: { duration: 0.8, delay: 1.25 },
            x: { duration: 0.8, delay: 1.25 },
            y: {
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.25,
            },
            rotate: {
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.25,
            },
          }}
          className="hidden md:block absolute top-[44%] sm:top-[42%] left-4 sm:left-8 md:left-14 lg:left-22 xl:left-32 2xl:left-48 w-14 sm:w-20 md:w-28 lg:w-34 xl:w-40 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Frame1.png"
            alt="Decorative 3D White Squiggle"
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* 3. White Donut / Torus (Bottom-Left Edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: -30 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.35 },
            scale: { duration: 0.8, delay: 1.35 },
            x: { duration: 0.8, delay: 1.35 },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.35,
            },
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.35,
            },
          }}
          className="hidden sm:block absolute bottom-0 -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-24 sm:w-36 md:w-52 lg:w-68 xl:w-80 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Cone1.png"
            alt="Decorative 3D White Torus"
            width={340}
            height={340}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* 4. Lime Cylinder (Top-Right Edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -14, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.15 },
            scale: { duration: 0.8, delay: 1.15 },
            x: { duration: 0.8, delay: 1.15 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.15,
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.15,
            },
          }}
          className="hidden sm:block absolute top-[18%] sm:top-[16%] md:top-[14%] lg:top-[12%] -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Cone.png"
            alt="Decorative 3D Lime Cylinder"
            width={280}
            height={280}
            priority
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* 5. White 3D Cone / Pyramid (Mid-Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.3 },
            scale: { duration: 0.8, delay: 1.3 },
            x: { duration: 0.8, delay: 1.3 },
            y: {
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3,
            },
            rotate: {
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3,
            },
          }}
          className="hidden md:block absolute top-[44%] sm:top-[42%] right-4 sm:right-8 md:right-14 lg:right-22 xl:right-28 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-42 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Cone2.png"
            alt="Decorative 3D White Pyramid"
            width={220}
            height={220}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* 6. White Spring (Bottom-Right Edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1.4 },
            scale: { duration: 0.8, delay: 1.4 },
            x: { duration: 0.8, delay: 1.4 },
            y: {
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4,
            },
            rotate: {
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4,
            },
          }}
          className="hidden sm:block absolute bottom-0 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-20 sm:w-30 md:w-42 lg:w-54 xl:w-64 z-10 pointer-events-none"
        >
          <Image
            src="/images/shapes/Frame1.png"
            alt="Decorative 3D White Spring"
            width={260}
            height={260}
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Main Header & Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-4 pt-2 sm:pt-4 z-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-poppins font-semibold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[120%] tracking-[-0.72px]"
          >
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#E5E6E8] font-satoshi font-normal text-xs xs:text-sm sm:text-base md:text-[18px] leading-[160%] max-w-2xl lg:max-w-3xl mx-auto mt-2 sm:mt-4"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSearch}
            className="mt-4 sm:mt-6 md:mt-7 max-w-120 mx-auto bg-white dark:bg-[#0A0E1A]/95 rounded-full p-1.5 pl-4 sm:pl-6 flex items-center justify-between shadow-2xl border border-transparent dark:border-zinc-700/60 transition-all focus-within:ring-2 focus-within:ring-brand-lime"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
              <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-xs sm:text-sm font-normal"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-lime hover:brightness-95 text-black font-semibold text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              Search
            </button>
          </motion.form>
        </div>

        {/* Visual Showcase: Balanced Halfcircle + Student + Floating Badges */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 w-full flex justify-center items-end overflow-visible">
          {/* ================= ANIMATED LIME ARCH BAND (MATCHES DESIGN EXACTLY) ================= */}
          {/* Sweeps clockwise from left-bottom -> top arch -> right-bottom with clean top clearance */}
          <div className="absolute -bottom-1 sm:bottom-0 w-82.5 xs:w-[400px] sm:w-162.5 md:w-205 lg:w-245 xl:w-280 z-0 pointer-events-none flex justify-center">
            <svg
              viewBox="0 0 1200 600"
              className="w-full h-auto overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Crisp Solid Lime Arch Band (No border, clean solid edge) */}
              <motion.path
                d="M 220 600 A 380 380 0 0 1 980 600"
                stroke="#CBFC01"
                strokeWidth="290"
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.2 },
                }}
              />
            </svg>
          </div>

          {/* CENTER STAGE: STUDENT PHOTO + FLOATING BADGES */}
          <div className="relative z-10 w-full max-w-70 xs:max-w-[340px] sm:max-w-105 md:max-w-122.5 lg:max-w-135 xl:max-w-145 flex justify-center items-end">
            {/* Main Student Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 w-full"
            >
              <Image
                src="/images/hero-student.png"
                alt="Student learning on laptop"
                width={580}
                height={620}
                priority
                className="w-full h-auto object-contain relative z-10 block"
              />
            </motion.div>

            {/* FLOATING CARD 1: Happy Students (Bottom-Left of Person) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.05 },
                scale: { duration: 0.6, delay: 1.05 },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.05,
                },
              }}
              className="absolute bottom-[10%] sm:bottom-[12%] -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 z-20 bg-white dark:bg-[#0C101C]/95 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3.5 md:p-4 lg:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.6)] border border-transparent dark:border-zinc-800/80 text-left min-w-31.25 sm:min-w-38.75 md:min-w-46.25 origin-bottom-left"
            >
              <p className="text-[#0A0D14] dark:text-zinc-100 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Happy Students
              </p>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#0A0D14] dark:text-zinc-100">
                  4.5
                </span>
                <span className="text-text-muted dark:text-zinc-400 text-[9px] sm:text-[10px] md:text-xs font-normal">
                  (240)
                </span>
                <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#FFB800] fill-[#FFB800]" />
              </div>

              {/* Student Avatars Stack */}
              <div className="relative h-4.5 sm:h-6 md:h-7.5 w-20 sm:w-28 md:w-36 mt-1 sm:mt-2">
                <Image
                  src="/images/skills/users.png"
                  alt="Happy students avatars"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Learning Progress (Top-Right of Person) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.2 },
                scale: { duration: 0.6, delay: 1.2 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                },
              }}
              className="absolute top-[22%] sm:top-[26%] -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 z-20 bg-white dark:bg-[#0C101C]/95 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3.5 md:p-4 lg:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.6)] border border-transparent dark:border-zinc-800/80 text-left min-w-31.25 sm:min-w-38.75 md:min-w-46.25 lg:min-w-52.5 origin-top-right"
            >
              <p className="text-text-muted dark:text-zinc-400 text-[9px] sm:text-xs md:text-sm font-medium">
                Learning Progress
              </p>
              <p className="text-[#0A0D14] dark:text-zinc-100 font-poppins font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl mt-0.5 sm:mt-1">
                55%
              </p>
              <div className="w-full h-1 sm:h-2 md:h-2.5 bg-surface-light dark:bg-zinc-800 rounded-full overflow-hidden mt-1.5 sm:mt-3">
                <div className="h-full bg-brand-lime rounded-full w-[55%]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
