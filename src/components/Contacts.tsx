import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'hello@sozdamsait.ru', href: 'mailto:hello@sozdamsait.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 000-00-00', href: 'tel:+79990000000' },
  { icon: 'MessageCircle', label: 'Telegram', value: '@sozdamsait', href: 'https://t.me/sozdamsait' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–20:00', href: '#' },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(201,168,76,0.08)' }}>

      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.08] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.9) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Поговорим
          </span>
          <h2 style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#EDE0C4',
            marginTop: '0.5rem',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            Свяжитесь <span className="gradient-text">со мной</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p style={{ fontSize: '1rem', color: 'rgba(237,224,196,0.45)', marginTop: '1rem' }}>
            Готов обсудить ваш проект. Отвечаю в течение часа.
          </p>
        </div>

        {/* CTA card */}
        <div className="relative overflow-hidden mb-8 p-10 md:p-14 text-center rounded-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(160,120,48,0.05) 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
          }}>
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.08) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          <div className="relative z-10">
            <div className="text-4xl mb-5">🚀</div>
            <h3 style={{
              fontFamily: 'Cormorant, Georgia, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 400,
              color: '#EDE0C4',
              marginBottom: '0.75rem',
            }}>
              Готовы запустить проект?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(237,224,196,0.5)', marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem' }}>
              Напишите сегодня — и через неделю у вас уже будет работающий сайт.
            </p>
            <a href="mailto:hello@sozdamsait.ru"
              className="primary-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-sm">
              Написать сейчас
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px"
          style={{ border: '1px solid rgba(201,168,76,0.08)', background: 'rgba(201,168,76,0.08)' }}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex flex-col gap-2 p-5 transition-all duration-300"
              style={{ background: 'var(--dark-3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--dark-4)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark-3)')}
            >
              <div style={{
                width: 36, height: 36,
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '2px', marginBottom: 4,
              }}>
                <Icon name={c.icon} size={15} style={{ color: 'var(--gold)' }} />
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(237,224,196,0.3)' }}>
                {c.label}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(237,224,196,0.75)' }}>
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
