import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">MiniBot</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#get-started" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-neutral-200 transition-colors">Get Started</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
