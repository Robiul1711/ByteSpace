"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryItem {
  id: number;
  title: string;
  icon: string;
  href: string;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Design",
    icon: "/icons/categories/design.svg",
    href: "#design",
  },
  {
    id: 2,
    title: "Development",
    icon: "/icons/categories/development.svg",
    href: "#development",
  },
  {
    id: 3,
    title: "IT & Software",
    icon: "/icons/categories/it-software.svg",
    href: "#it-software",
  },
  {
    id: 4,
    title: "Business",
    icon: "/icons/categories/business.svg",
    href: "#business",
  },
  {
    id: 5,
    title: "Marketing",
    icon: "/icons/categories/marketing.svg",
    href: "#marketing",
  },
  {
    id: 6,
    title: "Photography",
    icon: "/icons/categories/photography.svg",
    href: "#photography",
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative w-full bg-white dark:bg-dark-bg pb-16 sm:pb-20 lg:pb-24 overflow-hidden transition-colors duration-300">
      <div className="relative z-10 max-container section-padding-x">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[#040819] dark:text-white text-center font-poppins font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-[120%] tracking-[-0.36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-text-muted dark:text-zinc-400 text-center font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[160%] max-w-[957px] mt-4 sm:mt-5">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </motion.div>

        {/* Categories 6 Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <Link
                href={cat.href}
                className="h-full bg-white dark:bg-dark-surface rounded-[24px] p-6 sm:p-7 border border-[#E9EBEF] dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center text-center hover:border-brand-blue dark:hover:border-brand-lime hover:shadow-[0_12px_32px_rgba(0,59,226,0.08)] dark:hover:shadow-[0_12px_32px_rgba(203,252,1,0.08)] duration-300 group cursor-pointer"
              >
                {/* Circular Lime Icon Badge */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-brand-lime flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    width={34}
                    height={34}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-medium text-base sm:text-[18px] text-[#0A0D14] dark:text-zinc-100 group-hover:text-brand-blue dark:group-hover:text-brand-lime transition-colors leading-tight">
                  {cat.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
