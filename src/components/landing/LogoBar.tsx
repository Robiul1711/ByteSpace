import React from "react";
import Image from "next/image";

const brandLogos = [
  { id: 1, src: "/images/brandsLogo/b1.png", alt: "Brand 1" },
  { id: 2, src: "/images/brandsLogo/b2.png", alt: "Brand 2" },
  { id: 3, src: "/images/brandsLogo/b3.png", alt: "Brand 3" },
  { id: 4, src: "/images/brandsLogo/b4.png", alt: "Brand 4" },
  { id: 5, src: "/images/brandsLogo/b5.png", alt: "Brand 5" },
];

export default function LogoBar() {
  return (
    <section className="w-full bg-[#F5F5F6] py-8 sm:py-10 md:py-12 border-b border-zinc-200/60">
      <div className="max-container section-padding-x">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 md:gap-14">
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="relative h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 flex items-center justify-center transition-all"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
