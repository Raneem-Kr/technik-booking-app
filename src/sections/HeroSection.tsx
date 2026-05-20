import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-4 text-lg font-semibold text-blue-600">
            Technik Hilfe Zuhause
          </p>

          <h1 className="mb-8 text-6xl font-bold leading-tight tracking-tight text-slate-900">
            Hilfe mit TV, PC & Handy direkt zuhause.
          </h1>

          <p className="mb-10 max-w-2xl text-2xl leading-relaxed text-slate-500">
            Einfach, freundlich und zuverlässig — besonders für Senioren.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/booking"
              className="rounded-2xl bg-blue-600 px-8 py-5 text-xl font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700"
            >
              Jetzt Termin buchen
            </Link>

            <Link
              to="/services"
              className="rounded-2xl border border-slate-300 px-8 py-5 text-xl font-semibold text-slate-700 transition duration-300 hover:bg-slate-100"
            >
              Unsere Services
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-100 opacity-40 blur-3xl" />

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="Technik Hilfe"
            className="relative h-[520px] w-full max-w-[620px] rounded-[40px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
