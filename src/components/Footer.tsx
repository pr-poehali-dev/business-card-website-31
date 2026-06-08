const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(201,168,76,0.08)', padding: '2rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col leading-none">
          <span style={{ fontFamily: 'Cormorant, Georgia, serif', fontSize: '1.15rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>
            СОЗДАМ САЙТ
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: 'Главная', id: 'hero' },
            { label: 'Услуги', id: 'services' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="nav-link" style={{ fontSize: '0.65rem' }}>
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '0.68rem', color: 'rgba(237,224,196,0.25)', letterSpacing: '0.06em' }}>
          © 2024 Создам сайт
        </div>
      </div>
    </footer>
  );
};

export default Footer;
