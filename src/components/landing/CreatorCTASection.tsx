import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreatorCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-hero-grid text-white py-16 sm:py-20 md:py-24 lg:py-28 min-h-[460px] md:min-h-[500px] flex items-center justify-center">
      {/* ================= LEFT SIDE 3D SHAPES ================= */}
      {/* 1. Lime Spring (Top-Left corner) */}
      <div className="absolute -top-0 -left-0 w-10 sm:w-36 md:w-48 lg:w-56 xl:w-64 2xl:w-[280px] z-0 pointer-events-none">
        <Image
          src="/images/shapes/Frame.png"
          alt="Lime Spring"
          width={280}
          height={280}
          priority
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* 2. White Squiggle (Mid-top left) */}
      <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-16 sm:left-24 md:left-32 lg:left-40 xl:left-48 2xl:left-60 w-10 sm:w-14 md:w-16 lg:w-20 xl:w-[90px] 2xl:w-[150px] -rotate-12 z-0 pointer-events-none">
        <Image
          src="/images/shapes/Frame1.png"
          alt="White Squiggle"
          width={110}
          height={110}
          className="w-full h-auto"
        />
      </div>

      {/* 3. White Pyramid/Cone (Bottom-Left edge) */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 w-14 sm:w-18 md:w-22 lg:w-28 xl:w-32 z-0 pointer-events-none">
        <Image
          src="/images/shapes/whiteangle.png"
          alt="White Cone"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>

      {/* 4. Lime Donut / Torus (Bottom-Left sub-merged) */}
      <div className="absolute -bottom-0 left-10 sm:left-16 md:left-24 lg:left-32 xl:left-40 2xl:left-48 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 2xl:w-[400px] z-0 pointer-events-none">
        <Image
          src="/images/shapes/neonCircle.png"
          alt="Lime Torus Ring"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* ================= RIGHT SIDE 3D SHAPES ================= */}
      {/* 5. Lime Pyramid (Top-Right floating) */}
      <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-14 sm:right-20 md:right-28 lg:right-36 xl:right-48 2xl:right-64 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-[160px] z-0 pointer-events-none">
        <Image
          src="/images/shapes/neoncone.png"
          alt="Lime Pyramid"
          width={160}
          height={160}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* 6. White Cylinder (Right Edge bleeding off) */}
      <div className="absolute top-1 sm:top-2 md:top-4 lg:top-6 xl:top-8 -right-0 w-10 sm:w-36 md:w-48 lg:w-56 xl:w-60 2xl:w-[250px] z-0 pointer-events-none">
        <Image
          src="/images/shapes/whitcone.png"
          alt="White Cylinder"
          width={280}
          height={280}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* 7. Lime Spring (Bottom-Right rising) */}
      <div className="absolute -bottom-0 -right-0 w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 2xl:w-[300px] z-0 pointer-events-none">
        <Image
          src="/images/shapes/frame3.png"
          alt="Lime Spring"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* ================= CENTERED CONTENT ================= */}
      <div className="relative z-10 max-w-[560px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[740px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Title (Heading M) */}
        <h2 className="section-title text-[#F5F5F6] text-center w-full">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        {/* Subtitle / Paragraph (Body L) */}
        <p className="section-desc text-white/90 text-center w-full mt-4 sm:mt-5">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <Link
          href="#join-creator"
          className="mt-7 sm:mt-8 inline-flex items-center justify-center btn-primary text-sm sm:text-base px-7 sm:px-8 py-3 shadow-md"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
