import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large floating octahedron */}
      <motion.div
        className="absolute top-20 right-[10%] w-32 h-32 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotateY: [0, 360],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,0 100,50 50,100 0,50"
            fill="none"
            stroke="hsl(239 84% 67%)"
            strokeWidth="0.5"
          />
          <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(239 84% 67%)" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(239 84% 67%)" strokeWidth="0.3" />
        </svg>
      </motion.div>

      {/* Medium floating cube */}
      <motion.div
        className="absolute bottom-32 left-[15%] w-24 h-24 opacity-15"
        animate={{
          y: [0, 20, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            fill="none"
            stroke="hsl(258 90% 66%)"
            strokeWidth="0.5"
            transform="rotate(15 50 50)"
          />
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            fill="none"
            stroke="hsl(258 90% 66%)"
            strokeWidth="0.3"
            transform="rotate(15 50 50)"
          />
        </svg>
      </motion.div>

      {/* Small floating triangle */}
      <motion.div
        className="absolute top-1/3 left-[5%] w-16 h-16 opacity-20"
        animate={{
          y: [0, -15, 0],
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,80 10,80"
            fill="none"
            stroke="hsl(189 95% 43%)"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Floating circle */}
      <motion.div
        className="absolute bottom-1/4 right-[20%] w-20 h-20 opacity-10"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(271 91% 65%)"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="hsl(271 91% 65%)"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(258 90% 66% / 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(189 95% 43% / 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
