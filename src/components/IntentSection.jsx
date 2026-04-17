import React from 'react';
import { motion } from 'framer-motion';
import magicBarImg from '../assets/magic-bar.png';

const IntentSection = () => {
  return (
    <section className="py-20 md:py-32 bg-surface relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-headline text-display-md font-bold text-on-surface mb-6">Edit with <br/>Intent.</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
              The AI Magic Bar understands cinematic language. Type "make it moody" or "focus on the subject," and Studio Minimal dynamically adjusts color grading, pacing, and framing without you touching a single slider.
            </p>
            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 w-fit">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <span className="font-label text-sm text-on-surface">"Apply a warm, nostalgic film look to the B-roll"</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-surface-variant/40 backdrop-blur-xl border border-outline-variant/10 rounded-xl p-2 relative z-10 overflow-hidden shadow-2xl">
              <img 
                src={magicBarImg} 
                className="rounded-lg w-full object-cover aspect-video opacity-80" 
                alt="AI Magic Bar input interface" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntentSection;
