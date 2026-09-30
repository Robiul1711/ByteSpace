"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BrandLogo {
  id: string;
  src: string;
  alt: string;
}

// Brand Logos Set 1, 2 & 3 for Blur Flip cycling
const logoSets: BrandLogo[][] = [
  [
    { id: "1a", src: "/images/brandsLogo/b1.png", alt: "Brand Partner 1" },
    { id: "2a", src: "/images/brandsLogo/b2.png", alt: "Brand Partner 2" },
    { id: "3a", src: "/images/brandsLogo/b3.png", alt: "Brand Partner 3" },
    { id: "4a", src: "/images/brandsLogo/b4.png", alt: "Brand Partner 4" },
    { id: "5a", src: "/images/brandsLogo/b5.png", alt: "Brand Partner 5" },
  ],
  [
    { id: "1b", src: "/images/brandsLogo/b3.png", alt: "Brand Partner 3" },
    { id: "2b", src: "/images/brandsLogo/b5.png", alt: "Brand Partner 5" },
    { id: "3b", src: "/images/brandsLogo/b1.png", alt: "Brand Partner 1" },
    { id: "4b", src: "/images/brandsLogo/b2.png", alt: "Brand Partner 2" },
    { id: "5b", src: "/images/brandsLogo/b4.png", alt: "Brand Partner 4" },
  ],
  [
    { id: "1c", src: "/images/brandsLogo/b5.png", alt: "Brand Partner 5" },
    { id: "2c", src: "/images/brandsLogo/b4.png", alt: "Brand Partner 4" },
    { id: "3c", src: "/images/brandsLogo/b2.png", alt: "Brand Partner 2" },
    { id: "4c", src: "/images/brandsLogo/b3.png", alt: "Brand Partner 3" },
    { id: "5c", src: "/images/brandsLogo/b1.png", alt: "Brand Partner 1" },
  ],
];

export default function LogoBar() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  // Cycle sets every 5 seconds with silky slow blur flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % logoSets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentLogos = logoSets[currentSetIndex];

  return (
    <section className="w-full bg-surface-light dark:bg-dark-bg py-8 sm:py-10 md:py-12 shadow-md border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden relative transition-colors duration-300">
      <div className="max-container section-padding-x">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 md:gap-14 [perspective:1000px]">
          {currentLogos.map((brand, index) => (
            <div
              key={index}
              className="relative h-7 sm:h-8 md:h-9 w-24 sm:w-28 md:w-32 flex items-center justify-center"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={brand.id + "-" + currentSetIndex}
                  initial={{
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 20,
                  }}
                  animate={{
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  exit={{
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(10px)",
                    y: -20,
                  }}
                  transition={{
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.12, // Silky smooth staggered wave
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                  className="w-full h-full flex items-center justify-center cursor-pointer will-change-transform"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 dark:brightness-125 transition-all duration-300 opacity-75 hover:opacity-100"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
