
function BookingSection() {
  return (
    <section className="bg-gray-50 px-6 py-24">
   
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-10 shadow-2xl">
        <h2 className="mb-10 text-4xl font-bold">Termin buchen</h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Ihr Name"
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <input
            type="text"
            placeholder="Telefonnummer"
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <input
            type="text"
            placeholder="Adresse"
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <button className="w-full rounded-2xl bg-blue-600 py-5 text-2xl font-bold text-white">
            Termin bestätigen
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;
