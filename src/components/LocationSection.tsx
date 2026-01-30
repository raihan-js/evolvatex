import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Where We Are</p>
            <h2 className="heading-section mb-6">
              Based in <span className="gradient-text">Texas</span>.
              <br />
              Built for <span className="text-foreground">Everywhere</span>.
            </h2>
          </motion.div>

          {/* World Map Visualization */}
          <motion.div
            className="relative h-64 md:h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Simplified world map dots */}
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              fill="none"
            >
              {/* Grid dots representing world map - simplified */}
              {[...Array(20)].map((_, row) =>
                [...Array(40)].map((_, col) => {
                  const x = col * 20 + 10;
                  const y = row * 20 + 10;
                  // Simple mask to roughly represent continents
                  const isContinentArea = 
                    (x > 100 && x < 200 && y > 80 && y < 200) || // North America rough
                    (x > 150 && x < 250 && y > 200 && y < 350) || // South America rough
                    (x > 350 && x < 500 && y > 60 && y < 250) || // Europe/Africa rough
                    (x > 550 && x < 750 && y > 80 && y < 280); // Asia/Australia rough
                  
                  if (!isContinentArea || Math.random() > 0.6) return null;
                  
                  return (
                    <circle
                      key={`${row}-${col}`}
                      cx={x}
                      cy={y}
                      r="1.5"
                      fill="hsl(var(--muted-foreground))"
                      opacity="0.3"
                    />
                  );
                })
              )}

              {/* Texas location - pulsing beacon */}
              <motion.circle
                cx="160"
                cy="160"
                r="6"
                fill="hsl(239 84% 67%)"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Outer pulse rings */}
              {[1, 2, 3].map((ring) => (
                <motion.circle
                  key={ring}
                  cx="160"
                  cy="160"
                  r={6 + ring * 10}
                  fill="none"
                  stroke="hsl(239 84% 67%)"
                  strokeWidth="0.5"
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{
                    scale: [1, 2],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: ring * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Connection lines radiating outward */}
              {[
                { x: 420, y: 120 }, // Europe
                { x: 650, y: 140 }, // Asia
                { x: 440, y: 220 }, // Africa
                { x: 680, y: 250 }, // Australia
              ].map((target, idx) => (
                <motion.line
                  key={idx}
                  x1="160"
                  y1="160"
                  x2={target.x}
                  y2={target.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + idx * 0.2 }}
                />
              ))}

              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(189 95% 43%)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Location badge */}
            <motion.div
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Mansfield, TX</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
