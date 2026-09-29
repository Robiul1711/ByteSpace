import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { id: 1, value: "12K", label: "Students" },
  { id: 2, value: "70+", label: "Courses" },
  { id: 3, value: "16", label: "Creators" },
];

const checkListItems = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07090E] py-20 sm:py-28 lg:py-36 transition-colors duration-300">
      {/* ================= 5 RADIAL GRADIENT GLOW LAYERS ================= */}
      {/* 1. Top Left Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[350px] -left-[350px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 2. Top Right Side Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[350px] -right-[350px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.02) 53%, rgba(0, 59, 226, 0.00) 75%, rgba(0, 59, 226, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 3. Middle Left Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[40%] -left-[450px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 4. Bottom Left Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[150px] -left-[200px] w-[672px] h-[672px] rounded-[672px] -z-0 opacity-90"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 5. Bottom Right Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[350px] -right-[350px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-container section-padding-x space-y-24 sm:space-y-32 lg:space-y-40">
        
        {/* ================= ROW 1: Professional Growth ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-[#000] dark:text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px] max-w-[560px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-[#4F4F4F] dark:text-zinc-400 font-satoshi font-normal text-base lg:text-[18px] leading-[160%] max-w-[540px] mt-5 sm:mt-6">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-[420px] mt-8 sm:mt-10 pt-6">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col">
                  <span className="text-[#003BE2] dark:text-[#6493FF] font-poppins font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-[120%] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[#525866] dark:text-zinc-400 font-satoshi font-normal text-xs sm:text-sm md:text-base mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[540px] aspect-[1.05/1]">
              <Image
                src="/images/professionalGrowth.png"
                alt="Professional Growth Student Showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 2: Create & Manage Courses ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center relative">
            <div className="relative w-full max-w-[540px] aspect-[1.05/1]">
              <Image
                src="/images/create-and-manage.png"
                alt="Create and Manage Courses Instructor Showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Text & Feature Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center lg:pl-6">
            <h2 className="text-[#000] dark:text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px] max-w-[560px]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="text-[#4F4F4F] dark:text-zinc-400 font-satoshi font-normal text-base lg:text-[18px] leading-[160%] max-w-[540px] mt-5 sm:mt-6 mb-8">
              <strong className="font-semibold text-black dark:text-white">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist Items */}
            <div className="space-y-4 sm:space-y-5">
              {checkListItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <CheckCircle2
                    className="w-5 h-5 text-[#003BE2] dark:text-[#CBFC01] shrink-0 fill-[#003BE2] dark:fill-[#CBFC01] text-white dark:text-black"
                    aria-hidden="true"
                  />
                  <span className="text-[#0A0D14] dark:text-zinc-200 font-satoshi font-medium text-base sm:text-[18px] leading-[140%]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
