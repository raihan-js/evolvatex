import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WhyXSection from '@/components/WhyXSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <HowWeWorkSection />
        <WhyXSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;