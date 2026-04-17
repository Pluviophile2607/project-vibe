import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = ["Warp Films", "A24 Digital", "Nexus Studios", "Unit Motion"];

  return (
    <section className="py-16 bg-surface-container-lowest border-t border-outline-variant/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline text-xs tracking-widest uppercase text-on-surface-variant/60 mb-8"
        >
          Trusted by leading creative studios
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          {logos.map((logo, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="font-headline font-bold text-xl text-on-surface hover:opacity-100 transition-opacity cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
