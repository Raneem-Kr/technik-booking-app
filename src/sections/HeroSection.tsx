import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}

        <div className="text-center lg:text-left">
          <p className="mb-4 text-base font-semibold text-blue-600 md:text-lg">
            Technik Hilfe Zuhause
          </p>

          <h1
            className="
              mb-6
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              md:text-6xl
            "
          >
            Hilfe mit TV, PC & Handy direkt zuhause.
          </h1>

          <p
            className="
              mb-10
              text-lg
              leading-relaxed
              text-slate-500
              md:text-2xl
            "
          >
            Einfach, freundlich und zuverlässig — besonders für Senioren.
          </p>

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
          >
            <Link
              to="/booking"
              className="
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-lg
                transition
                duration-300
                hover:bg-blue-700
                md:text-xl
              "
            >
              Jetzt Termin buchen
            </Link>

            <Link
              to="/services"
              className="
                rounded-2xl
                border
                border-slate-300
                px-8
                py-4
                text-lg
                font-semibold
                text-slate-700
                transition
                duration-300
                hover:bg-slate-100
                md:text-xl
              "
            >
              Unsere Services
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-[40px]
              bg-blue-100
              opacity-40
              blur-3xl
            "
          />

          {/* Image */}

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="Technik Hilfe"
            className="
              relative
              h-[320px]
              w-full
              max-w-[620px]
              rounded-[40px]
              object-cover
              shadow-2xl
              md:h-[520px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
