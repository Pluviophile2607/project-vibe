import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Demo",
  "Sample",
  "Marquee",
  "Test",
  "Ai Video Editing",
  "Big Thing",
  "Vibe Editing",
  "Studio Minimal",
];

const SocialProof = () => {
  // Duplicate logos for seamless infinite loop
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="py-6 md:py-8 bg-surface-container-lowest border-t border-outline-variant/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-4 md:mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant/60"
        >
          Trusted by leading creative studios
        </motion.p>
      </div>

      {/* Marquee track */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, var(--tw-gradient-from, #0e0e0f), transparent)' }}
        />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, var(--tw-gradient-from, #0e0e0f), transparent)' }}
        />

        <div className="marquee-wrapper flex w-max">
          <div className="marquee-track flex items-center gap-8 md:gap-16 animate-marquee">
            {marqueeItems.map((logo, index) => (
              <span
                key={index}
                className="font-headline font-bold text-base md:text-xl text-on-surface whitespace-nowrap opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
