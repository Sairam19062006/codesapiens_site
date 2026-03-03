import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Hero — reusable, world-class hero section.
 * Brand colours: #0061FE · #00C6F7
 * Stack: React + Tailwind + Framer Motion only.
 */

/* ── floating orb (decorative) ───────────────────────── */
const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none blur-[100px] ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const Hero = ({
  badge = 'Now Open',
  heading = "We invest in the world's potential",
  subheading = 'Technology, innovation and capital unlocking long-term value and driving economic growth.',
  ctaLabel = 'Get Started',
  ctaHref = '#',
  onCtaClick,
  secondaryLabel = 'Learn More',
  secondaryHref = '#',
  onSecondaryClick,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050510] text-white selection:bg-[#0061FE]/40 selection:text-white">
      {/* ── ambient background ──────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* gradient orbs */}
        <FloatingOrb className="w-[500px] h-[500px] bg-[#0061FE]/30 -top-40 -left-40" delay={0} />
        <FloatingOrb className="w-[400px] h-[400px] bg-[#00C6F7]/25 top-1/3 right-[-10%]" delay={2} />
        <FloatingOrb className="w-[300px] h-[300px] bg-[#0061FE]/20 bottom-[-5%] left-1/4" delay={4} />
      </div>

      {/* ── content ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 text-center">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md text-sm text-gray-300"
        >
          <Sparkles size={14} className="text-[#00C6F7]" />
          <span>{badge}</span>
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
        >
          {heading.split(' ').map((word, i, arr) => (
            <span key={i}>
              {i >= arr.length - 2 ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0061FE] to-[#00C6F7]">
                  {word}
                </span>
              ) : (
                word
              )}
              {i < arr.length - 1 && ' '}
            </span>
          ))}
        </motion.h1>

        {/* subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-12"
        >
          {subheading}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* primary */}
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-[#0061FE] to-[#00C6F7] text-white shadow-[0_0_32px_rgba(0,97,254,.35)] hover:shadow-[0_0_48px_rgba(0,97,254,.55)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {ctaLabel}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            {/* shine sweep */}
            <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </span>
          </a>

          {/* secondary */}
          <a
            href={secondaryHref}
            onClick={onSecondaryClick}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-sm text-gray-200 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300"
          >
            {secondaryLabel}
          </a>
        </motion.div>

        {/* trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
            Trusted by developers worldwide
          </span>
          <div className="flex items-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-6 rounded bg-white/10" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
