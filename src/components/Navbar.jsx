import React from 'react';
import CardNav from './CardNav';
import { motion } from 'framer-motion';

const Navbar = () => {
  const items = [
    {
      label: "Explore",
      bgColor: "#2a223a",
      textColor: "#E5E2E3",
      links: [
        { label: "Features", href: "#features", ariaLabel: "Features Section" },
        { label: "Showcase", href: "#showcase", ariaLabel: "Showcase Section" }
      ]
    },
    {
      label: "Pricing", 
      bgColor: "#211c2e",
      textColor: "#E5E2E3",
      links: [
        { label: "Pricing", href: "#pricing", ariaLabel: "Pricing Plan" }
      ]
    },
    {
      label: "Studio",
      bgColor: "#211c2e", 
      textColor: "#E5E2E3",
      links: [
        { label: "About", href: "#about", ariaLabel: "About Studio Minimal" }
      ]
    }
  ];

  const logoElement = (
    <div className="text-xl font-bold tracking-tighter text-[#E5E2E3] font-headline">Studio Minimal</div>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="z-50 relative pointer-events-none"
    >
      <div className="pointer-events-auto">
        <CardNav
          logo={logoElement}
          items={items}
          baseColor="rgba(19, 19, 20, 0.6)"
          menuColor="#E5E2E3"
          buttonBgColor="#5227FF"
          buttonTextColor="#FFFFFF"
          className="!fixed backdrop-blur-xl border border-white/10 rounded-xl"
          ease="power3.out"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
