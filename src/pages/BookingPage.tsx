import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { supabase } from "../lib/supabase";

type Slot = {
  id: number;
  date: string;
  time: string;
  available: boolean;
};

function BookingPage() {
  const location = useLocation();

  const service = location.state?.service;

  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);

  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const fetchSlots = async () => {
      const { data, error } = await supabase
        .from("available_slots")
        .select("*")
        .eq("available", true);

      if (error) {
        console.log(error);
        return;
      }

      setAvailableSlots(data || []);
    };

    fetchSlots();
  }, []);

 const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   if (!selectedSlot) {
     alert("Bitte wählen Sie einen Termin aus.");
     return;
   }

   // 1. Save booking
   const { error } = await supabase.from("bookings").insert([
     {
       customer_name: name,
       phone,
       address,

       service_title: service?.title,
       service_price: service?.price,
       service_duration: service?.duration,

       booking_date: selectedSlot.date,
       booking_time: selectedSlot.time,

       payment_method: paymentMethod,
       status: "pending",
     },
   ]);

   if (error) {
     console.log(error);

     alert("Fehler beim Buchen.");

     return;
   }

   // 2. Hide slot after booking
   await supabase
     .from("available_slots")
     .update({
       available: false,
     })
     .eq("id", selectedSlot.id);

   // 3. Remove slot directly from UI
   setAvailableSlots((prev) =>
     prev.filter((slot) => slot.id !== selectedSlot.id),
   );

   alert("Termin erfolgreich gebucht!");

   // Reset form
   setName("");
   setPhone("");
   setAddress("");
   setPaymentMethod("");
   setSelectedSlot(null);
 };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-lg font-semibold text-blue-600">
            Termin buchen
          </p>

          <h1 className="text-5xl font-bold text-slate-900">
            Ihren Termin auswählen
          </h1>
        </div>

        {/* Main Card */}
        <div className="rounded-[36px] bg-white p-10 shadow-sm">
          {/* Service Info */}
          <div className="mb-10 rounded-3xl bg-slate-50 p-8">
            <h2 className="mb-6 text-3xl font-semibold text-slate-900">
              Ausgewählte Dienstleistung
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-5">
                <span className="text-lg text-slate-500">Service</span>

                <span className="text-xl font-semibold text-slate-900">
                  {service?.title}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-5">
                <span className="text-lg text-slate-500">Dauer</span>

                <span className="text-xl font-semibold text-slate-900">
                  {service?.duration}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-5">
                <span className="text-lg text-slate-500">Preis</span>

                <span className="text-xl font-semibold text-blue-600">
                  {service?.price}
                </span>
              </div>
            </div>
          </div>

          {/* Available Slots */}
          <div className="mb-10">
            <h2 className="mb-6 text-3xl font-semibold text-slate-900">
              Verfügbare Termine
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {availableSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`
                    rounded-2xl
                    border
                    px-6
                    py-5
                    text-lg
                    font-medium
                    transition

                    ${
                      selectedSlot?.id === slot.id
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-700"
                    }
                  `}
                >
                  <p>{slot.date}</p>

                  <p className="mt-2 text-xl font-semibold">{slot.time}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleBooking} className="space-y-6">
            <input
              type="text"
              placeholder="Ihr Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-6
                py-5
                text-xl
                outline-none
                focus:border-blue-600
              "
            />

            <input
              type="text"
              placeholder="Telefonnummer"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-6
                py-5
                text-xl
                outline-none
                focus:border-blue-600
              "
            />

            <input
              type="text"
              placeholder="Adresse"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-6
                py-5
                text-xl
                outline-none
                focus:border-blue-600
              "
            />

            {/* Payment */}
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-6
                py-5
                text-xl
                outline-none
                focus:border-blue-600
              "
            >
              <option value="">Zahlungsmethode auswählen</option>

              <option value="PayPal">PayPal</option>

              <option value="Banküberweisung">Banküberweisung</option>

              <option value="Barzahlung">Barzahlung</option>
            </select>

            {/* Selected Slot */}
            {selectedSlot && (
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-lg text-slate-600">Ausgewählter Termin</p>

                <p className="mt-2 text-2xl font-semibold text-blue-600">
                  {selectedSlot.date} — {selectedSlot.time}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="
                w-full
                rounded-2xl
                bg-blue-600
                py-5
                text-2xl
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Termin bestätigen
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default BookingPage;
