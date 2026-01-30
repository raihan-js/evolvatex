import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Animated divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo - Fixed: No spaces */}
          <motion.div
            className="flex items-center text-xl font-bold logo-text"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-foreground">Evolvate</span>
            <span className="gradient-text">X</span>
          </motion.div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} EvolvateX LLC. All rights reserved. Texas, USA.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            3402 Willow Brook Drive, Mansfield, TX 76063
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;