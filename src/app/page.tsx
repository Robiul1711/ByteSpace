import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogoBar from "@/components/landing/LogoBar";
import CategoriesSection from "@/components/landing/CategoriesSection";
import CoursesSection from "@/components/landing/CoursesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CreatorCTASection from "@/components/landing/CreatorCTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#07090E] transition-colors duration-300">
      {/* Top Blue Hero Wrapper with Blueprint Grid */}
      <div className="w-full bg-hero-grid text-white relative">
        <Navbar />
        <HeroSection />
      </div>

      {/* Brand Partners Logo Bar */}
      <LogoBar />

      {/* Featured Courses / Skills Catalog Section */}
      <CoursesSection />
      {/* Categories / Learning Paths Section */}
      <CategoriesSection />


      {/* Value Proposition / Features Section */}
      <FeaturesSection />

      {/* Testimonials / Community Section */}
      <TestimonialsSection />

      {/* Creator CTA Banner Section */}
      <CreatorCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}


