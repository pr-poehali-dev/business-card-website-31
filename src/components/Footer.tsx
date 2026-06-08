const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--violet)] to-[var(--cyan)] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-['Space_Grotesk']">С</span>
          </div>
          <span className="text-white/60 text-sm font-medium">Создам сайт</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: 'Главная', id: 'hero' },
            { label: 'Услуги', id: 'services' },
            { label: 'О нас', id: 'about' },
            { label: 'Контакты', id: 'contacts' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="text-white/25 text-xs">© 2024 Создам сайт</div>
      </div>
    </footer>
  );
};

export default Footer;
