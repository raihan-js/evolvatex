import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '3402 Willow Brook Drive\nMansfield, TX 76063' },
    { icon: Mail, label: 'Email', value: 'info@evolvatexllc.com', href: 'mailto:info@evolvatexllc.com' },
    { icon: Phone, label: 'Phone', value: '+1 214-290-2422', href: 'tel:+12142902422' },
  ];

  const socialLinks = [
    { icon: Globe, label: 'Website', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
          <h2 className="heading-section mb-6">
            Ready to <span className="gradient-text">Evolve</span>?
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Let's discuss how AI can transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">EvolvateX LLC</h3>
              <p className="text-muted-foreground">
                Engineering intelligent solutions for tomorrow's challenges.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.label
                  className="absolute left-4 transition-all duration-300 pointer-events-none"
                  animate={{
                    y: focusedField === 'name' || formState.name ? -28 : 12,
                    scale: focusedField === 'name' || formState.name ? 0.85 : 1,
                    color: focusedField === 'name' ? 'hsl(239 84% 67%)' : 'hsl(240 4% 65%)',
                  }}
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="input-field pt-4"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.label
                  className="absolute left-4 transition-all duration-300 pointer-events-none"
                  animate={{
                    y: focusedField === 'email' || formState.email ? -28 : 12,
                    scale: focusedField === 'email' || formState.email ? 0.85 : 1,
                    color: focusedField === 'email' ? 'hsl(239 84% 67%)' : 'hsl(240 4% 65%)',
                  }}
                >
                  Email Address
                </motion.label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="input-field pt-4"
                  required
                />
              </div>

              {/* Company Input */}
              <div className="relative">
                <motion.label
                  className="absolute left-4 transition-all duration-300 pointer-events-none"
                  animate={{
                    y: focusedField === 'company' || formState.company ? -28 : 12,
                    scale: focusedField === 'company' || formState.company ? 0.85 : 1,
                    color: focusedField === 'company' ? 'hsl(239 84% 67%)' : 'hsl(240 4% 65%)',
                  }}
                >
                  Company (Optional)
                </motion.label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className="input-field pt-4"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.label
                  className="absolute left-4 transition-all duration-300 pointer-events-none"
                  animate={{
                    y: focusedField === 'message' || formState.message ? -28 : 12,
                    scale: focusedField === 'message' || formState.message ? 0.85 : 1,
                    color: focusedField === 'message' ? 'hsl(239 84% 67%)' : 'hsl(240 4% 65%)',
                  }}
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="input-field pt-4 min-h-[120px] resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
