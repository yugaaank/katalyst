import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-none flex items-center justify-center font-bold text-white">
              K
            </div>
            <span className="text-xl font-bold tracking-tight">KATALYST</span>
          </div>
          <p className="text-sm text-neutral-400">
            Empowering teams with next-generation tools for faster development.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><Link href="#services" className="hover:text-purple-400">Features</Link></li>
            <li><Link href="#packages" className="hover:text-purple-400">Pricing</Link></li>
            <li><Link href="#portfolio" className="hover:text-purple-400">Portfolio</Link></li>
            <li><Link href="#faq" className="hover:text-purple-400">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><Link href="#" className="hover:text-purple-400">About</Link></li>
            <li><Link href="#" className="hover:text-purple-400">Blog</Link></li>
            <li><Link href="#" className="hover:text-purple-400">Careers</Link></li>
            <li><Link href="#" className="hover:text-purple-400">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Subscribe</h4>
          <p className="text-sm text-neutral-400 mb-4">
            Get the latest updates directly to your inbox.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 rounded-none px-4 py-2 text-sm w-full focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-none text-sm font-medium transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Katalyst Inc. All rights reserved.
      </div>
    </footer>
  );
};
