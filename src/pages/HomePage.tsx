import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import BookingSection from "../sections/BookingSection";

function HomePage() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <ServicesSection />

      <BookingSection />

      <Footer />
    </main>
  );
}

export default HomePage;
