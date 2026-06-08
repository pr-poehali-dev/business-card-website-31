const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--violet) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--cyan) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-[150px]"
          style={{ background: 'radial-gradient(circle, var(--pink) 0%, transparent 60%)' }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating badges */}
      <div className="absolute top-32 right-12 hidden lg:flex animate-float delay-1">
        <div className="card-glass px-4 py-3 rounded-2xl flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium">100+ проектов</span>
        </div>
      </div>
      <div className="absolute bottom-40 left-12 hidden lg:flex animate-float" style={{ animationDelay: '2s' }}>
        <div className="card-glass px-4 py-3 rounded-2xl flex items-center gap-2.5">
          <span className="text-xl">⚡</span>
          <span className="text-white/80 text-sm font-medium">Быстро и качественно</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-[var(--violet-light)] animate-pulse" />
          <span className="text-white/70 text-sm">Веб-разработка нового поколения</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up delay-1">
          <span className="text-white">Создам сайт,</span>
          <br />
          <span className="gradient-text">который продаёт</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-2">
          Разрабатываю современные сайты и веб-приложения. Быстро, красиво, с результатом для бизнеса.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-3">
          <button
            onClick={() => scrollTo('contacts')}
            className="primary-btn px-8 py-4 rounded-2xl text-base w-full sm:w-auto"
          >
            <span>Обсудить проект</span>
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="px-8 py-4 rounded-2xl text-base font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
          >
            Смотреть услуги
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up delay-4">
          {[
            { num: '100+', label: 'Проектов' },
            { num: '5+', label: 'Лет опыта' },
            { num: '98%', label: 'Довольных' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.num}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
