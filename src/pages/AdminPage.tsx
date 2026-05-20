import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

type Slot = {
  id: number;
  date: string;
  time: string;
  available: boolean;
};

type Booking = {
  id: number;

  customer_name: string;

  phone: string;

  address: string;

  booking_date: string;

  booking_time: string;

  payment_method: string;

  service_title: string;

  status: string;
};

function AdminPage() {
  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(false);

  const [slots, setSlots] = useState<Slot[]>([]);

  const [bookings, setBookings] = useState<Booking[]>([]);

  // =========================
  // FETCH SLOTS
  // =========================

  const fetchSlots = async () => {
    const { data, error } = await supabase
      .from("available_slots")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.log(error);

      return;
    }

    setSlots(data || []);
  };

  // =========================
  // FETCH BOOKINGS
  // =========================

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);

      return;
    }

    setBookings(data || []);
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    fetchSlots();

    fetchBookings();
  }, []);

  // =========================
  // ADD SLOT
  // =========================

  const handleAddSlot = async () => {
    if (!date || !time) {
      alert("Bitte Datum und Uhrzeit auswählen");

      return;
    }

    setLoading(true);

    const { error } = await supabase.from("available_slots").insert([
      {
        date,
        time,
        available: true,
      },
    ]);

    setLoading(false);

    if (error) {
      console.log(error);

      alert(error.message);

      return;
    }

    alert("Termin hinzugefügt");

    setDate("");

    setTime("");

    fetchSlots();
  };

  // =========================
  // DELETE SLOT
  // =========================

  const handleDeleteSlot = async (id: number) => {
    const { error } = await supabase
      .from("available_slots")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);

      alert("Fehler beim Löschen");

      return;
    }

    fetchSlots();
  };

  // =========================
  // CONFIRM BOOKING
  // =========================

  const handleConfirmBooking = async (id: number) => {
    const { error } = await supabase
      .from("bookings")
      .update({
        status: "confirmed",
      })
      .eq("id", id);

    if (error) {
      console.log(error);

      return;
    }

    fetchBookings();
  };

  // =========================
  // DELETE BOOKING
  // =========================

  const handleDeleteBooking = async (id: number) => {
    const { error } = await supabase.from("bookings").delete().eq("id", id);

    if (error) {
      console.log(error);

      alert("Fehler beim Löschen");

      return;
    }

    fetchBookings();
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = async () => {
    await supabase.auth.signOut();

    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}

        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 text-lg font-semibold text-blue-600">
              Admin Dashboard
            </p>

            <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Termine verwalten
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="
              rounded-2xl
              bg-red-500
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-red-600
            "
          >
            Logout
          </button>
        </div>

        {/* ADD SLOT */}

        <div className="mb-14 rounded-[36px] bg-white p-6 shadow-sm md:p-10">
          <h2 className="mb-8 text-2xl font-semibold text-slate-900 md:text-3xl">
            Neuen Termin hinzufügen
          </h2>

          <div className="space-y-6">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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

            <button
              onClick={handleAddSlot}
              disabled={loading}
              className="
                w-full
                rounded-2xl
                bg-blue-600
                py-5
                text-xl
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              {loading ? "Wird gespeichert..." : "Termin hinzufügen"}
            </button>
          </div>
        </div>

        {/* AVAILABLE SLOTS */}

        <div className="rounded-[36px] bg-white p-6 shadow-sm md:p-10">
          <h2 className="mb-8 text-2xl font-semibold text-slate-900 md:text-3xl">
            Verfügbare Termine
          </h2>

          <div className="space-y-4">
            {slots.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
                Keine Termine vorhanden.
              </div>
            )}

            {slots.map((slot) => (
              <div
                key={slot.id}
                className="
                  flex
                  flex-col
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
                  <p className="text-xl font-semibold text-slate-900">
                    {slot.date}
                  </p>

                  <p className="mt-2 text-lg text-slate-500">{slot.time}</p>
                </div>

                <button
                  onClick={() => handleDeleteSlot(slot.id)}
                  className="
                    rounded-xl
                    bg-red-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-red-700
                    transition
                    hover:bg-red-200
                  "
                >
                  Löschen
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKINGS */}

        <div className="mt-14 rounded-[36px] bg-white p-6 shadow-sm md:p-10">
          <h2 className="mb-8 text-2xl font-semibold text-slate-900 md:text-3xl">
            Gebuchte Termine
          </h2>

          <div className="space-y-4">
            {bookings.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
                Keine Buchungen vorhanden.
              </div>
            )}

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-slate-900">
                    {booking.customer_name}
                  </p>

                  <p className="text-slate-600">
                    📅 {booking.booking_date} — {booking.booking_time}
                  </p>

                  <p className="text-slate-600">🛠 {booking.service_title}</p>

                  <p className="text-slate-600">📞 {booking.phone}</p>

                  <p className="text-slate-600">📍 {booking.address}</p>

                  <p className="text-slate-600">💳 {booking.payment_method}</p>

                  <div className="mt-4">
                    {booking.status === "confirmed" ? (
                      <div
                        className="
                          inline-block
                          rounded-xl
                          bg-green-100
                          px-4
                          py-2
                          font-semibold
                          text-green-700
                        "
                      >
                        Bestätigt
                      </div>
                    ) : (
                      <button
                        onClick={() => handleConfirmBooking(booking.id)}
                        className="
                          rounded-xl
                          bg-blue-600
                          px-4
                          py-2
                          font-semibold
                          text-white
                          hover:bg-blue-700
                        "
                      >
                        Bestätigen
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteBooking(booking.id)}
                    className="
                      mt-4
                      rounded-xl
                      bg-red-100
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-red-700
                      hover:bg-red-200
                    "
                  >
                    Buchung löschen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminPage;
