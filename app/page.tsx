"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-[400vh] overflow-hidden dark:bg-dot-yellow-400/[0.4] bg-dot-yellow-400/[0.3] pb-20">
      <div className="max-w-7xl mx-auto px-5 ">
       <Navbar />
       <HeroSection />
      </div>
    <div className="mt-20 max-w-7xl mx-auto">
      <Skills />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  </div>

  );
}
