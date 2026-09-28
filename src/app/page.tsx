import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogoBar from "@/components/landing/LogoBar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Top Blue Hero Wrapper with Blueprint Grid */}
      <div className="w-full bg-hero-grid text-white relative">
        <Navbar />
        <HeroSection />
      </div>

      {/* Brand Partners Logo Bar */}
      <LogoBar />

      {/* Footer */}
      <Footer />
    </main>
  );
}


