const doctors = [
  {
    img: 'https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/d9450e4f-5457-4107-8009-cc2aca288b29.jpg',
    name: 'Анна Сергеевна Ковалёва',
    spec: 'Терапевт-стоматолог',
    exp: '12 лет',
    tags: ['Лечение кариеса', 'Эндодонтия', 'Реставрации'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/72e489c4-4d93-418b-8a03-4a5a62aacca5.jpg',
    name: 'Дмитрий Алексеевич Морозов',
    spec: 'Хирург-имплантолог',
    exp: '18 лет',
    tags: ['Имплантация', 'Удаление', 'Костная пластика'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/d9450e4f-5457-4107-8009-cc2aca288b29.jpg',
    name: 'Елена Витальевна Попова',
    spec: 'Ортодонт',
    exp: '9 лет',
    tags: ['Брекеты', 'Элайнеры', 'Детская ортодонтия'],
  },
];

const DentalDoctors = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="doctors" style={{ padding: '6rem 1.5rem', background: '#f0f7ff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1rem',
          }}>
            <span style={{ fontSize: '0.72rem', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Наша команда</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Врачи клиники
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: 440, margin: '0 auto' }}>
            Опытные специалисты с непрерывным профессиональным развитием
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="dental-doctors-grid">
          {doctors.map(d => (
            <div key={d.name} style={{
              background: '#fff', borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(59,130,246,0.14)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(15,23,42,0.06)'; }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)' }} />
                <div style={{
                  position: 'absolute', bottom: 12, left: 12,
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                  borderRadius: 8, padding: '0.35rem 0.75rem',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#3b82f6' }}>Опыт {d.exp}</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{d.name}</h3>
                <p style={{ fontSize: '0.82rem', color: '#3b82f6', fontWeight: 600, marginBottom: '1rem' }}>{d.spec}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
                  {d.tags.map(t => (
                    <span key={t} style={{
                      fontSize: '0.68rem', padding: '0.25rem 0.6rem',
                      background: 'rgba(59,130,246,0.06)', color: '#475569',
                      borderRadius: 6, border: '1px solid rgba(59,130,246,0.12)',
                    }}>{t}</span>
                  ))}
                </div>
                <button onClick={() => scrollTo('contacts')} style={{
                  width: '100%', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '0.7rem', borderRadius: 10,
                  fontSize: '0.82rem', fontWeight: 600,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Записаться к врачу
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .dental-doctors-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .dental-doctors-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default DentalDoctors;
