import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = [
    "Intelligence",
    "should",
    "be",
    "useful—",
    "clear",
    "in",
    "outcomes,",
    "dependable",
    "in",
    "production,",
    "and",
    "designed",
    "for",
    "real-world",
    "use."
  ];

  return (
    <section 
      ref={containerRef}
      id="about"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
          >
            Our Philosophy
          </motion.p>
          
          <div className="heading-section leading-relaxed">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[start * 0.5, end * 0.5 + 0.2]}
                  isHighlight={['useful—', 'dependable', 'real-world'].includes(word)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

interface WordProps {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  isHighlight?: boolean;
}

const Word = ({ word, progress, range, isHighlight }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <motion.span
      className={`inline-block mr-3 md:mr-4 ${isHighlight ? 'gradient-text' : 'text-foreground'}`}
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
};

export default PhilosophySection;
