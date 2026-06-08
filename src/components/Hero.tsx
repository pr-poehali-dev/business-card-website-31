const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/ab9fb16b-ae20-4a19-a189-cabf33f8bbdd.jpg"
          alt="bg"
          className="w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(13,11,8,1) 0%, rgba(13,11,8,0.55) 55%, rgba(13,11,8,0.25) 100%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(13,11,8,0.75) 100%)',
        }} />
      </div>

      {/* Floating badges */}
      <div className="absolute top-32 right-16 hidden lg:block animate-float delay-1">
        <div className="card-glass px-4 py-3 rounded-sm flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span style={{ fontSize: '0.8rem', color: 'rgba(237,224,196,0.8)' }}>100+ проектов</span>
        </div>
      </div>
      <div className="absolute bottom-44 left-16 hidden lg:block animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="card-glass px-4 py-3 rounded-sm flex items-center gap-2.5">
          <span>⚡</span>
          <span style={{ fontSize: '0.8rem', color: 'rgba(237,224,196,0.8)' }}>Сдаю в срок</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-up"
            style={{ border: '1px solid rgba(201,168,76,0.25)', padding: '0.35rem 1rem', borderRadius: '2px' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Веб-разработка
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-1" style={{
            fontFamily: 'Cormorant, Georgia, serif',
            fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            color: '#EDE0C4',
          }}>
            Создам сайт,<br />
            <span className="gradient-text">который продаёт</span>
          </h1>

          <p className="animate-fade-up delay-2" style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'rgba(237,224,196,0.55)',
            maxWidth: '480px',
            marginBottom: '2.5rem',
          }}>
            Разрабатываю современные сайты и веб-приложения.
            Быстро, красиво, с результатом для бизнеса.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-3">
            <button onClick={() => scrollTo('contacts')} className="primary-btn px-8 py-3.5 rounded-sm">
              Обсудить проект
            </button>
            <button onClick={() => scrollTo('services')} className="outline-btn px-8 py-3.5 rounded-sm">
              Смотреть услуги
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up delay-4 mt-16 grid grid-cols-3 gap-8 max-w-md"
          style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '1.75rem' }}>
          {[
            { num: '100+', label: 'Проектов' },
            { num: '5+', label: 'Лет опыта' },
            { num: '98%', label: 'Довольных' },
          ].map((s) => (
            <div key={s.label}>
              <div className="gradient-text" style={{
                fontFamily: 'Cormorant, Georgia, serif',
                fontSize: '2.4rem',
                fontWeight: 300,
                lineHeight: 1,
              }}>{s.num}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(237,224,196,0.4)', marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 animate-bounce">
        <div className="w-5 h-8 border border-[var(--gold)] rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;