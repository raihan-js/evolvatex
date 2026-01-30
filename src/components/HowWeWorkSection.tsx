import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Minimize2, ShieldCheck, Handshake } from 'lucide-react';

const HowWeWorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"]);

  const principles = [
    {
      icon: Network,
      title: "Systems-First Thinking",
      description: "We architect with long-term scalability in mind. Every component is designed to work within a larger ecosystem, ensuring your AI systems grow seamlessly.",
      gradient: "from-indigo to-violet",
      iconColor: "text-indigo",
    },
    {
      icon: Minimize2,
      title: "Minimal Interfaces",
      description: "Hide complexity, reveal value. Our interfaces distill sophisticated AI capabilities into intuitive experiences that users love.",
      gradient: "from-violet to-cyan",
      iconColor: "text-violet",
    },
    {
      icon: ShieldCheck,
      title: "Production-Ready Engineering",
      description: "Performance, security, and observability are built in from day one. We ship code that's ready for the real world, not just demos.",
      gradient: "from-cyan to-indigo",
      iconColor: "text-cyan",
    },
    {
      icon: Handshake,
      title: "Responsible AI",
      description: "Controllable, transparent, and aligned with your values. We build AI systems that you can trust and that earn user confidence.",
      gradient: "from-indigo to-violet",
      iconColor: "text-indigo",
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="how-we-work" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Approach</p>
          <h2 className="heading-section mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Principles that guide every project we build.
          </p>
        </motion.div>

        {/* Horizontal Scroll Cards - Desktop */}
        <div className="hidden md:block relative h-[500px]">
          <motion.div 
            className="absolute top-0 left-0 flex gap-8 px-[10%]"
            style={{ x }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="w-[400px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bento-card spotlight-card h-full group">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <principle.icon className={`w-7 h-7 ${principle.iconColor}`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{principle.title}</h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {principle.description}
                    </p>

                    {/* Decorative line */}
                    <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${principle.gradient} opacity-50 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {principles.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
                whileInView={{ 
                  backgroundColor: index === 0 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)"
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Vertical Cards */}
        <div className="md:hidden px-6">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="bento-card group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <principle.icon className={`w-6 h-6 ${principle.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{principle.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;