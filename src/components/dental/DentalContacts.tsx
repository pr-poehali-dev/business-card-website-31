import { useState } from 'react';
import Icon from '@/components/ui/icon';

const DentalContacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', time: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.8rem 1rem',
    border: '1.5px solid #e2e8f0', borderRadius: 10,
    fontSize: '0.9rem', color: '#0f172a', background: '#f8fafc',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="contacts" style={{ padding: '6rem 1.5rem', background: '#f0f7ff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '1rem',
          }}>
            <span style={{ fontSize: '0.72rem', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Запись</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Записаться на приём
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: 440, margin: '0 auto' }}>
            Оставьте заявку — мы перезвоним в течение 15 минут
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }} className="dental-contacts-grid">
          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', boxShadow: '0 4px 24px rgba(15,23,42,0.07)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Заявка принята!</h3>
                <p style={{ color: '#64748b' }}>Мы свяжемся с вами в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Онлайн-запись</h3>
                <input
                  style={inputStyle}
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                  required
                />
                <input
                  style={inputStyle}
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                  required
                />
                <select
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                >
                  <option value="">Выберите услугу</option>
                  <option>Лечение зубов</option>
                  <option>Отбеливание</option>
                  <option>Протезирование</option>
                  <option>Имплантация</option>
                  <option>Брекеты / Элайнеры</option>
                  <option>Гигиена</option>
                </select>
                <select
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                >
                  <option value="">Удобное время</option>
                  <option>Утро (9:00–12:00)</option>
                  <option>День (12:00–16:00)</option>
                  <option>Вечер (16:00–20:00)</option>
                </select>
                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '0.9rem', borderRadius: 12,
                  fontSize: '0.95rem', fontWeight: 700, marginTop: '0.5rem',
                  boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(59,130,246,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(59,130,246,0.3)'; }}
                >
                  Записаться бесплатно
                </button>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center' }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: 'MapPin', label: 'Адрес', value: 'ул. Примерная, 15, Москва', sub: 'м. Пушкинская, 5 мин пешком' },
              { icon: 'Phone', label: 'Телефон', value: '+7 (999) 000-00-00', sub: 'Ежедневно 9:00–21:00' },
              { icon: 'Clock', label: 'График работы', value: 'Пн–Пт: 9:00–21:00', sub: 'Сб–Вс: 10:00–19:00' },
              { icon: 'MessageCircle', label: 'Telegram / WhatsApp', value: '@dentaclinik', sub: 'Ответим за 5 минут' },
            ].map(item => (
              <div key={item.label} style={{
                background: '#fff', borderRadius: 14,
                padding: '1.25rem 1.5rem',
                boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={item.icon} size={18} style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>{item.value}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .dental-contacts-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default DentalContacts;
