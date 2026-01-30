import { motion } from 'framer-motion';

const WhyXSection = () => {
  const xVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const meanings = [
    { label: "Experimentation", direction: "left", delay: 1.5 },
    { label: "Unknown Variables", direction: "right", delay: 1.7 },
    { label: "Exponential Leverage", direction: "bottom", delay: 1.9 },
  ];

  return (
    <section id="work" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Meaning</p>
          <h2 className="heading-section">
            Why <span className="gradient-text">"X"</span>?
          </h2>
        </motion.div>

        {/* X Visualization */}
        <div className="relative max-w-2xl mx-auto h-[400px] md:h-[500px]">
          {/* Animated X */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-48 h-48 md:w-64 md:h-64"
            >
              <defs>
                <linearGradient id="xGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(239 84% 67%)" />
                  <stop offset="50%" stopColor="hsl(258 90% 66%)" />
                  <stop offset="100%" stopColor="hsl(189 95% 43%)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* X lines */}
              <motion.line
                x1="40"
                y1="40"
                x2="160"
                y2="160"
                stroke="url(#xGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#glow)"
                variants={xVariants}
              />
              <motion.line
                x1="160"
                y1="40"
                x2="40"
                y2="160"
                stroke="url(#xGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#glow)"
                variants={xVariants}
              />
            </svg>
          </motion.div>

          {/* Pulsing rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
              style={{
                width: `${ring * 100 + 100}px`,
                height: `${ring * 100 + 100}px`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                delay: ring * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Meaning callouts */}
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm md:text-base font-medium text-foreground">Experimentation</span>
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 md:w-20 h-px bg-gradient-to-l from-violet to-transparent" />
              <span className="text-sm md:text-base font-medium text-foreground">Unknown Variables</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.9 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-12 md:h-16 bg-gradient-to-t from-cyan to-transparent" />
              <span className="text-sm md:text-base font-medium text-foreground">Exponential Leverage</span>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.p
          className="text-center text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2 }}
        >
          "The space where meaningful breakthroughs happen."
        </motion.p>
      </div>

      {/* Floating particles/meteors */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default WhyXSection;
