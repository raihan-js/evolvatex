import { motion } from 'framer-motion';
import { Brain, Server, Zap, Shield, Layers, Cpu } from 'lucide-react';

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const services = [
    {
      icon: Brain,
      title: "AI-Driven Applications",
      description: "Custom web and mobile applications powered by machine learning, natural language processing, and computer vision.",
      features: ["Machine Learning Models", "NLP Integration", "Computer Vision"],
      size: "large",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      icon: Server,
      title: "AI Infrastructure",
      description: "Scalable backend systems designed for AI workloads with optimized data pipelines.",
      features: ["Cloud Architecture", "Data Pipelines", "Model Deployment"],
      size: "medium",
      gradient: "from-violet-500/20 to-cyan-500/20",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Intelligent process automation that reduces manual work and increases efficiency.",
      size: "small",
      gradient: "from-cyan-500/20 to-indigo-500/20",
    },
    {
      icon: Shield,
      title: "Responsible AI",
      description: "Ethical AI implementation with transparency, fairness, and accountability built in.",
      size: "small",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      icon: Layers,
      title: "Integration",
      description: "Seamlessly connect AI capabilities with your existing systems and workflows.",
      size: "small",
      gradient: "from-violet-500/20 to-cyan-500/20",
    },
    {
      icon: Cpu,
      title: "Consulting",
      description: "Strategic AI guidance to identify opportunities and create implementation roadmaps.",
      size: "small",
      gradient: "from-cyan-500/20 to-indigo-500/20",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Large Card - AI-Driven Applications */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:row-span-2 bento-card group cursor-pointer"
            whileHover={{ scale: 1.01 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${services[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            <div className="relative z-10">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{services[0].title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">{services[0].description}</p>
              
              {/* Animated features */}
              <div className="space-y-3">
                {services[0].features?.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Neural network visualization */}
              <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <circle cx="20" cy="20" r="4" fill="hsl(239 84% 67%)" />
                  <circle cx="20" cy="40" r="4" fill="hsl(239 84% 67%)" />
                  <circle cx="20" cy="60" r="4" fill="hsl(239 84% 67%)" />
                  <circle cx="60" cy="30" r="4" fill="hsl(258 90% 66%)" />
                  <circle cx="60" cy="50" r="4" fill="hsl(258 90% 66%)" />
                  <circle cx="100" cy="40" r="4" fill="hsl(189 95% 43%)" />
                  <line x1="24" y1="20" x2="56" y2="30" stroke="hsl(239 84% 67%)" strokeWidth="0.5" />
                  <line x1="24" y1="40" x2="56" y2="30" stroke="hsl(239 84% 67%)" strokeWidth="0.5" />
                  <line x1="24" y1="40" x2="56" y2="50" stroke="hsl(239 84% 67%)" strokeWidth="0.5" />
                  <line x1="24" y1="60" x2="56" y2="50" stroke="hsl(239 84% 67%)" strokeWidth="0.5" />
                  <line x1="64" y1="30" x2="96" y2="40" stroke="hsl(258 90% 66%)" strokeWidth="0.5" />
                  <line x1="64" y1="50" x2="96" y2="40" stroke="hsl(258 90% 66%)" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Medium Card - AI Infrastructure */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 bento-card group cursor-pointer"
            whileHover={{ scale: 1.01 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${services[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            <div className="relative z-10">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Server className="w-6 h-6 text-violet" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{services[1].title}</h3>
              <p className="text-muted-foreground">{services[1].description}</p>
            </div>
          </motion.div>

          {/* Small Cards */}
          {services.slice(2).map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bento-card group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-5 h-5 text-cyan" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
