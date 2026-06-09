const DentalFooter = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#0f172a', color: '#e2e8f0', padding: '3rem 1.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '2.5rem' }} className="dental-footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🦷</div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>ДентаКлиник</div>
                <div style={{ fontSize: '0.6rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Стоматология</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, maxWidth: 300 }}>
              Современная стоматология для всей семьи. Лечим без боли и страха уже 15 лет.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Меню</div>
            {[
              { label: 'Услуги', id: 'services' },
              { label: 'Врачи', id: 'doctors' },
              { label: 'Отзывы', id: 'reviews' },
              { label: 'Контакты', id: 'contacts' },
            ].map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.875rem', color: '#64748b', marginBottom: '0.6rem', padding: 0,
                textAlign: 'left', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#3b82f6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Контакты</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 2 }}>
              <div>+7 (999) 000-00-00</div>
              <div>ул. Примерная, 15</div>
              <div>Пн–Пт: 9:00–21:00</div>
              <div>Сб–Вс: 10:00–19:00</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', color: '#475569' }}>© 2024 ДентаКлиник. Все права защищены.</div>
          <div style={{ fontSize: '0.75rem', color: '#475569' }}>Политика конфиденциальности</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .dental-footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </footer>
  );
};

export default DentalFooter;
