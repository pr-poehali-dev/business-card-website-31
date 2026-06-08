import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--dark)]/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--violet)] to-[var(--cyan)] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-['Space_Grotesk']">С</span>
          </div>
          <span className="text-white font-semibold text-lg font-['Space_Grotesk']">Создам сайт</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Главная', id: 'hero' },
            { label: 'Услуги', id: 'services' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contacts')}
          className="hidden md:flex primary-btn px-5 py-2.5 rounded-xl text-sm items-center gap-2"
        >
          <span>Связаться</span>
        </button>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--dark-2)] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Главная', id: 'hero' },
            { label: 'Услуги', id: 'services' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left text-base">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
