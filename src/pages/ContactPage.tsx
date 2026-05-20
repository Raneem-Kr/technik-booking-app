import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-blue-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-6xl font-bold text-gray-900">Kontakt</h1>

            <p className="max-w-3xl text-2xl text-gray-600">
              Kontaktieren Sie uns einfach und schnell.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="mb-8 text-4xl font-bold text-gray-900">
                Wir helfen Ihnen gerne
              </h2>

              <div className="space-y-6 text-xl text-gray-700">
                <div className="rounded-3xl border p-6 shadow-sm">
                  <p className="font-semibold">📞 Telefon</p>
                  <p className="mt-2">+49 000 000000</p>
                </div>

                <div className="rounded-3xl border p-6 shadow-sm">
                  <p className="font-semibold">✉ E-Mail</p>
                  <p className="mt-2">info@technikhilfe-zuhause.de</p>
                </div>

                <div className="rounded-3xl border p-6 shadow-sm">
                  <p className="font-semibold">📍 Adresse</p>
                  <p className="mt-2">Deutschland</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[32px] border bg-white p-10 shadow-xl">
              <h3 className="mb-8 text-3xl font-bold">Nachricht senden</h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full rounded-2xl border p-5 text-xl outline-none"
                />

                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="w-full rounded-2xl border p-5 text-xl outline-none"
                />

                <textarea
                  placeholder="Ihre Nachricht"
                  rows={6}
                  className="w-full rounded-2xl border p-5 text-xl outline-none"
                />

                <button className="w-full rounded-2xl bg-blue-600 py-5 text-2xl font-bold text-white transition hover:bg-blue-700">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
