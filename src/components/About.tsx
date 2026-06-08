import Icon from '@/components/ui/icon';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'UI / UX Дизайн', level: 88 },
  { name: 'Node.js / Python', level: 82 },
  { name: 'SEO & Аналитика', level: 78 },
];

const achievements = [
  { icon: 'Award', text: 'Лучший разработчик 2023' },
  { icon: 'Users', text: '50+ постоянных клиентов' },
  { icon: 'Star', text: 'Рейтинг 4.9 / 5.0' },
  { icon: 'Clock', text: 'Сдаю в срок всегда' },
];

const stats = [
  { n: '100+', l: 'проектов', icon: 'Globe' },
  { n: '5+', l: 'лет опыта', icon: 'Award' },
  { n: '98%', l: 'довольных', icon: 'Heart' },
  { n: '24/7', l: 'поддержка', icon: 'Headphones' },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--dark)' }}>

      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.07] blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.8) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — numbers grid */}
          <div>
            <div className="grid grid-cols-2 gap-px"
              style={{ border: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.1)' }}>
              {stats.map((item) => (
                <div key={item.l} className="p-8 flex flex-col gap-2"
                  style={{ background: 'var(--dark-3)' }}>
                  <Icon name={item.icon} size={16} style={{ color: 'var(--gold)', opacity: 0.55, marginBottom: 4 }} />
                  <div className="gradient-text" style={{
                    fontFamily: 'Cormorant, Georgia, serif',
                    fontSize: '2.8rem',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}>
                    {item.n}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'rgba(237,224,196,0.45)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    {item.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8 space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span style={{ fontSize: '0.82rem', color: 'rgba(237,224,196,0.6)' }}>{skill.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(201,168,76,0.6)' }}>{skill.level}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(201,168,76,0.1)' }}>
                    <div className="h-full rounded-full" style={{
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, var(--gold-dim), var(--gold-light))',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Кто я
            </span>
            <h2 style={{
              fontFamily: 'Cormorant, Georgia, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#EDE0C4',
              marginTop: '0.5rem',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              Создаю сайты<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>с душой и точностью</em>
            </h2>
            <div className="section-divider mb-6" />

            <p style={{ fontSize: '0.97rem', color: 'rgba(237,224,196,0.55)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Привет! Я — веб-разработчик с более чем 5-летним опытом создания современных сайтов
              и приложений. Специализируюсь на React, дизайн-системах и быстром запуске проектов.
            </p>
            <p style={{ fontSize: '0.97rem', color: 'rgba(237,224,196,0.55)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Моя цель — не просто «сделать красиво», но создать инструмент,
              который приносит реальные результаты вашему бизнесу.
            </p>

            <div className="flex flex-col gap-3">
              {achievements.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div style={{
                    width: 32, height: 32,
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    borderRadius: '2px',
                  }}>
                    <Icon name={item.icon} size={14} style={{ color: 'var(--gold)' }} />
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(237,224,196,0.6)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
