import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const DentalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'Услуги', id: 'services' },
    { label: 'Врачи', id: 'doctors' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '0.85rem 0' : '1.25rem 0',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '1.1rem' }}>🦷</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>ДентаКлиник</div>
            <div style={{ fontSize: '0.6rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Стоматология</div>
          </div>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 500, color: '#475569',
              letterSpacing: '0.02em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#3b82f6')}
            onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden md:flex">
          <a href="tel:+79990000000" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none',
          }}>
            <Icon name="Phone" size={14} style={{ color: '#3b82f6' }} />
            +7 (999) 000-00-00
          </a>
          <button onClick={() => scrollTo('contacts')} style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            color: '#fff', border: 'none', cursor: 'pointer',
            padding: '0.6rem 1.25rem', borderRadius: 8,
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.02em',
            boxShadow: '0 4px 14px rgba(59,130,246,0.3)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(59,130,246,0.4)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(59,130,246,0.3)'; }}
          >
            Записаться
          </button>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0f172a' }}>
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #f1f5f9', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '1rem', fontWeight: 500, color: '#475569', textAlign: 'left',
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contacts')} style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            color: '#fff', border: 'none', cursor: 'pointer',
            padding: '0.75rem', borderRadius: 8, fontSize: '0.9rem', fontWeight: 600,
          }}>
            Записаться на приём
          </button>
        </div>
      )}
    </nav>
  );
};

export default DentalNavbar;
