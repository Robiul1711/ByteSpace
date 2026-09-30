"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  id: number;
  value: string;
  label: string;
}

const stats: StatItem[] = [
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
    <section className="relative w-full overflow-hidden bg-white dark:bg-dark-bg py-20 sm:py-24 lg:py-28 transition-colors duration-300">
      {/* ================= LIGHT MODE GRADIENT GLOW LAYERS ================= */}
      <div className="dark:hidden">
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
      </div>

      {/* ================= DARK MODE AMBIENT NEON GLOWS (Futuristic / Cyber Aura) ================= */}
      <div className="hidden dark:block">
        {/* 1. Top Left Neon Lime Aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full -z-0 opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(203, 252, 1, 0.7) 0%, rgba(203, 252, 1, 0.15) 50%, transparent 80%)",
          }}
        />

        {/* 2. Top-Right Vivid Royal Electric Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-0 w-[650px] h-[650px] rounded-full -z-0 opacity-45 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 91, 255, 0.75) 0%, rgba(0, 39, 180, 0.25) 50%, transparent 80%)",
          }}
        />

        {/* 3. Center Cyber-Cyan Backlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/4 w-[700px] h-[500px] rounded-full -z-0 opacity-25 blur-[130px]"
          style={{
            background: "radial-gradient(ellipse, rgba(0, 204, 255, 0.5) 0%, rgba(0, 59, 226, 0.3) 50%, transparent 80%)",
          }}
        />

        {/* 4. Bottom Left Deep Indigo Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 -left-20 w-[600px] h-[600px] rounded-full -z-0 opacity-40 blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 59, 226, 0.8) 0%, rgba(0, 30, 120, 0.3) 50%, transparent 80%)",
          }}
        />

        {/* 5. Bottom Right Soft Lime Spark Aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 right-10 w-[500px] h-[500px] rounded-full -z-0 opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(203, 252, 1, 0.8) 0%, rgba(203, 252, 1, 0.15) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-container section-padding-x space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* ================= ROW 1: Professional Growth ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-text-dark dark:text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px] max-w-[560px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-[#4B4C53] dark:text-zinc-300 font-satoshi font-normal text-base lg:text-[18px] leading-[160%] max-w-[540px] mt-5 sm:mt-6">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-[420px] mt-8 sm:mt-10 pt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-brand-blue dark:text-[#6493FF] font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] leading-[44px] tracking-[-0.36px]">
                    {stat.value}
                  </span>
                  <span className="text-text-muted dark:text-zinc-400 font-satoshi font-normal text-xs sm:text-sm md:text-base mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Showcase (577px x 540px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[577px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
              <Image
                src="/images/professionalGrowth.png"
                alt="Professional Growth Student Showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ================= ROW 2: Create & Manage Courses ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Visual Showcase (577px x 540px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[577px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
              <Image
                src="/images/create-and-manage.png"
                alt="Create and Manage Courses Instructor Showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Text & Feature Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center lg:pl-6"
          >
            <h2 className="text-text-dark dark:text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px] max-w-[560px]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="text-[#4B4C53] dark:text-zinc-300 font-satoshi font-normal text-base lg:text-[18px] leading-[160%] max-w-[540px] mt-5 sm:mt-6 mb-8">
              <strong className="font-semibold text-black dark:text-white">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist Items */}
            <div className="space-y-4 sm:space-y-5">
              {checkListItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-blue dark:bg-brand-lime flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white dark:text-black stroke-[3]" />
                  </div>
                  <span className="text-[#0A0D14] dark:text-zinc-200 font-satoshi font-medium text-base sm:text-[18px] leading-[140%]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
