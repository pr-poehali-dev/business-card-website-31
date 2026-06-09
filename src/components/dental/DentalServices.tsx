const services = [
  { icon: '🦷', title: 'Лечение зубов', desc: 'Безболезненное лечение кариеса, пульпита и других заболеваний с гарантией качества.', price: 'от 2 500 ₽', tag: 'Популярно' },
  { icon: '✨', title: 'Отбеливание', desc: 'Профессиональное отбеливание ZOOM4. Результат — зубы на 6–10 тонов светлее за 1 час.', price: 'от 15 000 ₽', tag: '' },
  { icon: '🦺', title: 'Протезирование', desc: 'Коронки, виниры, мосты из современных материалов. Восстановим любой дефект.', price: 'от 8 000 ₽', tag: '' },
  { icon: '🔲', title: 'Брекеты / Элайнеры', desc: 'Исправление прикуса прозрачными элайнерами или брекет-системами. Незаметно.', price: 'от 35 000 ₽', tag: 'Хит' },
  { icon: '🔩', title: 'Имплантация', desc: 'Установка имплантов без разрезов. Пожизненная гарантия на конструкцию.', price: 'от 40 000 ₽', tag: 'Гарантия' },
  { icon: '🧹', title: 'Гигиена', desc: 'Профессиональная чистка ультразвуком + Air Flow. Удаление камня и налёта.', price: 'от 3 500 ₽', tag: '' },
];

const DentalServices = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" style={{ padding: '6rem 1.5rem', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1rem',
          }}>
            <span style={{ fontSize: '0.72rem', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Что мы лечим</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.15 }}>
            Наши услуги
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Полный спектр стоматологических услуг для детей и взрослых
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="dental-services-grid">
          {services.map((s) => (
            <div key={s.title}
              style={{
                background: '#f8fafc', border: '1.5px solid #e2e8f0',
                borderRadius: 16, padding: '1.75rem',
                transition: 'all 0.3s ease', cursor: 'pointer', position: 'relative',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border = '1.5px solid rgba(59,130,246,0.4)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(59,130,246,0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.background = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border = '1.5px solid #e2e8f0';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.background = '#f8fafc';
              }}
            >
              {s.tag && (
                <span style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  color: '#fff', fontSize: '0.62rem', fontWeight: 700,
                  padding: '0.2rem 0.6rem', borderRadius: 100, letterSpacing: '0.06em',
                }}>
                  {s.tag}
                </span>
              )}
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#3b82f6' }}>{s.price}</span>
                <button onClick={() => scrollTo('contacts')} style={{
                  background: 'rgba(59,130,246,0.08)', color: '#3b82f6',
                  border: 'none', cursor: 'pointer',
                  fontSize: '0.75rem', fontWeight: 600, padding: '0.4rem 0.85rem', borderRadius: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.08)')}
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .dental-services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .dental-services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default DentalServices;
