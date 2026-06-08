import Icon from '@/components/ui/icon';

const contacts = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'hello@sozdamsait.ru',
    href: 'mailto:hello@sozdamsait.ru',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: 'Phone',
    label: 'Телефон',
    value: '+7 (999) 000-00-00',
    href: 'tel:+79990000000',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: 'MessageCircle',
    label: 'Telegram',
    value: '@sozdamsait',
    href: 'https://t.me/sozdamsait',
    color: 'from-blue-400 to-cyan-500',
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--violet) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-5">
            <span className="text-[var(--pink)] text-sm font-medium">Поговорим</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Свяжитесь <span className="gradient-text">со мной</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Готов обсудить ваш проект. Отвечаю в течение часа.
          </p>
        </div>

        {/* CTA big card */}
        <div className="relative rounded-3xl overflow-hidden mb-8 p-8 md:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.1) 100%)', border: '1px solid rgba(124,58,237,0.2)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Готовы запустить проект?
            </h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Напишите мне сегодня — и через неделю у вас уже будет работающий сайт.
            </p>
            <a
              href="mailto:hello@sozdamsait.ru"
              className="primary-btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base"
            >
              <span>Написать сейчас</span>
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card-glass rounded-2xl p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={contact.icon} size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white/40 text-xs mb-0.5">{contact.label}</div>
                <div className="text-white/80 text-sm font-medium">{contact.value}</div>
              </div>
              <Icon name="ArrowUpRight" size={16} className="text-white/20 ml-auto group-hover:text-white/50 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
