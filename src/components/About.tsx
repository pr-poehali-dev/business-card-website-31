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

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bg */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--cyan) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image + badges */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0">
              <img
                src="https://cdn.poehali.dev/projects/4291bf37-aa2b-460a-b8ba-50efb6e0f68d/files/e20395c2-37cf-4fc5-afa2-deda313c5177.jpg"
                alt="Разработчик"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-60" />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(124,58,237,0.3)' }}
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 card-glass px-5 py-4 rounded-2xl">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-white/50 text-sm">лет в разработке</div>
            </div>

            {/* Spinning ring */}
            <div
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-dashed border-[var(--violet)]/30 animate-spin-slow"
            />
          </div>

          {/* Right — content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-[var(--cyan)] text-sm font-medium">Обо мне</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Создаю сайты,{' '}
              <span className="gradient-text-pink">которые работают</span>
            </h2>

            <p className="text-white/50 leading-relaxed mb-4">
              Привет! Я — веб-разработчик с более чем 5-летним опытом создания современных сайтов и
              приложений. Специализируюсь на React, дизайн-системах и быстром запуске проектов.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Моя цель — не просто «сделать красиво», но создать инструмент, который приносит реальные
              результаты вашему бизнесу.
            </p>

            {/* Skills */}
            <div className="space-y-4 mb-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/70 text-sm">{skill.name}</span>
                    <span className="text-white/40 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, var(--violet), var(--cyan))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 card-glass rounded-xl px-4 py-3">
                  <Icon name={item.icon} size={16} className="text-[var(--violet-light)] flex-shrink-0" />
                  <span className="text-white/60 text-xs">{item.text}</span>
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
