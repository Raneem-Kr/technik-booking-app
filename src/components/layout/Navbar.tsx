import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Technik Hilfe Zuhause
          </h1>

          <p className="text-sm text-gray-500">
            Wir helfen direkt bei Ihnen zuhause.
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            to="/booking"
            className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
          >
            Termin
          </Link>

          <Link
            to="/contact"
            className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA */}
        <button className="rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700">
          Jetzt buchen
        </button>
      </div>
    </header>
  );
}

export default Navbar;
