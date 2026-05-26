"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "#packages" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
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
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.1] rounded-none bg-black/50 backdrop-blur-2xl z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-12",
          isOpen && "md:space-x-12"
        )}
      >
        <Link href="/" className="flex items-center">
          <span className="text-sm font-black tracking-tighter uppercase leading-none block scale-y-110 origin-left mr-2">
            KATALYST
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8 text-[9px] font-black tracking-[0.3em] text-neutral-400 uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-none text-[9px] font-black tracking-[0.1em] uppercase transition-all purple-glow border border-white/10">
            Get Quote
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 inset-x-6 z-[4999] md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black tracking-[0.3em] text-neutral-400 uppercase hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-none text-[10px] text-center font-black tracking-[0.2em] uppercase transition-all purple-glow border border-white/10"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
