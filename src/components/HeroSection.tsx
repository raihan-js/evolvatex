import { motion } from 'framer-motion';
import ParticleField from './ParticleField';
import FloatingShapes from './FloatingShapes';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const words = ["Engineering", "the", "Next."];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <ParticleField />
      <FloatingShapes />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 md:py-40 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-6 md:mb-8 font-medium"
          >
            Evolving Intelligence
          </motion.p>

          {/* Main Headline - Word by word animation */}
          <h1 className="heading-hero mb-6 md:mb-8 overflow-visible">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block gradient-text mr-3 sm:mr-4 md:mr-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="body-large max-w-2xl mx-auto mb-10 md:mb-12 px-4"
          >
            EvolvateX LLC builds AI-first mobile and web applications that turn 
            artificial intelligence into practical, reliable, and scalable products.
          </motion.p>

          {/* CTA Buttons with Glow */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.a
              href="#services"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Work
              <motion.svg 
                className="w-4 h-4"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;