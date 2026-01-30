import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Brain, Server, Rocket, Sparkles, Cpu, Layers } from 'lucide-react';
import { useRef, MouseEvent } from 'react';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Build</p>
          <h2 className="heading-section mb-6">
            Intelligent Solutions for
            <span className="gradient-text"> Modern Challenges</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            From concept to production, we deliver AI systems that create measurable impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Large Card - AI-Driven Applications */}
          <SpotlightCard 
            className="lg:col-span-2 lg:row-span-2"
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
            <div className="relative z-10 h-full flex flex-col">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-7 h-7 text-indigo" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">AI-Driven Applications</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Custom web and mobile applications powered by machine learning, 
                natural language processing, and computer vision.
              </p>
              
              {/* Features list */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {["Intelligent assistants", "Workflow automation", "Decision-support tools", "Knowledge synthesis"].map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Neural network visualization */}
              <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity hidden lg:block">
                <svg width="140" height="100" viewBox="0 0 140 100">
                  <circle cx="20" cy="20" r="4" fill="hsl(var(--indigo))" />
                  <circle cx="20" cy="50" r="4" fill="hsl(var(--indigo))" />
                  <circle cx="20" cy="80" r="4" fill="hsl(var(--indigo))" />
                  <circle cx="70" cy="35" r="4" fill="hsl(var(--violet))" />
                  <circle cx="70" cy="65" r="4" fill="hsl(var(--violet))" />
                  <circle cx="120" cy="50" r="4" fill="hsl(var(--cyan))" />
                  <line x1="24" y1="20" x2="66" y2="35" stroke="hsl(var(--indigo))" strokeWidth="0.5" />
                  <line x1="24" y1="50" x2="66" y2="35" stroke="hsl(var(--indigo))" strokeWidth="0.5" />
                  <line x1="24" y1="50" x2="66" y2="65" stroke="hsl(var(--indigo))" strokeWidth="0.5" />
                  <line x1="24" y1="80" x2="66" y2="65" stroke="hsl(var(--indigo))" strokeWidth="0.5" />
                  <line x1="74" y1="35" x2="116" y2="50" stroke="hsl(var(--violet))" strokeWidth="0.5" />
                  <line x1="74" y1="65" x2="116" y2="50" stroke="hsl(var(--violet))" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </SpotlightCard>

          {/* Medium Card - AI Systems & Infrastructure */}
          <SpotlightCard variants={cardVariants}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
            <div className="relative z-10">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Server className="w-6 h-6 text-violet" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-foreground">AI Systems & Infrastructure</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Scalable backend systems designed for AI workloads with optimized data pipelines.
              </p>
              <div className="space-y-2">
                {["Multi-agent orchestration", "Model integration", "Scalable pipelines"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1 h-1 rounded-full bg-violet" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Product Innovation Card */}
          <SpotlightCard variants={cardVariants}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
            <div className="relative z-10">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Rocket className="w-6 h-6 text-cyan" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Product Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Proprietary AI products that improve over time and adapt to your needs.
              </p>
            </div>
          </SpotlightCard>

          {/* Small Cards Row */}
          <SpotlightCard variants={cardVariants}>
            <div className="relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-indigo" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Automation</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent process automation that reduces manual work.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={cardVariants}>
            <div className="relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Layers className="w-5 h-5 text-violet" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Integration</h3>
              <p className="text-sm text-muted-foreground">
                Seamlessly connect AI with existing systems.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard variants={cardVariants}>
            <div className="relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Cpu className="w-5 h-5 text-cyan" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Strategic AI guidance and implementation roadmaps.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

// Spotlight Card Component with cursor-following gradient
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
}

const SpotlightCard = ({ children, className = '', variants }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const spotlightY = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      className={`bento-card group cursor-pointer relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          x: spotlightX,
          y: spotlightY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
};

export default ServicesSection;