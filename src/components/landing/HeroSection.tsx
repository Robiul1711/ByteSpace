"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden pt-2 md:pt-4 pb-0">
      <div className="w-full relative">
        
        {/* Main Header & Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-4 pt-2 sm:pt-4">
          <h1 className="text-[#FFF] font-poppins font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[120%] tracking-[-0.72px]">
            Get Access to Hundreds <br />
            Courses Available
          </h1>
          <p className="text-[#E5E6E8] font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[160%] max-w-7xl mx-auto mt-4">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-7 md:mt-8 max-w-[480px] mx-auto bg-white rounded-full p-1.5 pl-6 flex items-center justify-between shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#CBFC01]"
          >
            <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-zinc-800 placeholder:text-zinc-400 text-xs sm:text-sm font-normal"
              />
            </div>
            <button
              type="submit"
              className="bg-[#CBFC01] hover:brightness-95 text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Visual Showcase: Edge 3D Shapes + Halfcircle + Student + Floating Badges */}
        <div className="relative mt-8 sm:mt-12 md:mt-14 w-full flex justify-center items-end min-h-[440px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">

          {/* FLOATING 3D SHAPES - LEFT SIDE (Hugging edge & larger) */}
          {/* 1. Lime Spring (Top-Left Edge) */}
          <div className="absolute top-0 sm:top-2 md:top-4 -left-3  w-24 sm:w-36 md:w-48 lg:w-56 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Frame.png"
              alt="Decorative 3D Lime Spring"
              width={240}
              height={240}
              priority
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* 2. White Squiggle (Mid-Left) */}
          <div className="absolute top-40 sm:top-48 md:top-56 left-8 sm:left-16 md:left-28 lg:left-36 w-12 sm:w-16 md:w-22 lg:w-26 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Frame1.png"
              alt="Decorative 3D White Squiggle"
              width={100}
              height={100}
              className="w-full h-auto drop-shadow-lg"
            />
          </div>

          {/* 3. White Donut / Torus (Bottom-Left Edge) */}
          <div className="absolute -bottom-2 sm:bottom-2 md:bottom-4 -left-4 sm:left-0 md:left-2 lg:left-8 w-28 sm:w-44 md:w-60 lg:w-72 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Cone1.png"
              alt="Decorative 3D White Torus"
              width={300}
              height={300}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* FLOATING 3D SHAPES - RIGHT SIDE (Hugging edge & larger) */}
          {/* 4. Lime Cylinder (Top-Right Edge) */}
          <div className="absolute top-0 sm:top-2 md:top-4 -right-3  w-24 sm:w-36 md:w-48 lg:w-56 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Cone.png"
              alt="Decorative 3D Lime Cylinder"
              width={240}
              height={240}
              priority
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* 5. White 3D Cone / Pyramid (Mid-Right) */}
          <div className="absolute top-40 sm:top-48 md:top-56 right-8 sm:right-16 md:right-28 lg:right-36 w-14 sm:w-20 md:w-28 lg:w-32 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Cone2.png"
              alt="Decorative 3D White Pyramid"
              width={140}
              height={140}
              className="w-full h-auto drop-shadow-lg"
            />
          </div>

          {/* 6. White Spring (Bottom-Right Edge) */}
          <div className="absolute -bottom-2 sm:bottom-2 md:bottom-4 -right-4 sm:right-0 md:right-2 lg:right-8 w-24 sm:w-36 md:w-48 lg:w-56 z-10 pointer-events-none">
            <Image
              src="/images/shapes/Frame2.png"
              alt="Decorative 3D White Spring"
              width={240}
              height={240}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* CENTER STAGE: HALFCIRCLE IMAGE + STUDENT PHOTO */}
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[680px] flex justify-center items-end">
            
            {/* Halfcircle Image exported from Figma */}
            <div className="absolute -bottom-2 sm:bottom-0 w-[320px] sm:w-[460px] md:w-[580px] lg:w-[680px] z-0 pointer-events-none flex justify-center">
              <Image
                src="/images/shapes/halfcircle.png"
                alt="Lime Halfcircle Background"
                width={700}
                height={450}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Student Photo */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[390px] md:max-w-[490px] lg:max-w-[540px]">
              <Image
                src="/images/hero-student.png"
                alt="Student learning on laptop"
                width={540}
                height={580}
                priority
                className="w-full h-auto object-contain relative z-10"
              />
            </div>

            {/* FLOATING CARD 1: UI/UX Design (Top-Left of Person) */}
            <div className="absolute top-[22%] -left-3 sm:left-[0%] md:left-[-3%] lg:left-[-6%] z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)] text-left min-w-[140px] sm:min-w-[170px]">
              <p className="text-zinc-900 font-bold text-xs sm:text-sm">
                UI/UX Design
              </p>
              <p className="text-zinc-400 text-[10px] sm:text-xs font-normal mt-0.5">
                200 Courses &bull; 1000+ Students
              </p>
            </div>

            {/* FLOATING CARD 2: Learning Progress (Top-Right of Person) */}
            <div className="absolute top-[28%] -right-3 sm:right-[0%] md:right-[-3%] lg:right-[-6%] z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)] text-left min-w-[130px] sm:min-w-[160px]">
              <p className="text-zinc-400 text-[10px] sm:text-xs font-medium">
                Learning Progress
              </p>
              <p className="text-zinc-950 font-extrabold text-xl sm:text-2xl md:text-3xl mt-0.5">
                55%
              </p>
              <div className="w-full h-1.5 sm:h-2 bg-zinc-100 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
              </div>
            </div>

            {/* FLOATING CARD 3: Happy Students (Bottom-Left of Person) */}
            <div className="absolute bottom-[10%] -left-4 sm:left-[-2%] md:left-[-6%] lg:left-[-8%] z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)] text-left">
              <p className="text-zinc-900 font-bold text-xs sm:text-sm">
                Happy Students
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs font-semibold text-zinc-900">4.5</span>
                <span className="text-zinc-400 text-[11px]">(240)</span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 ml-0.5" />
              </div>

              {/* Student Avatars Stack */}
              <div className="flex items-center -space-x-1.5 mt-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-blue-500 text-[9px] text-white flex items-center justify-center font-bold">
                  A
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-purple-500 text-[9px] text-white flex items-center justify-center font-bold">
                  B
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">
                  C
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-rose-500 text-[9px] text-white flex items-center justify-center font-bold">
                  D
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-[#CBFC01] text-black text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                  2K+
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
