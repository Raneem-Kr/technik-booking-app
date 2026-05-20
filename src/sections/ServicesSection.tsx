import { Monitor, Tv, Smartphone, Tablet, Printer } from "lucide-react";

import ServiceCard from "../components/services/ServiceCard";

const services = [
  {
    title: "TV einrichten",
    description: "Professionelle Hilfe direkt zuhause.",
    price: "49€",
    duration: "60 Minuten",
    icon: Tv,
  },
  {
    title: "Smart TV installieren",
    description: "Schnelle und einfache Installation.",
    price: "90€",
    duration: "90 Minuten",
    icon: Monitor,
  },
  {
    title: "PC einrichten",
    description: "Komplette Einrichtung Ihres PCs.",
    price: "90€",
    duration: "90 Minuten",
    icon: Monitor,
  },
  {
    title: "Handy einrichten",
    description: "Hilfe mit Smartphone und Apps.",
    price: "90€",
    duration: "60 Minuten",
    icon: Smartphone,
  },
  {
    title: "Tablet einrichten",
    description: "Einfach erklärt und eingerichtet.",
    price: "90€",
    duration: "40 Minuten",
    icon: Tablet,
  },
  {
    title: "Drucker einrichten",
    description: "Drucker schnell verbinden.",
    price: "90€",
    duration: "45 Minuten",
    icon: Printer,
  },
];

function ServicesSection() {
  return (
    <section className="bg-slate-50 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-lg font-semibold text-blue-600">
            Unsere Dienstleistungen
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Einfache Hilfe mit Technik.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
