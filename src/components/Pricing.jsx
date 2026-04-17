import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section className="py-32 bg-surface-container-lowest" id="pricing">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-display-sm font-bold text-on-surface mb-6"
        >
          Simple, Honest Pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-on-surface-variant mb-16"
        >
          One powerful tier. Everything included.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-variant/20 backdrop-blur-md rounded-xl border border-primary-container/30 p-10 relative overflow-hidden text-left shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Pro Creator</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline text-5xl font-extrabold text-on-surface">$49</span>
                <span className="font-body text-on-surface-variant">/month</span>
              </div>
              <ul className="font-body text-sm text-on-surface-variant space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> 
                  Unlimited AI Rendering
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> 
                  4K ProRes Export
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> 
                  1TB Cloud Storage
                </li>
              </ul>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-primary-container text-on-primary-container font-headline font-bold px-8 py-4 rounded-xl hover:brightness-105 transition-all shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
