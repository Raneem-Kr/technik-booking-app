import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}

        <div>
          <h1 className="text-lg font-bold text-blue-600 md:text-2xl">
            Technik Hilfe Zuhause
          </h1>

          <p className="hidden text-sm text-gray-500 md:block">
            Wir helfen direkt bei Ihnen zuhause.
          </p>
        </div>

        {/* Desktop Navigation */}

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

        <Link
          to="/booking"
          className="
            rounded-2xl
            bg-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition
            hover:bg-blue-700
            md:px-6
            md:py-3
            md:text-lg
          "
        >
          Jetzt buchen
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
