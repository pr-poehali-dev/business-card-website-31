import Icon from '@/components/ui/icon';

const services = [
  {
    num: '01',
    icon: 'Globe',
    title: 'Сайт-визитка',
    description: 'Современный лендинг или корпоративный сайт, который выделяет вас среди конкурентов.',
    tags: ['Landing', 'Corporate', 'Portfolio'],
  },
  {
    num: '02',
    icon: 'ShoppingCart',
    title: 'Интернет-магазин',
    description: 'Полноценный магазин с каталогом, корзиной и интеграцией платёжных систем.',
    tags: ['E-commerce', 'Каталог', 'Оплата'],
  },
  {
    num: '03',
    icon: 'Smartphone',
    title: 'Мобильная версия',
    description: 'Адаптивный дизайн, который идеально выглядит на любом устройстве.',
    tags: ['Adaptive', 'PWA', 'Mobile'],
  },
  {
    num: '04',
    icon: 'Zap',
    title: 'Быстрый запуск',
    description: 'Готовый сайт за 5–7 дней. Минимум слов — максимум результата.',
    tags: ['Fast', '5–7 дней', 'Готово'],
  },
  {
    num: '05',
    icon: 'Search',
    title: 'SEO-продвижение',
    description: 'Настраиваю сайт так, чтобы вас находили в Google и Яндекс.',
    tags: ['Google', 'Яндекс', 'Трафик'],
  },
  {
    num: '06',
    icon: 'Headphones',
    title: 'Поддержка',
    description: 'Техническая поддержка и доработки после запуска. Всегда на связи.',
    tags: ['24/7', 'Доработки', 'Поддержка'],
  },
];

const Services = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--dark-2)' }}>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-8 blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Что я делаю
          </span>
          <h2 style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#EDE0C4',
            marginTop: '0.5rem',
            lineHeight: 1.1,
          }}>
            Мои <span className="gradient-text">услуги</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ border: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.08)' }}>
          {services.map((s, i) => (
            <div key={s.title}
              className="flex flex-col gap-4 p-7 group cursor-pointer transition-all duration-400"
              style={{
                background: 'var(--dark-3)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--dark-4)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--dark-3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="flex items-start justify-between">
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.45)' }}>
                  {s.num}
                </span>
                <Icon name={s.icon} size={18} style={{ color: 'var(--gold)', opacity: 0.65 }} />
              </div>

              <h3 style={{
                fontFamily: 'Cormorant, Georgia, serif',
                fontSize: '1.35rem',
                fontWeight: 500,
                color: '#EDE0C4',
                lineHeight: 1.25,
              }}>
                {s.title}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'rgba(237,224,196,0.5)', lineHeight: 1.7 }}>
                {s.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4"
                style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.65rem',
                    padding: '0.2rem 0.6rem',
                    border: '1px solid rgba(201,168,76,0.15)',
                    color: 'rgba(201,168,76,0.55)',
                    letterSpacing: '0.06em',
                    borderRadius: '2px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button onClick={() => scrollTo('contacts')} className="outline-btn px-10 py-3.5 rounded-sm">
            Обсудить проект →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
