import React from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonial/sara.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonial/jems.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonial/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white section-padding-y">
      {/* 1. Left Gradient Glow (Figma exact) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[350px] -left-[350px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-90"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 2. Middle Gradient Glow (Figma exact) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[180px] left-1/2 -translate-x-1/2 w-[672px] h-[672px] rounded-[672px] -z-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* 3. Right Gradient Glow (Figma exact) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[350px] -right-[300px] w-[1137px] h-[1137px] rounded-[1137px] -z-0 opacity-90"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Main Content Container (1440px frame with 120px padding) */}
      <div className="relative z-10 max-container section-padding-x">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 mb-12 sm:mb-16">
          <div className="w-full lg:max-w-[577px]">
            <h2 className="text-[#000] font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.44px]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>
          <div className="w-full lg:max-w-[580px]">
            <p className="text-[#4F4F4F] font-satoshi font-normal text-base lg:text-[18px] leading-[160%]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#E9EBEF]/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* User Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden mb-5 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Name */}
                <h3 className="text-[#000] font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.2px]">
                  {item.name}
                </h3>

                {/* Subtitle / Role */}
                <p className="text-[#003BE2] font-satoshi font-normal text-base sm:text-[18px] leading-[160%] mt-1 mb-5">
                  {item.role}
                </p>

                {/* Testimonial Quote */}
                <p className="text-[#4F4F4F] font-satoshi font-normal text-base sm:text-[18px] leading-[160%]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
