"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

const filterTags = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s1.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s2.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s3.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 4,
    title: "Balancing Productivity and...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s4.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s5.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/skills/s6.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
];

export default function CoursesSection() {
  const [activeTag, setActiveTag] = useState("Featured");

  return (
    <section className="relative w-full bg-white dark:bg-[#07090E] py-20 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-300">
      <div className="relative z-10 max-container section-padding-x">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-[#000] dark:text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>

          <p className="text-[#82868E] dark:text-zinc-400 font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[160%] max-w-[780px] mt-4 sm:mt-5">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* ================= CATEGORY FILTER PILLS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mt-8 sm:mt-12">
          {filterTags.map((tag) => {
            const isActive = activeTag === tag;
            const isMore = tag === "+ More";
            return (
              <button
                key={tag}
                type="button"
                onClick={() => !isMore && setActiveTag(tag)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-satoshi font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#CBFC01] text-[#0A0D14] font-semibold shadow-sm"
                    : isMore
                    ? "bg-[#F5F5F6] dark:bg-zinc-800 text-[#003BE2] dark:text-[#CBFC01] font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    : "bg-[#F5F5F6] dark:bg-zinc-800/80 text-[#525866] dark:text-zinc-300 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* ================= 6 COURSE CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5 xl:gap-7 mt-12 sm:mt-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#0C101A] rounded-[24px] p-4 sm:p-5 border border-[#E9EBEF] dark:border-zinc-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Course Image with Floating Translucent Badges */}
                <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden mb-4 bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Glassmorphism Lesson Meta Badges - Fully Responsive for Laptop Screens */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between gap-1 sm:gap-1.5 overflow-hidden">
                    <span className="bg-white/80 dark:bg-black/80 backdrop-blur-md text-[#242528] dark:text-zinc-100 text-[10px] sm:text-[11px] font-satoshi font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shadow-xs text-center flex-1 truncate">
                      {course.lessons}
                    </span>
                    <span className="bg-white/80 dark:bg-black/80 backdrop-blur-md text-[#242528] dark:text-zinc-100 text-[10px] sm:text-[11px] font-satoshi font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shadow-xs text-center flex-1 truncate">
                      {course.duration}
                    </span>
                    <span className="bg-white/80 dark:bg-black/80 backdrop-blur-md text-[#242528] dark:text-zinc-100 text-[10px] sm:text-[11px] font-satoshi font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shadow-xs text-center flex-1 truncate">
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Course Title & Rating Row */}
                <div className="flex items-start justify-between gap-2 mt-2">
                  <h3 className="font-poppins font-semibold text-base sm:text-[17px] xl:text-[19px] text-[#0A0D14] dark:text-white leading-[130%] group-hover:text-[#003BE2] dark:group-hover:text-[#CBFC01] transition-colors flex-1 line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#525866] dark:text-zinc-400 font-poppins font-medium text-xs sm:text-sm shrink-0 pt-0.5">
                    <span>{course.rating}</span>
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                  </div>
                </div>

                {/* Author Name */}
                <p className="font-satoshi text-xs sm:text-sm text-[#003BE2] dark:text-[#6E95FF] font-medium mt-1">
                  by {course.author}
                </p>

                {/* Level Tag & Enrolled Users Row */}
                <div className="flex items-center justify-between gap-3 mt-4 pt-1">
                  {/* Beginner Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] dark:bg-zinc-800 text-[#242528] dark:text-zinc-200 font-satoshi font-medium text-xs px-3.5 py-1.5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        d="M13.75 3.33325H16.25V16.6666H13.75V3.33325ZM3.75 11.6666H6.25V16.6666H3.75V11.6666ZM8.75 7.49992H11.25V16.6666H8.75V7.49992Z"
                        className="fill-[#4B4C53] dark:fill-zinc-300"
                      />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Users Avatar Stack */}
                  <div className="relative h-7 w-28 shrink-0">
                    <Image
                      src="/images/skills/users.png"
                      alt="Enrolled students"
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-baseline">
                <span className="text-[#003BE2] dark:text-[#CBFC01] font-poppins font-bold text-xl sm:text-2xl">
                  {course.price}
                </span>
                <span className="text-[#525866] dark:text-zinc-400 font-satoshi text-xs sm:text-sm font-normal ml-0.5">
                  {course.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
