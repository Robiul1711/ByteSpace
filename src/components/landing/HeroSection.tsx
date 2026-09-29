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
    <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-0 w-full">
      <div className="w-full relative">
        
        {/* ================= FULL-WIDTH 3D SHAPES (EDGE POSITIONED) ================= */}
        {/* 1. Lime Spring (Top-Left Edge) */}
        <div className="hidden sm:block absolute top-[18%] sm:top-[16%] md:top-[14%] lg:top-[12%] -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Frame.png"
            alt="Decorative 3D Lime Spring"
            width={280}
            height={280}
            priority
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* 2. White Squiggle (Mid-Left) */}
        <div className="hidden md:block absolute top-[44%] sm:top-[42%] left-4 sm:left-8 md:left-14 lg:left-22 xl:left-28 w-14 sm:w-20 md:w-28 lg:w-34 xl:w-40 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Frame1.png"
            alt="Decorative 3D White Squiggle"
            width={200}
            height={200}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* 3. White Donut / Torus (Bottom-Left Edge) */}
        <div className="hidden sm:block absolute bottom-0 -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-24 sm:w-36 md:w-52 lg:w-68 xl:w-80 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Cone1.png"
            alt="Decorative 3D White Torus"
            width={340}
            height={340}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* 4. Lime Cylinder (Top-Right Edge) */}
        <div className="hidden sm:block absolute top-[18%] sm:top-[16%] md:top-[14%] lg:top-[12%] -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Cone.png"
            alt="Decorative 3D Lime Cylinder"
            width={280}
            height={280}
            priority
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* 5. White 3D Cone / Pyramid (Mid-Right) */}
        <div className="hidden md:block absolute top-[44%] sm:top-[42%] right-4 sm:right-8 md:right-14 lg:right-22 xl:right-28 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-42 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Cone2.png"
            alt="Decorative 3D White Pyramid"
            width={220}
            height={220}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* 6. White Spring (Bottom-Right Edge) */}
        <div className="hidden sm:block absolute bottom-0 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-20 sm:w-30 md:w-42 lg:w-54 xl:w-64 z-10 pointer-events-none">
          <Image
            src="/images/shapes/Frame2.png"
            alt="Decorative 3D White Spring"
            width={260}
            height={260}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Main Header & Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-4 pt-1 sm:pt-3 z-10 relative">
          <h1 className="text-[#FFF] font-poppins font-semibold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[120%] tracking-[-0.72px]">
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </h1>
          <p className="text-[#E5E6E8] font-satoshi font-normal text-xs xs:text-sm sm:text-base md:text-[18px] leading-[160%] max-w-2xl lg:max-w-3xl mx-auto mt-2 sm:mt-4">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-4 sm:mt-7 md:mt-8 max-w-[480px] mx-auto bg-white rounded-full p-1.5 pl-4 sm:pl-6 flex items-center justify-between shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#CBFC01]"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
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
              className="bg-[#CBFC01] hover:brightness-95 text-black font-semibold text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Visual Showcase: Balanced Halfcircle + Student + Floating Badges */}
        <div className="relative mt-10 sm:mt-14 md:mt-20 lg:mt-24 w-full flex justify-center items-end overflow-visible">

          {/* HALFCIRCLE BACKGROUND */}
          <div className="absolute -bottom-1 sm:bottom-0 w-[320px] xs:w-[380px] sm:w-[680px] md:w-[860px] lg:w-[1060px] xl:w-[1220px] z-0 pointer-events-none flex justify-center">
            <Image
              src="/images/shapes/halfcircle.png"
              alt="Lime Halfcircle Background"
              width={1220}
              height={610}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* CENTER STAGE: STUDENT PHOTO + FLOATING BADGES */}
          <div className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] flex justify-center items-end">
            
            {/* Main Student Photo */}
            <div className="relative z-10 w-full">
              <Image
                src="/images/hero-student.png"
                alt="Student learning on laptop"
                width={580}
                height={620}
                priority
                className="w-full h-auto object-contain relative z-10 block"
              />
            </div>

            {/* FLOATING CARD 1: Happy Students (Bottom-Left of Person) */}
            <div className="absolute bottom-[14%] sm:bottom-[16%] -left-3 sm:-left-8 md:-left-14 lg:-left-20 xl:-left-24 z-20 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3.5 md:p-4 lg:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[125px] sm:min-w-[155px] md:min-w-[185px] scale-90 sm:scale-95 md:scale-100 origin-bottom-left">
              <p className="text-[#0A0D14] font-bold text-[10px] sm:text-xs md:text-sm lg:text-base">
                Happy Students
              </p>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#0A0D14]">4.5</span>
                <span className="text-[#525866] text-[9px] sm:text-[10px] md:text-xs font-normal">(240)</span>
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
            </div>

            {/* FLOATING CARD 2: Learning Progress (Top-Right of Person) */}
            <div className="absolute top-[24%] sm:top-[28%] -right-3 sm:-right-8 md:-right-14 lg:-right-20 xl:-right-24 z-20 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-3.5 md:p-4 lg:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[125px] sm:min-w-[155px] md:min-w-[185px] lg:min-w-[210px] scale-90 sm:scale-95 md:scale-100 origin-top-right">
              <p className="text-[#525866] text-[9px] sm:text-xs md:text-sm font-medium">
                Learning Progress
              </p>
              <p className="text-[#0A0D14] font-poppins font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl mt-0.5 sm:mt-1">
                55%
              </p>
              <div className="w-full h-1 sm:h-2 md:h-2.5 bg-[#F5F5F6] rounded-full overflow-hidden mt-1.5 sm:mt-3">
                <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
