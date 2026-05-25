"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.1] rounded-none bg-black/50 backdrop-blur-2xl z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-12"
      )}
    >
      <div className="flex items-center">
        <span className="text-sm font-black tracking-tighter uppercase leading-none block scale-y-110 origin-left mr-2">
          KATALYST
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 text-[9px] font-black tracking-[0.3em] text-neutral-400 uppercase">
        <Link href="#" className="hover:text-white transition-colors">Services</Link>
        <Link href="#" className="hover:text-white transition-colors">Portfolio</Link>
        <Link href="#" className="hover:text-white transition-colors">Packages</Link>
        <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
      </div>

      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-none text-[9px] font-black tracking-[0.1em] uppercase transition-all purple-glow border border-white/10">
        Get Quote
      </button>
    </motion.div>
  );
};
