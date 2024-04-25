import React from "react";
import Vortex from "@/components/vortex";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link, animateScroll as scroll } from 'react-scroll';

export function Contact() {

  const scrollOffset = 0;

  // Handle logo click to scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div>
      <div className="rounded-t-2xl h-[30rem] mx-auto overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
            Let&apos;s Connect!
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Get in touch with us to transform your ideas into stunning, customized apps.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Contact Us
              </span>
            </button>
          </div>
        </Vortex>
      </div>
      <div className="border-b border-gray-800"></div>
      <footer className="bg-black flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img
            src="/assets/mobilon-logo.png"
            alt="Logo"
            className="h-6 w-6 mx-2 cursor-pointer"
            onClick={scrollToTop}
          />
          <div className="text-purple-300 text-lg font-bold">MOBILON BU</div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="text-purple-400 hover:text-purple-300 cursor-pointer"/>
          <Instagram className="text-purple-400 hover:text-purple-300 cursor-pointer"/>
          <Linkedin className="text-purple-400 hover:text-purple-300 cursor-pointer"/>
        </div>
    </footer>
    </div>
    
  );
}
