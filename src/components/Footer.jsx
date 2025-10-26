import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} MiniBot. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a className="hover:text-white transition-colors" href="#privacy">Privacy</a>
          <a className="hover:text-white transition-colors" href="#terms">Terms</a>
          <a className="hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
