import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--dark)]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
