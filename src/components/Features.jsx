import React from 'react';
import { Bot, Cpu, Zap, Shield } from 'lucide-react';

const items = [
  {
    icon: Bot,
    title: 'Playful Presence',
    desc: 'A friendly mini robot designed to greet visitors and invite exploration with subtle motion.'
  },
  {
    icon: Cpu,
    title: '3D Powered',
    desc: 'Live Spline scene embedded directly into the hero for smooth, interactive visuals.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Vite + React + Tailwind deliver fast loads, modern DX, and responsive styling.'
  },
  {
    icon: Shield,
    title: 'Accessible Design',
    desc: 'Clean contrast, keyboard-friendly UI elements, and sensible semantics out-of-the-box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,153,0,0.06)_0%,rgba(0,0,0,0)_45%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for delightful intros</h2>
          <p className="mt-3 text-neutral-300">Minimal, welcoming, and engineered to impress from the very first hello.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-orange-500/10 to-transparent" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{desc}</p>
      </div>
    </div>
  );
}
