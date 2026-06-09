const reviews = [
  { name: 'Ольга М.', age: '34 года', text: 'Наконец-то нашла клинику, где не страшно! Анна Сергеевна — просто чудо. Лечила три зуба — не почувствовала ни укола. Теперь всю семью сюда вожу.', stars: 5, service: 'Лечение кариеса' },
  { name: 'Алексей К.', age: '42 года', text: 'Поставил два импланта. Дмитрий Алексеевич объяснил всё подробно, ни разу не пожалел. Уже полгода — как родные зубы. Цена соответствует качеству.', stars: 5, service: 'Имплантация' },
  { name: 'Марина Н.', age: '28 лет', text: 'Делала элайнеры у Елены Витальевны. Ровно через 8 месяцев — идеальный прикус. Никто вообще не замечал, что я ношу систему. Очень довольна!', stars: 5, service: 'Элайнеры' },
  { name: 'Сергей Д.', age: '51 год', text: 'Долго откладывал протезирование. Пришёл — и не пожалел. Сервис отличный, врачи внимательные. Зубы выглядят естественно. Всем рекомендую.', stars: 5, service: 'Протезирование' },
  { name: 'Юлия Р.', age: '25 лет', text: 'Отбеливание ZOOM4 — результат превзошёл ожидания! Зубы стали на 8 тонов светлее. Вся процедура заняла час, ничего не болело. Улыбаюсь теперь без стеснения!', stars: 5, service: 'Отбеливание' },
  { name: 'Николай В.', age: '38 лет', text: 'Приятная атмосфера, чистота, современное оборудование. Лечусь здесь уже 3 года. Никогда не было проблем. Цены честные, без навязывания лишнего.', stars: 5, service: 'Постоянный пациент' },
];

const DentalReviews = () => {
  return (
    <section id="reviews" style={{ padding: '6rem 1.5rem', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1rem',
          }}>
            <span style={{ fontSize: '0.72rem', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Отзывы</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Что говорят пациенты
          </h2>

          {/* Rating summary */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: '1.2rem' }}>⭐</span>)}
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>4.9</span>
            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>на основе 342 отзывов</span>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="dental-reviews-grid">
          {reviews.map(r => (
            <div key={r.name} style={{
              background: '#f8fafc', border: '1.5px solid #e2e8f0',
              borderRadius: 16, padding: '1.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = '1.5px solid rgba(59,130,246,0.3)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(59,130,246,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '1.5px solid #e2e8f0'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 2, marginBottom: '0.875rem' }}>
                {Array.from({ length: r.stars }).map((_, i) => <span key={i} style={{ fontSize: '0.85rem' }}>⭐</span>)}
              </div>

              {/* Service tag */}
              <span style={{
                display: 'inline-block', fontSize: '0.65rem', fontWeight: 600,
                color: '#3b82f6', background: 'rgba(59,130,246,0.08)',
                padding: '0.2rem 0.6rem', borderRadius: 100, marginBottom: '0.875rem',
              }}>{r.service}</span>

              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                «{r.text}»
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0,
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{r.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{r.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .dental-reviews-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .dental-reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default DentalReviews;
