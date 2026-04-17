import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-bright hover:border-primary/20 transition-all group cursor-default"
  >
    <div>
      <span className="material-symbols-outlined text-primary mb-6 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
        {icon}
      </span>
      <h3 className="font-headline font-bold text-xl text-on-surface mb-3">{title}</h3>
      <p className="font-body text-sm text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: "palette",
      title: "Auto-Color",
      description: "Instantly match shots across different cameras and lighting conditions with perfect tonal balance."
    },
    {
      icon: "layers_clear",
      title: "Smart Object Removal",
      description: "Erase boom mics, light stands, or unwanted background elements seamlessly in a single click."
    },
    {
      icon: "bolt",
      title: "Instant Export",
      description: "Cloud-accelerated rendering delivers your final master in ProRes or H.264 up to 10x faster."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-headline text-display-sm font-bold text-on-surface mb-4"
          >
            Precision Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-on-surface-variant"
          >
            The tools you need, elevated by algorithms.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
