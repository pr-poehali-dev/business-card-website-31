const HERO_IMG = 'https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/7c582d76-b191-4802-8ccd-7abe1c221ce2.jpg';

const stats = [
  { n: '15+', l: 'лет работы' },
  { n: '12 000+', l: 'пациентов' },
  { n: '98%', l: 'довольных' },
  { n: '24/7', l: 'поддержка' },
];

const DentalHero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#f0f7ff', paddingTop: 80 }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '4rem 1.5rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="grid-dental-hero">
          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1.5rem',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6' }} />
              <span style={{ fontSize: '0.72rem', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Современная стоматология
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Ваша улыбка —<br />
              <span style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                наша забота
              </span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.8, maxWidth: 460, marginBottom: '2.5rem' }}>
              Лечим зубы без боли и страха. Современное оборудование, опытные врачи и тёплая атмосфера для комфортного лечения всей семьи.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={() => scrollTo('contacts')} style={{
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                color: '#fff', border: 'none', cursor: 'pointer',
                padding: '0.9rem 2rem', borderRadius: 12,
                fontSize: '0.9rem', fontWeight: 700,
                boxShadow: '0 8px 24px rgba(59,130,246,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(59,130,246,0.45)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(59,130,246,0.35)'; }}
              >
                Записаться на приём
              </button>
              <button onClick={() => scrollTo('services')} style={{
                background: '#fff', color: '#3b82f6', border: '1.5px solid rgba(59,130,246,0.3)', cursor: 'pointer',
                padding: '0.9rem 2rem', borderRadius: 12,
                fontSize: '0.9rem', fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Наши услуги
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Без боли', 'Гарантия качества', 'Семейная клиника'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem' }}>✓</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(15,23,42,0.12)', position: 'relative' }}>
              <img src={HERO_IMG} alt="Клиника" style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.15) 0%, transparent 60%)' }} />
            </div>

            {/* Floating card — experience */}
            <div style={{
              position: 'absolute', bottom: -20, left: -24,
              background: '#fff', borderRadius: 16, padding: '1rem 1.25rem',
              boxShadow: '0 16px 40px rgba(15,23,42,0.12)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏆</div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>15 лет</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 2 }}>на рынке</div>
              </div>
            </div>

            {/* Floating card — rating */}
            <div style={{
              position: 'absolute', top: 24, right: -20,
              background: '#fff', borderRadius: 16, padding: '0.85rem 1.1rem',
              boxShadow: '0 16px 40px rgba(15,23,42,0.1)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: '1.2rem' }}>⭐</span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>4.9</div>
                <div style={{ fontSize: '0.65rem', color: '#64748b' }}>рейтинг</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px', background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.1)', borderRadius: 16,
          overflow: 'hidden', marginTop: '4rem',
        }} className="stats-dental-grid">
          {stats.map(s => (
            <div key={s.l} style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-dental-hero { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .stats-dental-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default DentalHero;
