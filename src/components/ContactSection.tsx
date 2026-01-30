import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Globe, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Create mailto link as a simple submission method
    const subject = encodeURIComponent(`Contact from ${formState.name}${formState.company ? ` - ${formState.company}` : ''}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company || 'N/A'}\n\nMessage:\n${formState.message}`);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open mail client
    window.location.href = `mailto:info@evolvatexllc.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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

  const inputFields = [
    { name: 'name', label: 'Your Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'company', label: 'Company (Optional)', type: 'text', required: false },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground logo-text">EvolvateX LLC</h3>
              <p className="text-muted-foreground">
                Engineering intelligent solutions for tomorrow's challenges.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...{ transition: { delay: index * 0.1 } } as any}
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
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="space-y-6">
                    {inputFields.map((field) => (
                      <div key={field.name} className="relative">
                        <motion.label
                          className="absolute left-4 transition-all duration-300 pointer-events-none z-10"
                          animate={{
                            y: focusedField === field.name || formState[field.name as keyof typeof formState] ? -28 : 12,
                            scale: focusedField === field.name || formState[field.name as keyof typeof formState] ? 0.85 : 1,
                            color: focusedField === field.name ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                          }}
                        >
                          {field.label}
                        </motion.label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formState[field.name as keyof typeof formState]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className={`input-field pt-4 ${errors[field.name] ? 'border-destructive' : ''}`}
                          required={field.required}
                        />
                        {errors[field.name] && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-destructive mt-1"
                          >
                            {errors[field.name]}
                          </motion.p>
                        )}
                      </div>
                    ))}

                    {/* Message Input */}
                    <div className="relative">
                      <motion.label
                        className="absolute left-4 top-0 transition-all duration-300 pointer-events-none z-10"
                        animate={{
                          y: focusedField === 'message' || formState.message ? -28 : 12,
                          scale: focusedField === 'message' || formState.message ? 0.85 : 1,
                          color: focusedField === 'message' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
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
                        className={`input-field pt-4 min-h-[120px] resize-none ${errors.message ? 'border-destructive' : ''}`}
                        required
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button with Glow */}
                    <motion.button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 py-4"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;