import { motion } from 'framer-motion';
import heroSvg from '../assets/editor Ui.svg';
import Silk from './Silk';
import { InteractiveHoverButton } from './InteractiveHoverButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 z-10 overflow-hidden">
      <Silk 
        speed={5} 
        scale={1} 
        color="#5227FF" 
        noiseIntensity={1.5} 
        rotation={0}
      />
      {/* Existing content continues... */}
      
      <div className="text-center max-w-5xl mx-auto z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-display-lg font-extrabold text-on-surface mb-6"
        >
          The End of the <span className="text-primary-container">Timeline.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
        >
          Experience intent-based editing. Studio Minimal replaces complex track layers with an intelligent cinematic canvas, freeing you to direct rather than construct.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <InteractiveHoverButton>Start Creating</InteractiveHoverButton>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 md:mt-20 w-auto max-w-6xl mx-auto relative z-10 rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl"
      >
        <img 
          src={heroSvg} 
          alt="Studio Minimal Editor UI" 
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
