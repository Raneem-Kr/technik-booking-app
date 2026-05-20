function Footer() {
  return (
    <footer className="border-t bg-slate-100 px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">
            Technik Hilfe Zuhause
          </h3>

          <p className="mt-3 text-lg text-slate-600">
            Persönliche Technik-Hilfe bei Ihnen zuhause.
          </p>
        </div>

        <div className="text-lg text-slate-600">
          <p>📞 +49 000 000000</p>

          <p className="mt-2">✉ info@technikhilfe-zuhause.de</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
