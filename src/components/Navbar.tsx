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
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled ? 'rgba(13,11,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer leading-none" onClick={() => scrollTo('hero')}>
          <span style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontSize: '1.4rem',
            fontWeight: 600,
            color: 'var(--gold)',
            letterSpacing: '0.08em',
          }}>
            СОЗДАМ САЙТ
          </span>
          <span style={{
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(237,224,196,0.35)',
            marginTop: 1,
          }}>
            Веб-разработка
          </span>
        </div>

        {/* Desktop nav */}
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
          className="hidden md:block primary-btn px-5 py-2.5 rounded-sm"
        >
          Связаться
        </button>

        <button
          className="md:hidden transition-colors"
          style={{ color: 'var(--gold)' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(13,11,8,0.97)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
          className="md:hidden px-6 py-5 flex flex-col gap-5">
          {[
            { label: 'Главная', id: 'hero' },
            { label: 'Услуги', id: 'services' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left text-sm">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
