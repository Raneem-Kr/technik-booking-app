import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServicesSection from "../sections/ServicesSection";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="bg-blue-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-6xl font-bold text-gray-900">
              Unsere Services
            </h1>

            <p className="max-w-3xl text-2xl text-gray-600">
              Professionelle technische Hilfe direkt bei Ihnen zuhause.
            </p>
          </div>
        </div>

        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
