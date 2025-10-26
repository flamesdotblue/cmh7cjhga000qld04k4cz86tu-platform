import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,153,0,0.10)_0%,rgba(0,0,0,0.0)_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 sm:pt-28 lg:pt-32"></div>
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            A friendly mini robot that says hello
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Black and white, subtly lit in orange—playful, minimalist, and interactive. Explore an elegant tech demo powered by a live 3D Spline scene.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200 transition-colors"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="pb-24 sm:pb-28 lg:pb-32"></div>
      </div>
    </section>
  );
}
