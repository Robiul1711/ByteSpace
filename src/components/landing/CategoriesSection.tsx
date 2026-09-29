import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
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
    <section className="relative w-full bg-white dark:bg-[#07090E] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300">
      <div className="relative z-10 max-container section-padding-x">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-[#040819] dark:text-white text-center font-poppins font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-[120%] tracking-[-0.36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-[#82868E] dark:text-zinc-400 text-center font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[160%] max-w-[957px] mt-4 sm:mt-5">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories 6 Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="bg-white dark:bg-[#0C101A] rounded-[24px] p-6 sm:p-7 border border-[#E9EBEF] dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center text-center hover:border-[#003BE2] dark:hover:border-[#CBFC01] hover:shadow-[0_12px_32px_rgba(0,59,226,0.08)] dark:hover:shadow-[0_12px_32px_rgba(203,252,1,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              {/* Circular Lime Icon Badge */}
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-[#CBFC01] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Image
                  src={cat.icon}
                  alt={cat.title}
                  width={34}
                  height={34}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-medium text-base sm:text-[18px] text-[#0A0D14] dark:text-zinc-100 group-hover:text-[#003BE2] dark:group-hover:text-[#CBFC01] transition-colors leading-tight">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
