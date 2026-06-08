import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Globe',
    title: 'Сайт-визитка',
    description: 'Современный лендинг или корпоративный сайт, который выделяет вас среди конкурентов.',
    tags: ['Landing', 'Corporate', 'Portfolio'],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(124, 58, 237, 0.3)',
  },
  {
    icon: 'ShoppingCart',
    title: 'Интернет-магазин',
    description: 'Полноценный магазин с каталогом, корзиной и интеграцией платёжных систем.',
    tags: ['E-commerce', 'Каталог', 'Оплата'],
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: 'Smartphone',
    title: 'Мобильная версия',
    description: 'Адаптивный дизайн, который идеально выглядит на любом устройстве.',
    tags: ['Adaptive', 'PWA', 'Mobile'],
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: 'Zap',
    title: 'Быстрый запуск',
    description: 'Готовый сайт за 5–7 дней. Минимум слов — максимум результата.',
    tags: ['Fast', '5–7 дней', 'Готово'],
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.3)',
  },
  {
    icon: 'Search',
    title: 'SEO-продвижение',
    description: 'Настраиваю сайт так, чтобы вас находили в Google и Яндекс.',
    tags: ['Google', 'Яндекс', 'Трафик'],
    color: 'from-green-400 to-emerald-500',
    glow: 'rgba(52, 211, 153, 0.3)',
  },
  {
    icon: 'Headphones',
    title: 'Поддержка',
    description: 'Техническая поддержка и доработки после запуска. Всегда на связи.',
    tags: ['24/7', 'Доработки', 'Поддержка'],
    color: 'from-indigo-400 to-violet-500',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--violet) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-5">
            <span className="text-[var(--violet-light)] text-sm font-medium">Что я делаю</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Мои <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Полный цикл создания веб-продуктов — от идеи до запуска
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card-glass rounded-2xl p-6 group cursor-pointer transition-all duration-400 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                style={{ boxShadow: `0 8px 30px ${service.glow}` }}
              >
                <Icon name={service.icon} size={22} className="text-white" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/50 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
