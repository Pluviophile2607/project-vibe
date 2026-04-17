import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0F] py-20 px-10 flex flex-col md:flex-row justify-between items-center w-full mx-auto max-w-7xl relative z-10 mt-20 border-t border-white/5">
      <div className="text-lg font-black text-[#E5E2E3] font-headline mb-8 md:mb-0">
        Studio Minimal
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-headline text-xs uppercase tracking-widest text-[#E5E2E3]/40 mb-8 md:mb-0">
        <a className="hover:text-[#E5E2E3] transition-colors" href="#">Privacy Policy</a>
        <a className="hover:text-[#E5E2E3] transition-colors" href="#">Terms of Service</a>
        <a className="hover:text-[#E5E2E3] transition-colors" href="#">Twitter</a>
        <a className="hover:text-[#E5E2E3] transition-colors" href="#">Instagram</a>
      </div>
      <div className="font-headline text-xs uppercase tracking-widest text-[#E5E2E3]/40">
        © 2026 Studio Minimal.
      </div>
    </footer>
  );
};

export default Footer;
